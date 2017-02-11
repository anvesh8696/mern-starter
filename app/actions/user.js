import * as types from './types'
import { fetchGet, fetchPost } from './helpers'

export const loginUser = (username, password) => dispatch => (
  new Promise((resolve, reject) => {
    fetchPost('/login', {
      username,
      password,
    }).then((response) => {
      if (response.status !== 200) {
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
        type: types.LOGIN_USER,
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
    fetchGet('/logout').then(() => {
      dispatch({
        type: types.LOGOUT_USER,
      })

      resolve()
    })
  })
)

export const changePassword = password => dispatch => (
  new Promise((resolve, reject) => {
    fetchPost('/profile/password', {
      password,
    }).then((response) => {
      if (response.status !== 200) {
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
        type: types.CHANGE_PASSWORD,
      })

      resolve()
    })
  })
)
