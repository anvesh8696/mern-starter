import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk) // eslint-disable-line comma-dangle
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers') // eslint-disable-line global-require
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
