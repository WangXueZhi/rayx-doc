import{d as e,y as t}from"./vendor.5022afda.js";const n=e({name:"Markdown"}),o=()=>t("div",{class:["md2vue-wrapper"],innerHTML:`<h1 id="\u56FE\u7247\u8D44\u6E90">\u56FE\u7247\u8D44\u6E90</h1><p>\u5C06\u56FE\u7247\u8D44\u6E90\u653E\u5728public\u76EE\u5F55\u4E0B\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u53BB\u5F15\u7528<code>./runoob-logo.png</code>\uFF0C\u5982\u4E0B\u56FE\uFF1A</p>
<p><img src="./runoob-logo.png" alt="ks"></p>
`});n.render=o;n.mounted=()=>{};const i=[{text:"\u56FE\u7247\u8D44\u6E90",level:1,raw:"\u56FE\u7247\u8D44\u6E90"}],s=[{code:"yum install crontabs",infostring:""},{code:`cd /home/crontab_sh
vim svn_update.sh`,infostring:""},{code:"#! /bin/sh\necho `svn update /home/svn --username xxxxx --password xxx --no-auth-cache > /home/update-product.log`",infostring:""},{code:"crontab -e",infostring:""},{code:`*/1 * * * * root /root/home/crontab_sh/svn_update.sh
// \u4E00\u5206\u949F\u6267\u884C\u4E00\u6B21`,infostring:""},{code:"service crond restart",infostring:""},{code:`<html lang="en">
  <head>
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"><\/script>
  </body>
</html>`,infostring:"html"},{code:`import { createApp } from "/node_modules/.vite/vue.js?v=xxx";
import App from "/src/App.vue?t=xxx";
createApp(App).mount("#app");`,infostring:"js"},{code:`import { createHotContext as __vite__createHotContext } from "/@vite/client";
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
...`,infostring:"js"},{code:`const app = new Koa()

app.use(async (ctx) => {
  const url = ctx.request.url
  if (url === '/') {
    ctx.type = 'text/html'
    ctx.body = fs.readFileSync('./index.html', 'utf-8')  
  }
})

app.listen(3000, () => {
  // server start
})`,infostring:"js"},{code:`app.use(async (ctx) => {
  const url = ctx.request.url
  if (url === '/') {
    // ...
  } else if (url.endsWith('.js')) {
    const p = path.join(__dirname, url)
    ctx.type = 'text/javascript'
    ctx.body = fs.readFileSync(p, 'utf-8')
  }
})`,infostring:"js"},{code:`function rewriteImport(content) {
  return content.replace(/ from ['|"]([^'"]+)['|"]/g, function(s0, s1){
    if (s1.startsWith('./') || s1.startsWith('/') || s1.startsWith('../')) {
      return s0
    } else {
      return \` from '/node_modules/\${s1}'\`
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
    // \u91CD\u5199\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5BFC\u5165\u8DEF\u5F84
    ctx.body = rewriteImport(ret)
  }
})`,infostring:"js"},{code:`// vite-test-plugin
export default function myPlugin() {
  const virtualFileId = '@test-virtual-plugin'
  return {
    name: 'test-virtual-plugin',
    resolveId(id) {
      // \u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u63D2\u4EF6\u72EC\u6709\u7684\u6807\u8BC6\uFF0C\u5F53\u67D0\u4E2A\u6A21\u5757\u6CA1\u6709\u63D2\u4EF6\u80FD\u5904\u7406\u7684\u65F6\u5019\u4F1A\u62A5\u6A21\u5757\u627E\u4E0D\u5230\u7684\u9519\u8BEF
      if (id === virtualFileId) {
          return virtualFileId
      }
    },
    load(id) {
      // \u6B64id\u662FresolveId\u4E2D\u8FD4\u56DE\u7684\uFF0C\u5FC5\u987B\u505A\u5224\u65AD\uFF0C\u5426\u5219\u6BCF\u4E2A\u6A21\u5757\u90FD\u5728\u8FD9\u91CC\u4F1A\u505A\u5904\u7406\uFF0C\u5C31\u4E71\u5957\u4E86
      if (id === virtualFileId) {
          return \`export const msg = "from virtual file"\`
      }
    }
  }
}

// vite.config.js
import vitePluginTest from './plugins/vite-plugin-test.js'
export default defineConfig({
  plugins: [vue(), vitePluginTest()]
})
`,infostring:"js"},{code:`const marked = require("marked");

export default function vitePluginMd2Vue(options?: OptionsObject) {
  return {
    name: "vitePluginMd2Vue",
    transform(src: string, id: string) {
      if (id.endsWith(".md")) {
        const markdownHtml = marked(src)
        return {
          code: \`import {h, defineComponent} from "vue";
          const _sfc_md = defineComponent({
            name: "Markdown",
          });
          
          const _sfc_render =() => {
            return h("div", {
              innerHTML: \${JSON.stringify(markdownHtml)},
            })
          };
          
          _sfc_md.render = _sfc_render
          _sfc_md.mounted = ()=>{
            \${mermaidRenderCode}
          }
          export default _sfc_md\`,
          map: null,
        };
      }
    },
  };
}`,infostring:"js"},{code:`sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!`,infostring:""},{code:`sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!`,infostring:"mermaid"}];export{s as codeBlocks,n as default,i as headings};
