import * as types from './types'
import { fetchGet, fetchPost } from './helpers'
import { showMessage } from './messages'

export const loadUsers = () => dispatch => (
  new Promise((resolve, reject) => {
    fetchGet('/users').then((response) => {
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

      response.json().then((users) => {
        dispatch({
          type: types.LOAD_USERS,
          users,
        })

        resolve()
      })
    })
  })
)

export const addUser = user => dispatch => (
  new Promise((resolve, reject) => {
    fetchPost('/users', {
      username: user.username,
      password: user.password,
      type: user.type,
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

      response.json().then((userAdded) => {
        dispatch({
          type: types.ADD_USER,
          user: userAdded,
        })

        dispatch(showMessage('User is added successfully.'))

        resolve()
      })
    })
  })
)
