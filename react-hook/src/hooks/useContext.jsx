import React, { useState, createContext } from 'react'
import CountChild from './CountChild'

const CountContext = createContext()

function useContextDemo() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => {
        setCount(count + 1)
      }}>change count</button>
      <CountContext.Provider value={count}>
        <CountChild />
      </CountContext.Provider>
    </>
  )
}

export default {
  useContextDemo,
  CountContext
}