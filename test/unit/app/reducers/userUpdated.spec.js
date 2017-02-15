import expect from 'expect'

import { GET_USER } from 'App/actions/types'
import reducer from 'App/reducers/userUpdated'
import { USER_TYPE_USER } from 'Server/constants'

describe('User-updated reducer', () => {
  const initialState = {
    username: '',
    password: '',
    type: USER_TYPE_USER,
  }

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {}) // eslint-disable-line comma-dangle
    ).toEqual(initialState)
  })

  it('should handle GET_USER', () => {
    const user = {
      username: 'username',
      type: USER_TYPE_USER,
    }

    expect(
      reducer(undefined, {
        type: GET_USER,
        user,
      }) // eslint-disable-line comma-dangle
    ).toEqual({
      password: '',
      ...user,
    })
  })
})
