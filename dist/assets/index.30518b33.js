import{d as _,u as $,a as H,r as N,b as p,c as h,e as l,f as m,w as k,p as D,g as L,o as u,F as g,h as I,t as P,i as R,n as j,j as V,k as W,l as q,m as z,q as K,s as U,N as J,v as G,x as X,R as Z}from"./vendor.c168e704.js";const Q=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}};Q();const Y="modulepreload",x={},ee="./",S=function(n,t){return!t||t.length===0?n():Promise.all(t.map(c=>{if(c=`${ee}${c}`,c in x)return;x[c]=!0;const a=c.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${o}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":Y,a||(s.as="script",s.crossOrigin=""),s.href=c,document.head.appendChild(s),a)return new Promise((r,i)=>{s.addEventListener("load",r),s.addEventListener("error",i)})})).then(()=>n())};function f(e,n=!0){const t=e.split("/").map(c=>n?encodeURIComponent(c):c);return t[0].includes(".")&&t.splice(0,1,""),t.join("/")}var v=(e,n)=>{for(const[t,c]of n)e[t]=c;return e};const te=_({name:"layout-search-modal",mounted(){},setup(){const e=$(),n=H(),t=N({searchRes:[]});return{goPage:function(o,s){n.push(f(o)+(s||"")),e.commit("setShowSearchState",!1)},searchInput:function(o){t.searchRes=[],o&&e.state.docsData.forEach(s=>{s.name.includes(o)&&t.searchRes.push({data:s,isPageName:!0,pageName:s.name,matchHtml:`<div>${s.name.replace(o,`<span style="color: var(--main-color)">${o}</span>`)}</div>`,searchValue:o}),s.keyWords.forEach(r=>{r.indexOf(o)>=0&&t.searchRes.push({data:s,isPageName:!1,pageName:s.name,matchHtml:`<div>${r.replace(o,`<span style="color: var(--main-color)">${o}</span>`)}</div>`,searchValue:o,matchContent:r})})})},state:t}}}),O=e=>(D("data-v-b4c4bb1e"),e=e(),L(),e),ne={class:"search-modal"},oe={class:"search-input"},se={class:"search-scroll"},ae=["onClick"],ce=["innerHTML"],re=["onClick"],ie=O(()=>l("div",{class:"search-scroll-item-left"},"#",-1)),de={class:"search-scroll-item-content"},le=["innerHTML"],ue={class:"search-scroll-item-content-heading"},he=O(()=>l("div",{class:"tips"},"\u6309 esc \u9000\u51FA",-1));function pe(e,n,t,c,a,o){const s=p("r-icon"),r=p("r-input"),i=p("r-scroll-bar");return u(),h("div",ne,[l("div",oe,[m(r,{size:"big",onInput:e.searchInput,autofocus:""},{prefix:k(()=>[m(s,{name:"iconicon-test7"})]),_:1},8,["onInput"])]),l("div",se,[m(i,{class:"search-scroll-wrapper"},{default:k(()=>[l("div",null,[(u(!0),h(g,null,I(e.state.searchRes,(d,y)=>(u(),h("div",{key:y},[d.isPageName?(u(),h("div",{key:0,class:"search-scroll-item",onClick:T=>e.goPage(d.data.url.slice(1))},[m(s,{name:"iconform",size:20,class:"search-scroll-item-left"}),l("div",{innerHTML:d.matchHtml,class:"search-scroll-item-content search-scroll-item-mainText"},null,8,ce)],8,ae)):(u(),h("div",{key:1,class:"search-scroll-item",onClick:T=>e.goPage(`${d.data.url.slice(1)}`,`?p=${d.matchContent}`)},[ie,l("div",de,[l("div",{innerHTML:d.matchHtml,class:"search-scroll-item-mainText"},null,8,le),l("div",ue,P(d.data.name),1)])],8,re))]))),128))])]),_:1})]),he])}var me=v(te,[["render",pe],["__scopeId","data-v-b4c4bb1e"]]);const _e=_({name:"layout-menu",props:{menu:{type:Array,default:()=>[]},level:{type:Number,default:0}},setup:()=>{const e=$(),n=H();return{activeRoutPath:R(()=>e.state.activeRoutPath),itemClick:t=>{t.children&&t.children.length>0||t.path&&n.push(t.path)}}}}),ge={class:"layout-menu-item-name layout-menu-item-hasChildren"},fe=["onClick"];function ve(e,n,t,c,a,o){const s=p("layout-menu");return u(!0),h(g,null,I(e.menu,r=>(u(),h("div",{class:j([`layout-menu-item-${e.level}`]),key:r.path},[r.children&&r.children.length>0?(u(),h(g,{key:0},[l("div",ge,P(r.title),1),m(s,{menu:r.children,level:e.level+1},null,8,["menu","level"])],64)):(u(),h("div",{key:1,class:j(["layout-menu-item-name layout-menu-item-noChildren",{"layout-menu-item-active":r.path===e.activeRoutPath}]),onClick:i=>e.itemClick(r)},P(r.title),11,fe))],2))),128)}var ye=v(_e,[["render",ve],["__scopeId","data-v-3a8bf218"]]);const $e=_({name:"layout-content",setup(){const e=V(),n=H(),t=N({headingNav:[],path:e.path,moreHeading:!1}),c=function(){};return W(()=>e.path,async o=>{t.path=o;const s=sessionStorage.getItem("md-heading-map");if(s){const i=JSON.parse(s)[e.path];t.headingNav=i}}),{state:t,goHeading:function(o){n.push(t.path+"?p="+o.text)},switchHeading:c}}}),ke={class:"layout-content"},Se={class:"layout-heading-menu-wrapper"},be=["onClick"];function we(e,n,t,c,a,o){const s=p("router-view"),r=p("r-scroll-bar");return u(),h("div",ke,[m(s),e.state.headingNav.length>0?(u(),q(r,{key:0,class:j(["layout-heading-menu",{"layout-heading-menu-moreHeading":e.state.moreHeading}])},{default:k(()=>[l("div",Se,[(u(!0),h(g,null,I(e.state.headingNav,(i,d)=>(u(),h("div",{key:d,class:"layout-heading-menu-item",onClick:y=>e.goHeading(i)},P(i.text),9,be))),128))])]),_:1},8,["class"])):z("",!0)])}var Pe=v($e,[["render",we],["__scopeId","data-v-e7da0b42"]]);const Me=_({name:"layout-head",setup:()=>{const e=$(),n=function(){e.commit("setShowSearchState",!0)};return document.addEventListener("keydown",t=>{t.ctrlKey&&t.key=="k"&&(e.commit("setShowSearchState",!0),t.preventDefault()),t.key=="Escape"&&(e.commit("setShowSearchState",!1),t.preventDefault())}),{show:n}}}),B=e=>(D("data-v-0f0bd3b4"),e=e(),L(),e),Ce={class:"layout-head"},He=B(()=>l("div",{class:"project-name"},"RayxDoc - \u9002\u5408\u56E2\u961F\u4F7F\u7528\u7684\u8F7B\u91CF\u6587\u6863\u7CFB\u7EDF",-1)),Ie={class:"head-right"},Re=B(()=>l("span",{class:"head-right-search-text"},"Search",-1));function je(e,n,t,c,a,o){const s=p("r-icon");return u(),h("div",Ce,[He,l("div",Ie,[l("div",{class:"head-right-search",onClick:n[0]||(n[0]=(...r)=>e.show&&e.show(...r))},[m(s,{name:"iconicon-test7",class:"demo-icon"}),Re])])])}var Ae=v(Me,[["render",je],["__scopeId","data-v-0f0bd3b4"]]);const Ee=_({name:"Layout",components:{Menu:ye,Content:Pe,Head:Ae},setup(){const e=$();return{menu:R(()=>e.state.menu)}}}),Ne={class:"layout-menu-wrapper"};function De(e,n,t,c,a,o){const s=p("Head"),r=p("Menu"),i=p("r-scroll-bar"),d=p("Content");return u(),h(g,null,[m(s),m(i,{class:"layout-menu"},{default:k(()=>[l("div",Ne,[m(r,{menu:e.menu},null,8,["menu"])])]),_:1}),m(d)],64)}var Le=v(Ee,[["render",De],["__scopeId","data-v-3ac6266e"]]);const Je=_({name:"App",components:{Layout:Le,searchModal:me},mounted(){},setup(){const e=$(),n=function(){e.commit("setShowSearchState",!1)};return{showSearch:R(()=>e.state.showSearch),clickSearchModalMask:n}}});function xe(e,n,t,c,a,o){const s=p("Layout"),r=p("searchModal"),i=p("r-modal");return u(),h(g,null,[m(s),m(i,{show:e.showSearch,"onUpdate:show":n[0]||(n[0]=d=>e.showSearch=d),onClickMask:e.clickSearchModalMask,bodyOverflow:!1},{default:k(()=>[m(r)]),_:1},8,["show","onClickMask"])],64)}var Oe=v(Je,[["render",xe]]),F={weight:{"\u6307\u5357/\u4ECB\u7ECD":99999,"\u6307\u5357/\u5FEB\u901F\u4E0A\u624B":99998},defaultPage:"\u6307\u5357/\u5FEB\u901F\u4E0A\u624B.md"};const M=[];let b=M,w=null;function Be(e,n){if(e.length>0)for(let t=0;t<e.length;t++){const c=e[t];if(c.title===n)return c}return null}function Fe(e){const n=e.replace("/docs/","").split("/");n.splice(n.length-1,1,n[n.length-1].split(".").slice(0,-1).join("."));for(let t=0;t<n.length;t++){const c=n[t],a=Be(b,c);if(!a){const o=w?[...w.link,c]:[c],s={title:c,link:o,weight:F.weight[o.join("/")]||0};b.push(s),t<n.length-1&&(s.children=[],b=s.children,w=s),t===n.length-1&&(s.path=f(e));continue}a&&t<n.length-1&&(a.children||(a.children=[]),b=a.children,w=a)}return b=M,w=null,n}function Te(e,n){let t=[{path:"/",redirect:f(`../docs/${F.defaultPage}`)}];for(const a in e){const o=Fe(f(a,!1));t.push({path:f(a),component:()=>new Promise((s,r)=>{e[a]().then(i=>{s(i.default);const d=sessionStorage.getItem("md-heading-map"),y=d?JSON.parse(d):{};y[f(a)]=i.headings,sessionStorage.setItem("md-heading-map",JSON.stringify(y))})}),meta:{menuPath:o.length>0?o.join(","):o[0]}}),n&&Array.isArray(n)&&n.length>0&&(t=[...t,...n])}const c=function(a){a.forEach(o=>{o.children&&c(o.children)}),a.sort((o,s)=>s.weight-o.weight)};return c(M),{Router:K({history:U(),routes:t,scrollBehavior(a,o,s){return{el:`#${a.query.p}`,top:70}}}),routes:t,menu:M}}var Ve=[{name:"Mermaid",content:`<h1 id="Mermaid">Mermaid</h1><p>Mermaid\u662F\u4E00\u79CD\u7F16\u5199\u7518\u7279\u56FE\u3001\u6D41\u7A0B\u56FE\u3001\u987A\u5E8F\u56FE\u7B49\u5404\u79CD\u56FE\u5F62\u7684\u8BED\u6CD5\u548C\u89E3\u6790\u5E93\uFF0C\u901A\u8FC7\u8FD9\u79CD\u8BED\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5728markdown\u4E2D\u7F16\u5199\u5404\u79CD\u56FE\u5F62\uFF0C\u63D2\u4EF6\u4F1A\u5BF9mermaid\u505A\u89E3\u6790\u8F93\u51FA\u3002</p>
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
<h2 id="\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684">\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684</h2><p>RayxDoc \u7684\u6838\u5FC3\u5C31\u662F\u5904\u7406md\u6587\u4EF6\uFF0C\u6240\u4EE5\u5B83\u4F9D\u8D56\u4E86\u4E00\u4E2A\u53EB <a href="https://github.com/WangXueZhi/vite-plugin-md2vue">vite-plugin-md2vue</a> \u7684\u63D2\u4EF6\u3002</p>
<p>\u662F\u7684\uFF0C\u8FD9\u662F\u4E2Avite\u63D2\u4EF6\uFF0C\u8BE5\u9879\u76EE\u662F\u57FA\u4E8Evite\u642D\u5EFA\u7684\uFF0C\u8BE5\u63D2\u4EF6\u7684\u4F5C\u7528\u5C31\u662F\u7C7B\u4F3C<code>webpack</code>\u4E2D\u7684<code>loader</code>\uFF0C\u5BFC\u5165\u4E00\u4E2A<code>md</code>\u6A21\u5757\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F5C\u4E3A<code>vue\u7EC4\u4EF6</code>\u4F7F\u7528\u3002</p>
<p>\u60F3\u4E86\u89E3\u8BE5\u63D2\u4EF6\u7684\u5B9E\u73B0\u53EF\u4EE5\u76F4\u63A5\u53BB\u770B\u6E90\u7801\u3002</p>
<h2 id="\u641C\u7D22">\u641C\u7D22</h2><p>RayxDoc \u4E5F\u5185\u7F6E\u4E86\u5168\u7AD9\u7684\u6807\u9898\u641C\u7D22\u529F\u80FD\uFF0C \u53EF\u70B9\u51FB\u53F3\u9875\u9762\u4E0A\u89D2\u641C\u7D22\u63A7\u4EF6\u6253\u5F00\uFF0C\u4E5F\u53EF\u901A\u8FC7\u5FEB\u6377\u952E<code>Ctrl+K</code>\u5524\u8D77\u641C\u7D22\u7A97\u53E3</p>
<p>\u641C\u7D22\u7A97\u53E3\u7EC4\u4EF6\u5728\uFF0C<code>src/components/searchModal</code>\uFF0C\u53EF\u968F\u610F\u6309\u9700\u4FEE\u6539</p>
<p>\u641C\u7D22\u6570\u636E\u662F\u901A\u8FC7\u5185\u7F6E\u63D2\u4EF6 <code>plugins/vite-plugin-docs-config.js</code> \u5BF9\u6574\u4E2Adocs\u76EE\u5F55\u7684\u6587\u6863\u89E3\u6790\u521B\u5EFA\u7684\uFF0C\u53EF\u968F\u610F\u6309\u9700\u4FEE\u6539</p>
<h2 id="SEO">SEO</h2><p>\u5982\u679C\u4F60\u9700\u8981seo\uFF0C\u4E0D\u9002\u5408\u7528\u8FD9\u4E2A\uFF0C\u56E0\u4E3A\u8FD9\u4E0D\u662F\u4E00\u4E2A\u9759\u6001\u7F51\u7AD9\uFF0C\u53EF\u8003\u8651\u4F7F\u7528<a href="https://vuepress.vuejs.org/zh/">vuepress</a></p>
`,url:"./docs/\u6307\u5357/\u4ECB\u7ECD.md",keyWords:["\u4ECB\u7ECD","\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684","\u641C\u7D22","SEO"]},{name:"\u56FE\u7247\u8D44\u6E90",content:`<h1 id="\u56FE\u7247\u8D44\u6E90">\u56FE\u7247\u8D44\u6E90</h1><p>\u5C06\u56FE\u7247\u8D44\u6E90\u653E\u5728public\u76EE\u5F55\u4E0B\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u53BB\u5F15\u7528<code>./runoob-logo.png</code>\uFF0C\u5982\u4E0B\u56FE\uFF1A</p>
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
<p>\u73B0\u5728\u53EF\u4EE5\u5728\u6839\u76EE\u5F55\u589E\u52A0\u914D\u7F6E\u6587\u4EF6<code>docs.config.js</code>\uFF0C\u914D\u7F6E\u9875\u9762\u6743\u91CD\u53EF\u63A7\u5236\u6307\u5B9A\u83DC\u5355\u5728\u540C\u7EA7\u83DC\u5355\u4E2D\u7684\u987A\u5E8F\uFF0C\u6743\u91CD\u8D8A\u9AD8\uFF0C\u987A\u5E8F\u8D8A\u9760\u524D\uFF0C\u4E0D\u8BBE\u7F6E\u9ED8\u8BA4\u4E3A0</p>
<pre><code class="language-js">module.exports = {
    // \u9875\u9762\u6743\u91CD
    weight: {
        &#39;\u6307\u5357/\u5FEB\u901F\u4E0A\u624B&#39;: 99999
    }
}
</code></pre>
`,url:"./docs/\u6307\u5357/\u83DC\u5355\u987A\u5E8F\u63A7\u5236.md",keyWords:["\u83DC\u5355\u987A\u5E8F\u63A7\u5236"]}];const We={"../docs/\u6307\u5357/Mermaid.md":()=>S(()=>import("./Mermaid.e282c25c.js"),["assets/Mermaid.e282c25c.js","assets/vendor.c168e704.js"]),"../docs/\u6307\u5357/\u4ECB\u7ECD.md":()=>S(()=>import("./\u4ECB\u7ECD.e74ea15d.js"),[]),"../docs/\u6307\u5357/\u56FE\u7247\u8D44\u6E90.md":()=>S(()=>import("./\u56FE\u7247\u8D44\u6E90.e3af7b25.js"),[]),"../docs/\u6307\u5357/\u5FEB\u901F\u4E0A\u624B.md":()=>S(()=>import("./\u5FEB\u901F\u4E0A\u624B.936ae3f9.js"),[]),"../docs/\u6307\u5357/\u83DC\u5355\u987A\u5E8F\u63A7\u5236.md":()=>S(()=>import("./\u83DC\u5355\u987A\u5E8F\u63A7\u5236.6bca44cf.js"),[])},{Router:A,routes:Ke,menu:qe}=Te(We);A.beforeEach((e,n,t)=>{J.start(),E.commit("setActiveDocPath",e.meta.menuPath),E.commit("setActiveRoutPath",e.path),t()});A.afterEach(()=>{J.done()});const E=G({state(){return{menu:qe,activeDocPath:"",docsData:Ve,showSearch:!1,activeRoutPath:""}},mutations:{setActiveDocPath(e,n){e.activeDocPath=n},setShowSearchState(e,n){e.showSearch=n},setActiveRoutPath(e,n){e.activeRoutPath=n}}}),C=X(Oe);C.use(Z);C.use(A);C.use(E);C.mount("#app");export{S as _};
