const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  const deepClone = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'CHANGE':
      deepClone.inputValue = action.inputValue
      return deepClone
    case 'ADD':
      if (deepClone.inputValue.trim()) {
        deepClone.list = [...deepClone.list, deepClone.inputValue]
        deepClone.inputValue = ''
      }
      return deepClone
    default:
      return state
  }
}