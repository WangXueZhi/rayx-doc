import{d as f,u as S,a as P,r as B,b as u,c as h,e as i,f as m,w as v,p as L,g as N,o as l,F as y,h as C,t as E,i as k,n as I,j as T,k as z,l as K,m as D,q as U,s as X,v as Z,N as O,x as G,y as Q,R as Y}from"./vendor.50385166.js";const ee=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}};ee();const ne="modulepreload",W={},te="./",_=function(n,t){return!t||t.length===0?n():Promise.all(t.map(a=>{if(a=`${te}${a}`,a in W)return;W[a]=!0;const o=a.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${s}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":ne,o||(r.as="script",r.crossOrigin=""),r.href=a,document.head.appendChild(r),o)return new Promise((c,d)=>{r.addEventListener("load",c),r.addEventListener("error",d)})})).then(()=>n())};function x(e,n=!0){const t=e.split("/").map(a=>n?encodeURIComponent(a):a);return t[0].includes(".")&&t.splice(0,1,""),t.join("/")}var w=(e,n)=>{for(const[t,a]of n)e[t]=a;return e};const oe=f({name:"layout-search-modal",mounted(){},setup(){const e=S(),n=P(),t=B({searchRes:[]});return{goPage:function(s,r){n.push(x(s)+(r||"")),e.commit("setShowSearchState",!1)},searchInput:function(s){t.searchRes=[],s&&e.state.docsData.forEach(r=>{r.name.includes(s)&&t.searchRes.push({data:r,isPageName:!0,pageName:r.name,matchHtml:`<div>${r.name.replace(s,`<span style="color: var(--main-color)">${s}</span>`)}</div>`,searchValue:s}),r.keyWords.forEach(c=>{c.indexOf(s)>=0&&t.searchRes.push({data:r,isPageName:!1,pageName:r.name,matchHtml:`<div>${c.replace(s,`<span style="color: var(--main-color)">${s}</span>`)}</div>`,searchValue:s,matchContent:c})})})},state:t}}}),F=e=>(L("data-v-4d69aae7"),e=e(),N(),e),se={class:"search-modal"},re={class:"search-input"},ae={class:"search-scroll"},ce=["onClick"],ie=["innerHTML"],de=["onClick"],le=F(()=>i("div",{class:"search-scroll-item-left"},"#",-1)),pe={class:"search-scroll-item-content"},ue=["innerHTML"],he={class:"search-scroll-item-content-heading"},me=F(()=>i("div",{class:"tips"},"\u6309 esc \u9000\u51FA",-1));function _e(e,n,t,a,o,s){const r=u("r-icon"),c=u("r-input"),d=u("r-scroll-bar");return l(),h("div",se,[i("div",re,[m(c,{size:"big",onInput:e.searchInput,autofocus:""},{prefix:v(()=>[m(r,{name:"iconicon-test7"})]),_:1},8,["onInput"])]),i("div",ae,[m(d,{class:"search-scroll-wrapper"},{default:v(()=>[i("div",null,[(l(!0),h(y,null,C(e.state.searchRes,(p,g)=>(l(),h("div",{key:g},[p.isPageName?(l(),h("div",{key:0,class:"search-scroll-item",onClick:b=>e.goPage(p.data.url.slice(1))},[m(r,{name:"iconform",size:20,class:"search-scroll-item-left"}),i("div",{innerHTML:p.matchHtml,class:"search-scroll-item-content search-scroll-item-mainText"},null,8,ie)],8,ce)):(l(),h("div",{key:1,class:"search-scroll-item",onClick:b=>e.goPage(`${p.data.url.slice(1)}`,`?p=${p.matchContent}`)},[le,i("div",pe,[i("div",{innerHTML:p.matchHtml,class:"search-scroll-item-mainText"},null,8,ue),i("div",he,E(p.data.name),1)])],8,de))]))),128))])]),_:1})]),me])}var ge=w(oe,[["render",_e],["__scopeId","data-v-4d69aae7"]]);const fe=f({name:"layout-sideBar",props:{menu:{type:Array,default:()=>[]},level:{type:Number,default:0}},setup:()=>{const e=S(),n=P(),t=function(){e.commit("setShowMenuState",!1)};return{activeRoutPath:k(()=>e.state.activeRoutPath),itemClick:a=>{a.children&&a.children.length>0||a.path&&(n.push(a.path),t())}}}}),ve={class:"layout-menu-item-name layout-menu-item-hasChildren"},ye=["onClick"];function ke(e,n,t,a,o,s){const r=u("layout-sideBar");return l(!0),h(y,null,C(e.menu,c=>(l(),h("div",{class:I([`layout-menu-item-${e.level}`]),key:c.path},[c.children&&c.children.length>0?(l(),h(y,{key:0},[i("div",ve,E(c.title),1),m(r,{menu:c.children,level:e.level+1},null,8,["menu","level"])],64)):(l(),h("div",{key:1,class:I(["layout-menu-item-name layout-menu-item-noChildren",{"layout-menu-item-active":c.path===e.activeRoutPath}]),onClick:d=>e.itemClick(c)},E(c.title),11,ye))],2))),128)}var V=w(fe,[["render",ke],["__scopeId","data-v-17158d96"]]);const xe=f({name:"layout-content",setup(){const e=T(),n=P(),t=B({headingNav:[],path:e.path,moreHeading:!1}),a=function(){};return z(()=>e.path,async s=>{t.path=s;const r=sessionStorage.getItem("md-heading-map");if(r){const d=JSON.parse(r)[e.path];t.headingNav=d}}),{state:t,goHeading:function(s){n.push(t.path+"?p="+s.text)},switchHeading:a}}}),we={class:"layout-content"},be={class:"layout-content-wrapper"},Se={class:"layout-content-md"},$e={class:"layout-heading-menu-wrapper"},je=["onClick"];function qe(e,n,t,a,o,s){const r=u("router-view"),c=u("r-scroll-bar");return l(),h("div",we,[i("div",be,[i("div",Se,[m(r)]),e.state.headingNav.length>0?(l(),K(c,{key:0,class:I(["layout-heading-menu",{"layout-heading-menu-moreHeading":e.state.moreHeading}])},{default:v(()=>[i("div",$e,[(l(!0),h(y,null,C(e.state.headingNav,(d,p)=>(l(),h("div",{key:p,class:"layout-heading-menu-item",onClick:g=>e.goHeading(d)},E(d.text),9,je))),128))])]),_:1},8,["class"])):D("",!0)])])}var Ee=w(xe,[["render",qe],["__scopeId","data-v-24cc1044"]]);const Me=f({name:"layout-head",setup:()=>{const e=S(),n=k(()=>e.state.showMenu),t=function(){e.commit("setShowSearchState",!0)},a=function(){e.commit("setShowMenuState",!n.value)};return document.addEventListener("keydown",o=>{o.ctrlKey&&o.key=="k"&&(e.commit("setShowSearchState",!0),o.preventDefault()),o.key=="Escape"&&(e.commit("setShowSearchState",!1),o.preventDefault())}),{showSearch:t,toggleShowMenu:a}}}),$=e=>(L("data-v-61fc4e9f"),e=e(),N(),e),Ae={class:"layout-head"},Pe=$(()=>i("div",{class:"project-name"},[U("RayxDoc"),i("span",{class:"hidden md:inline-block"}," - \u65B9\u4FBF\u56E2\u961F\u5FEB\u901F\u642D\u5EFA\u7684\u8F7B\u91CF\u6587\u6863\u7CFB\u7EDF")],-1)),Ce={class:"head-right"},Ie=$(()=>i("span",{class:"head-right-search-text"},"Search",-1)),Re=$(()=>i("span",null,null,-1)),He=$(()=>i("span",null,null,-1)),Be=$(()=>i("span",null,null,-1)),Le=[Re,He,Be];function Ne(e,n,t,a,o,s){const r=u("r-icon");return l(),h("div",Ae,[Pe,i("div",Ce,[i("div",{class:"head-right-search",onClick:n[0]||(n[0]=(...c)=>e.showSearch&&e.showSearch(...c))},[m(r,{name:"iconicon-test7",class:"demo-icon"}),Ie]),i("div",{class:"head-right-sidebar",onClick:n[1]||(n[1]=(...c)=>e.toggleShowMenu&&e.toggleShowMenu(...c))},Le)])])}var De=w(Me,[["render",Ne],["__scopeId","data-v-61fc4e9f"]]);const Oe=f({name:"Layout",components:{SideBar:V,Content:Ee,Head:De},setup(){const e=S();return{menu:k(()=>e.state.menu)}}}),We={class:"layout-menu-wrapper"};function Fe(e,n,t,a,o,s){const r=u("Head"),c=u("SideBar"),d=u("r-scroll-bar"),p=u("Content");return l(),h(y,null,[m(r),m(d,{class:"layout-menu"},{default:v(()=>[i("div",We,[m(c,{menu:e.menu},null,8,["menu"])])]),_:1}),m(p)],64)}var Ve=w(Oe,[["render",Fe],["__scopeId","data-v-915cf426"]]);const Je=f({name:"App",components:{Layout:Ve,searchModal:ge,SideBar:V},mounted(){},setup(){const e=S(),n=function(){e.commit("setShowSearchState",!1)},t=function(){e.commit("setShowMenuState",!1)};return{showSearch:k(()=>e.state.showSearch),showMenu:k(()=>e.state.showMenu),menu:k(()=>e.state.menu),clickSearchModalMask:n,closeMenu:t}}}),Te={key:0,class:"block lg:hidden fixed z-50 right-0 left-0 top-0 bottom-0 w-full h-full"};function ze(e,n,t,a,o,s){const r=u("Layout"),c=u("searchModal"),d=u("r-modal"),p=u("SideBar"),g=u("r-scroll-bar");return l(),h(y,null,[m(r),m(d,{class:"search-overlayer",show:e.showSearch,"onUpdate:show":n[0]||(n[0]=b=>e.showSearch=b),onClickMask:e.clickSearchModalMask,bodyOverflow:!1},{default:v(()=>[m(c)]),_:1},8,["show","onClickMask"]),e.showMenu?(l(),h("div",Te,[i("div",{class:"relative left-0 top-0 right-0 bottom-0 w-full h-full",onClick:n[1]||(n[1]=(...b)=>e.closeMenu&&e.closeMenu(...b))}),m(g,{class:"fixed right-0 top-[3.8rem] bottom-0 bg-white shadow-sm"},{default:v(()=>[m(p,{menu:e.menu},null,8,["menu"])]),_:1})])):D("",!0)],64)}var Ke=w(Je,[["render",ze]]),J={weight:{"\u6307\u5357/\u4ECB\u7ECD":99999,"\u6307\u5357/\u5FEB\u901F\u4E0A\u624B":99998,\u6307\u5357:99999},defaultPage:"\u6307\u5357/\u5FEB\u901F\u4E0A\u624B.md"};const M=[];let j=M,q=null;function Ue(e,n){if(e.length>0)for(let t=0;t<e.length;t++){const a=e[t];if(a.title===n)return a}return null}function Xe(e){const n=e.replace("/docs/","").split("/");n.splice(n.length-1,1,n[n.length-1].split(".").slice(0,-1).join("."));for(let t=0;t<n.length;t++){const a=n[t],o=Ue(j,a);if(!o){const s=q?[...q.link,a]:[a],r={title:a,link:s,weight:J.weight[s.join("/")]||0};j.push(r),t<n.length-1&&(r.children=[],j=r.children,q=r),t===n.length-1&&(r.path=x(e));continue}o&&t<n.length-1&&(o.children||(o.children=[]),j=o.children,q=o)}return j=M,q=null,n}function Ze(e,n){let t=[{path:"/",redirect:x(`../docs/${J.defaultPage}`)}];for(const o in e){const s=Xe(x(o,!1));t.push({path:x(o),component:()=>new Promise((r,c)=>{e[o]().then(d=>{r(d.default);const p=sessionStorage.getItem("md-heading-map"),g=p?JSON.parse(p):{};g[x(o)]=d.headings,sessionStorage.setItem("md-heading-map",JSON.stringify(g))})}),meta:{menuPath:s.length>0?s.join(","):s[0]}}),n&&Array.isArray(n)&&n.length>0&&(t=[...t,...n])}const a=function(o){o.forEach(s=>{s.children&&a(s.children)}),o.sort((s,r)=>r.weight-s.weight)};return a(M),{Router:X({history:Z(),routes:t,scrollBehavior(o,s,r){return{el:`#${o.query.p}`,top:70}}}),routes:t,menu:M}}var Ge=[{name:"electron\u9879\u76EE\u57FA\u672C\u67B6\u6784\u56FE",content:`<p><img src="./electron.jpg" alt="\u9879\u76EE\u57FA\u672C\u67B6\u6784\u56FE"></p>
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
`,url:"./docs/\u6307\u5357/\u83DC\u5355\u987A\u5E8F\u63A7\u5236.md",keyWords:["\u83DC\u5355\u987A\u5E8F\u63A7\u5236"]}];const Qe={"../docs/Electron/electron\u9879\u76EE\u57FA\u672C\u67B6\u6784\u56FE.md":()=>_(()=>import("./electron\u9879\u76EE\u57FA\u672C\u67B6\u6784\u56FE.297b4b22.js"),[]),"../docs/Linux/\u5B9A\u65F6\u66F4\u65B0svn.md":()=>_(()=>import("./\u5B9A\u65F6\u66F4\u65B0svn.7506e624.js"),[]),"../docs/Node/mock\u670D\u52A1.md":()=>_(()=>import("./mock\u670D\u52A1.baea2e73.js"),[]),"../docs/Node/pnpm.md":()=>_(()=>import("./pnpm.cfedbce7.js"),["assets/pnpm.cfedbce7.js","assets/vendor.50385166.js"]),"../docs/\u6253\u5305\u5DE5\u5177/vite.md":()=>_(()=>import("./vite.5480523f.js"),["assets/vite.5480523f.js","assets/vendor.50385166.js"]),"../docs/\u6307\u5357/Mermaid.md":()=>_(()=>import("./Mermaid.f8e6f799.js"),["assets/Mermaid.f8e6f799.js","assets/vendor.50385166.js"]),"../docs/\u6307\u5357/\u4ECB\u7ECD.md":()=>_(()=>import("./\u4ECB\u7ECD.d12e23ad.js"),[]),"../docs/\u6307\u5357/\u56FE\u7247\u8D44\u6E90.md":()=>_(()=>import("./\u56FE\u7247\u8D44\u6E90.3bd04221.js"),[]),"../docs/\u6307\u5357/\u5FEB\u901F\u4E0A\u624B.md":()=>_(()=>import("./\u5FEB\u901F\u4E0A\u624B.4a893095.js"),[]),"../docs/\u6307\u5357/\u83DC\u5355\u987A\u5E8F\u63A7\u5236.md":()=>_(()=>import("./\u83DC\u5355\u987A\u5E8F\u63A7\u5236.a1c4fa88.js"),[]),"../docs/\u6253\u5305\u5DE5\u5177/webpack/require.context.md":()=>_(()=>import("./require.context.c42ff3c0.js"),["assets/require.context.c42ff3c0.js","assets/vendor.50385166.js"])},{Router:R,routes:nn,menu:Ye}=Ze(Qe);R.beforeEach((e,n,t)=>{O.start(),H.commit("setActiveDocPath",e.meta.menuPath),H.commit("setActiveRoutPath",e.path),t()});R.afterEach(()=>{O.done()});const H=G({state(){return{menu:Ye,activeDocPath:"",docsData:Ge,showSearch:!1,showMenu:!1,activeRoutPath:""}},mutations:{setActiveDocPath(e,n){e.activeDocPath=n},setShowSearchState(e,n){e.showSearch=n},setActiveRoutPath(e,n){e.activeRoutPath=n},setShowMenuState(e,n){e.showMenu=n}}}),A=Q(Ke);A.use(Y);A.use(R);A.use(H);A.mount("#app");export{_};
