# redux
> store.getState() 获取state

note: switch case 中case 中不存在块级作用域，作用域是整个switch 语句

1. action对象中的 type属性分离出一个文件
2. action对象分离出一个文件
3. UI 与逻辑分离
4. redux-thunk 引入，action 返回一个函数
5. redux-saga 引入
  - import createSagaMiddleWare from 'redux-saga' // index.js
  - const sagaMiddleWare = createSagaMiddleWare()
  - applyMiddleWare(sagaMiddleWare)
  - 创建sagas.js文件
    ```js
      function* mySagas() {}
      exports default mySagas
    ```
  - index.js 中引入sagas.js 
    > import mySagas from './sagas'
  - sagaMiddleWare.run(mySagas)
  - sagas.js 数据引入
    ```js
      import { takeEvery, put } from 'redux-saga/effects'
      function* mySagas() {
        yield takeEvery(action.type, funcName)
      }
      function* funcName() {
        const res = yield fetchApi()
        const action = res.data
        yield put(action)
      }
      exports default mySagas
    ```