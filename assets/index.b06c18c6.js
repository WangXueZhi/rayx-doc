import{d as g,u as x,a as E,r as H,b as h,c as p,e as l,f as m,w as b,p as R,g as L,o as u,F as f,h as P,t as j,i as A,n as C,j as J,k as V,l as T,m as z,q as K,s as U,N as D,v as X,x as Z,R as G}from"./vendor.5022afda.js";const Q=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}};Q();const Y="modulepreload",N={},ee="./",_=function(n,t){return!t||t.length===0?n():Promise.all(t.map(a=>{if(a=`${ee}${a}`,a in N)return;N[a]=!0;const r=a.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${o}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":Y,r||(s.as="script",s.crossOrigin=""),s.href=a,document.head.appendChild(s),r)return new Promise((c,i)=>{s.addEventListener("load",c),s.addEventListener("error",i)})})).then(()=>n())};function v(e,n=!0){const t=e.split("/").map(a=>n?encodeURIComponent(a):a);return t[0].includes(".")&&t.splice(0,1,""),t.join("/")}var y=(e,n)=>{for(const[t,a]of n)e[t]=a;return e};const te=g({name:"layout-search-modal",mounted(){},setup(){const e=x(),n=E(),t=H({searchRes:[]});return{goPage:function(o,s){n.push(v(o)+(s||"")),e.commit("setShowSearchState",!1)},searchInput:function(o){t.searchRes=[],o&&e.state.docsData.forEach(s=>{s.name.includes(o)&&t.searchRes.push({data:s,isPageName:!0,pageName:s.name,matchHtml:`<div>${s.name.replace(o,`<span style="color: var(--main-color)">${o}</span>`)}</div>`,searchValue:o}),s.keyWords.forEach(c=>{c.indexOf(o)>=0&&t.searchRes.push({data:s,isPageName:!1,pageName:s.name,matchHtml:`<div>${c.replace(o,`<span style="color: var(--main-color)">${o}</span>`)}</div>`,searchValue:o,matchContent:c})})})},state:t}}}),O=e=>(R("data-v-a6e73884"),e=e(),L(),e),ne={class:"search-modal"},oe={class:"search-input"},se={class:"search-scroll"},re=["onClick"],ae=["innerHTML"],ce=["onClick"],ie=O(()=>l("div",{class:"search-scroll-item-left"},"#",-1)),de={class:"search-scroll-item-content"},le=["innerHTML"],ue={class:"search-scroll-item-content-heading"},pe=O(()=>l("div",{class:"tips"},"\u6309 esc \u9000\u51FA",-1));function he(e,n,t,a,r,o){const s=h("r-icon"),c=h("r-input"),i=h("r-scroll-bar");return u(),p("div",ne,[l("div",oe,[m(c,{size:"big",onInput:e.searchInput,autofocus:""},{prefix:b(()=>[m(s,{name:"iconicon-test7"})]),_:1},8,["onInput"])]),l("div",se,[m(i,{class:"search-scroll-wrapper"},{default:b(()=>[l("div",null,[(u(!0),p(f,null,P(e.state.searchRes,(d,k)=>(u(),p("div",{key:k},[d.isPageName?(u(),p("div",{key:0,class:"search-scroll-item",onClick:W=>e.goPage(d.data.url.slice(1))},[m(s,{name:"iconform",size:20,class:"search-scroll-item-left"}),l("div",{innerHTML:d.matchHtml,class:"search-scroll-item-content search-scroll-item-mainText"},null,8,ae)],8,re)):(u(),p("div",{key:1,class:"search-scroll-item",onClick:W=>e.goPage(`${d.data.url.slice(1)}`,`?p=${d.matchContent}`)},[ie,l("div",de,[l("div",{innerHTML:d.matchHtml,class:"search-scroll-item-mainText"},null,8,le),l("div",ue,j(d.data.name),1)])],8,ce))]))),128))])]),_:1})]),pe])}var me=y(te,[["render",he],["__scopeId","data-v-a6e73884"]]);const _e=g({name:"layout-menu",props:{menu:{type:Array,default:()=>[]},level:{type:Number,default:0}},setup:()=>{const e=x(),n=E();return{activeRoutPath:A(()=>e.state.activeRoutPath),itemClick:t=>{t.children&&t.children.length>0||t.path&&n.push(t.path)}}}}),ge={class:"layout-menu-item-name layout-menu-item-hasChildren"},fe=["onClick"];function ve(e,n,t,a,r,o){const s=h("layout-menu");return u(!0),p(f,null,P(e.menu,c=>(u(),p("div",{class:C([`layout-menu-item-${e.level}`]),key:c.path},[c.children&&c.children.length>0?(u(),p(f,{key:0},[l("div",ge,j(c.title),1),m(s,{menu:c.children,level:e.level+1},null,8,["menu","level"])],64)):(u(),p("div",{key:1,class:C(["layout-menu-item-name layout-menu-item-noChildren",{"layout-menu-item-active":c.path===e.activeRoutPath}]),onClick:i=>e.itemClick(c)},j(c.title),11,fe))],2))),128)}var ye=y(_e,[["render",ve],["__scopeId","data-v-710ccf2a"]]);const ke=g({name:"layout-content",setup(){const e=J(),n=E(),t=H({headingNav:[],path:e.path,moreHeading:!1}),a=function(){};return V(()=>e.path,async o=>{t.path=o;const s=sessionStorage.getItem("md-heading-map");if(s){const i=JSON.parse(s)[e.path];t.headingNav=i}}),{state:t,goHeading:function(o){n.push(t.path+"?p="+o.text)},switchHeading:a}}}),xe={class:"layout-content"},be={class:"layout-heading-menu-wrapper"},$e=["onClick"];function we(e,n,t,a,r,o){const s=h("router-view"),c=h("r-scroll-bar");return u(),p("div",xe,[m(s),e.state.headingNav.length>0?(u(),T(c,{key:0,class:C(["layout-heading-menu",{"layout-heading-menu-moreHeading":e.state.moreHeading}])},{default:b(()=>[l("div",be,[(u(!0),p(f,null,P(e.state.headingNav,(i,d)=>(u(),p("div",{key:d,class:"layout-heading-menu-item",onClick:k=>e.goHeading(i)},j(i.text),9,$e))),128))])]),_:1},8,["class"])):z("",!0)])}var je=y(ke,[["render",we],["__scopeId","data-v-6d653c58"]]);const qe=g({name:"layout-head",setup:()=>{const e=x(),n=function(){e.commit("setShowSearchState",!0)};return document.addEventListener("keydown",t=>{t.ctrlKey&&t.key=="k"&&(e.commit("setShowSearchState",!0),t.preventDefault()),t.key=="Escape"&&(e.commit("setShowSearchState",!1),t.preventDefault())}),{show:n}}}),B=e=>(R("data-v-7afe9c69"),e=e(),L(),e),Se={class:"layout-head"},Ee=B(()=>l("div",{class:"project-name"},"RayxDoc - \u65B9\u4FBF\u56E2\u961F\u5FEB\u901F\u642D\u5EFA\u7684\u8F7B\u91CF\u6587\u6863\u7CFB\u7EDF",-1)),Pe={class:"head-right"},Ae=B(()=>l("span",{class:"head-right-search-text"},"Search",-1));function Ce(e,n,t,a,r,o){const s=h("r-icon");return u(),p("div",Se,[Ee,l("div",Pe,[l("div",{class:"head-right-search",onClick:n[0]||(n[0]=(...c)=>e.show&&e.show(...c))},[m(s,{name:"iconicon-test7",class:"demo-icon"}),Ae])])])}var Ie=y(qe,[["render",Ce],["__scopeId","data-v-7afe9c69"]]);const Me=g({name:"Layout",components:{Menu:ye,Content:je,Head:Ie},setup(){const e=x();return{menu:A(()=>e.state.menu)}}}),He={class:"layout-menu-wrapper"};function Re(e,n,t,a,r,o){const s=h("Head"),c=h("Menu"),i=h("r-scroll-bar"),d=h("Content");return u(),p(f,null,[m(s),m(i,{class:"layout-menu"},{default:b(()=>[l("div",He,[m(c,{menu:e.menu},null,8,["menu"])])]),_:1}),m(d)],64)}var Le=y(Me,[["render",Re],["__scopeId","data-v-cefde80c"]]);const De=g({name:"App",components:{Layout:Le,searchModal:me},mounted(){},setup(){const e=x(),n=function(){e.commit("setShowSearchState",!1)};return{showSearch:A(()=>e.state.showSearch),clickSearchModalMask:n}}});function Ne(e,n,t,a,r,o){const s=h("Layout"),c=h("searchModal"),i=h("r-modal");return u(),p(f,null,[m(s),m(i,{show:e.showSearch,"onUpdate:show":n[0]||(n[0]=d=>e.showSearch=d),onClickMask:e.clickSearchModalMask,bodyOverflow:!1},{default:b(()=>[m(c)]),_:1},8,["show","onClickMask"])],64)}var Oe=y(De,[["render",Ne]]),F={weight:{"\u6307\u5357/\u4ECB\u7ECD":99999,"\u6307\u5357/\u5FEB\u901F\u4E0A\u624B":99998,\u6307\u5357:99999},defaultPage:"\u6307\u5357/\u5FEB\u901F\u4E0A\u624B.md"};const q=[];let $=q,w=null;function Be(e,n){if(e.length>0)for(let t=0;t<e.length;t++){const a=e[t];if(a.title===n)return a}return null}function Fe(e){const n=e.replace("/docs/","").split("/");n.splice(n.length-1,1,n[n.length-1].split(".").slice(0,-1).join("."));for(let t=0;t<n.length;t++){const a=n[t],r=Be($,a);if(!r){const o=w?[...w.link,a]:[a],s={title:a,link:o,weight:F.weight[o.join("/")]||0};$.push(s),t<n.length-1&&(s.children=[],$=s.children,w=s),t===n.length-1&&(s.path=v(e));continue}r&&t<n.length-1&&(r.children||(r.children=[]),$=r.children,w=r)}return $=q,w=null,n}function We(e,n){let t=[{path:"/",redirect:v(`../docs/${F.defaultPage}`)}];for(const r in e){const o=Fe(v(r,!1));t.push({path:v(r),component:()=>new Promise((s,c)=>{e[r]().then(i=>{s(i.default);const d=sessionStorage.getItem("md-heading-map"),k=d?JSON.parse(d):{};k[v(r)]=i.headings,sessionStorage.setItem("md-heading-map",JSON.stringify(k))})}),meta:{menuPath:o.length>0?o.join(","):o[0]}}),n&&Array.isArray(n)&&n.length>0&&(t=[...t,...n])}const a=function(r){r.forEach(o=>{o.children&&a(o.children)}),r.sort((o,s)=>s.weight-o.weight)};return a(q),{Router:K({history:U(),routes:t,scrollBehavior(r,o,s){return{el:`#${r.query.p}`,top:70}}}),routes:t,menu:q}}var Je=[{name:"electron\u9879\u76EE\u57FA\u672C\u67B6\u6784\u56FE",content:`<p><img src="./electron.jpg" alt="\u9879\u76EE\u57FA\u672C\u67B6\u6784\u56FE"></p>
`,url:"./docs/Electron/electron\u9879\u76EE\u57FA\u672C\u67B6\u6784\u56FE.md",keyWords:[]},{name:"\u5B9A\u65F6\u66F4\u65B0svn",content:`<h1 id="\u5B9A\u65F6\u66F4\u65B0svn">\u5B9A\u65F6\u66F4\u65B0svn</h1><h2 id="\u5B89\u88C5crontab">\u5B89\u88C5crontab</h2><pre><code>yum install crontabs
</code></pre>
<h2 id="\u521B\u5EFA\u4EFB\u52A1shell\u811A\u672C">\u521B\u5EFA\u4EFB\u52A1shell\u811A\u672C</h2><pre><code>cd /home/crontab_sh
vim svn_update.sh
</code></pre>
<p>\u811A\u672C\u5185\u4E3Asvn\u66F4\u65B0\u4EE3\u7801\uFF0C <code>/home/svn</code> \u4E3A\u8981\u66F4\u65B0\u7684svn\u76EE\u5F55\uFF0C<code>/home/update-product.log</code> \u4E3A\u6267\u884C\u7ED3\u679C\u8F93\u51FA\u65E5\u5FD7</p>
<pre><code>#! /bin/sh
echo \`svn update /home/svn --username xxxxx --password xxx --no-auth-cache &gt; /home/update-product.log\`
</code></pre>
<h2 id="\u589E\u52A0crontab\u4EFB\u52A1">\u589E\u52A0crontab\u4EFB\u52A1</h2><pre><code>crontab -e
</code></pre>
<p>\u6DFB\u52A0\u4EFB\u52A1\uFF0C\u7136\u540E\u4FDD\u5B58\uFF0C\u4EE5root\u7528\u6237\u6267\u884C\u524D\u9762\u521B\u5EFA\u7684shell\u811A\u672C</p>
<pre><code>*/1 * * * * root /root/home/crontab_sh/svn_update.sh
// \u4E00\u5206\u949F\u6267\u884C\u4E00\u6B21
</code></pre>
<p>\u91CD\u542Fcrontab\u670D\u52A1</p>
<pre><code>service crond restart
</code></pre>
`,url:"./docs/Linux/\u5B9A\u65F6\u66F4\u65B0svn.md",keyWords:["\u5B9A\u65F6\u66F4\u65B0svn","\u5B89\u88C5crontab","\u521B\u5EFA\u4EFB\u52A1shell\u811A\u672C","\u589E\u52A0crontab\u4EFB\u52A1"]},{name:"mock\u670D\u52A1",content:`<h1 id="mock\u670D\u52A1">mock\u670D\u52A1</h1><h3 id="\u6D41\u7A0B\u4EA4\u4E92\u56FE">\u6D41\u7A0B\u4EA4\u4E92\u56FE</h3><p><img src="./mock%E6%9C%8D%E5%8A%A1%E6%B5%81%E7%A8%8B%E4%BA%A4%E4%BA%92%E5%9B%BE.png" alt="mock\u670D\u52A1\u6D41\u7A0B\u4EA4\u4E92\u56FE"></p>
<h3 id="rayx-mockserver\u5982\u4F55\u4F7F\u7528">rayx-mockserver\u5982\u4F55\u4F7F\u7528</h3><p><a href="https://www.jianshu.com/p/d7b1e9d74956">\u7528rayx-mockserver\u5FEB\u901F\u642D\u5EFA\u81EA\u5DF1\u7684mock\u670D\u52A1</a></p>
`,url:"./docs/Node/mock\u670D\u52A1.md",keyWords:["mock\u670D\u52A1","\u6D41\u7A0B\u4EA4\u4E92\u56FE","rayx-mockserver\u5982\u4F55\u4F7F\u7528"]},{name:"vite",content:`<center style="margin-top: 40px"><img src="https://vitejs.dev/logo.svg" width="100px"></center>

<h1 id="vite">vite</h1><p>\u548Cwebpack\u3001Rollup\u3001Parcel\u4E00\u6837\uFF0C\u662F\u4E00\u4E2A\u6253\u5305\u5DE5\u5177\u3002</p>
<p>\u4F46\u662F\u5B83\u5FEB\uFF01\u5FEB\u4E3B\u8981\u4F53\u73B0\u5728\u5F00\u53D1\u670D\u52A1\u4E0A\uFF0C\u5F00\u53D1\u4F53\u9A8C\u597D\u3002</p>
<p>\u5176\u5B9E\u5728\u6700\u7EC8\u6253\u5305\u8FC7\u7A0B\u4E2D\uFF0Cvite\u4F18\u52BF\u5E76\u4E0D\u660E\u663E\uFF0C\u5C3D\u7BA1vite\u4F7F\u7528\u4E86esbuild\u6765\u52A0\u5FEB\u6253\u5305\u901F\u5EA6\uFF0C\u4F46\u662Fesbuild\u6784\u5EFA\u80FD\u529B\u8FD8\u4E0D\u591F\u5B8C\u5584\uFF0C\u800C\u4E14\u8FD9\u73A9\u610F\u53C8\u4E0D\u662Fvite\u72EC\u5BB6\u7684\uFF0Cwebpack\u4E5F\u53EF\u4EE5\u5438\u6536\u8FDB\u6765\u3002</p>
<h2 id="\u4E3A\u4EC0\u4E48\u5FEB">\u4E3A\u4EC0\u4E48\u5FEB</h2><p>webpack\u5728\u5F00\u53D1\u65F6\u4F1A\u5BF9\u6574\u4E2A\u9879\u76EE\u6587\u4EF6\u8FDB\u884C\u6253\u5305\uFF0C\u8FD9\u4F1A\u7ECF\u5386\u4E00\u4E2A\u4ECE\u5165\u53E3\u6587\u4EF6\u5F00\u59CB\u7684\u6DF1\u5EA6\u904D\u5386\u7684\u8FC7\u7A0B\uFF0C\u6765\u6784\u5EFA\u4F9D\u8D56\u5173\u7CFB\u56FE\uFF0C\u6240\u4EE5\u542F\u52A8\u901F\u5EA6\u4F1A\u968F\u7740\u9879\u76EE\u89C4\u6A21\u6269\u5927\u8D8A\u6765\u8D8A\u7F13\u6162\u3002</p>
<img src="https://vitejs.cn/assets/bundler.37740380.png" width="70%">

<p>\u800Cvite\u4F7F\u7528\u539F\u751FESM\uFF0C\u542F\u52A8\u4E00\u53F0\u5F00\u53D1\u670D\u52A1\u5668\u5373\u53EF\uFF0C\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u8BF7\u6C42\u9700\u8981\u7684\u6587\u4EF6\uFF0C\u5E76\u5728\u670D\u52A1\u7AEF\u6309\u9700\u7F16\u8BD1\u8FD4\u56DE\uFF0C\u6839\u672C\u6CA1\u6709\u6253\u5305\u3002</p>
<img src="https://vitejs.cn/assets/esm.3070012d.png" width="70%">

<p>\u5229\u7528\u7F13\u5B58\u518D\u5FEB\u4E00\u70B9\uFF1A\u6E90\u7801\u6A21\u5757\u7684\u8BF7\u6C42\u4F1A\u6839\u636E 304 Not Modified \u8FDB\u884C\u534F\u5546\u7F13\u5B58\uFF0C\u800C\u4F9D\u8D56\u6A21\u5757\u8BF7\u6C42\u5219\u4F1A\u901A\u8FC7 Cache-Control: max-age=31536000,immutable \u8FDB\u884C\u5F3A\u7F13\u5B58\uFF0C\u56E0\u6B64\u4E00\u65E6\u88AB\u7F13\u5B58\u5B83\u4EEC\u5C06\u4E0D\u9700\u8981\u518D\u6B21\u8BF7\u6C42\u3002</p>
<h2 id="\u5DE5\u4F5C\u539F\u7406">\u5DE5\u4F5C\u539F\u7406</h2><p>\u4E3B\u8981\u53D8\u5316\u662Findex.html\u4E2D\u7684\u5165\u53E3\u6587\u4EF6\u5BFC\u5165\u65B9\u5F0F</p>
<pre><code class="language-html">&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;title&gt;Vite App&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;
    &lt;script type=&quot;module&quot; src=&quot;/src/main.js&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>\u5229\u7528\u6D4F\u89C8\u5668native ES module imports\u7279\u6027, \u6240\u4EE5main.js\u4E2D\u5C31\u53EF\u4EE5\u4F7F\u7528ESM\u7684\u65B9\u5F0F\u7EC4\u7EC7\u4EE3\u7801</p>
<pre><code class="language-js">import { createApp } from &quot;/node_modules/.vite/vue.js?v=xxx&quot;;
import App from &quot;/src/App.vue?t=xxx&quot;;
createApp(App).mount(&quot;#app&quot;);
</code></pre>
<p>vite\u9700\u8981\u6839\u636E\u8BF7\u6C42\u8D44\u6E90\u7C7B\u578B\u505A\u4E0D\u540C\u89E3\u6790\u5DE5\u4F5C\uFF08\u7F16\u8BD1\uFF09\uFF0C\u6BD4\u5982App.vue\uFF0C\u5C31\u662F\u4F1A\u628Asfc\u7F16\u8BD1\u6210render\uFF0Cscript\u6267\u884C\u811A\u672C\uFF0C\u548Cstyle\u4E09\u5757</p>
<pre><code class="language-js">import { createHotContext as __vite__createHotContext } from &quot;/@vite/client&quot;;
import.meta.hot = __vite__createHotContext(&quot;/src/App.vue&quot;);
import { defineComponent as _defineComponent } from &quot;/node_modules/.vite/vue.js?v=xxx&quot;;
// script
const _sfc_main = /* @__PURE__ */ _defineComponent({
  setup(__props, { expose }) {
    expose();
    const __returned__ = { HelloWorld };
    Object.defineProperty(__returned__, &quot;__isScriptSetup&quot;, { enumerable: false, value: true });
    return __returned__;
  }
});
// templete
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(_Fragment, null, [
    _hoisted_1,
    _createVNode($setup[&quot;HelloWorld&quot;], { msg: &quot;Hello Vue 3 + TypeScript + Vite&quot; })
  ], 64);
}
// style
import &quot;/src/App.vue?vue&amp;type=style&amp;index=0&amp;lang.css&quot;;
...
</code></pre>
<h2 id="\u4F2A\u4EE3\u7801">\u4F2A\u4EE3\u7801</h2><h4 id="\u4F7F\u7528koa\u521B\u5EFA\u5F00\u53D1\u670D\u52A1\u5668">\u4F7F\u7528koa\u521B\u5EFA\u5F00\u53D1\u670D\u52A1\u5668</h4><p>\u5904\u7406\u6839\u8DEF\u7531\uFF0C\u8FD4\u56DE\u5165\u53E3\u6587\u4EF6index.html</p>
<pre><code class="language-js">const app = new Koa()

app.use(async (ctx) =&gt; {
  const url = ctx.request.url
  if (url === &#39;/&#39;) {
    ctx.type = &#39;text/html&#39;
    ctx.body = fs.readFileSync(&#39;./index.html&#39;, &#39;utf-8&#39;)  
  }
})

app.listen(3000, () =&gt; {
  // server start
})
</code></pre>
<h4 id="\u5904\u7406js\u6587\u4EF6">\u5904\u7406js\u6587\u4EF6</h4><p>\u6BD4\u5982\u6D4F\u89C8\u5668\u53D1\u8D77\u5BF9main.js\u7684\u8BF7\u6C42</p>
<pre><code class="language-js">app.use(async (ctx) =&gt; {
  const url = ctx.request.url
  if (url === &#39;/&#39;) {
    // ...
  } else if (url.endsWith(&#39;.js&#39;)) {
    const p = path.join(__dirname, url)
    ctx.type = &#39;text/javascript&#39;
    ctx.body = fs.readFileSync(p, &#39;utf-8&#39;)
  }
})
</code></pre>
<h4 id="\u5904\u7406\u7B2C\u4E09\u65B9\u4F9D\u8D56">\u5904\u7406\u7B2C\u4E09\u65B9\u4F9D\u8D56</h4><p>\u6BD4\u5982\uFF1Avue, \u56E0\u4E3A\u6D4F\u89C8\u5668\u5E76\u4E0D\u77E5\u9053vue\u662F\u54EA\u91CC\u6765\u7684\uFF0C\u6240\u4EE5\u670D\u52A1\u9700\u8981\u628A\u8FD9\u79CD\u6A21\u5757\u6539\u5199\u6210\u6B63\u786E\u8DEF\u5F84</p>
<pre><code class="language-js">function rewriteImport(content) {
  return content.replace(/ from [&#39;|&quot;]([^&#39;&quot;]+)[&#39;|&quot;]/g, function(s0, s1){
    if (s1.startsWith(&#39;./&#39;) || s1.startsWith(&#39;/&#39;) || s1.startsWith(&#39;../&#39;)) {
      return s0
    } else {
      return \` from &#39;/node_modules/\${s1}&#39;\`
    }
  })
}

app.use(async (ctx) =&gt; {
  const url = ctx.request.url
  if (url === &#39;/&#39;) {
    // ...
  } else if (url.endsWith(&#39;.js&#39;)) {
    // ...
    const ret = fs.readFileSync(p, &#39;utf-8&#39;)
    // \u91CD\u5199\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5BFC\u5165\u8DEF\u5F84
    ctx.body = rewriteImport(ret)
  }
})
</code></pre>
<h2 id="vite\u63D2\u4EF6\u5E94\u7528">vite\u63D2\u4EF6\u5E94\u7528</h2><p>vite\u7684\u63D2\u4EF6\u6269\u5C55\u81EArollup\uFF0C\u6240\u4EE5\u65E2\u53EF\u4EE5\u5728vite\u670D\u52A1\u89E3\u6790\u6A21\u5757\u7684\u65F6\u5019\u6267\u884C\uFF0C\u4E5F\u53EF\u4EE5\u5728build\u7684\u65F6\u5019\u6267\u884C\u3002</p>
<p>\u4F5C\u7528\u548Cwebpack\u7684plugin\u548Cloader\u76F8\u5F53\uFF0C\u5177\u4F53api\u53EF\u4EE5\u770B\u5B98\u65B9\u6587\u6863\uFF0C\u6CA1\u6709\u5B9E\u9645\u64CD\u4F5C\u7684\u8BDD\u89E3\u91CAapi\u5176\u5B9E\u6CA1\u4EC0\u4E48\u7528\u3002</p>
<h4 id="\u6700\u7B80\u5355\u5E94\u7528\uFF1A\u865A\u62DF\u6A21\u5757">\u6700\u7B80\u5355\u5E94\u7528\uFF1A\u865A\u62DF\u6A21\u5757</h4><pre><code class="language-js">// vite-test-plugin
export default function myPlugin() {
  const virtualFileId = &#39;@test-virtual-plugin&#39;
  return {
    name: &#39;test-virtual-plugin&#39;,
    resolveId(id) {
      // \u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u63D2\u4EF6\u72EC\u6709\u7684\u6807\u8BC6\uFF0C\u5F53\u67D0\u4E2A\u6A21\u5757\u6CA1\u6709\u63D2\u4EF6\u80FD\u5904\u7406\u7684\u65F6\u5019\u4F1A\u62A5\u6A21\u5757\u627E\u4E0D\u5230\u7684\u9519\u8BEF
      if (id === virtualFileId) {
          return virtualFileId
      }
    },
    load(id) {
      // \u6B64id\u662FresolveId\u4E2D\u8FD4\u56DE\u7684\uFF0C\u5FC5\u987B\u505A\u5224\u65AD\uFF0C\u5426\u5219\u6BCF\u4E2A\u6A21\u5757\u90FD\u5728\u8FD9\u91CC\u4F1A\u505A\u5904\u7406\uFF0C\u5C31\u4E71\u5957\u4E86
      if (id === virtualFileId) {
          return \`export const msg = &quot;from virtual file&quot;\`
      }
    }
  }
}

// vite.config.js
import vitePluginTest from &#39;./plugins/vite-plugin-test.js&#39;
export default defineConfig({
  plugins: [vue(), vitePluginTest()]
})
</code></pre>
<h4 id="\u590D\u6742\u4E00\u70B9\u7684\u5E94\u7528\uFF1A\u5904\u7406md\u7684loader">\u590D\u6742\u4E00\u70B9\u7684\u5E94\u7528\uFF1A\u5904\u7406md\u7684loader</h4><p><a href="https://github.com/WangXueZhi/vite-plugin-md2vue">vite-plugin-md2vue</a></p>
<pre><code class="language-js">const marked = require(&quot;marked&quot;);

export default function vitePluginMd2Vue(options?: OptionsObject) {
  return {
    name: &quot;vitePluginMd2Vue&quot;,
    transform(src: string, id: string) {
      if (id.endsWith(&quot;.md&quot;)) {
        const markdownHtml = marked(src)
        return {
          code: \`import {h, defineComponent} from &quot;vue&quot;;
          const _sfc_md = defineComponent({
            name: &quot;Markdown&quot;,
          });
          
          const _sfc_render =() =&gt; {
            return h(&quot;div&quot;, {
              innerHTML: \${JSON.stringify(markdownHtml)},
            })
          };
          
          _sfc_md.render = _sfc_render
          _sfc_md.mounted = ()=&gt;{
            \${mermaidRenderCode}
          }
          export default _sfc_md\`,
          map: null,
        };
      }
    },
  };
}
</code></pre>
`,url:"./docs/\u6253\u5305\u5DE5\u5177/vite.md",keyWords:["vite","\u4E3A\u4EC0\u4E48\u5FEB","\u5DE5\u4F5C\u539F\u7406","\u4F2A\u4EE3\u7801","\u4F7F\u7528koa\u521B\u5EFA\u5F00\u53D1\u670D\u52A1\u5668","\u5904\u7406js\u6587\u4EF6","\u5904\u7406\u7B2C\u4E09\u65B9\u4F9D\u8D56","vite\u63D2\u4EF6\u5E94\u7528","\u6700\u7B80\u5355\u5E94\u7528\uFF1A\u865A\u62DF\u6A21\u5757","\u590D\u6742\u4E00\u70B9\u7684\u5E94\u7528\uFF1A\u5904\u7406md\u7684loader"]},{name:"require.context",content:`<h1 id="require.context">require.context</h1><p>\u904D\u5386\u76EE\u5F55\u8FDB\u884C\u6279\u91CF\u7684\u5F02\u6B65\u5BFC\u5165\uFF0C\u5728\u5927\u91CF\u5BFC\u5165\u7684\u573A\u666F\u4E0B\u7279\u522B\u6709\u7528</p>
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
<pre><code class="language-javascript">let contexts = require.context(&#39;.&#39;, false, /\\.vue$/)
contexts.keys().forEach(key =&gt; {
    // \u6A21\u5757\u7684\u9ED8\u8BA4\u5BFC\u51FA
    let moduleExport = contexts(key).default
})
</code></pre>
`,url:"./docs/\u6253\u5305\u5DE5\u5177/webpack/require.context.md",keyWords:["require.context","\u53C2\u6570","return"]},{name:"Mermaid",content:`<h1 id="Mermaid">Mermaid</h1><p>Mermaid\u662F\u4E00\u79CD\u7F16\u5199\u7518\u7279\u56FE\u3001\u6D41\u7A0B\u56FE\u3001\u987A\u5E8F\u56FE\u7B49\u5404\u79CD\u56FE\u5F62\u7684\u8BED\u6CD5\u548C\u89E3\u6790\u5E93\uFF0C\u901A\u8FC7\u8FD9\u79CD\u8BED\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5728markdown\u4E2D\u7F16\u5199\u5404\u79CD\u56FE\u5F62\uFF0C\u63D2\u4EF6\u4F1A\u5BF9mermaid\u505A\u89E3\u6790\u8F93\u51FA\u3002</p>
<p>\u4E0B\u9762\u5C31\u7B80\u5355\u4F8B\u5B50\uFF0C\u5177\u4F53\u66F4\u591A\u5199\u6CD5\u5C31\u53C2\u8003\u6587\u6863\u5427\uFF0C<a href="https://mermaid-js.github.io/mermaid/#/flowchart">mermaid\u5B98\u65B9\u6587\u6863</a>\u3002</p>
<h2 id="\u4E3E\u4E2A\u6817\u5B50">\u4E3E\u4E2A\u6817\u5B50</h2><p>\u4EE3\u7801\u957F\u8FD9\u6837</p>
<pre><code>sequenceDiagram
    participant Alice
    participant Bob
    Alice-&gt;&gt;John: Hello John, how are you?
    loop Healthcheck
        John-&gt;&gt;John: Fight against hypochondria
    end
    Note right of John: Rational thoughts prevail!
    John--&gt;&gt;Alice: Great!
    John-&gt;&gt;Bob: How about you?
    Bob--&gt;&gt;John: Jolly good!
</code></pre>
<p>\u6548\u679C\u662F\u8FD9\u6837</p>
<pre><code class="language-mermaid">sequenceDiagram
    participant Alice
    participant Bob
    Alice-&gt;&gt;John: Hello John, how are you?
    loop Healthcheck
        John-&gt;&gt;John: Fight against hypochondria
    end
    Note right of John: Rational thoughts prevail!
    John--&gt;&gt;Alice: Great!
    John-&gt;&gt;Bob: How about you?
    Bob--&gt;&gt;John: Jolly good!
</code></pre>
`,url:"./docs/\u6307\u5357/Mermaid.md",keyWords:["Mermaid","\u4E3E\u4E2A\u6817\u5B50"]},{name:"\u4ECB\u7ECD",content:`<h1 id="\u4ECB\u7ECD">\u4ECB\u7ECD</h1><p>RayxDoc \u662F\u4E00\u4E2A\u9002\u5408\u56E2\u961F\u5185\u90E8\u6216\u4E2A\u4EBA\u4F7F\u7528\u7684\u8F7B\u91CF\u6587\u6863\u7CFB\u7EDF, \u56E0\u4E3A\u4F60\u57FA\u672C\u4E0D\u7528\u5E72\u5565\uFF0C\u4F60\u4E3B\u8981\u5E72\u7684\u4E8B\u5C31\u662F\u5199\u5199 Markdown \u5C31\u884C\u3002</p>
<p>\u4F60\u53EF\u4EE5\u4F7F\u7528 Markdown \u6765\u4E66\u5199\u5185\u5BB9\uFF08\u5982\u6587\u6863\u3001\u535A\u5BA2\u7B49\uFF09\uFF0C\u7136\u540E RayxDoc \u4F1A\u751F\u6210\u4E00\u4E2A\u7F51\u7AD9\u6765\u5C55\u793A\u5B83\u4EEC\u3002</p>
<h2 id="\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684?">\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684?</h2><p>RayxDoc \u7684\u6838\u5FC3\u5C31\u662F\u5904\u7406md\u6587\u4EF6\uFF0C\u6240\u4EE5\u5B83\u4F9D\u8D56\u4E86\u4E00\u4E2A\u53EB <a href="https://github.com/WangXueZhi/vite-plugin-md2vue">vite-plugin-md2vue</a> \u7684\u63D2\u4EF6\u3002</p>
<p>\u662F\u7684\uFF0C\u8FD9\u662F\u4E2Avite\u63D2\u4EF6\uFF0C\u8BE5\u9879\u76EE\u662F\u57FA\u4E8Evite\u642D\u5EFA\u7684\uFF0C\u8BE5\u63D2\u4EF6\u7684\u4F5C\u7528\u5C31\u662F\u7C7B\u4F3C<code>webpack</code>\u4E2D\u7684<code>loader</code>\uFF0C\u5BFC\u5165\u4E00\u4E2A<code>md</code>\u6A21\u5757\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F5C\u4E3A<code>vue\u7EC4\u4EF6</code>\u4F7F\u7528\u3002</p>
<p>\u60F3\u4E86\u89E3\u8BE5\u63D2\u4EF6\u7684\u5B9E\u73B0\u53EF\u4EE5\u76F4\u63A5\u53BB\u770B\u6E90\u7801\u3002</p>
<h2 id="\u641C\u7D22">\u641C\u7D22</h2><p>RayxDoc \u4E5F\u5185\u7F6E\u4E86\u5168\u7AD9\u7684\u6807\u9898\u641C\u7D22\u529F\u80FD\uFF0C \u53EF\u70B9\u51FB\u53F3\u9875\u9762\u4E0A\u89D2\u641C\u7D22\u63A7\u4EF6\u6253\u5F00\uFF0C\u4E5F\u53EF\u901A\u8FC7\u5FEB\u6377\u952E<code>Ctrl+K</code>\u5524\u8D77\u641C\u7D22\u7A97\u53E3</p>
<p>\u641C\u7D22\u7A97\u53E3\u7EC4\u4EF6\u5728\uFF0C<code>src/components/searchModal</code>\uFF0C\u53EF\u968F\u610F\u6309\u9700\u4FEE\u6539</p>
<p>\u641C\u7D22\u6570\u636E\u662F\u901A\u8FC7\u5185\u7F6E\u63D2\u4EF6 <code>plugins/vite-plugin-docs-config.js</code> \u5BF9\u6574\u4E2Adocs\u76EE\u5F55\u7684\u6587\u6863\u89E3\u6790\u521B\u5EFA\u7684\uFF0C\u53EF\u968F\u610F\u6309\u9700\u4FEE\u6539</p>
<h2 id="SEO">SEO</h2><p>\u5982\u679C\u4F60\u9700\u8981seo\uFF0C\u4E0D\u9002\u5408\u7528\u8FD9\u4E2A\uFF0C\u56E0\u4E3A\u8FD9\u4E0D\u662F\u4E00\u4E2A\u9759\u6001\u7F51\u7AD9\uFF0C\u53EF\u8003\u8651\u4F7F\u7528<a href="https://vuepress.vuejs.org/zh/">vuepress</a></p>
`,url:"./docs/\u6307\u5357/\u4ECB\u7ECD.md",keyWords:["\u4ECB\u7ECD","\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684?","\u641C\u7D22","SEO"]},{name:"\u56FE\u7247\u8D44\u6E90",content:`<h1 id="\u56FE\u7247\u8D44\u6E90">\u56FE\u7247\u8D44\u6E90</h1><p>\u5C06\u56FE\u7247\u8D44\u6E90\u653E\u5728public\u76EE\u5F55\u4E0B\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u53BB\u5F15\u7528<code>./runoob-logo.png</code>\uFF0C\u5982\u4E0B\u56FE\uFF1A</p>
<p><img src="./runoob-logo.png" alt="ks"></p>
`,url:"./docs/\u6307\u5357/\u56FE\u7247\u8D44\u6E90.md",keyWords:["\u56FE\u7247\u8D44\u6E90"]},{name:"\u5FEB\u901F\u4E0A\u624B",content:`<h1 id="\u5FEB\u901F\u4E0A\u624B">\u5FEB\u901F\u4E0A\u624B</h1><h3 id="\u7B2C\u4E00\u6B65\uFF1A\u514B\u9686\u4ED3\u5E93">\u7B2C\u4E00\u6B65\uFF1A\u514B\u9686\u4ED3\u5E93</h3><pre><code class="language-bash">git clone https://github.com/WangXueZhi/rayx-doc.git
</code></pre>
<h3 id="\u7B2C\u4E8C\u6B65\uFF1A\u5728docs\u76EE\u5F55\u4E0B\u6DFB\u52A0md\u6587\u4EF6\u5E76\u7F16\u5199\u6587\u6863">\u7B2C\u4E8C\u6B65\uFF1A\u5728docs\u76EE\u5F55\u4E0B\u6DFB\u52A0md\u6587\u4EF6\u5E76\u7F16\u5199\u6587\u6863</h3><pre><code class="language-bash">echo &#39;# Hello docs&#39; &gt; docs/\u5F00\u59CB.md
</code></pre>
<h3 id="\u7B2C\u4E09\u6B65\uFF1A\u6839\u76EE\u5F55\u4E2D\u7684<code>docs.config.js</code>\u4E2D\u6DFB\u52A0\u9ED8\u8BA4\u9875\u9762">\u7B2C\u4E09\u6B65\uFF1A\u6839\u76EE\u5F55\u4E2D\u7684docs.config.js\u4E2D\u6DFB\u52A0\u9ED8\u8BA4\u9875\u9762</h3><pre><code class="language-js">module.exports = {
    // \u9ED8\u8BA4\u9875\u9762\uFF0C\u7528\u4E8E\u5339\u914D / \u8DEF\u5F84
    defaultPage: &#39;\u5F00\u59CB.md&#39;
}
</code></pre>
<h3 id="\u7B2C\u56DB\u6B65\uFF1A\u5B89\u88C5\u4F9D\u8D56\uFF0C\u542F\u52A8\u670D\u52A1">\u7B2C\u56DB\u6B65\uFF1A\u5B89\u88C5\u4F9D\u8D56\uFF0C\u542F\u52A8\u670D\u52A1</h3><pre><code class="language-bash">yarn
yarn dev
</code></pre>
`,url:"./docs/\u6307\u5357/\u5FEB\u901F\u4E0A\u624B.md",keyWords:["\u5FEB\u901F\u4E0A\u624B","\u7B2C\u4E00\u6B65\uFF1A\u514B\u9686\u4ED3\u5E93","\u7B2C\u4E8C\u6B65\uFF1A\u5728docs\u76EE\u5F55\u4E0B\u6DFB\u52A0md\u6587\u4EF6\u5E76\u7F16\u5199\u6587\u6863","\u7B2C\u4E09\u6B65\uFF1A\u6839\u76EE\u5F55\u4E2D\u7684<code>docs.config.js</code>\u4E2D\u6DFB\u52A0\u9ED8\u8BA4\u9875\u9762","\u7B2C\u56DB\u6B65\uFF1A\u5B89\u88C5\u4F9D\u8D56\uFF0C\u542F\u52A8\u670D\u52A1"]},{name:"\u83DC\u5355\u987A\u5E8F\u63A7\u5236",content:`<h1 id="\u83DC\u5355\u987A\u5E8F\u63A7\u5236">\u83DC\u5355\u987A\u5E8F\u63A7\u5236</h1><p>\u56E0\u4E3A\u83DC\u5355\u7684\u9ED8\u8BA4\u987A\u5E8F\u662F\u6839\u636E\u76EE\u5F55\u8BFB\u53D6\u987A\u5E8F\u51B3\u5B9A\u7684\uFF0C\u6240\u4EE5\u5F88\u6709\u53EF\u80FD\u4F1A\u51FA\u73B0\u548C\u9884\u671F\u4E2D\u4E0D\u4E00\u6837\u7684\u987A\u5E8F\u3002</p>
<p>\u73B0\u5728\u53EF\u4EE5\u5728\u6839\u76EE\u5F55\u589E\u52A0\u914D\u7F6E\u6587\u4EF6<code>docs.config.js</code>\uFF0C\u914D\u7F6E\u9875\u9762\u6743\u91CD\u53EF\u63A7\u5236\u6307\u5B9A\u83DC\u5355\u5728\u540C\u7EA7\u83DC\u5355\u4E2D\u7684\u987A\u5E8F\uFF0C\u6743\u91CD\u8D8A\u9AD8\uFF0C\u987A\u5E8F\u8D8A\u9760\u524D\uFF0C\u4E0D\u8BBE\u7F6E\u9ED8\u8BA4\u4E3A 0</p>
<pre><code class="language-js">module.exports = {
    // \u9875\u9762\u6743\u91CD
    weight: {
        &#39;\u6307\u5357/\u5FEB\u901F\u4E0A\u624B&#39;: 99999
    }
}
</code></pre>
`,url:"./docs/\u6307\u5357/\u83DC\u5355\u987A\u5E8F\u63A7\u5236.md",keyWords:["\u83DC\u5355\u987A\u5E8F\u63A7\u5236"]}];const Ve={"../docs/Electron/electron\u9879\u76EE\u57FA\u672C\u67B6\u6784\u56FE.md":()=>_(()=>import("./electron\u9879\u76EE\u57FA\u672C\u67B6\u6784\u56FE.611ec0ed.js"),[]),"../docs/Linux/\u5B9A\u65F6\u66F4\u65B0svn.md":()=>_(()=>import("./\u5B9A\u65F6\u66F4\u65B0svn.b6d9623f.js"),[]),"../docs/Node/mock\u670D\u52A1.md":()=>_(()=>import("./mock\u670D\u52A1.fed3aa63.js"),[]),"../docs/\u6253\u5305\u5DE5\u5177/vite.md":()=>_(()=>import("./vite.84b81d71.js"),["assets/vite.84b81d71.js","assets/vendor.5022afda.js"]),"../docs/\u6307\u5357/Mermaid.md":()=>_(()=>import("./Mermaid.e40d91fb.js"),["assets/Mermaid.e40d91fb.js","assets/vendor.5022afda.js"]),"../docs/\u6307\u5357/\u4ECB\u7ECD.md":()=>_(()=>import("./\u4ECB\u7ECD.84149938.js"),[]),"../docs/\u6307\u5357/\u56FE\u7247\u8D44\u6E90.md":()=>_(()=>import("./\u56FE\u7247\u8D44\u6E90.42c7869a.js"),[]),"../docs/\u6307\u5357/\u5FEB\u901F\u4E0A\u624B.md":()=>_(()=>import("./\u5FEB\u901F\u4E0A\u624B.d0430211.js"),[]),"../docs/\u6307\u5357/\u83DC\u5355\u987A\u5E8F\u63A7\u5236.md":()=>_(()=>import("./\u83DC\u5355\u987A\u5E8F\u63A7\u5236.ab1680ba.js"),[]),"../docs/\u6253\u5305\u5DE5\u5177/webpack/require.context.md":()=>_(()=>import("./require.context.09600dac.js"),["assets/require.context.09600dac.js","assets/vendor.5022afda.js"])},{Router:I,routes:Ke,menu:Te}=We(Ve);I.beforeEach((e,n,t)=>{D.start(),M.commit("setActiveDocPath",e.meta.menuPath),M.commit("setActiveRoutPath",e.path),t()});I.afterEach(()=>{D.done()});const M=X({state(){return{menu:Te,activeDocPath:"",docsData:Je,showSearch:!1,activeRoutPath:""}},mutations:{setActiveDocPath(e,n){e.activeDocPath=n},setShowSearchState(e,n){e.showSearch=n},setActiveRoutPath(e,n){e.activeRoutPath=n}}}),S=Z(Oe);S.use(G);S.use(I);S.use(M);S.mount("#app");export{_};
