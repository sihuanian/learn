import React, { useContext } from 'react'
import useContextDemo from './useContext'

export default function CountChild() {
  const count = useContext(useContextDemo.CountContext)
  return (
    <>
      <h3>count: {count}</h3>
    </>
  )
}