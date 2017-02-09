import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from './reducers'

export default (initialState = {}) => {
  const store = createStore(
    makeRootReducer(),
    initialState,
    applyMiddleware(thunk) // eslint-disable-line comma-dangle
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default // eslint-disable-line global-require
      store.replaceReducer(reducers())
    })
  }

  return store
}
