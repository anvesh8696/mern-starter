import * as types from './types'
import { fetchGet, fetchPost } from './helpers'
import { showMessage } from './messages'

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

      response.json().then((user) => {
        dispatch({
          type: types.LOGIN_USER,
          user,
        })

        resolve()
      })
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

      dispatch(showMessage('Password is updated successfully.'))
        .then(() => {
          resolve()
        })
    })
  })
)
