import{d as e,z as t}from"./vendor.50385166.js";const n=e({name:"Markdown"}),o=()=>t("div",{class:["md2vue-wrapper"],innerHTML:`<h1 id="require.context">require.context</h1><p>\u904D\u5386\u76EE\u5F55\u8FDB\u884C\u6279\u91CF\u7684\u5F02\u6B65\u5BFC\u5165\uFF0C\u5728\u5927\u91CF\u5BFC\u5165\u7684\u573A\u666F\u4E0B\u7279\u522B\u6709\u7528</p>
<h3 id="\u53C2\u6570">\u53C2\u6570</h3><ol>
<li>directory {String} -\u8BFB\u53D6\u6587\u4EF6\u7684\u8DEF\u5F84</li>
<li>useSubdirectories {Boolean} -\u662F\u5426\u904D\u5386\u6587\u4EF6\u7684\u5B50\u76EE\u5F55</li>
<li>regExp {RegExp} -\u5339\u914D\u6587\u4EF6\u7684\u6B63\u5219</li>
</ol>
<h3 id="return">return</h3><p>\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u67093\u4E2A\u5C5E\u6027</p>
<ol>
<li>resolve \u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u8FD4\u56DE\u8BF7\u6C42\u88AB\u89E3\u6790\u540E\u5F97\u5230\u7684\u6A21\u5757 id\u3002</li>
<li>keys \u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u7531\u6240\u6709\u53EF\u80FD\u88AB\u4E0A\u4E0B\u6587\u6A21\u5757\u5904\u7406\u7684\u8BF7\u6C42\u7EC4\u6210\u3002</li>
<li>id \u662F\u4E0A\u4E0B\u6587\u6A21\u5757\u91CC\u9762\u6240\u5305\u542B\u7684\u6A21\u5757 id. \u5B83\u53EF\u80FD\u5728\u4F60\u4F7F\u7528 module.hot.accept \u7684\u65F6\u5019\u88AB\u7528\u5230</li>
</ol>
<p>\u8C03\u7528\u51FD\u6570\u672C\u8EAB\u4F20\u5165\u6A21\u5757\u7684key\u53EF\u83B7\u53D6\u6A21\u5757</p>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs"><span class="hljs-keyword">let</span> contexts = <span class="hljs-built_in">require</span>.context(<span class="hljs-string">&#x27;.&#x27;</span>, <span class="hljs-literal">false</span>, <span class="hljs-regexp">/\\.vue$/</span>)
contexts.keys().forEach(<span class="hljs-function"><span class="hljs-params">key</span> =&gt;</span> {
    <span class="hljs-comment">// \u6A21\u5757\u7684\u9ED8\u8BA4\u5BFC\u51FA</span>
    <span class="hljs-keyword">let</span> moduleExport = contexts(key).default
})</code></pre>

    </div>`});n.render=o;n.mounted=()=>{};const i=[{text:"require.context",level:1,raw:"require.context"},{text:"\u53C2\u6570",level:3,raw:"\u53C2\u6570"},{text:"return",level:3,raw:"return"}],s=[{code:"yum install crontabs",infostring:""},{code:`cd /home/crontab_sh
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
yarn dev`,infostring:"bash"},{code:`module.exports = {
    // \u9875\u9762\u6743\u91CD
    weight: {
        '\u6307\u5357/\u5FEB\u901F\u4E0A\u624B': 99999
    }
}`,infostring:"js"},{code:`function fib(n) {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1

  return fib(n - 1) + fib(n - 2)
}`,infostring:"javascript"},{code:`function fib(n) {
  if (n === 0) return 0;

  const memoArr = []

  return helper(memoArr, n)

}

function helper(memoArr, n) {
  if (n === 1 || n === 2) return 1
  if (!memoArr[n]) {
    memoArr[n] = helper(memoArr, n - 1) + helper(memoArr, n - 2)
  }
  return memoArr[n]
}`,infostring:"javascript"},{code:`function fib(n) {
  if (n === 0) return 0
  let dp = new Array(n+1).fill(0)
  dp[1] = 1
  dp[2] = 1
  for (let i = 3; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}`,infostring:"javascript"},{code:`function fib(n) {
  if (n === 0) return 0
  let prev = 1
  let cur = 1

  for (let i = 3; i <= n; i ++) {
    let sum = prev + cur
    prev = cur
    cur = sum
  }

  return cur
}`,infostring:"javascript"},{code:`\u8F93\u5165\uFF1Acoins = [1, 2, 5], amount = 11
\u8F93\u51FA\uFF1A3 
\u89E3\u91CA\uFF1A11 = 5 + 5 + 1`,infostring:""},{code:`\u8F93\u5165\uFF1Acoins = [2], amount = 3
\u8F93\u51FA\uFF1A-1`,infostring:""},{code:`/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1)

    dp[0] = 0 

    for (let i = 0; i < dp.length; i ++) {
        for (coin of coins) {
            if (i - coin < 0) {continue}
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }

    return (dp[amount] === amount + 1) ? -1 : dp[amount]
};`,infostring:"javascript"},{code:`let contexts = require.context('.', false, /\\.vue$/)
contexts.keys().forEach(key => {
    // \u6A21\u5757\u7684\u9ED8\u8BA4\u5BFC\u51FA
    let moduleExport = contexts(key).default
})`,infostring:"javascript"}];export{s as codeBlocks,n as default,i as headings};
