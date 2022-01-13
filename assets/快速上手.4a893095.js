import{d as e,z as t}from"./vendor.50385166.js";const n=e({name:"Markdown"}),o=()=>t("div",{class:["md2vue-wrapper"],innerHTML:`<h1 id="\u5FEB\u901F\u4E0A\u624B">\u5FEB\u901F\u4E0A\u624B</h1><h3 id="\u7B2C\u4E00\u6B65\uFF1A\u514B\u9686\u4ED3\u5E93">\u7B2C\u4E00\u6B65\uFF1A\u514B\u9686\u4ED3\u5E93</h3>
        <div class="md-code-hijs">
        <pre><code class="language-bash hljs">git clone https:<span class="hljs-regexp">//gi</span>thub.com<span class="hljs-regexp">/WangXueZhi/</span>rayx-doc.git</code></pre>

    </div><h3 id="\u7B2C\u4E8C\u6B65\uFF1A\u5728docs\u76EE\u5F55\u4E0B\u6DFB\u52A0md\u6587\u4EF6\u5E76\u7F16\u5199\u6587\u6863">\u7B2C\u4E8C\u6B65\uFF1A\u5728docs\u76EE\u5F55\u4E0B\u6DFB\u52A0md\u6587\u4EF6\u5E76\u7F16\u5199\u6587\u6863</h3>
        <div class="md-code-hijs">
        <pre><code class="language-bash hljs"><span class="hljs-built_in">echo</span> <span class="hljs-string">&#x27;# Hello docs&#x27;</span> &gt; docs/\u5F00\u59CB.md</code></pre>

    </div><h3 id="\u7B2C\u4E09\u6B65\uFF1A\u6839\u76EE\u5F55\u4E2D\u7684<code>docs.config.js</code>\u4E2D\u6DFB\u52A0\u9ED8\u8BA4\u9875\u9762">\u7B2C\u4E09\u6B65\uFF1A\u6839\u76EE\u5F55\u4E2D\u7684docs.config.js\u4E2D\u6DFB\u52A0\u9ED8\u8BA4\u9875\u9762</h3>
        <div class="md-code-hijs">
        <pre><code class="language-js hljs"><span class="hljs-keyword">module</span>.<span class="hljs-keyword">exports</span> = {
    <span class="hljs-comment">// \u9ED8\u8BA4\u9875\u9762\uFF0C\u7528\u4E8E\u5339\u914D / \u8DEF\u5F84</span>
    defaultPage: <span class="hljs-string">&#x27;\u5F00\u59CB.md&#x27;</span>
}</code></pre>

    </div><h3 id="\u7B2C\u56DB\u6B65\uFF1A\u5B89\u88C5\u4F9D\u8D56\uFF0C\u542F\u52A8\u670D\u52A1">\u7B2C\u56DB\u6B65\uFF1A\u5B89\u88C5\u4F9D\u8D56\uFF0C\u542F\u52A8\u670D\u52A1</h3>
        <div class="md-code-hijs">
        <pre><code class="language-bash hljs"><span class="hljs-attribute">yarn
yarn dev</span></code></pre>

    </div>`});n.render=o;n.mounted=()=>{};const r=[{text:"\u5FEB\u901F\u4E0A\u624B",level:1,raw:"\u5FEB\u901F\u4E0A\u624B"},{text:"\u7B2C\u4E00\u6B65\uFF1A\u514B\u9686\u4ED3\u5E93",level:3,raw:"\u7B2C\u4E00\u6B65\uFF1A\u514B\u9686\u4ED3\u5E93"},{text:"\u7B2C\u4E8C\u6B65\uFF1A\u5728docs\u76EE\u5F55\u4E0B\u6DFB\u52A0md\u6587\u4EF6\u5E76\u7F16\u5199\u6587\u6863",level:3,raw:"\u7B2C\u4E8C\u6B65\uFF1A\u5728docs\u76EE\u5F55\u4E0B\u6DFB\u52A0md\u6587\u4EF6\u5E76\u7F16\u5199\u6587\u6863"},{text:"\u7B2C\u4E09\u6B65\uFF1A\u6839\u76EE\u5F55\u4E2D\u7684<code>docs.config.js</code>\u4E2D\u6DFB\u52A0\u9ED8\u8BA4\u9875\u9762",level:3,raw:"\u7B2C\u4E09\u6B65\uFF1A\u6839\u76EE\u5F55\u4E2D\u7684docs.config.js\u4E2D\u6DFB\u52A0\u9ED8\u8BA4\u9875\u9762"},{text:"\u7B2C\u56DB\u6B65\uFF1A\u5B89\u88C5\u4F9D\u8D56\uFF0C\u542F\u52A8\u670D\u52A1",level:3,raw:"\u7B2C\u56DB\u6B65\uFF1A\u5B89\u88C5\u4F9D\u8D56\uFF0C\u542F\u52A8\u670D\u52A1"}],i=[{code:"yum install crontabs",infostring:""},{code:`cd /home/crontab_sh
vim svn_update.sh`,infostring:""},{code:"#! /bin/sh\necho `svn update /home/svn --username xxxxx --password xxx --no-auth-cache > /home/update-product.log`",infostring:""},{code:"crontab -e",infostring:""},{code:`*/1 * * * * root /root/home/crontab_sh/svn_update.sh
// \u4E00\u5206\u949F\u6267\u884C\u4E00\u6B21`,infostring:""},{code:"service crond restart",infostring:""},{code:`node_modules
\u2514\u2500 A1
   \u251C\u2500 index.js
   \u251C\u2500 package.json
   \u2514\u2500 node_modules
      \u2514\u2500 A2
         \u251C\u2500 index.js
         \u2514\u2500 package.json
      \u2514\u2500 lodash
         \u251C\u2500 index.js
         \u2514\u2500 package.json
\u2514\u2500 B1
   \u251C\u2500 index.js
   \u251C\u2500 package.json
   \u2514\u2500 node_modules
      \u2514\u2500 lodash
         \u251C\u2500 index.js
         \u2514\u2500 package.json`,infostring:""},{code:`<html lang="en">
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
    Bob-->>John: Jolly good!`,infostring:"mermaid"},{code:"git clone https://github.com/WangXueZhi/rayx-doc.git",infostring:"bash"},{code:"echo '# Hello docs' > docs/\u5F00\u59CB.md",infostring:"bash"},{code:`module.exports = {
    // \u9ED8\u8BA4\u9875\u9762\uFF0C\u7528\u4E8E\u5339\u914D / \u8DEF\u5F84
    defaultPage: '\u5F00\u59CB.md'
}`,infostring:"js"},{code:`yarn
yarn dev`,infostring:"bash"}];export{i as codeBlocks,n as default,r as headings};
