import{_ as l}from"./index.a1e82eee.js";import{d as h,y as d}from"./vendor.6d6e2563.js";import"Vue";const i=h({name:"Markdown"}),c=()=>d("div",{class:["md2vue-wrapper"],innerHTML:`<h1 id="Mermaid">Mermaid</h1><p>Mermaid\u662F\u4E00\u79CD\u7F16\u5199\u7518\u7279\u56FE\u3001\u6D41\u7A0B\u56FE\u3001\u987A\u5E8F\u56FE\u7B49\u5404\u79CD\u56FE\u5F62\u7684\u8BED\u6CD5\u548C\u89E3\u6790\u5E93\uFF0C\u901A\u8FC7\u8FD9\u79CD\u8BED\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5728markdown\u4E2D\u7F16\u5199\u5404\u79CD\u56FE\u5F62\uFF0C\u63D2\u4EF6\u4F1A\u5BF9mermaid\u505A\u89E3\u6790\u8F93\u51FA\u3002</p>
<p>\u4E0B\u9762\u5C31\u7B80\u5355\u4F8B\u5B50\uFF0C\u5177\u4F53\u66F4\u591A\u5199\u6CD5\u5C31\u53C2\u8003\u6587\u6863\u5427\uFF0C<a href="https://mermaid-js.github.io/mermaid/#/flowchart">mermaid\u5B98\u65B9\u6587\u6863</a>\u3002</p>
<h2 id="\u4E3E\u4E2A\u6817\u5B50">\u4E3E\u4E2A\u6817\u5B50</h2><p>\u4EE3\u7801\u957F\u8FD9\u6837</p>

        <div class="md-code-hijs">
        <pre><code class="hljs">sequenceDiagram
    participant Alice
    participant Bob
    A<span class="hljs-function"><span class="hljs-title">lice</span>-&gt;</span>&gt;John: Hello John, how are you?
    <span class="hljs-keyword">loop</span> Healthcheck
        J<span class="hljs-function"><span class="hljs-title">ohn</span>-&gt;</span>&gt;John: Fight against hypochondria
    end
    Note right of John: Rational thoughts prevail!
    J<span class="hljs-function"><span class="hljs-title">ohn</span>--&gt;</span>&gt;Alice: Great!
    J<span class="hljs-function"><span class="hljs-title">ohn</span>-&gt;</span>&gt;Bob: How about you?
    B<span class="hljs-function"><span class="hljs-title">ob</span>--&gt;</span>&gt;John: Jolly good!</code></pre>

    </div><p>\u6548\u679C\u662F\u8FD9\u6837</p>
<pre><code class="language-mermaid"><div class='mermaidWrapper' style="position: relative">
          <div class="mermaid-loading" style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); color: rgba(0, 0, 0, 0.54)">loading...</div>
            <div class='mermaid' style="opacity: 0">sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!</div>
        </div></code></pre>`});i.render=c;i.mounted=()=>{const a=function(n,t){n.initialize({theme:"forest"}),t.forEach((o,s)=>{n.render("mermaid"+s,o.innerText,r=>{o.innerHTML=r,o.style.opacity=1,o.parentNode.removeChild(o.parentNode.querySelector(".mermaid-loading"))})})},e=document.querySelectorAll(".mermaid");e&&e.length>0&&(window._mermaidLoaded&&window._mermaidModule?a(window._mermaidModule,e):l(()=>import("./mermaid.core.63489b47.js").then(function(n){return n.m}),["assets/mermaid.core.63489b47.js","assets/vendor.6d6e2563.js"]).then(n=>{window._mermaidLoaded=!0,window._mermaidModule=n,a(n,e)}))};const u=[{text:"Mermaid",level:1,raw:"Mermaid"},{text:"\u4E3E\u4E2A\u6817\u5B50",level:2,raw:"\u4E3E\u4E2A\u6817\u5B50"}],J=[{code:`sequenceDiagram
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
    Bob-->>John: Jolly good!`,infostring:"mermaid"}];export{J as codeBlocks,i as default,u as headings};
