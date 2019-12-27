1. 引入react-router-dom (BrowserRouter, Route, Link)
2. BrowserRouter 包裹
3. Link to="path"
4. Route path="ptah" component="componentName" exact (精确匹配)

## 动态传值
1. 设置规则 `<Route path="/list/:id" component="List">列表</Route>`
2. 传递值 url: `http://localhost:3000/list/666`
3. 获取值 `this.props.match.params.id`

## 重定向
1. 组件式重定向
  1. 配置路由 `<Route to="/home" component={Home} />`
  2. 从`react-router-dom` 中引入`Redirect` 需要被重定向的页面中的render 方法中使用`<Redirect to="/home" />`
2. 编程式重定向
  1. 配置路由 `<Route to="/home" component={Home} />`
  2. 在需要被重定向的页面中的合适的生命周期函数(constructor) 中加入`this.props.history.push('/home')`