import * as types from 'App/actions/types'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USERS:
      return action.users
    default:
      return state
  }
}
