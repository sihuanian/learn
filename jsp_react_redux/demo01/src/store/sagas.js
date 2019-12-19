import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'

function* mySagas () {
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  // axios.get('http://rap2api.taobao.org/app/mock/240109/redux/todolist')
  // .then(res => {
  //   console.log(res.data.list)
  //   console.log(666)
  //   const action = getListAction(res.data.list)
  //   dispatch(action)
  // })
  const res = yield axios.get('http://rap2api.taobao.org/app/mock/240109/redux/todolist')
  const action = yield getListAction(res.data.list)
  console.log(action)
  yield put(action)
}

export default mySagas