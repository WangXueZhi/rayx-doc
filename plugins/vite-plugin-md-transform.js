const marked = require('marked')

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
    }
  };

  marked.use({
    renderer
  });

  return {
    name: 'vitePluginMdTransform',
    transform(src, id) {
      if (id.endsWith(".md")) {
        console.log(marked.lexer(src))
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