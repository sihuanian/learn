import React from 'react'
import UseStateDemo from './hooks/useState'
import UseContextDemo from './hooks/useContext'
import UseReducerDemo from './hooks/useReducer'
import UseCallbackDemo from './hooks/useCallback'
import UseMemoDemo from './hooks/useMemo'
import UseRefDemo from './hooks/useRef'

export default function App() {
  return (
    <>
      <h3>useState: </h3>
      <UseStateDemo />
      <h3>useContext: </h3>
      <UseContextDemo.useContextDemo />
      <h3>UseReducer: </h3>
      <UseReducerDemo />
      <h3>UseCallback: </h3>
      <UseCallbackDemo />
      <h3>UseCallback: </h3>
      <UseCallbackDemo />
      <h3>UseMemoDemo: </h3>
      <UseMemoDemo />
      <h3>UseRefDemo: </h3>
      <UseRefDemo />
    </>
  )
}