const marked = require("marked");
const hljs = require("highlight.js");
const { escape } = require('marked/src/helpers.js');

let keyWordsInOneMd = []

const markedInit = function(options){
  marked.defaults.renderer = null

  const defaultRenderer = {
    heading(text, level, raw, slugger){
      keyWordsInOneMd.push(text)
      return `<h${level} id="${text}">${raw}</h${level}>`
    },
    code(code, infostring, escaped){
      const lang = (infostring || '').match(/\S*/)[0];
      
      if (infostring === 'mermaid') {
        return `<pre><code class="language-mermaid"><div class='mermaidWrapper' style="position: relative">
          ${options && options.mermaidLoadingHtml ? options.mermaidLoadingHtml : '<div class="mermaid-loading" style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); color: rgba(0, 0, 0, 0.54)">loading...</div>'}
            <div class='mermaid' style="opacity: 0">${code}</div>
        </div></code></pre>`;
      }

      const hightLightedCode = this.options.highlight(code)

      const preCodeText = lang ? `<pre><code class="${this.options.langPrefix}${escape(lang, true)} hljs">${hightLightedCode}</code></pre>\n` 
      : `<pre><code class="hljs">${hightLightedCode}</code></pre>\n`;

      return `
        <div class="md-code-hijs">
          ${preCodeText}
      </div>`;
    }
  };
  
  marked.use({
    renderer:
      options && options.markedRender
        ? { ...defaultRenderer, ...options.markedRender }
        : defaultRenderer,
  });
  
  const defaultMarkedOptions = {
    highlight: function (code, lang) {
      return hljs.highlightAuto(code).value;
    },
  };

  marked.setOptions(
    options && options.markedOptions
      ? { ...defaultMarkedOptions, ...options.markedOptions }
      : defaultMarkedOptions
  );
}

export default function vitePluginMd2Vue(options) {
  const classArray = ["md2vue-wrapper"];

  if (options && options.renderWrapperClass) {
    if (typeof options.renderWrapperClass === "string") {
      classArray.push(options.renderWrapperClass);
    }
    if (Array.isArray(options.renderWrapperClass)) {
      classArray.push(...options.renderWrapperClass);
    }
  }
  
  return {
    name: "vitePluginMd2Vue",
    transform(src, id) {
      if (id.endsWith(".md")) {
        markedInit(options)
        keyWordsInOneMd = []
        let mermaidRenderCode = ''
        if(src.includes('```mermaid')){
          mermaidRenderCode = `
          const renderMermaid = function(mermaidModule, mermaidDoms){
            mermaidModule.initialize({
              theme: 'forest'
            })
            mermaidDoms.forEach((dom,index)=>{
              mermaidModule.render('mermaid'+index, dom.innerText, (t)=>{
                dom.innerHTML = t
                dom.style.opacity = 1
                dom.parentNode.removeChild(dom.parentNode.querySelector('.mermaid-loading'))
              })
            })
          }
          const mermaidDoms = document.querySelectorAll('.mermaid')
          if(mermaidDoms && mermaidDoms.length>0){
            if(window._mermaidLoaded && window._mermaidModule){
              renderMermaid(window._mermaidModule, mermaidDoms)
            } else {
              import('mermaid').then(res=>{
                window._mermaidLoaded = true
                window._mermaidModule = res
                renderMermaid(res, mermaidDoms)
              })
            }
          }
          `
        }

        const markdownHtml = marked(src)
        return {
          code: `import {h, defineComponent} from "vue";
          const _sfc_md = defineComponent({
            name: "Markdown",
          });
          
          const _sfc_render =() => {
            return h("div", {
              class: ${JSON.stringify(classArray)},
              innerHTML: ${JSON.stringify(markdownHtml)},
            })
          };
          
          _sfc_md.render = _sfc_render
          _sfc_md.mounted = ()=>{
            ${mermaidRenderCode}
          }
          export default _sfc_md;
          export const headings = ${JSON.stringify(keyWordsInOneMd)}`,
          map: null,
        };
      }
    },
  };
}