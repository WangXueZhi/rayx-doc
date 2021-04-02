const marked = require('marked')

export default function (options) {
  return {
    name: 'vitePluginMdTransform',
    transform(src, id) {
      if(id.endsWith(".md")){
        return {
          code: `import {h, defineComponent} from "vue";
          const _sfc_md = defineComponent({
            name: "Markdown",
          });
          
          const _sfc_render =() => {
            return h("div", {
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