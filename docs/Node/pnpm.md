# pnpm 更好的包管理器

https://pnpm.io/zh/

官方描述：快速的，节省磁盘空间的包管理工具

<img src="https://p5.itc.cn/q_70/images03/20210303/ff264a5ec0c7455abfc252c1d5f9d854.png" width="70%">

## npm/yarn的问题

#### 安装步骤

1. 解析依赖包的版本号
2. 下载对应版本依赖的 tar 包到本地离线镜像
3. 将依赖从离线镜像解压到本地缓存
4. 将依赖从缓存拷贝到当前目录的node_modules目录，这里是主要改进点, pnpm采用软硬链的方式减少io操作，yarn PnP是代理了require，直接从缓存中取模块

#### 生成的依赖目录结构

在 npm1 、 npm2 中呈现出的是如下的嵌套结构

```
node_modules
└─ A1
   ├─ index.js
   ├─ package.json
   └─ node_modules
      └─ A2
         ├─ index.js
         └─ package.json
      └─ lodash
         ├─ index.js
         └─ package.json
└─ B1
   ├─ index.js
   ├─ package.json
   └─ node_modules
      └─ lodash
         ├─ index.js
         └─ package.json
```

这种结构带来的问题：
1. 依赖层级太深，会导致文件路径过长的问题，尤其在 window 系统下。
2. 大量重复的包被安装，文件体积超级大。比如跟 A1 和 B1 两者都依赖于同一个版本的 lodash ，那么 lodash 会分别在两者的 node_modules 中被安装，也就是重复安装。
3. 模块实例不能共享。比如 React 有一些内部变量，在两个不同包引入的 React 不是同一个模块实例，因此无法共享内部变量，导致一些不可预知的 bug。

所以从npm3开始，包括 yarn都开始采用扁平化的依赖结构来解决这几个问题。但是依然带来新的问题：
1. 依赖结构的 不确定性, 取决于安装的先后顺序，这也是lock文件诞生的原因。
<img src="./npm不确定结构.png" height="400px">

2. 扁平化算法本身的 复杂性很高，耗时较长。
3. 依赖提升，导致可以非法访问没有声明过依赖的包, 比如项目依赖了A，A依赖了B，而项目能直接使用依赖B。


## pnpm的改进

<img src="./pnpm安装结构.png" height="400px">

#### 速度 和 磁盘空间
软硬链+依赖目录结构的优化，在安装步骤的第四步中，避免了大量的io操作，减少了重复安装的时间和空间。

#### 安全性
不存在非法访问的问题，因为node_modules下只会存在项目依赖的软链接

#### monorepo
对monorepo的支持更友好，提供子命令支持操作所有package依赖

## 扩展

[yarn pnp](https://loveky.github.io/2019/02/11/yarn-pnp/)