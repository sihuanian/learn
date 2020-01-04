## useContext
1. 上层组件引入`createContext` 并创建一个context `const CountContext = createContext()`
2. 使用这个CountContext 组件 `<CountContext.Provide value={count}></CountContext>`
3. 子组件引入 `CountContext` `useContext`
4. 获取上层组件传下来的值 `const count = useContext(CountContext)`

## useReducer
1. 引入 `useReducer`
2. 编写reducer 函数
3. 使用`useReducer` `const [state, dispatch] = useReducer(reducer, initState)`
4. 改变state `<button onChange={() => dispatch({type: 'add'})}>+</button>`