import{d as e,y as n}from"./vendor.6d6e2563.js";import"Vue";const o=e({name:"Markdown"}),a=()=>n("div",{class:["md2vue-wrapper"],innerHTML:`<h1 id="\u4ECB\u7ECD">\u4ECB\u7ECD</h1><p>RayxDoc \u662F\u4E00\u4E2A\u9002\u5408\u56E2\u961F\u5185\u90E8\u6216\u4E2A\u4EBA\u4F7F\u7528\u7684\u8F7B\u91CF\u6587\u6863\u7CFB\u7EDF, \u56E0\u4E3A\u4F60\u57FA\u672C\u4E0D\u7528\u5E72\u5565\uFF0C\u4F60\u4E3B\u8981\u5E72\u7684\u4E8B\u5C31\u662F\u5199\u5199 Markdown \u5C31\u884C\u3002</p>
<p>\u4F60\u53EF\u4EE5\u4F7F\u7528 Markdown \u6765\u4E66\u5199\u5185\u5BB9\uFF08\u5982\u6587\u6863\u3001\u535A\u5BA2\u7B49\uFF09\uFF0C\u7136\u540E RayxDoc \u4F1A\u751F\u6210\u4E00\u4E2A\u7F51\u7AD9\u6765\u5C55\u793A\u5B83\u4EEC\u3002</p>
<h2 id="\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684">\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684</h2><p>RayxDoc \u7684\u6838\u5FC3\u5C31\u662F\u5904\u7406md\u6587\u4EF6\uFF0C\u6240\u4EE5\u5B83\u4F9D\u8D56\u4E86\u4E00\u4E2A\u53EB <a href="https://github.com/WangXueZhi/vite-plugin-md2vue">vite-plugin-md2vue</a> \u7684\u63D2\u4EF6\u3002</p>
<p>\u662F\u7684\uFF0C\u8FD9\u662F\u4E2Avite\u63D2\u4EF6\uFF0C\u8BE5\u9879\u76EE\u662F\u57FA\u4E8Evite\u642D\u5EFA\u7684\uFF0C\u8BE5\u63D2\u4EF6\u7684\u4F5C\u7528\u5C31\u662F\u7C7B\u4F3C<code>webpack</code>\u4E2D\u7684<code>loader</code>\uFF0C\u5BFC\u5165\u4E00\u4E2A<code>md</code>\u6A21\u5757\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F5C\u4E3A<code>vue\u7EC4\u4EF6</code>\u4F7F\u7528\u3002</p>
<p>\u60F3\u4E86\u89E3\u8BE5\u63D2\u4EF6\u7684\u5B9E\u73B0\u53EF\u4EE5\u76F4\u63A5\u53BB\u770B\u6E90\u7801\u3002</p>
<h2 id="\u641C\u7D22">\u641C\u7D22</h2><p>RayxDoc \u4E5F\u5185\u7F6E\u4E86\u5168\u7AD9\u7684\u6807\u9898\u641C\u7D22\u529F\u80FD\uFF0C \u53EF\u70B9\u51FB\u53F3\u9875\u9762\u4E0A\u89D2\u641C\u7D22\u63A7\u4EF6\u6253\u5F00\uFF0C\u4E5F\u53EF\u901A\u8FC7\u5FEB\u6377\u952E<code>Ctrl+K</code>\u5524\u8D77\u641C\u7D22\u7A97\u53E3</p>
<p>\u641C\u7D22\u7A97\u53E3\u7EC4\u4EF6\u5728\uFF0C<code>src/components/searchModal</code>\uFF0C\u53EF\u968F\u610F\u6309\u9700\u4FEE\u6539</p>
<p>\u641C\u7D22\u6570\u636E\u662F\u901A\u8FC7\u5185\u7F6E\u63D2\u4EF6 <code>plugins/vite-plugin-docs-config.js</code> \u5BF9\u6574\u4E2Adocs\u76EE\u5F55\u7684\u6587\u6863\u89E3\u6790\u521B\u5EFA\u7684\uFF0C\u53EF\u968F\u610F\u6309\u9700\u4FEE\u6539</p>
<h2 id="SEO">SEO</h2><p>\u5982\u679C\u4F60\u9700\u8981seo\uFF0C\u4E0D\u9002\u5408\u7528\u8FD9\u4E2A\uFF0C\u56E0\u4E3A\u8FD9\u4E0D\u662F\u4E00\u4E2A\u9759\u6001\u7F51\u7AD9\uFF0C\u53EF\u8003\u8651\u4F7F\u7528<a href="https://vuepress.vuejs.org/zh/">vuepress</a></p>
`});o.render=a;o.mounted=()=>{};const i=[{text:"\u4ECB\u7ECD",level:1,raw:"\u4ECB\u7ECD"},{text:"\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684",level:2,raw:"\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684"},{text:"\u641C\u7D22",level:2,raw:"\u641C\u7D22"},{text:"SEO",level:2,raw:"SEO"}],h=[{code:`sequenceDiagram
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
    Bob-->>John: Jolly good!`,infostring:"mermaid"}];export{h as codeBlocks,o as default,i as headings};
