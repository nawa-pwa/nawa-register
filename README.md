## 简介

nawa-register 是一个用来快速进行注册 SW.js 用的便捷库。

## 安装

腾讯内部开发者，使用 tnpm 进行下载：

```
tnpm install @tencent/nawa-register --save
```

外部开发者，直接通过 npm 下载：

```
npm install @tencent/nawa-register --save
```

## 快速入门


```
import nawaRegister from '@tencent/nawa-register';
# 最精简的写法为：
nawaRegister.register('./sw.js')


# 如果需要打点上报，可以修改：
nawa-register.register('./sw.js')
.then(reg=>{
  // 注册成功，可以用来上报
},status=>{
  // 注册失败

})
```

### 支持 Async 语法的 ServiceWorker

因为在 SW 中，会存在很多异步操作，比如数据库的读取，写入等等，而这些操作又不得不需要将异步变成同步来做。`async` 语法糖就是来帮助我们减少该异步方法的复杂度，所以，这里额外提供一个方法，在 async 支持的情况下，注册 `ServiceWorker`。

```
nawaRegister.asyncRegister('./sw.js')
```



## 开发项目参考

[pwa-qq](http://git.code.oa.com/ivweb/now-qq-pwa)
