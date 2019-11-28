import { CHANGE_VALUE, ADD_ITEM, REMOVE } from "./actionTypes"

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
