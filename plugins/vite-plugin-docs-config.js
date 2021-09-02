const fs = require('fs')

export default function (options) {
  const virtualFileId = (options && options.importName) || '@docs-config';
  const CONFIG_PATH = (options && options.path) || './docs.config.js';
  return {
    name: "vitePluginDocsConfig",
    resolveId(source) {
      // 是否处理当前请求
      if (source === virtualFileId) {
        return source; // 表示接管
      }
    },
    load(id) {
      if (id === virtualFileId) {
        let config = {}
        if (fs.existsSync(CONFIG_PATH)) {
          config = require(CONFIG_PATH)
        }
        return `export default ${JSON.stringify(config)}`;
      }
    },
  };
}