import React, { useState } from 'react'

export default function UseStateDemo() {
  const [list, setList] = useState([1, 2, 3])
  return (
    <h3>
      <button onClick={() => {
        setList(preList => preList.map(item => item * 2))
      }}>change list</button>
      <ul>
        {
          list.map(item => {
            return (
              <li key={item}>{item}</li>
            )
          })
        }
      </ul>
    </h3>
  )
}
