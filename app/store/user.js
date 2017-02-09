import { browserHistory } from 'react-router'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const loginUser = (username, password) => (dispatch) => {
  // TODO: Do some real authentication.
  if (username !== 'admin' || password !== 'admin') {
    return
  }

  dispatch({
    type: LOGIN_USER,
    user: {
      username,
    },
  })

  // Redirect to user profile page.
  browserHistory.push('/profile')
}

export const logoutUser = () => (dispatch) => {
  // TODO: Do some logout job.

  dispatch({
    type: LOGOUT_USER,
  })

  // Redirect to home page.
  browserHistory.push('/')
}

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
