import React, { useMemo, useState } from 'react'

export default () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(25)

  return (
    <>
      <button onClick={() => setA(a + 1)}>change a</button>
      <button onClick={() => setB(b + 1)}>change b</button>
      <Child a={a}>{b}</Child>
    </>
  )
}

function Child({a, children}) {
  // 此函数依赖a, a变化才执行，b变化不执行才是最佳性能
  function print(a) {
    console.log('print')
    return a
  }

  // const A = print(a)
  // 使用useMemo 缓存print 函数的返回值，只有当这所依赖的a 改变才会重新计算值
  const A = useMemo(() => print(a), [a])

  return (
    <>
      <p>a: {A}</p>
      <p>b: {children}</p>
    </>
  )
}