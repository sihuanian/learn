import axios from 'axios'
import { CHANGE_VALUE, ADD_ITEM, REMOVE, GET_LIST } from "./actionTypes"

export const changeValueAction = (value) => {
  return {
    type: CHANGE_VALUE,
    value
  }
}

export const addItemAction = () => {
  return {
    type: ADD_ITEM
  }
}

export const removeAction = (index) => {
  return {
    type: REMOVE,
    index
  }
}

export const getListAction = (data) => {
  return {
    type: GET_LIST,
    data
  }
}
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('http://rap2api.taobao.org/app/mock/240109/redux/todolist')
      .then(res => {
        console.log(res.data.list)
        console.log(666)
        const action = getListAction(res.data.list)
        dispatch(action)
      })
  }
}
