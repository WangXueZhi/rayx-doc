import{d as o,y as e}from"./vendor.c168e704.js";const n=o({name:"Markdown"}),s=()=>e("div",{class:["md2vue-wrapper"],innerHTML:`<h1 id="\u83DC\u5355\u987A\u5E8F\u63A7\u5236">\u83DC\u5355\u987A\u5E8F\u63A7\u5236</h1><p>\u56E0\u4E3A\u83DC\u5355\u7684\u9ED8\u8BA4\u987A\u5E8F\u662F\u6839\u636E\u76EE\u5F55\u8BFB\u53D6\u987A\u5E8F\u51B3\u5B9A\u7684\uFF0C\u6240\u4EE5\u5F88\u6709\u53EF\u80FD\u4F1A\u51FA\u73B0\u548C\u9884\u671F\u4E2D\u4E0D\u4E00\u6837\u7684\u987A\u5E8F\u3002</p>
<p>\u73B0\u5728\u53EF\u4EE5\u5728\u6839\u76EE\u5F55\u589E\u52A0\u914D\u7F6E\u6587\u4EF6<code>docs.config.js</code>\uFF0C\u914D\u7F6E\u9875\u9762\u6743\u91CD\u53EF\u63A7\u5236\u6307\u5B9A\u83DC\u5355\u5728\u540C\u7EA7\u83DC\u5355\u4E2D\u7684\u987A\u5E8F\uFF0C\u6743\u91CD\u8D8A\u9AD8\uFF0C\u987A\u5E8F\u8D8A\u9760\u524D\uFF0C\u4E0D\u8BBE\u7F6E\u9ED8\u8BA4\u4E3A 0</p>

        <div class="md-code-hijs">
        <pre><code class="language-js hljs"><span class="hljs-keyword">module</span>.<span class="hljs-keyword">exports</span> = {
    <span class="hljs-comment">// \u9875\u9762\u6743\u91CD</span>
    weight: {
        <span class="hljs-string">&#x27;\u6307\u5357/\u5FEB\u901F\u4E0A\u624B&#x27;</span>: <span class="hljs-number">99999</span>
    }
}</code></pre>

    </div>`});n.render=s;n.mounted=()=>{};const i=[{text:"\u83DC\u5355\u987A\u5E8F\u63A7\u5236",level:1,raw:"\u83DC\u5355\u987A\u5E8F\u63A7\u5236"}],t=[{code:`sequenceDiagram
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
}`,infostring:"js"}];export{t as codeBlocks,n as default,i as headings};
