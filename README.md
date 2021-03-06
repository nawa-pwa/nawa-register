## 简介

nawa-register 是一个用来快速进行注册 SW.js 用的便捷库。

## 安装

腾讯内部开发者，使用 tnpm 进行下载：

```
npm install nawa-register --save
```

## 快速上手

因为在 SW 中，会存在很多异步操作，比如数据库的读取，写入等等，而这些操作又不得不需要将异步变成同步来做，所以会需要使用 async 特性。而这个注册插件默认则是在支持 async 特性下，才会注册`ServiceWorker`。

```
import nawaRegister from 'nawa-register';
# 最精简的写法为：
nawaRegister.register('./sw.js')

# 如果需要打点上报，可以修改：
nawaRegister.register('./sw.js')
.then(reg=>{
  // 注册成功，可以用来上报
},status=>{
  // 注册失败
})
```

