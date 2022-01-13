import{d as n,z as e}from"./vendor.50385166.js";const s=n({name:"Markdown"}),o=()=>e("div",{class:["md2vue-wrapper"],innerHTML:`<h1 id="\u5B9A\u65F6\u66F4\u65B0svn">\u5B9A\u65F6\u66F4\u65B0svn</h1><h2 id="\u5B89\u88C5crontab">\u5B89\u88C5crontab</h2>
        <div class="md-code-hijs">
        <pre><code class="hljs">yum <span class="hljs-keyword">install</span> crontabs</code></pre>

    </div><h2 id="\u521B\u5EFA\u4EFB\u52A1shell\u811A\u672C">\u521B\u5EFA\u4EFB\u52A1shell\u811A\u672C</h2>
        <div class="md-code-hijs">
        <pre><code class="hljs"><span class="hljs-keyword">cd</span> /home/crontab_sh
<span class="hljs-keyword">vim</span> svn_update.<span class="hljs-keyword">sh</span></code></pre>

    </div><p>\u811A\u672C\u5185\u4E3Asvn\u66F4\u65B0\u4EE3\u7801\uFF0C <code>/home/svn</code> \u4E3A\u8981\u66F4\u65B0\u7684svn\u76EE\u5F55\uFF0C<code>/home/update-product.log</code> \u4E3A\u6267\u884C\u7ED3\u679C\u8F93\u51FA\u65E5\u5FD7</p>

        <div class="md-code-hijs">
        <pre><code class="hljs"><span class="hljs-meta">#! /bin/sh</span>
<span class="hljs-built_in">echo</span> \`svn update /home/svn --username xxxxx --password xxx --no-auth-cache &gt; /home/update-product.log\`</code></pre>

    </div><h2 id="\u589E\u52A0crontab\u4EFB\u52A1">\u589E\u52A0crontab\u4EFB\u52A1</h2>
        <div class="md-code-hijs">
        <pre><code class="hljs"><span class="hljs-attribute">crontab -e</span></code></pre>

    </div><p>\u6DFB\u52A0\u4EFB\u52A1\uFF0C\u7136\u540E\u4FDD\u5B58\uFF0C\u4EE5root\u7528\u6237\u6267\u884C\u524D\u9762\u521B\u5EFA\u7684shell\u811A\u672C</p>

        <div class="md-code-hijs">
        <pre><code class="hljs">*<span class="hljs-regexp">/1 * * * * root /</span>root<span class="hljs-regexp">/home/</span>crontab_sh/svn_update.sh
<span class="hljs-regexp">//</span> \u4E00\u5206\u949F\u6267\u884C\u4E00\u6B21</code></pre>

    </div><p>\u91CD\u542Fcrontab\u670D\u52A1</p>

        <div class="md-code-hijs">
        <pre><code class="hljs"><span class="hljs-attribute">service crond restart</span></code></pre>

    </div>`});s.render=o;s.mounted=()=>{};const c=[{text:"\u5B9A\u65F6\u66F4\u65B0svn",level:1,raw:"\u5B9A\u65F6\u66F4\u65B0svn"},{text:"\u5B89\u88C5crontab",level:2,raw:"\u5B89\u88C5crontab"},{text:"\u521B\u5EFA\u4EFB\u52A1shell\u811A\u672C",level:2,raw:"\u521B\u5EFA\u4EFB\u52A1shell\u811A\u672C"},{text:"\u589E\u52A0crontab\u4EFB\u52A1",level:2,raw:"\u589E\u52A0crontab\u4EFB\u52A1"}],d=[{code:"yum install crontabs",infostring:""},{code:`cd /home/crontab_sh
vim svn_update.sh`,infostring:""},{code:"#! /bin/sh\necho `svn update /home/svn --username xxxxx --password xxx --no-auth-cache > /home/update-product.log`",infostring:""},{code:"crontab -e",infostring:""},{code:`*/1 * * * * root /root/home/crontab_sh/svn_update.sh
// \u4E00\u5206\u949F\u6267\u884C\u4E00\u6B21`,infostring:""},{code:"service crond restart",infostring:""}];export{d as codeBlocks,s as default,c as headings};
