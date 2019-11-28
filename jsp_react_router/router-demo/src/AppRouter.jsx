import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './components/Index'
import List from './components/List'

/* function Index() {
  return (
    <h2>JSPang.com</h2>
  )
}

function List() {
  return (
    <h2>List-page</h2>
  )
} */

export default function AppRouter() {
  // Router exact 精确匹配路径  路径为path 中的值时，加载对应的component 组件
  // Link 与vue 中的<router-link> 相似，翻译成a 标签，to 就是点击跳转的路径
  // 万物皆组件，组件化的路由配置
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list/">列表</Link></li>
      </ul>
      <Route path="/" exact component={Index}></Route>
      <Route path="/list/:id" component={List}></Route>
    </Router>
  )
}