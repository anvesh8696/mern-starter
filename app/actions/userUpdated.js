import * as types from './types'
import { fetchGet } from './helpers'

export const getUser = id => dispatch => ( // eslint-disable-line import/prefer-default-export
  new Promise((resolve, reject) => {
    fetchGet(`/users/${id}`).then((response) => {
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
          type: types.GET_USER,
          user,
        })

        resolve()
      })
    })
  })
)
