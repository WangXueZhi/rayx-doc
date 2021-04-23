const marked = require('marked')
const hljs = require("highlight.js");

export default function (options) {
  const classArray = ["md2vue-wrapper"];
  if (options && options.renderWrapperClass) {
    if (typeof options.renderWrapperClass === "string") {
      classArray.push(options.renderWrapperClass);
    }
    if (Array.isArray(options.renderWrapperClass)) {
      classArray.push(...options.renderWrapperClass);
    }
  }

  const renderer = {
    heading(text, level) {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

      return `
              <h${level} name="${text}">
                ${text}
              </h${level}>`;
    },
    // code(text, level) {
    //   // console.log('text >>> ', text)
    //   // console.log('level >>> ', level)
    //   return `<div class="md-code">${hljs.highlightAuto(text).value}</div>`;
    // }
  };

  marked.use({
    renderer
  });
  
  marked.setOptions({
    highlight: function (code) {
      console.log(code)
      return `<div class="md-code-hijs">${hljs.highlightAuto(code).value}</div>`;
    }
  });

  return {
    name: 'vitePluginMdTransform',
    transform(src, id) {
      if (id.endsWith(".md")) {
        // console.log(marked.lexer(src))
        return {
          code: `import {h, defineComponent} from "vue";
          const _sfc_md = defineComponent({
            name: "Markdown",
          });
          
          const _sfc_render =() => {
            return h("div", {
              class: ${JSON.stringify(classArray)},
              innerHTML: ${JSON.stringify(marked(src))},
            })
          };
          
          _sfc_md.render = _sfc_render
          export default _sfc_md`,
          map: null
        }
      }
    }
  }
}