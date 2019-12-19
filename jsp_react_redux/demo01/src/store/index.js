import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
import createSagaMiddleWare from 'redux-saga'
import mySaga from './sagas'
import reducer from './reducer'

const sagaMiddleWare = createSagaMiddleWare()

// const store = createStore(reducer,
//   applyMiddleware(thunk))

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  // applyMiddleware(thunk),
  applyMiddleware(sagaMiddleWare)
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);

sagaMiddleWare.run(mySaga)

export default store