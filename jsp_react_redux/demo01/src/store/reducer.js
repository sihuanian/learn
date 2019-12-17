import { CHANGE_VALUE, ADD_ITEM, REMOVE, GET_LIST } from "./actionTypes"


const defaultList = {
  inputValue: '',
  list: []
}

export default function (state = defaultList, action) {
  let cloneList = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case CHANGE_VALUE:
      state.inputValue = action.value
      return state
    case ADD_ITEM:
      // cloneList.list.push(action.value)
      cloneList.inputValue.trim() && cloneList.list.push(cloneList.inputValue)
      cloneList.inputValue = ''
      return cloneList
    case REMOVE:
      // let cloneList1 = JSON.parse(JSON.stringify(state))
      cloneList.list.splice(action.index, 1)
      return cloneList
    case GET_LIST:
      // let cloneList1 = JSON.parse(JSON.stringify(state))
      cloneList.list = action.data
      return cloneList
    default:
      return state
  }
}