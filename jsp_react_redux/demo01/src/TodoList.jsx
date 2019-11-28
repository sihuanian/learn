import React, { Component } from 'react'
import store from './store'
// import { ADD_ITEM, CHANGE_VALUE, REMOVE } from './store/actionTypes'
import { changeValueAction, addItemAction, removeAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    this.changeValue = this.changeValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.remove = this.remove.bind(this)
    this.ref = React.createRef()
    store.subscribe(this.storeChange) // 订阅store 的状态，store 改变时执行回调函数（重新得到最新的state）
  }

  changeValue (e) {
    // const action = {
    //   type: CHANGE_VALUE,
    //   value: e.target.value
    // }
    const action = changeValueAction(e.target.value)
    store.dispatch(action)
  }

  storeChange () {
    this.setState(store.getState()) // state设置成最新的store
  }

  addItem () {
    // const action = {
    //   type: ADD_ITEM
    //   // value: this.state.inputValue
    // }
    const action = addItemAction()
    store.dispatch(action)
    // this.ref.current.input.value = ''
    // console.log(this.ref.current.input)
  }

  remove (e) {
    const index = e.target.dataset.index
    // console.log(index)
    // const action = {
    //   type: REMOVE,
    //   index
    // }
    const action = removeAction(index)
    store.dispatch(action)
  }

  render() {
    // console.log(store.getState()) // 获取store中的数据
    const { inputValue, list } = this.state
    return (
      <TodoListUI
        changeValue={this.changeValue}
        inputValue={inputValue}
        addItem={this.addItem}
        list={list}
        remove={this.remove}
      />
    )
  }
}

export default TodoList