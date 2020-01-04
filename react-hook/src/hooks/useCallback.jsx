import React, { useCallback, useState } from 'react'

export default () => {
  const [a, setA] = useState(1)
  const [b, setB] = useState(10)

  const print = useCallback(() => {
    console.log(a + b)
    return a + b
  }, [a, b])

  return (
    <>
      <p>a: {a}</p>
      <p>b: {b}</p>
      <p>{print()}</p>
      <button onClick={() => setA(a + 1)}>++a</button>&nbsp;
      <button onClick={() => setA(a - 1)}>--a</button>&nbsp;
      <button onClick={() => setA(a + 0)}>a + 0</button>&nbsp;

      <button onClick={() => setB(b + 1)}>++b</button>&nbsp;
      <button onClick={() => setB(b - 1)}>--b</button>&nbsp;
      <button onClick={() => setB(b + 0)}>b + 0</button>&nbsp;
    </>
  )
}