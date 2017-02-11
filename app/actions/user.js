import 'whatwg-fetch'

import * as types from './types'

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
      credentials: 'same-origin',
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
    fetch('/api/logout', {
      credentials: 'same-origin',
    }).then(() => {
      dispatch({
        type: types.LOGOUT_USER,
      })

      resolve()
    })
  })
)

export const changePassword = password => dispatch => (
  new Promise((resolve, reject) => {
    fetch('/api/profile/password', {
      method: 'POST',
      body: JSON.stringify({
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
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
