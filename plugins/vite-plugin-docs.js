const fs = require('fs')
const path = require('path')
const marked = require('marked')

const getDocsDatas = function (path, cb) {
  console.log('>>>>>>>>>>> getDocsDatas <<<<<<<<<<<<<<<')
  const files = fs.readdirSync(path)
  const mdDatas = []
  for (let i = 0; i < files.length; i++) {
    const stats = fs.statSync(`${path}/${files[i]}`)
    const fileNameArr = files[i].split('.')
    let cbObj

    if (stats.isDirectory()) {
      cbObj = {
        name: files[i]
      }
      if (cb) {
        cbObj = {
          ...cbObj,
          ...cb(true, {
            name: fileNameArr[0],
            ext: fileNameArr[1]
          })
        }
      }
      // 继续递归
      mdDatas.push({
        ...cbObj,
        childrens: getDocsDatas(`${path}/${files[i]}`)
      })
      continue;
    }

    cbObj = {
      name: fileNameArr[1]
    }
    if (cb) {
      cbObj = {
        ...cbObj,
        ...cb(false, {
          name: fileNameArr[0],
          ext: fileNameArr[1]
        })
      }
    }
    mdDatas.push({
      ...cbObj,
      content: marked(fs.readFileSync(`${path}/${files[i]}`, 'utf-8'))
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
      // console.log('>>>>>>>>>>> load <<<<<<<<<<<<<<<', id)
      if (id === virtualFileId) {
        // 返回加载模块代码
        const mdDatas = getDocsDatas(DOCS_PATH)
        return `export default ${JSON.stringify(mdDatas)}`;
      }
    },
  };
}