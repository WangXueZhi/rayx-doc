import{d as f,u as j,a as P,r as B,c as u,b as i,e as h,w as v,p as O,f as D,g as m,o as l,F as y,h as C,t as A,i as k,n as I,j as J,k as z,l as K,m as L,q as U,s as X,v as Z,N,x as G,y as Q,R as Y}from"./vendor.d045623f.js";const ee=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};ee();const ne="modulepreload",W={},te="./",_=function(n,o){return!o||o.length===0?n():Promise.all(o.map(a=>{if(a=`${te}${a}`,a in W)return;W[a]=!0;const t=a.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const s=document.createElement("link");if(s.rel=t?"stylesheet":ne,t||(s.as="script",s.crossOrigin=""),s.href=a,document.head.appendChild(s),t)return new Promise((c,p)=>{s.addEventListener("load",c),s.addEventListener("error",p)})})).then(()=>n())};function b(e,n=!0){const o=e.split("/").map(a=>n?encodeURIComponent(a):a);return o[0].includes(".")&&o.splice(0,1,""),o.join("/")}var w=(e,n)=>{const o=e.__vccOpts||e;for(const[a,t]of n)o[a]=t;return o};const oe=f({name:"layout-search-modal",mounted(){},setup(){const e=j(),n=P(),o=B({searchRes:[]});return{goPage:function(r,s){n.push(b(r)+(s||"")),e.commit("setShowSearchState",!1)},searchInput:function(r){o.searchRes=[],r&&e.state.docsData.forEach(s=>{s.name.includes(r)&&o.searchRes.push({data:s,isPageName:!0,pageName:s.name,matchHtml:`<div>${s.name.replace(r,`<span style="color: var(--main-color)">${r}</span>`)}</div>`,searchValue:r}),s.keyWords.forEach(c=>{c.indexOf(r)>=0&&o.searchRes.push({data:s,isPageName:!1,pageName:s.name,matchHtml:`<div>${c.replace(r,`<span style="color: var(--main-color)">${r}</span>`)}</div>`,searchValue:r,matchContent:c})})})},state:o}}}),F=e=>(O("data-v-4d69aae7"),e=e(),D(),e),re={class:"search-modal"},se={class:"search-input"},ae={class:"search-scroll"},ce=["onClick"],ie=["innerHTML"],pe=["onClick"],le=F(()=>i("div",{class:"search-scroll-item-left"},"#",-1)),de={class:"search-scroll-item-content"},ue=["innerHTML"],he={class:"search-scroll-item-content-heading"},me=F(()=>i("div",{class:"tips"},"\u6309 esc \u9000\u51FA",-1));function _e(e,n,o,a,t,r){const s=m("r-icon"),c=m("r-input"),p=m("r-scroll-bar");return l(),u("div",re,[i("div",se,[h(c,{size:"big",onInput:e.searchInput,autofocus:""},{prefix:v(()=>[h(s,{name:"iconicon-test7"})]),_:1},8,["onInput"])]),i("div",ae,[h(p,{class:"search-scroll-wrapper"},{default:v(()=>[i("div",null,[(l(!0),u(y,null,C(e.state.searchRes,(d,g)=>(l(),u("div",{key:g},[d.isPageName?(l(),u("div",{key:0,class:"search-scroll-item",onClick:x=>e.goPage(d.data.url.slice(1))},[h(s,{name:"iconform",size:20,class:"search-scroll-item-left"}),i("div",{innerHTML:d.matchHtml,class:"search-scroll-item-content search-scroll-item-mainText"},null,8,ie)],8,ce)):(l(),u("div",{key:1,class:"search-scroll-item",onClick:x=>e.goPage(`${d.data.url.slice(1)}`,`?p=${d.matchContent}`)},[le,i("div",de,[i("div",{innerHTML:d.matchHtml,class:"search-scroll-item-mainText"},null,8,ue),i("div",he,A(d.data.name),1)])],8,pe))]))),128))])]),_:1})]),me])}var ge=w(oe,[["render",_e],["__scopeId","data-v-4d69aae7"]]);const fe=f({name:"layout-sideBar",props:{menu:{type:Array,default:()=>[]},level:{type:Number,default:0}},setup:()=>{const e=j(),n=P(),o=function(){e.commit("setShowMenuState",!1)};return{activeRoutPath:k(()=>e.state.activeRoutPath),itemClick:a=>{a.children&&a.children.length>0||a.path&&(n.push(a.path),o())}}}}),ve={class:"layout-menu-item-name layout-menu-item-hasChildren"},ye=["onClick"];function ke(e,n,o,a,t,r){const s=m("layout-sideBar");return l(!0),u(y,null,C(e.menu,c=>(l(),u("div",{class:I([`layout-menu-item-${e.level}`]),key:c.path},[c.children&&c.children.length>0?(l(),u(y,{key:0},[i("div",ve,A(c.title),1),h(s,{menu:c.children,level:e.level+1},null,8,["menu","level"])],64)):(l(),u("div",{key:1,class:I(["layout-menu-item-name layout-menu-item-noChildren",{"layout-menu-item-active":c.path===e.activeRoutPath}]),onClick:p=>e.itemClick(c)},A(c.title),11,ye))],2))),128)}var V=w(fe,[["render",ke],["__scopeId","data-v-17158d96"]]);const be=f({name:"layout-content",setup(){const e=J(),n=P(),o=B({headingNav:[],path:e.path,moreHeading:!1}),a=function(){};return z(()=>e.path,async r=>{o.path=r;const s=sessionStorage.getItem("md-heading-map");if(s){const p=JSON.parse(s)[e.path];o.headingNav=p}}),{state:o,goHeading:function(r){n.push(o.path+"?p="+r.text)},switchHeading:a}}}),we={class:"layout-content"},xe={class:"layout-content-wrapper"},je={class:"layout-content-md"},Se={class:"layout-heading-menu-wrapper"},$e=["onClick"];function qe(e,n,o,a,t,r){const s=m("router-view"),c=m("r-scroll-bar");return l(),u("div",we,[i("div",xe,[i("div",je,[h(s)]),e.state.headingNav.length>0?(l(),K(c,{key:0,class:I(["layout-heading-menu",{"layout-heading-menu-moreHeading":e.state.moreHeading}])},{default:v(()=>[i("div",Se,[(l(!0),u(y,null,C(e.state.headingNav,(p,d)=>(l(),u("div",{key:d,class:"layout-heading-menu-item",onClick:g=>e.goHeading(p)},A(p.text),9,$e))),128))])]),_:1},8,["class"])):L("",!0)])])}var Ae=w(be,[["render",qe],["__scopeId","data-v-24cc1044"]]);const Ee=f({name:"layout-head",setup:()=>{const e=j(),n=k(()=>e.state.showMenu),o=function(){e.commit("setShowSearchState",!0)},a=function(){e.commit("setShowMenuState",!n.value)};return document.addEventListener("keydown",t=>{t.ctrlKey&&t.key=="k"&&(e.commit("setShowSearchState",!0),t.preventDefault()),t.key=="Escape"&&(e.commit("setShowSearchState",!1),t.preventDefault())}),{showSearch:o,toggleShowMenu:a}}}),S=e=>(O("data-v-61fc4e9f"),e=e(),D(),e),Me={class:"layout-head"},Pe=S(()=>i("div",{class:"project-name"},[U("RayxDoc"),i("span",{class:"hidden md:inline-block"}," - \u65B9\u4FBF\u56E2\u961F\u5FEB\u901F\u642D\u5EFA\u7684\u8F7B\u91CF\u6587\u6863\u7CFB\u7EDF")],-1)),Ce={class:"head-right"},Ie=S(()=>i("span",{class:"head-right-search-text"},"Search",-1)),Re=S(()=>i("span",null,null,-1)),He=S(()=>i("span",null,null,-1)),Be=S(()=>i("span",null,null,-1)),Oe=[Re,He,Be];function De(e,n,o,a,t,r){const s=m("r-icon");return l(),u("div",Me,[Pe,i("div",Ce,[i("div",{class:"head-right-search",onClick:n[0]||(n[0]=(...c)=>e.showSearch&&e.showSearch(...c))},[h(s,{name:"iconicon-test7",class:"demo-icon"}),Ie]),i("div",{class:"head-right-sidebar",onClick:n[1]||(n[1]=(...c)=>e.toggleShowMenu&&e.toggleShowMenu(...c))},Oe)])])}var Le=w(Ee,[["render",De],["__scopeId","data-v-61fc4e9f"]]);const Ne=f({name:"Layout",components:{SideBar:V,Content:Ae,Head:Le},setup(){const e=j();return{menu:k(()=>e.state.menu)}}}),We={class:"layout-menu-wrapper"};function Fe(e,n,o,a,t,r){const s=m("Head"),c=m("SideBar"),p=m("r-scroll-bar"),d=m("Content");return l(),u(y,null,[h(s),h(p,{class:"layout-menu"},{default:v(()=>[i("div",We,[h(c,{menu:e.menu},null,8,["menu"])])]),_:1}),h(d)],64)}var Ve=w(Ne,[["render",Fe],["__scopeId","data-v-915cf426"]]);const Te=f({name:"App",components:{Layout:Ve,searchModal:ge,SideBar:V},mounted(){},setup(){const e=j(),n=function(){e.commit("setShowSearchState",!1)},o=function(){e.commit("setShowMenuState",!1)};return{showSearch:k(()=>e.state.showSearch),showMenu:k(()=>e.state.showMenu),menu:k(()=>e.state.menu),clickSearchModalMask:n,closeMenu:o}}}),Je={key:0,class:"block lg:hidden fixed z-50 right-0 left-0 top-0 bottom-0 w-full h-full"};function ze(e,n,o,a,t,r){const s=m("Layout"),c=m("searchModal"),p=m("r-modal"),d=m("SideBar"),g=m("r-scroll-bar");return l(),u(y,null,[h(s),h(p,{class:"search-overlayer",show:e.showSearch,"onUpdate:show":n[0]||(n[0]=x=>e.showSearch=x),onClickMask:e.clickSearchModalMask,bodyOverflow:!1},{default:v(()=>[h(c)]),_:1},8,["show","onClickMask"]),e.showMenu?(l(),u("div",Je,[i("div",{class:"relative left-0 top-0 right-0 bottom-0 w-full h-full",onClick:n[1]||(n[1]=(...x)=>e.closeMenu&&e.closeMenu(...x))}),h(g,{class:"fixed right-0 top-[3.8rem] bottom-0 bg-white shadow-sm"},{default:v(()=>[h(d,{menu:e.menu},null,8,["menu"])]),_:1})])):L("",!0)],64)}var Ke=w(Te,[["render",ze]]),T={weight:{"\u6307\u5357/\u4ECB\u7ECD":99999,"\u6307\u5357/\u5FEB\u901F\u4E0A\u624B":99998,\u6307\u5357:99999},defaultPage:"\u6307\u5357/\u5FEB\u901F\u4E0A\u624B.md"};const E=[];let $=E,q=null;function Ue(e,n){if(e.length>0)for(let o=0;o<e.length;o++){const a=e[o];if(a.title===n)return a}return null}function Xe(e){const n=e.replace("/docs/","").split("/");n.splice(n.length-1,1,n[n.length-1].split(".").slice(0,-1).join("."));for(let o=0;o<n.length;o++){const a=n[o],t=Ue($,a);if(!t){const r=q?[...q.link,a]:[a],s={title:a,link:r,weight:T.weight[r.join("/")]||0};$.push(s),o<n.length-1&&(s.children=[],$=s.children,q=s),o===n.length-1&&(s.path=b(e));continue}t&&o<n.length-1&&(t.children||(t.children=[]),$=t.children,q=t)}return $=E,q=null,n}function Ze(e,n){let o=[{path:"/",redirect:b(`../docs/${T.defaultPage}`)}];for(const t in e){const r=Xe(b(t,!1));o.push({path:b(t),component:()=>new Promise((s,c)=>{e[t]().then(p=>{s(p.default);const d=sessionStorage.getItem("md-heading-map"),g=d?JSON.parse(d):{};g[b(t)]=p.headings,sessionStorage.setItem("md-heading-map",JSON.stringify(g))})}),meta:{menuPath:r.length>0?r.join(","):r[0]}}),n&&Array.isArray(n)&&n.length>0&&(o=[...o,...n])}const a=function(t){t.forEach(r=>{r.children&&a(r.children)}),t.sort((r,s)=>s.weight-r.weight)};return a(E),{Router:X({history:Z(),routes:o,scrollBehavior(t,r,s){return console.log(t.query),{el:`#${t.query.p}`,top:70}}}),routes:o,menu:E}}var Ge=[{name:"electron\u9879\u76EE\u57FA\u672C\u67B6\u6784\u56FE",content:`<p><img src="./electron.jpg" alt="\u9879\u76EE\u57FA\u672C\u67B6\u6784\u56FE"></p>
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
`,url:"./docs/Node/mock\u670D\u52A1.md",keyWords:["mock\u670D\u52A1","\u6D41\u7A0B\u4EA4\u4E92\u56FE","rayx-mockserver\u5982\u4F55\u4F7F\u7528"]},{name:"pnpm",content:`<h1 id="pnpm \u66F4\u597D\u7684\u5305\u7BA1\u7406\u5668">pnpm \u66F4\u597D\u7684\u5305\u7BA1\u7406\u5668</h1><p><a href="https://pnpm.io/zh/">https://pnpm.io/zh/</a></p>
<p>\u5B98\u65B9\u63CF\u8FF0\uFF1A\u5FEB\u901F\u7684\uFF0C\u8282\u7701\u78C1\u76D8\u7A7A\u95F4\u7684\u5305\u7BA1\u7406\u5DE5\u5177</p>
<img src="https://p5.itc.cn/q_70/images03/20210303/ff264a5ec0c7455abfc252c1d5f9d854.png" width="70%">

<h2 id="npm/yarn\u7684\u95EE\u9898">npm/yarn\u7684\u95EE\u9898</h2><h4 id="\u5B89\u88C5\u6B65\u9AA4">\u5B89\u88C5\u6B65\u9AA4</h4><ol>
<li>\u89E3\u6790\u4F9D\u8D56\u5305\u7684\u7248\u672C\u53F7</li>
<li>\u4E0B\u8F7D\u5BF9\u5E94\u7248\u672C\u4F9D\u8D56\u7684 tar \u5305\u5230\u672C\u5730\u79BB\u7EBF\u955C\u50CF</li>
<li>\u5C06\u4F9D\u8D56\u4ECE\u79BB\u7EBF\u955C\u50CF\u89E3\u538B\u5230\u672C\u5730\u7F13\u5B58</li>
<li>\u5C06\u4F9D\u8D56\u4ECE\u7F13\u5B58\u62F7\u8D1D\u5230\u5F53\u524D\u76EE\u5F55\u7684node_modules\u76EE\u5F55\uFF0C\u8FD9\u91CC\u662F\u4E3B\u8981\u6539\u8FDB\u70B9, pnpm\u91C7\u7528\u8F6F\u786C\u94FE\u7684\u65B9\u5F0F\u51CF\u5C11io\u64CD\u4F5C\uFF0Cyarn PnP\u662F\u4EE3\u7406\u4E86require\uFF0C\u76F4\u63A5\u4ECE\u7F13\u5B58\u4E2D\u53D6\u6A21\u5757</li>
</ol>
<h4 id="\u751F\u6210\u7684\u4F9D\u8D56\u76EE\u5F55\u7ED3\u6784">\u751F\u6210\u7684\u4F9D\u8D56\u76EE\u5F55\u7ED3\u6784</h4><p>\u5728 npm1 \u3001 npm2 \u4E2D\u5448\u73B0\u51FA\u7684\u662F\u5982\u4E0B\u7684\u5D4C\u5957\u7ED3\u6784</p>
<pre><code>node_modules
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
         \u2514\u2500 package.json
</code></pre>
<p>\u8FD9\u79CD\u7ED3\u6784\u5E26\u6765\u7684\u95EE\u9898\uFF1A</p>
<ol>
<li>\u4F9D\u8D56\u5C42\u7EA7\u592A\u6DF1\uFF0C\u4F1A\u5BFC\u81F4\u6587\u4EF6\u8DEF\u5F84\u8FC7\u957F\u7684\u95EE\u9898\uFF0C\u5C24\u5176\u5728 window \u7CFB\u7EDF\u4E0B\u3002</li>
<li>\u5927\u91CF\u91CD\u590D\u7684\u5305\u88AB\u5B89\u88C5\uFF0C\u6587\u4EF6\u4F53\u79EF\u8D85\u7EA7\u5927\u3002\u6BD4\u5982\u8DDF A1 \u548C B1 \u4E24\u8005\u90FD\u4F9D\u8D56\u4E8E\u540C\u4E00\u4E2A\u7248\u672C\u7684 lodash \uFF0C\u90A3\u4E48 lodash \u4F1A\u5206\u522B\u5728\u4E24\u8005\u7684 node_modules \u4E2D\u88AB\u5B89\u88C5\uFF0C\u4E5F\u5C31\u662F\u91CD\u590D\u5B89\u88C5\u3002</li>
<li>\u6A21\u5757\u5B9E\u4F8B\u4E0D\u80FD\u5171\u4EAB\u3002\u6BD4\u5982 React \u6709\u4E00\u4E9B\u5185\u90E8\u53D8\u91CF\uFF0C\u5728\u4E24\u4E2A\u4E0D\u540C\u5305\u5F15\u5165\u7684 React \u4E0D\u662F\u540C\u4E00\u4E2A\u6A21\u5757\u5B9E\u4F8B\uFF0C\u56E0\u6B64\u65E0\u6CD5\u5171\u4EAB\u5185\u90E8\u53D8\u91CF\uFF0C\u5BFC\u81F4\u4E00\u4E9B\u4E0D\u53EF\u9884\u77E5\u7684 bug\u3002</li>
</ol>
<p>\u6240\u4EE5\u4ECEnpm3\u5F00\u59CB\uFF0C\u5305\u62EC yarn\u90FD\u5F00\u59CB\u91C7\u7528\u6241\u5E73\u5316\u7684\u4F9D\u8D56\u7ED3\u6784\u6765\u89E3\u51B3\u8FD9\u51E0\u4E2A\u95EE\u9898\u3002\u4F46\u662F\u4F9D\u7136\u5E26\u6765\u65B0\u7684\u95EE\u9898\uFF1A</p>
<ol>
<li><p>\u4F9D\u8D56\u7ED3\u6784\u7684 \u4E0D\u786E\u5B9A\u6027, \u53D6\u51B3\u4E8E\u5B89\u88C5\u7684\u5148\u540E\u987A\u5E8F\uFF0C\u8FD9\u4E5F\u662Flock\u6587\u4EF6\u8BDE\u751F\u7684\u539F\u56E0\u3002</p>
<img src="./npm\u4E0D\u786E\u5B9A\u7ED3\u6784.png" height="400px"></li>
<li><p>\u6241\u5E73\u5316\u7B97\u6CD5\u672C\u8EAB\u7684 \u590D\u6742\u6027\u5F88\u9AD8\uFF0C\u8017\u65F6\u8F83\u957F\u3002</p>
</li>
<li><p>\u4F9D\u8D56\u63D0\u5347\uFF0C\u5BFC\u81F4\u53EF\u4EE5\u975E\u6CD5\u8BBF\u95EE\u6CA1\u6709\u58F0\u660E\u8FC7\u4F9D\u8D56\u7684\u5305, \u6BD4\u5982\u9879\u76EE\u4F9D\u8D56\u4E86A\uFF0CA\u4F9D\u8D56\u4E86B\uFF0C\u800C\u9879\u76EE\u80FD\u76F4\u63A5\u4F7F\u7528\u4F9D\u8D56B\u3002</p>
</li>
</ol>
<h2 id="pnpm\u7684\u6539\u8FDB">pnpm\u7684\u6539\u8FDB</h2><img src="./pnpm\u5B89\u88C5\u7ED3\u6784.png" height="400px">

<h4 id="\u901F\u5EA6 \u548C \u78C1\u76D8\u7A7A\u95F4">\u901F\u5EA6 \u548C \u78C1\u76D8\u7A7A\u95F4</h4><p>\u8F6F\u786C\u94FE+\u4F9D\u8D56\u76EE\u5F55\u7ED3\u6784\u7684\u4F18\u5316\uFF0C\u5728\u5B89\u88C5\u6B65\u9AA4\u7684\u7B2C\u56DB\u6B65\u4E2D\uFF0C\u907F\u514D\u4E86\u5927\u91CF\u7684io\u64CD\u4F5C\uFF0C\u51CF\u5C11\u4E86\u91CD\u590D\u5B89\u88C5\u7684\u65F6\u95F4\u548C\u7A7A\u95F4\u3002</p>
<h4 id="\u5B89\u5168\u6027">\u5B89\u5168\u6027</h4><p>\u4E0D\u5B58\u5728\u975E\u6CD5\u8BBF\u95EE\u7684\u95EE\u9898\uFF0C\u56E0\u4E3Anode_modules\u4E0B\u53EA\u4F1A\u5B58\u5728\u9879\u76EE\u4F9D\u8D56\u7684\u8F6F\u94FE\u63A5</p>
<h4 id="monorepo">monorepo</h4><p>\u5BF9monorepo\u7684\u652F\u6301\u66F4\u53CB\u597D\uFF0C\u63D0\u4F9B\u5B50\u547D\u4EE4\u652F\u6301\u64CD\u4F5C\u6240\u6709package\u4F9D\u8D56</p>
<h2 id="\u6269\u5C55">\u6269\u5C55</h2><p><a href="https://loveky.github.io/2019/02/11/yarn-pnp/">yarn pnp</a></p>
`,url:"./docs/Node/pnpm.md",keyWords:["pnpm \u66F4\u597D\u7684\u5305\u7BA1\u7406\u5668","npm/yarn\u7684\u95EE\u9898","\u5B89\u88C5\u6B65\u9AA4","\u751F\u6210\u7684\u4F9D\u8D56\u76EE\u5F55\u7ED3\u6784","pnpm\u7684\u6539\u8FDB","\u901F\u5EA6 \u548C \u78C1\u76D8\u7A7A\u95F4","\u5B89\u5168\u6027","monorepo","\u6269\u5C55"]},{name:"vite",content:`<center style="margin-top: 40px"><img src="https://vitejs.dev/logo.svg" width="100px"></center>

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
`,url:"./docs/\u6307\u5357/\u83DC\u5355\u987A\u5E8F\u63A7\u5236.md",keyWords:["\u83DC\u5355\u987A\u5E8F\u63A7\u5236"]},{name:"\u52A8\u6001\u89C4\u5212",content:`<h1 id="\u52A8\u6001\u89C4\u5212">\u52A8\u6001\u89C4\u5212</h1><p>\u7531\u4E8E\u5148\u524D\u4E09\u6B21\u5173\u4E8E\u6570\u636E\u7ED3\u6784\uFF08\u94FE\u8868\u3001\u6808\u548C\u961F\u5217\u3001\u6811\uFF09\u7684\u5206\u4EAB\uFF0C\u5728\u8FD9\u4E9B\u5FC5\u5907\u57FA\u7840\u4E0A\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7531\u6B64\u8FDB\u5165\u8E0F\u8DB3\u7B97\u6CD5\u7684\u6DF1\u6C34\u533A\uFF0C\u6211\u4EEC\u5148\u6765\u770B\u4ECA\u5929\u7684\u4E3B\u4EBA\u516C - \u52A8\u6001\u89C4\u5212\uFF08Dynamic Programming\uFF09</p>
<p>\u52A8\u6001\u89C4\u5212\u662F\u4E00\u79CD\u601D\u60F3\uFF0C\u6240\u8C13\u601D\u60F3\uFF0C\u5C31\u662F\u597D\u7528\u5230\u7206\u7684\u5957\u8DEF\u3002</p>
<h2 id="\u4EC0\u4E48\u662F\u52A8\u6001\u89C4\u5212\u5462\uFF1F">\u4EC0\u4E48\u662F\u52A8\u6001\u89C4\u5212\u5462\uFF1F</h2><p>\u662F\u4E00\u79CD\u628A\u539F\u95EE\u9898\u5206\u89E3\u4E3A\u76F8\u5BF9\u7B80\u5355\u7684\u5B50\u95EE\u9898\u7684\u7B97\u6CD5\uFF0C\u6765\u6C42\u89E3\u590D\u6742\u7684\u7B97\u6CD5</p>
<h2 id="\u52A8\u6001\u89C4\u5212\u95EE\u9898\u7684\u7279\u5F81">\u52A8\u6001\u89C4\u5212\u95EE\u9898\u7684\u7279\u5F81</h2><ol>
<li><p>\u4E00\u822C\u7684\u8868\u73B0\u5F62\u5F0F\u662F\u6C42\u6700\u503C, \u6BD4\u5982\u6C42\u6700\u957F\u516C\u5171\u5B50\u5E8F\u5217\uFF0C\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u7B49\u7B49</p>
</li>
<li><p>\u65E2\u7136\u662F\u6C42\u6700\u503C\uFF0C\u6838\u5FC3\u95EE\u9898\u53C8\u662F\u4EC0\u4E48\uFF1F\u6C42\u89E3\u52A8\u6001\u89C4\u5212\u7684\u6838\u5FC3\u95EE\u9898\u662F\u7A77\u4E3E</p>
</li>
<li><p>\u4E09\u8981\u7D20\uFF1A</p>
</li>
</ol>
<p>a. \u5B58\u5728\xA0\u91CD\u53E0\u5B50\u95EE\u9898</p>
<p>\u5982\u679C\u66B4\u529B\u7A77\u4E3E\uFF0C\u6548\u7387\u4E00\u5B9A\u4F1A\u5F88\u4F4E\u4E0B\uFF0C\u6211\u4EEC\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u907F\u514D\u4E00\u4E9B\u4E0D\u5FC5\u8981\u7684\u8BA1\u7B97\uFF0C\u91C7\u53D6 \u5907\u5FD8\u5F55 \u4EE5\u53CA DP table \u6765\u4F18\u5316\u7A77\u4E3E\u8FC7\u7A0B\u3002</p>
<p>b. \u5177\u5907\xA0\u6700\u4F18\u5B50\u7ED3\u6784</p>
<p>c. \u5217\u51FA\xA0\u6B63\u786E\u7684 \u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B</p>
<ol start="4">
<li><p>do\u7684\u6839\u672C\u76EE\u7684\u662F\u4E3A\u4E86\u89E3\u51B3\u5197\u4F59\uFF0C\u7528\u7A7A\u95F4\u6362\u65F6\u95F4</p>
</li>
<li><p>\u52A8\u6001\u89C4\u5212\u6700\u96BE\u7684\u5730\u65B9\u5C31\u662F\xA0\u5199\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B</p>
</li>
</ol>
<h2 id="\u91CD\u53E0\u5B50\u95EE\u9898">\u91CD\u53E0\u5B50\u95EE\u9898</h2><p>\u6BD4\u5982\u8BF4\u54B1\u4EEC\u5E38\u89C1\u7684\u9012\u5F52\u7B97\u6CD5\uFF0C\u662F\u5178\u578B\u7684\u81EA\u9876\u5411\u4E0B\u5BF9\u95EE\u9898\u8FDB\u884C\u6C42\u89E3\uFF0C\u7136\u540E\u6BCF\u6B21\u4EA7\u751F\u7684\u5B50\u95EE\u9898\u5E76\u4E0D\u603B\u662F\u65B0\u7684\u95EE\u9898\uFF0C\u53EF\u80FD\u67D0\u4E9B\u5B50\u95EE\u9898\u4F1A\u88AB\u91CD\u590D\u8BA1\u7B97\u597D\u591A\u6B21</p>
<p>dp\u7B97\u6CD5\u5C31\u662F\u5229\u7528\u4E86\u8FD9\u79CD\u5B50\u95EE\u9898\u7684\u91CD\u53E0\u6027\u8D28\uFF0C\u5BF9\u6BCF\u4E2A\u5B50\u95EE\u9898\u5462\uFF0C\u53EA\u4F1A\u8FDB\u884C\u4E00\u6B21\u8BA1\u7B97\uFF0C\u7136\u540E\u5C06\u5176\u8BA1\u7B97\u7684\u7ED3\u679C\u4FDD\u5B58\u5728\u4E00\u4E2A\u8868\u683C\uFF08dp\u6570\u7EC4\uFF09\u4E2D\uFF08\u907F\u514D\u4E86\u591A\u4F59\u7684\u91CD\u590D\u5B50\u95EE\u9898\u6C42\u89E3\uFF09\uFF0C\u5F53\u518D\u6B21\u9047\u5230\u5B50\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u53BB\u8868\u683C\u4E2D\u76F4\u63A5\u62FF\u7ED3\u679C\uFF0C\u964D\u4F4E\u4E86\u65F6\u95F4\u590D\u6742\u5EA6\u3002\u8BF4\u767D\u4E86\uFF0C\u8FD8\u662F\u90A3\u53E5\u7528\u7A7A\u95F4\u6362\u65F6\u95F4\u3002</p>
<h2 id="\u6700\u4F18\u5B50\u7ED3\u6784">\u6700\u4F18\u5B50\u7ED3\u6784</h2><p>\u5982\u679C\u95EE\u9898\u7ED3\u679C\u7684\u6700\u4F18\u89E3\uFF0C\u6240\u5305\u542B\u7684\u5B50\u95EE\u9898\u7684\u89E3\u4E5F\u662F\u6700\u4F18\u7684\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u5B50\u95EE\u9898\u76F8\u4E92\u72EC\u7ACB\uFF0C\u90A3\u4E48\u5C31\u8BA4\u4E3A\u8FD9\u4E2A\u95EE\u9898\u5177\u5907\u6700\u4F18\u5B50\u7ED3\u6784\u3002</p>
<h2 id="\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B">\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B</h2><p>\u60F3\u8981\u5199\u51FA\u6B63\u786E\u7684\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B\uFF0C\u4E00\u5B9A\u8981\u53BB\u601D\u8003\u7684\u51E0\u70B9\uFF1A</p>
<ol>
<li><p>\u8FD9\u4E2A\u95EE\u9898\u7684\xA0base case\uFF08\u6700\u7B80\u5355\u7684\u60C5\u51B5\uFF09\u662F\u4EC0\u4E48\uFF1F</p>
</li>
<li><p>\u8FD9\u4E2A\u95EE\u9898\u6709\u4EC0\u4E48\xA0\u72B6\u6001</p>
</li>
<li><p>\u5BF9\u4E8E\u6BCF\u4E2A\u72B6\u6001\uFF0C\u53EF\u4EE5\u505A\u51FA\u4EC0\u4E48\xA0\u9009\u62E9\xA0\u4F7F\u5F97\xA0\u72B6\u6001\xA0\u53D1\u751F\u53D8\u5316</p>
</li>
<li><p>\u5982\u4F55\u53BB\xA0\u5B9A\u4E49dp\u6570\u7EC4\xA0\u7684\u542B\u4E49\u53BB\u8868\u73B0 \u72B6\u6001 \u548C \u9009\u62E9</p>
</li>
</ol>
<h2 id="\u52A8\u6001\u89C4\u5212\u7684\u89E3\u9898\u601D\u60F3">\u52A8\u6001\u89C4\u5212\u7684\u89E3\u9898\u601D\u60F3</h2><ol>
<li><p>\u660E\u786E base case</p>
</li>
<li><p>\u660E\u786E \u72B6\u6001 -&gt; \u53EF\u4EE5\u7406\u89E3\u4E3A\u73B0\u5728\u5DF2\u77E5\u7684\u53D8\u91CF</p>
</li>
<li><p>\u660E\u786E \u9009\u62E9 -&gt; \u524D\u4E00\u9636\u6BB5\u5982\u4F55\u8F6C\u6362\u4E3A\u540E\u4E00\u9636\u6BB5</p>
</li>
<li><p>\u5B9A\u4E49dp \u6570\u7EC4\u7684\u542B\u4E49</p>
</li>
</ol>
<h2 id="\u91CD\u53E0\u5B50\u95EE\u9898\u4E3E\u4F8B - \u6590\u6CE2\u90A3\u5951\u6570\u5217">\u91CD\u53E0\u5B50\u95EE\u9898\u4E3E\u4F8B - \u6590\u6CE2\u90A3\u5951\u6570\u5217</h2><p>1 1 2 3 5 8 13 21 34 \u2026\u2026</p>
<ol>
<li>\u66B4\u529B\u9012\u5F52</li>
</ol>
<img src="./\u6590\u6CE2\u90A3\u5951\u6570\u5217-\u66B4\u529B\u9012\u5F52.png" style="width: 100%; max-width=500px"/>

<pre><code class="language-javascript">function fib(n) {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1

  return fib(n - 1) + fib(n - 2)
}
</code></pre>
<p>\u9012\u5F52\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u600E\u4E48\u8BA1\u7B97\u5462\uFF1F\xA0\u5C31\u662F\u6BCF\u4E2A\u5B50\u95EE\u9898\u4E2A\u6570\u4E58\u4EE5\u89E3\u51B3\u4E00\u4E2A\u5B50\u95EE\u9898\u6240\u9700\u8981\u7684\u65F6\u95F4</p>
<p>\u9996\u5148\u8BA1\u7B97\u5B50\u95EE\u9898\u4E2A\u6570\uFF0C\u5373\u9012\u5F52\u6811\u4E2D\u8282\u70B9\u7684\u603B\u6570\uFF0C\u663E\u7136\u4E8C\u53C9\u6811\u8282\u70B9\u603B\u6570\uFF0C\u663E\u7136\u8282\u70B9\u603B\u6570\u4E3A\u6307\u6570\u7EA7\u522B\u7684\uFF0C\u6240\u4EE5\u6C42\u5B50\u95EE\u9898\u4E2A\u6570\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O\uFF082^n\uFF09.</p>
<p>\u7136\u540E\u8BA1\u7B97\u89E3\u51B3\u4E00\u4E2A\u5B50\u95EE\u9898\u65F6\u95F4\u4E3A\uFF1A f(n-1) + f(n-2)\u52A0\u6CD5\u64CD\u4F5C\uFF0C\u672C\u7B97\u6CD5\u6CA1\u6709\u5FAA\u73AF\uFF0C\u6545\u4E3A O(1)</p>
<p>\u5F97\u51FA\u7ED3\u8BBA\uFF1A\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A\uFF1A O(2^n),\xA0\u6307\u6570\u7EA7\u522B</p>
<p>\u7B97\u6CD5\u4F4E\u6548\u7684\u539F\u56E0\uFF1A\u5B58\u5728\u5927\u91CF\u7684\u91CD\u590D\u8BA1\u7B97\u3002</p>
<p>\u8FD9\u5C31\u662F\u52A8\u6001\u89C4\u5212\u95EE\u9898\u7684\u7B2C\u4E00\u4E2A\u6027\u8D28\uFF1A\u91CD\u53E0\u5B50\u95EE\u9898</p>
<ol start="2">
<li>\u5907\u5FD8\u5F55</li>
</ol>
<img src="./\u6590\u6CE2\u90A3\u5951\u6570\u5217-\u5907\u5FD8\u5F55.png" style="width: 100%; max-width=500px"/>

<pre><code class="language-javascript">function fib(n) {
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
}
</code></pre>
<p>\u9012\u5F52\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u600E\u4E48\u8BA1\u7B97\u5462\uFF1F\xA0\u5C31\u662F\u6BCF\u4E2A\u5B50\u95EE\u9898\u4E2A\u6570\u4E58\u4EE5\u89E3\u51B3\u4E00\u4E2A\u5B50\u95EE\u9898\u6240\u9700\u8981\u7684\u65F6\u95F4</p>
<p>\u5B50\u95EE\u9898\u4E2A\u6570\uFF1A\u5C31\u662F\u56FE\u4E2D\u7684\u5B50\u8282\u70B9\u4E2A\u6570\uFF0Cf(1), f(2) \u2026\u2026 f(20), \u4E0E n \u6210\u6B63\u6BD4\uFF0C\u4E3A O(N)</p>
<p>\u89E3\u51B3\u4E00\u4E2A\u5B50\u95EE\u9898\u6240\u9700\u65F6\u95F4\uFF1A\u540C\u4E0A\u4E5F\u4E3A O(1)</p>
<p>\u5F97\u51FA\u7ED3\u8BBA\u4E3A\uFF1AO(N)\uFF0C\u6BD4\u8D77\u66B4\u529B\u9012\u5F52\uFF0C\u7B97\u964D\u7EF4\u6253\u51FB</p>
<p>\u5176\u5B9E\uFF0C\u8FD9\u79CD\u89E3\u6CD5\u548C\u8FED\u4EE3\u7684\u52A8\u6001\u89C4\u5212\u5DF2\u7ECF\u5DEE\u4E0D\u591A\u4E86\uFF0C\u53EA\u4E0D\u8FC7\u8FD9\u79CD\u89E3\u6CD5\u662F\u201C\u81EA\u9876\u5411\u4E0B\u201D\u7684\uFF0C\u52A8\u6001\u89C4\u5212\u662F\u201C\u81EA\u5E95\u5411\u4E0A\u201D</p>
<ol start="3">
<li>dp\u6570\u7EC4</li>
</ol>
<img src="./\u6590\u6CE2\u90A3\u5951\u6570\u5217-\u52A8\u6001\u89C4\u5212.png" style="width: 100%; max-width=500px"/>

<pre><code class="language-javascript">function fib(n) {
  if (n === 0) return 0
  let dp = new Array(n+1).fill(0)
  dp[1] = 1
  dp[2] = 1
  for (let i = 3; i &lt; dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
</code></pre>
<p>\u65F6\u95F4\u590D\u6742\u5EA6\u540C\u5907\u5FD8\u5F55\u89E3\u6CD5</p>
<ol start="4">
<li>\u72B6\u6001\u538B\u7F29</li>
</ol>
<pre><code class="language-javascript">function fib(n) {
  if (n === 0) return 0
  let prev = 1
  let cur = 1

  for (let i = 3; i &lt;= n; i ++) {
    let sum = prev + cur
    prev = cur
    cur = sum
  }

  return cur
}
</code></pre>
<p>\u7A7A\u95F4\u590D\u6742\u5EA6\u964D\u4E3AO(1)</p>
<h2 id="\u6700\u4F18\u5B50\u7ED3\u6784 - \u51D1\u96F6\u94B1">\u6700\u4F18\u5B50\u7ED3\u6784 - \u51D1\u96F6\u94B1</h2><p>\u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 coins \uFF0C\u8868\u793A\u4E0D\u540C\u9762\u989D\u7684\u786C\u5E01\uFF1B\u4EE5\u53CA\u4E00\u4E2A\u6574\u6570 amount \uFF0C\u8868\u793A\u603B\u91D1\u989D\u3002</p>
<p>\u8BA1\u7B97\u5E76\u8FD4\u56DE\u53EF\u4EE5\u51D1\u6210\u603B\u91D1\u989D\u6240\u9700\u7684 \u6700\u5C11\u7684\u786C\u5E01\u4E2A\u6570 \u3002\u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u4E00\u79CD\u786C\u5E01\u7EC4\u5408\u80FD\u7EC4\u6210\u603B\u91D1\u989D\uFF0C\u8FD4\u56DE\xA0-1 \u3002</p>
<p>\u4F60\u53EF\u4EE5\u8BA4\u4E3A\u6BCF\u79CD\u786C\u5E01\u7684\u6570\u91CF\u662F\u65E0\u9650\u7684\u3002</p>
<p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09
\u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/coin-change">https://leetcode-cn.com/problems/coin-change</a></p>
<p>\u793A\u4F8B1\uFF1A</p>
<pre><code>\u8F93\u5165\uFF1Acoins = [1, 2, 5], amount = 11
\u8F93\u51FA\uFF1A3 
\u89E3\u91CA\uFF1A11 = 5 + 5 + 1
</code></pre>
<p>\u793A\u4F8B2\uFF1A</p>
<pre><code>\u8F93\u5165\uFF1Acoins = [2], amount = 3
\u8F93\u51FA\uFF1A-1
</code></pre>
<img src="./\u52A8\u6001\u89C4\u5212-\u51D1\u96F6\u94B1.png" style="width: 100%; max-width=500px"/>

<p>\u4EE3\u7801\u6F14\u793A:</p>
<pre><code class="language-javascript">/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1)

    dp[0] = 0 

    for (let i = 0; i &lt; dp.length; i ++) {
        for (coin of coins) {
            if (i - coin &lt; 0) {continue}
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }

    return (dp[amount] === amount + 1) ? -1 : dp[amount]
};
</code></pre>
`,url:"./docs/\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5/\u52A8\u6001\u89C4\u5212.md",keyWords:["\u52A8\u6001\u89C4\u5212","\u4EC0\u4E48\u662F\u52A8\u6001\u89C4\u5212\u5462\uFF1F","\u52A8\u6001\u89C4\u5212\u95EE\u9898\u7684\u7279\u5F81","\u91CD\u53E0\u5B50\u95EE\u9898","\u6700\u4F18\u5B50\u7ED3\u6784","\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B","\u52A8\u6001\u89C4\u5212\u7684\u89E3\u9898\u601D\u60F3","\u91CD\u53E0\u5B50\u95EE\u9898\u4E3E\u4F8B - \u6590\u6CE2\u90A3\u5951\u6570\u5217","\u6700\u4F18\u5B50\u7ED3\u6784 - \u51D1\u96F6\u94B1"]}];const Qe={"../docs/Electron/electron\u9879\u76EE\u57FA\u672C\u67B6\u6784\u56FE.md":()=>_(()=>import("./electron\u9879\u76EE\u57FA\u672C\u67B6\u6784\u56FE.ce22a116.js"),["assets/electron项目基本架构图.ce22a116.js","assets/vendor.d045623f.js"]),"../docs/Linux/\u5B9A\u65F6\u66F4\u65B0svn.md":()=>_(()=>import("./\u5B9A\u65F6\u66F4\u65B0svn.bfd98f1f.js"),["assets/定时更新svn.bfd98f1f.js","assets/vendor.d045623f.js"]),"../docs/Node/mock\u670D\u52A1.md":()=>_(()=>import("./mock\u670D\u52A1.cd39b2e1.js"),["assets/mock服务.cd39b2e1.js","assets/vendor.d045623f.js"]),"../docs/Node/pnpm.md":()=>_(()=>import("./pnpm.a67af5f2.js"),["assets/pnpm.a67af5f2.js","assets/vendor.d045623f.js"]),"../docs/\u6253\u5305\u5DE5\u5177/vite.md":()=>_(()=>import("./vite.5c8a9acb.js"),["assets/vite.5c8a9acb.js","assets/vendor.d045623f.js"]),"../docs/\u6307\u5357/Mermaid.md":()=>_(()=>import("./Mermaid.38b1ec13.js"),["assets/Mermaid.38b1ec13.js","assets/vendor.d045623f.js"]),"../docs/\u6307\u5357/\u4ECB\u7ECD.md":()=>_(()=>import("./\u4ECB\u7ECD.03031ee9.js"),["assets/介绍.03031ee9.js","assets/vendor.d045623f.js"]),"../docs/\u6307\u5357/\u56FE\u7247\u8D44\u6E90.md":()=>_(()=>import("./\u56FE\u7247\u8D44\u6E90.08982990.js"),["assets/图片资源.08982990.js","assets/vendor.d045623f.js"]),"../docs/\u6307\u5357/\u5FEB\u901F\u4E0A\u624B.md":()=>_(()=>import("./\u5FEB\u901F\u4E0A\u624B.7522cbe2.js"),["assets/快速上手.7522cbe2.js","assets/vendor.d045623f.js"]),"../docs/\u6307\u5357/\u83DC\u5355\u987A\u5E8F\u63A7\u5236.md":()=>_(()=>import("./\u83DC\u5355\u987A\u5E8F\u63A7\u5236.b15b6600.js"),["assets/菜单顺序控制.b15b6600.js","assets/vendor.d045623f.js"]),"../docs/\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5/\u52A8\u6001\u89C4\u5212.md":()=>_(()=>import("./\u52A8\u6001\u89C4\u5212.48e0a6d9.js"),["assets/动态规划.48e0a6d9.js","assets/vendor.d045623f.js"]),"../docs/\u6253\u5305\u5DE5\u5177/webpack/require.context.md":()=>_(()=>import("./require.context.8d151309.js"),["assets/require.context.8d151309.js","assets/vendor.d045623f.js"])},{Router:R,routes:nn,menu:Ye}=Ze(Qe);R.beforeEach((e,n,o)=>{N.start(),H.commit("setActiveDocPath",e.meta.menuPath),H.commit("setActiveRoutPath",e.path),o()});R.afterEach(()=>{N.done()});const H=G({state(){return{menu:Ye,activeDocPath:"",docsData:Ge,showSearch:!1,showMenu:!1,activeRoutPath:""}},mutations:{setActiveDocPath(e,n){e.activeDocPath=n},setShowSearchState(e,n){e.showSearch=n},setActiveRoutPath(e,n){e.activeRoutPath=n},setShowMenuState(e,n){e.showMenu=n}}}),M=Q(Ke);M.use(Y);M.use(R);M.use(H);M.mount("#app");export{_};
