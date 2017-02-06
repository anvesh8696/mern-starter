import { combineReducers } from 'redux'
import locationReducer from './location'

export default () => {
  return combineReducers({
    location: locationReducer
  })
}
