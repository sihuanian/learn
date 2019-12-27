import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      list: [
        { cid: '001', title: '我的文章01'},
        { cid: '002', title: '我的文章02'},
        { cid: '003', title: '我的文章03'}
      ]
    }
    // 编程式重定向
    this.props.history.push('/home')
  }
  render() {
    return (
      <>
        {/* 组件式重定向 */}
        {/* <Redirect to="/home"></Redirect> */}
        <h2>JSPang.com</h2>
        <ul>
          {
            this.state.list.map(item => {
              return (
                <li key={item.cid}>
                  <Link to={'/list/' + item.cid}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </>
    )
  }
}

export default Index