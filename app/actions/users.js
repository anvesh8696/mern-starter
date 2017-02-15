import * as types from './types'
import { fetchGet } from './helpers'

// eslint-disable-next-line import/prefer-default-export
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
