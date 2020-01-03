# egg.js

约定大于配置，目录名要与官方约定相同
[egg.js 官网教程](https://eggjs.org/zh-cn/tutorials/index.html)

## 脚手架生成egg.js 项目
> npm init egg --type=simple | empty | framework | plugin

1. ctx.params
2. ctx.query
3. ctx.state.key = value 前端全局变量

## 模版引擎
- egg-view-ejs
### 配置
```js
// config/plugin
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};

// config/config.default.js
exports.view = {
  mapping: {
    '.html': 'ejs',
  },
};
```

## 静态资源
> <img src="/public/images/1.jpg" />

## controller 与 service
- controller 可以调用不同的service
- service 可以相互调用
- service 的命名规范及调用方式（驼峰式，首字母小写）

## extend

- application
- request
- response
- context
- helper

## middleware
> config.middleware = ['middleware1', 'middleware2', ...]
> config.middleware1 = {} // middleware1 的参数
- config.default.js 中配置

## cookie

1. 设置cookie
`this.ctx.cookies.set(key, value, options)`
2. 删除cookie
`this.ctx.cookies.set(key, null)`
`this.ctx.cookies.set(key, null, {maxAge: 0})`
3. 获取cookie
`this.ctx.cookies.get(key)`

## session

1. 设置session
`this.ctx.session.name = value`
2. 删除session
`this.ctx.session = null`
3. 获取session
`this.ctx.session.name`
4. 配置session
```js
config.session = {
  key: key,
  renew: true,
  httpOnly: true,
  maxAge...
}
```