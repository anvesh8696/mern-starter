import { createStore } from 'redux'
import makeRootReducer from './reducers'

export default (initialState = {}) => {
  const store = createStore(
    makeRootReducer(),
    initialState // eslint-disable-line comma-dangle
  )

  return store
}
