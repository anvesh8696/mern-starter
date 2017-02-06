import { createStore } from 'redux'
import makeRootReducer from './reducers'

export default (initialState = {}) => {
  const store = createStore(
    makeRootReducer(),
    initialState
  )

  return store
}
