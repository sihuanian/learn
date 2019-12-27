import React, { Component } from 'react'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  render() {
    console.log(this.props)
    return (
      <>
        <button onClick={this.props.history.goBack}>返回</button>
        <h2>List-page -> {this.state.id}</h2>
      </>
    )
  }
  componentDidMount() { // 接收传值建议在这个生命周期
    console.log(this.props.match)
    this.setState({
      id: this.props.match.params.id
    })
  }
}

export default List