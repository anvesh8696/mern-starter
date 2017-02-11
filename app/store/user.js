import 'whatwg-fetch'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const loginUser = (username, password) => dispatch => (
  new Promise((resolve, reject) => {
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.status === 401) {
        response.json().then((json) => {
          let message = json.message
          if (Array.isArray(message)) {
            message = message.join()
          }
          reject(message)
        })
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
  })
)

export const logoutUser = () => dispatch => (
  new Promise((resolve) => {
    fetch('/api/logout').then(() => {
      dispatch({
        type: LOGOUT_USER,
      })

      resolve()
    })
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
