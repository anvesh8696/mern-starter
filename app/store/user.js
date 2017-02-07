export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const loginUser = user => ({
  type: LOGIN_USER,
  user,
})

export const logoutUser = () => ({
  type: LOGOUT_USER,
})

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.user
    case LOGOUT_USER:
      return initialState
    default:
      return state
  }
}
