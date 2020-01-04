import React, { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { count: ++state.count }
    case 'decrease':
      return { count: --state.count }
    default:
      return state
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <>
      count: { state.count }
      &nbsp;&nbsp;
      <button onClick={() => dispatch({type: 'add'})}>+</button>
      &nbsp;&nbsp;
      <button onClick={() => dispatch({type: 'decrease'})}>-</button>
    </>
  )
}