export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const loginUser = (username, password) => dispatch => (
  new Promise((resolve, reject) => {
    // TODO: Do some real authentication.
    if (username !== 'admin' || password !== 'admin') {
      reject('Invalid username or password.')
      return
    }

    dispatch({
      type: LOGIN_USER,
      user: {
        username,
      },
    })

    resolve()
  })
)

export const logoutUser = () => dispatch => (
  new Promise((resolve) => {
    // TODO: Do some logout job.
    dispatch({
      type: LOGOUT_USER,
    })

    resolve()
  })
)

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
