import{d as n,y as a}from"./vendor.5022afda.js";const s=n({name:"Markdown"}),e=()=>a("div",{class:["md2vue-wrapper"],innerHTML:`<center style="margin-top: 40px"><img src="https://vitejs.dev/logo.svg" width="100px"></center>

<h1 id="vite">vite</h1><p>\u548Cwebpack\u3001Rollup\u3001Parcel\u4E00\u6837\uFF0C\u662F\u4E00\u4E2A\u6253\u5305\u5DE5\u5177\u3002</p>
<p>\u4F46\u662F\u5B83\u5FEB\uFF01\u5FEB\u4E3B\u8981\u4F53\u73B0\u5728\u5F00\u53D1\u670D\u52A1\u4E0A\uFF0C\u5F00\u53D1\u4F53\u9A8C\u597D\u3002</p>
<p>\u5176\u5B9E\u5728\u6700\u7EC8\u6253\u5305\u8FC7\u7A0B\u4E2D\uFF0Cvite\u4F18\u52BF\u5E76\u4E0D\u660E\u663E\uFF0C\u5C3D\u7BA1vite\u4F7F\u7528\u4E86esbuild\u6765\u52A0\u5FEB\u6253\u5305\u901F\u5EA6\uFF0C\u4F46\u662Fesbuild\u6784\u5EFA\u80FD\u529B\u8FD8\u4E0D\u591F\u5B8C\u5584\uFF0C\u800C\u4E14\u8FD9\u73A9\u610F\u53C8\u4E0D\u662Fvite\u72EC\u5BB6\u7684\uFF0Cwebpack\u4E5F\u53EF\u4EE5\u5438\u6536\u8FDB\u6765\u3002</p>
<h2 id="\u4E3A\u4EC0\u4E48\u5FEB">\u4E3A\u4EC0\u4E48\u5FEB</h2><p>webpack\u5728\u5F00\u53D1\u65F6\u4F1A\u5BF9\u6574\u4E2A\u9879\u76EE\u6587\u4EF6\u8FDB\u884C\u6253\u5305\uFF0C\u8FD9\u4F1A\u7ECF\u5386\u4E00\u4E2A\u4ECE\u5165\u53E3\u6587\u4EF6\u5F00\u59CB\u7684\u6DF1\u5EA6\u904D\u5386\u7684\u8FC7\u7A0B\uFF0C\u6765\u6784\u5EFA\u4F9D\u8D56\u5173\u7CFB\u56FE\uFF0C\u6240\u4EE5\u542F\u52A8\u901F\u5EA6\u4F1A\u968F\u7740\u9879\u76EE\u89C4\u6A21\u6269\u5927\u8D8A\u6765\u8D8A\u7F13\u6162\u3002</p>
<img src="https://vitejs.cn/assets/bundler.37740380.png" width="70%">

<p>\u800Cvite\u4F7F\u7528\u539F\u751FESM\uFF0C\u542F\u52A8\u4E00\u53F0\u5F00\u53D1\u670D\u52A1\u5668\u5373\u53EF\uFF0C\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u8BF7\u6C42\u9700\u8981\u7684\u6587\u4EF6\uFF0C\u5E76\u5728\u670D\u52A1\u7AEF\u6309\u9700\u7F16\u8BD1\u8FD4\u56DE\uFF0C\u6839\u672C\u6CA1\u6709\u6253\u5305\u3002</p>
<img src="https://vitejs.cn/assets/esm.3070012d.png" width="70%">

<p>\u5229\u7528\u7F13\u5B58\u518D\u5FEB\u4E00\u70B9\uFF1A\u6E90\u7801\u6A21\u5757\u7684\u8BF7\u6C42\u4F1A\u6839\u636E 304 Not Modified \u8FDB\u884C\u534F\u5546\u7F13\u5B58\uFF0C\u800C\u4F9D\u8D56\u6A21\u5757\u8BF7\u6C42\u5219\u4F1A\u901A\u8FC7 Cache-Control: max-age=31536000,immutable \u8FDB\u884C\u5F3A\u7F13\u5B58\uFF0C\u56E0\u6B64\u4E00\u65E6\u88AB\u7F13\u5B58\u5B83\u4EEC\u5C06\u4E0D\u9700\u8981\u518D\u6B21\u8BF7\u6C42\u3002</p>
<h2 id="\u5DE5\u4F5C\u539F\u7406">\u5DE5\u4F5C\u539F\u7406</h2><p>\u4E3B\u8981\u53D8\u5316\u662Findex.html\u4E2D\u7684\u5165\u53E3\u6587\u4EF6\u5BFC\u5165\u65B9\u5F0F</p>

        <div class="md-code-hijs">
        <pre><code class="language-html hljs"><span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;en&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Vite App<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;app&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;/src/main.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span></code></pre>

    </div><p>\u5229\u7528\u6D4F\u89C8\u5668native ES module imports\u7279\u6027, \u6240\u4EE5main.js\u4E2D\u5C31\u53EF\u4EE5\u4F7F\u7528ESM\u7684\u65B9\u5F0F\u7EC4\u7EC7\u4EE3\u7801</p>

        <div class="md-code-hijs">
        <pre><code class="language-js hljs"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/node_modules/.vite/vue.js?v=xxx&quot;</span>;
<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/src/App.vue?t=xxx&quot;</span>;
createApp(App).mount(<span class="hljs-string">&quot;<span class="hljs-subst">#app</span>&quot;</span>);</code></pre>

    </div><p>vite\u9700\u8981\u6839\u636E\u8BF7\u6C42\u8D44\u6E90\u7C7B\u578B\u505A\u4E0D\u540C\u89E3\u6790\u5DE5\u4F5C\uFF08\u7F16\u8BD1\uFF09\uFF0C\u6BD4\u5982App.vue\uFF0C\u5C31\u662F\u4F1A\u628Asfc\u7F16\u8BD1\u6210render\uFF0Cscript\u6267\u884C\u811A\u672C\uFF0C\u548Cstyle\u4E09\u5757</p>

        <div class="md-code-hijs">
        <pre><code class="language-js hljs"><span class="hljs-keyword">import</span> { createHotContext <span class="hljs-keyword">as</span> __vite__createHotContext } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@vite/client&quot;</span>;
<span class="hljs-keyword">import</span>.meta.hot = __vite__createHotContext(<span class="hljs-string">&quot;/src/App.vue&quot;</span>);
<span class="hljs-keyword">import</span> { defineComponent <span class="hljs-keyword">as</span> _defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/node_modules/.vite/vue.js?v=xxx&quot;</span>;
<span class="hljs-comment">// script</span>
<span class="hljs-keyword">const</span> _sfc_main = <span class="hljs-comment">/* @__PURE__ */</span> _defineComponent({
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">__props, { expose }</span>)</span> {
    expose();
    <span class="hljs-keyword">const</span> __returned__ = { HelloWorld };
    <span class="hljs-built_in">Object</span>.defineProperty(__returned__, <span class="hljs-string">&quot;__isScriptSetup&quot;</span>, { <span class="hljs-attr">enumerable</span>: <span class="hljs-literal">false</span>, <span class="hljs-attr">value</span>: <span class="hljs-literal">true</span> });
    <span class="hljs-keyword">return</span> __returned__;
  }
});
<span class="hljs-comment">// templete</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_sfc_render</span>(<span class="hljs-params">_ctx, _cache, $props, $setup, $data, $options</span>) </span>{
  <span class="hljs-keyword">return</span> _openBlock(), _createElementBlock(_Fragment, <span class="hljs-literal">null</span>, [
    _hoisted_1,
    _createVNode($setup[<span class="hljs-string">&quot;HelloWorld&quot;</span>], { <span class="hljs-attr">msg</span>: <span class="hljs-string">&quot;Hello Vue 3 + TypeScript + Vite&quot;</span> })
  ], <span class="hljs-number">64</span>);
}
<span class="hljs-comment">// style</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;/src/App.vue?vue&amp;type=style&amp;index=0&amp;lang.css&quot;</span>;
...</code></pre>

    </div><h2 id="\u4F2A\u4EE3\u7801">\u4F2A\u4EE3\u7801</h2><h4 id="\u4F7F\u7528koa\u521B\u5EFA\u5F00\u53D1\u670D\u52A1\u5668">\u4F7F\u7528koa\u521B\u5EFA\u5F00\u53D1\u670D\u52A1\u5668</h4><p>\u5904\u7406\u6839\u8DEF\u7531\uFF0C\u8FD4\u56DE\u5165\u53E3\u6587\u4EF6index.html</p>

        <div class="md-code-hijs">
        <pre><code class="language-js hljs"><span class="hljs-keyword">const</span> app = <span class="hljs-keyword">new</span> Koa()

app.use(<span class="hljs-keyword">async</span> (ctx) =&gt; {
  <span class="hljs-keyword">const</span> url = ctx.request.url
  <span class="hljs-keyword">if</span> (url === <span class="hljs-string">&#x27;/&#x27;</span>) {
    ctx.type = <span class="hljs-string">&#x27;text/html&#x27;</span>
    ctx.body = fs.readFileSync(<span class="hljs-string">&#x27;./index.html&#x27;</span>, <span class="hljs-string">&#x27;utf-8&#x27;</span>)  
  }
})

app.listen(<span class="hljs-number">3000</span>, () =&gt; {
  <span class="hljs-comment">// server start</span>
})</code></pre>

    </div><h4 id="\u5904\u7406js\u6587\u4EF6">\u5904\u7406js\u6587\u4EF6</h4><p>\u6BD4\u5982\u6D4F\u89C8\u5668\u53D1\u8D77\u5BF9main.js\u7684\u8BF7\u6C42</p>

        <div class="md-code-hijs">
        <pre><code class="language-js hljs">app.use(<span class="hljs-keyword">async</span> (ctx) =&gt; {
  <span class="hljs-keyword">const</span> <span class="hljs-built_in">url</span> = ctx.request.url
  <span class="hljs-keyword">if</span> (<span class="hljs-built_in">url</span> === <span class="hljs-string">&#x27;/&#x27;</span>) {
    <span class="hljs-comment">// ...</span>
  } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (<span class="hljs-built_in">url</span>.endsWith(<span class="hljs-string">&#x27;.js&#x27;</span>)) {
    <span class="hljs-keyword">const</span> p = path.join(__dirname, <span class="hljs-built_in">url</span>)
    ctx.type = <span class="hljs-string">&#x27;text/javascript&#x27;</span>
    ctx.body = fs.readFileSync(p, <span class="hljs-string">&#x27;utf-8&#x27;</span>)
  }
})</code></pre>

    </div><h4 id="\u5904\u7406\u7B2C\u4E09\u65B9\u4F9D\u8D56">\u5904\u7406\u7B2C\u4E09\u65B9\u4F9D\u8D56</h4><p>\u6BD4\u5982\uFF1Avue, \u56E0\u4E3A\u6D4F\u89C8\u5668\u5E76\u4E0D\u77E5\u9053vue\u662F\u54EA\u91CC\u6765\u7684\uFF0C\u6240\u4EE5\u670D\u52A1\u9700\u8981\u628A\u8FD9\u79CD\u6A21\u5757\u6539\u5199\u6210\u6B63\u786E\u8DEF\u5F84</p>

        <div class="md-code-hijs">
        <pre><code class="language-js hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">rewriteImport</span>(<span class="hljs-params">content</span>) </span>{
  <span class="hljs-keyword">return</span> content.replace(<span class="hljs-regexp">/ from [&#x27;|&quot;]([^&#x27;&quot;]+)[&#x27;|&quot;]/g</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">s0, s1</span>)</span>{
    <span class="hljs-keyword">if</span> (s1.startsWith(<span class="hljs-string">&#x27;./&#x27;</span>) || s1.startsWith(<span class="hljs-string">&#x27;/&#x27;</span>) || s1.startsWith(<span class="hljs-string">&#x27;../&#x27;</span>)) {
      <span class="hljs-keyword">return</span> s0
    } <span class="hljs-title">else</span> {
      <span class="hljs-keyword">return</span> <span class="hljs-string">\` from &#x27;/node_modules/<span class="hljs-subst">\${s1}</span>&#x27;\`</span>
    }
  })
}

app.use(<span class="hljs-keyword">async</span> (ctx) =&gt; {
  <span class="hljs-keyword">const</span> <span class="hljs-built_in">url</span> = ctx.request.url
  <span class="hljs-keyword">if</span> (<span class="hljs-built_in">url</span> === <span class="hljs-string">&#x27;/&#x27;</span>) {
    <span class="hljs-comment">// ...</span>
  } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (<span class="hljs-built_in">url</span>.endsWith(<span class="hljs-string">&#x27;.js&#x27;</span>)) {
    <span class="hljs-comment">// ...</span>
    <span class="hljs-keyword">const</span> ret = fs.readFileSync(p, <span class="hljs-string">&#x27;utf-8&#x27;</span>)
    <span class="hljs-comment">// \u91CD\u5199\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5BFC\u5165\u8DEF\u5F84</span>
    ctx.body = rewriteImport(ret)
  }
})</code></pre>

    </div><h2 id="vite\u63D2\u4EF6\u5E94\u7528">vite\u63D2\u4EF6\u5E94\u7528</h2><p>vite\u7684\u63D2\u4EF6\u6269\u5C55\u81EArollup\uFF0C\u6240\u4EE5\u65E2\u53EF\u4EE5\u5728vite\u670D\u52A1\u89E3\u6790\u6A21\u5757\u7684\u65F6\u5019\u6267\u884C\uFF0C\u4E5F\u53EF\u4EE5\u5728build\u7684\u65F6\u5019\u6267\u884C\u3002</p>
<p>\u4F5C\u7528\u548Cwebpack\u7684plugin\u548Cloader\u76F8\u5F53\uFF0C\u5177\u4F53api\u53EF\u4EE5\u770B\u5B98\u65B9\u6587\u6863\uFF0C\u6CA1\u6709\u5B9E\u9645\u64CD\u4F5C\u7684\u8BDD\u89E3\u91CAapi\u5176\u5B9E\u6CA1\u4EC0\u4E48\u7528\u3002</p>
<h4 id="\u6700\u7B80\u5355\u5E94\u7528\uFF1A\u865A\u62DF\u6A21\u5757">\u6700\u7B80\u5355\u5E94\u7528\uFF1A\u865A\u62DF\u6A21\u5757</h4>
        <div class="md-code-hijs">
        <pre><code class="language-js hljs"><span class="hljs-comment">// vite-test-plugin</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myPlugin</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">const</span> virtualFileId = <span class="hljs-string">&#x27;@test-virtual-plugin&#x27;</span>
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;test-virtual-plugin&#x27;</span>,
    <span class="hljs-function"><span class="hljs-title">resolveId</span>(<span class="hljs-params">id</span>)</span> {
      <span class="hljs-comment">// \u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u63D2\u4EF6\u72EC\u6709\u7684\u6807\u8BC6\uFF0C\u5F53\u67D0\u4E2A\u6A21\u5757\u6CA1\u6709\u63D2\u4EF6\u80FD\u5904\u7406\u7684\u65F6\u5019\u4F1A\u62A5\u6A21\u5757\u627E\u4E0D\u5230\u7684\u9519\u8BEF</span>
      <span class="hljs-keyword">if</span> (id === virtualFileId) {
          <span class="hljs-keyword">return</span> virtualFileId
      }
    },
    <span class="hljs-function"><span class="hljs-title">load</span>(<span class="hljs-params">id</span>)</span> {
      <span class="hljs-comment">// \u6B64id\u662FresolveId\u4E2D\u8FD4\u56DE\u7684\uFF0C\u5FC5\u987B\u505A\u5224\u65AD\uFF0C\u5426\u5219\u6BCF\u4E2A\u6A21\u5757\u90FD\u5728\u8FD9\u91CC\u4F1A\u505A\u5904\u7406\uFF0C\u5C31\u4E71\u5957\u4E86</span>
      <span class="hljs-keyword">if</span> (id === virtualFileId) {
          <span class="hljs-keyword">return</span> <span class="hljs-string">\`export const msg = &quot;from virtual file&quot;\`</span>
      }
    }
  }
}

<span class="hljs-comment">// vite.config.js</span>
<span class="hljs-keyword">import</span> vitePluginTest <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./plugins/vite-plugin-test.js&#x27;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineConfig({
  <span class="hljs-attr">plugins</span>: [vue(), vitePluginTest()]
})
</code></pre>

    </div><h4 id="\u590D\u6742\u4E00\u70B9\u7684\u5E94\u7528\uFF1A\u5904\u7406md\u7684loader">\u590D\u6742\u4E00\u70B9\u7684\u5E94\u7528\uFF1A\u5904\u7406md\u7684loader</h4><p><a href="https://github.com/WangXueZhi/vite-plugin-md2vue">vite-plugin-md2vue</a></p>

        <div class="md-code-hijs">
        <pre><code class="language-js hljs"><span class="hljs-keyword">const</span> marked = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;marked&quot;</span>);

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> vitePluginMd2Vue(options?: OptionsObject) {
  <span class="hljs-keyword">return</span> {
    name: <span class="hljs-string">&quot;vitePluginMd2Vue&quot;</span>,
    transform(src: string, id: string) {
      <span class="hljs-keyword">if</span> (id.endsWith(<span class="hljs-string">&quot;.md&quot;</span>)) {
        <span class="hljs-keyword">const</span> markdownHtml = marked(src)
        <span class="hljs-keyword">return</span> {
          code: \`<span class="hljs-keyword">import</span> {h, defineComponent} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
          <span class="hljs-keyword">const</span> _sfc_md = defineComponent({
            name: <span class="hljs-string">&quot;Markdown&quot;</span>,
          });
          
          <span class="hljs-keyword">const</span> _sfc_render =() =&gt; {
            <span class="hljs-keyword">return</span> h(<span class="hljs-string">&quot;div&quot;</span>, {
              innerHTML: \${<span class="hljs-built_in">JSON</span>.stringify(markdownHtml)},
            })
          };
          
          _sfc_md.render = _sfc_render
          _sfc_md.mounted = ()=&gt;{
            \${mermaidRenderCode}
          }
          <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> _sfc_md\`,
          map: <span class="hljs-literal">null</span>,
        };
      }
    },
  };
}</code></pre>

    </div>`});s.render=e;s.mounted=()=>{};const l=[{text:"vite",level:1,raw:"vite"},{text:"\u4E3A\u4EC0\u4E48\u5FEB",level:2,raw:"\u4E3A\u4EC0\u4E48\u5FEB"},{text:"\u5DE5\u4F5C\u539F\u7406",level:2,raw:"\u5DE5\u4F5C\u539F\u7406"},{text:"\u4F2A\u4EE3\u7801",level:2,raw:"\u4F2A\u4EE3\u7801"},{text:"\u4F7F\u7528koa\u521B\u5EFA\u5F00\u53D1\u670D\u52A1\u5668",level:4,raw:"\u4F7F\u7528koa\u521B\u5EFA\u5F00\u53D1\u670D\u52A1\u5668"},{text:"\u5904\u7406js\u6587\u4EF6",level:4,raw:"\u5904\u7406js\u6587\u4EF6"},{text:"\u5904\u7406\u7B2C\u4E09\u65B9\u4F9D\u8D56",level:4,raw:"\u5904\u7406\u7B2C\u4E09\u65B9\u4F9D\u8D56"},{text:"vite\u63D2\u4EF6\u5E94\u7528",level:2,raw:"vite\u63D2\u4EF6\u5E94\u7528"},{text:"\u6700\u7B80\u5355\u5E94\u7528\uFF1A\u865A\u62DF\u6A21\u5757",level:4,raw:"\u6700\u7B80\u5355\u5E94\u7528\uFF1A\u865A\u62DF\u6A21\u5757"},{text:"\u590D\u6742\u4E00\u70B9\u7684\u5E94\u7528\uFF1A\u5904\u7406md\u7684loader",level:4,raw:"\u590D\u6742\u4E00\u70B9\u7684\u5E94\u7528\uFF1A\u5904\u7406md\u7684loader"}],p=[{code:"yum install crontabs",infostring:""},{code:`cd /home/crontab_sh
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
}`,infostring:"js"}];export{p as codeBlocks,s as default,l as headings};
