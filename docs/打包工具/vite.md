<center style="margin-top: 40px"><img src="https://vitejs.dev/logo.svg" width="100px"></center>

# vite 

和webpack、Rollup、Parcel一样，是一个打包工具。

但是它快！快主要体现在开发服务上，开发体验好。

其实在最终打包过程中，vite优势并不明显，尽管vite使用了esbuild来加快打包速度，但是esbuild构建能力还不够完善，而且这玩意又不是vite独家的，webpack也可以吸收进来。

## 为什么快

webpack在开发时会对整个项目文件进行打包，这会经历一个从入口文件开始的深度遍历的过程，来构建依赖关系图，所以启动速度会随着项目规模扩大越来越缓慢。

<img src="https://vitejs.cn/assets/bundler.37740380.png" width="70%">

而vite使用原生ESM，启动一台开发服务器即可，浏览器会自动请求需要的文件，并在服务端按需编译返回，根本没有打包。

<img src="https://vitejs.cn/assets/esm.3070012d.png" width="70%">

利用缓存再快一点：源码模块的请求会根据 304 Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存，因此一旦被缓存它们将不需要再次请求。

## 工作原理

主要变化是index.html中的入口文件导入方式

```html
<html lang="en">
  <head>
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

利用浏览器native ES module imports特性, 所以main.js中就可以使用ESM的方式组织代码

```js
import { createApp } from "/node_modules/.vite/vue.js?v=xxx";
import App from "/src/App.vue?t=xxx";
createApp(App).mount("#app");
```

vite需要根据请求资源类型做不同解析工作（编译），比如App.vue，就是会把sfc编译成render，script执行脚本，和style三块

```js
import { createHotContext as __vite__createHotContext } from "/@vite/client";
import.meta.hot = __vite__createHotContext("/src/App.vue");
import { defineComponent as _defineComponent } from "/node_modules/.vite/vue.js?v=xxx";
// script
const _sfc_main = /* @__PURE__ */ _defineComponent({
  setup(__props, { expose }) {
    expose();
    const __returned__ = { HelloWorld };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
// templete
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(_Fragment, null, [
    _hoisted_1,
    _createVNode($setup["HelloWorld"], { msg: "Hello Vue 3 + TypeScript + Vite" })
  ], 64);
}
// style
import "/src/App.vue?vue&type=style&index=0&lang.css";
...
```

## 伪代码

#### 使用koa创建开发服务器

处理根路由，返回入口文件index.html

```js
const app = new Koa()

app.use(async (ctx) => {
  const url = ctx.request.url
  if (url === '/') {
    ctx.type = 'text/html'
    ctx.body = fs.readFileSync('./index.html', 'utf-8')  
  }
})

app.listen(3000, () => {
  // server start
})
```

#### 处理js文件

比如浏览器发起对main.js的请求

```js
app.use(async (ctx) => {
  const url = ctx.request.url
  if (url === '/') {
    // ...
  } else if (url.endsWith('.js')) {
    const p = path.join(__dirname, url)
    ctx.type = 'text/javascript'
    ctx.body = fs.readFileSync(p, 'utf-8')
  }
})
```

#### 处理第三方依赖

比如：vue, 因为浏览器并不知道vue是哪里来的，所以服务需要把这种模块改写成正确路径

```js
function rewriteImport(content) {
  return content.replace(/ from ['|"]([^'"]+)['|"]/g, function(s0, s1){
    if (s1.startsWith('./') || s1.startsWith('/') || s1.startsWith('../')) {
      return s0
    } else {
      return ` from '/node_modules/${s1}'`
    }
  })
}

app.use(async (ctx) => {
  const url = ctx.request.url
  if (url === '/') {
    // ...
  } else if (url.endsWith('.js')) {
    // ...
    const ret = fs.readFileSync(p, 'utf-8')
    // 重写第三方依赖导入路径
    ctx.body = rewriteImport(ret)
  }
})
```

## vite插件应用

vite的插件扩展自rollup，所以既可以在vite服务解析模块的时候执行，也可以在build的时候执行。

作用和webpack的plugin和loader相当，具体api可以看官方文档，没有实际操作的话解释api其实没什么用。

#### 最简单应用：虚拟模块

```js
// vite-test-plugin
export default function myPlugin() {
  const virtualFileId = '@test-virtual-plugin'
  return {
    name: 'test-virtual-plugin',
    resolveId(id) {
      // 必须返回一个插件独有的标识，当某个模块没有插件能处理的时候会报模块找不到的错误
      if (id === virtualFileId) {
          return virtualFileId
      }
    },
    load(id) {
      // 此id是resolveId中返回的，必须做判断，否则每个模块都在这里会做处理，就乱套了
      if (id === virtualFileId) {
          return `export const msg = "from virtual file"`
      }
    }
  }
}

// vite.config.js
import vitePluginTest from './plugins/vite-plugin-test.js'
export default defineConfig({
  plugins: [vue(), vitePluginTest()]
})

```

#### 复杂一点的应用：处理md的loader

[vite-plugin-md2vue](https://github.com/WangXueZhi/vite-plugin-md2vue)

```js
const marked = require("marked");

export default function vitePluginMd2Vue(options?: OptionsObject) {
  return {
    name: "vitePluginMd2Vue",
    transform(src: string, id: string) {
      if (id.endsWith(".md")) {
        const markdownHtml = marked(src)
        return {
          code: `import {h, defineComponent} from "vue";
          const _sfc_md = defineComponent({
            name: "Markdown",
          });
          
          const _sfc_render =() => {
            return h("div", {
              innerHTML: ${JSON.stringify(markdownHtml)},
            })
          };
          
          _sfc_md.render = _sfc_render
          _sfc_md.mounted = ()=>{
            ${mermaidRenderCode}
          }
          export default _sfc_md`,
          map: null,
        };
      }
    },
  };
}
```





