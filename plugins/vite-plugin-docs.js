const fs = require('fs')
const path = require('path')
const { cloneDeep } = require('lodash')
const marked = require('marked')

let keyWordsInOneMd = []

const parseMd = function(path){
  keyWordsInOneMd = []
  return marked(fs.readFileSync(path, 'utf-8'))
}

const getDocsDatasAsArray = function (path, cb) {
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
      mdDatas.push(...getDocsDatasAsArray(`${path}/${files[i]}`, cb))
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
      content: parseMd(`${path}/${files[i]}`),
      url: `${path}/${files[i]}`,
      keyWords: [...keyWordsInOneMd]
    })
  }
  return mdDatas;
}

const getDocsDatasAsObject = function (path, cb) {
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
        childrens: getDocsDatasAsObject(`${path}/${files[i]}`, cb)
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
      content: parseMd(`${path}/${files[i]}`),
      url: `${path}/${files[i]}`,
      keyWords: [...keyWordsInOneMd]
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
        marked.use({
          renderer:{
            heading(text, level, raw, slugger){
              keyWordsInOneMd.push(text)
              return `<h${level} id="${text}">${raw}</h${level}>`
            }
          }
        });
        // 返回加载模块代码
        const mdDatas = getDocsDatasAsArray(DOCS_PATH)
        return `export default ${JSON.stringify(mdDatas)}`;
      }
    },
  };
}