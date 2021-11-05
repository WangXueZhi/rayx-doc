# require.context

遍历目录进行批量的异步导入，在大量导入的场景下特别有用

### 参数
1. directory {String} -读取文件的路径
2. useSubdirectories {Boolean} -是否遍历文件的子目录
3. regExp {RegExp} -匹配文件的正则

### return
返回一个函数，函数有3个属性

1. resolve 是一个函数，它返回请求被解析后得到的模块 id。
2. keys 是一个函数，它返回一个数组，由所有可能被上下文模块处理的请求组成。
3. id 是上下文模块里面所包含的模块 id. 它可能在你使用 module.hot.accept 的时候被用到

调用函数本身传入模块的key可获取模块

```javascript
let contexts = require.context('.', false, /\.vue$/)
contexts.keys().forEach(key => {
    // 模块的默认导出
    let moduleExport = contexts(key).default
})
```