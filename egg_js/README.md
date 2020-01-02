# egg.js

## 脚手架生成egg.js 项目
> npm init egg --type=simple | empty | framework | plugin

1. ctx.params
2. ctx.query

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