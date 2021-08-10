const fs = require('fs')
const path = require('path')
const marked = require('marked')

marked.use({
  renderer:{
    heading(text, level, raw, slugger){
      console.log(text, level, raw, slugger)
    }
  }
});

const parseMd = function(content, path){
  return marked(content, 'utf-8')
}

const getDocsDatas = function (path, cb) {
  const files = fs.readdirSync(path)
  const mdDatas = []
  for (let i = 0; i < files.length; i++) {
    const stats = fs.statSync(`${path}/${files[i]}`)
    let cbObj
    if (stats.isDirectory()) {
      cbObj = {
        name: files[i]
      }
      if (cb) {
        cbObj = {
          ...cbObj,
          ...cb(true, {
            name: files[i]
          })
        }
      }
      // 继续递归
      mdDatas.push({
        ...cbObj,
        childrens: getDocsDatas(`${path}/${files[i]}`, cb)
      })
      continue;
    }
    const fileNameArr = files[i].split('.')
    const fileName = fileNameArr.slice(0, -1).join('.')
    cbObj = {
      name: fileName
    }
    if (cb) {
      cbObj = {
        ...cbObj,
        ...cb(false, {
          name: fileName,
          ext: fileNameArr.slice(-1)
        })
      }
    }
    mdDatas.push({
      ...cbObj,
      content: parseMd(fs.readFileSync(`${path}/${files[i]}`, `${path}/${files[i]}`)),
      url: `${path}/${files[i]}`
    })
  }
  return mdDatas;
}

export default function (options) {
  const virtualFileId = (options && options.importName) || '@docs-data';
  const DOCS_PATH = (options && options.path) || './docs';

  if (!fs.existsSync(DOCS_PATH)) {
    throw new Error(`路径不存在 => ${DOCS_PATH}`)
  }

  return {
    name: "vitePluginDocs",
    resolveId(source) {
      // // 是否处理当前请求
      if (source === virtualFileId) {
        return source; // 表示接管
      }
    },
    load(id) {
      console.log('>>>>>>>>>>> load <<<<<<<<<<<<<<<', id)
      if (id === virtualFileId) {
        // 返回加载模块代码
        const mdDatas = getDocsDatas(DOCS_PATH)
        return `export default ${JSON.stringify(mdDatas)}`;
      }
    },
  };
}