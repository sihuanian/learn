import { CHANGE_VALUE, ADD_ITEM, REMOVE } from "./actionTypes"


const defaultList = {
  inputValue: '',
  list: [
    '没有未来的未来不是我想要的未来',
    '能哭的地方只有爸爸的怀里',
    '我为何在哭泣'
  ]
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
    default:
      return state
  }
}