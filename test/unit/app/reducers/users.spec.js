import expect from 'expect'

import { LOAD_USERS, ADD_USER } from 'App/actions/types'
import reducer from 'App/reducers/users'

describe('Users reducer', () => {
  const initialState = []

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {}) // eslint-disable-line comma-dangle
    ).toEqual(initialState)
  })

  it('should handle LOAD_USERS', () => {
    const users = [
      {
        username: 'user1',
      },
      {
        username: 'user2',
      },
    ]

    expect(
      reducer(undefined, {
        type: LOAD_USERS,
        users,
      }) // eslint-disable-line comma-dangle
    ).toEqual(users)
  })

  it('should handle ADD_USER', () => {
    const user = {
      username: 'user1',
    }

    expect(
      reducer(undefined, {
        type: ADD_USER,
        user,
      }) // eslint-disable-line comma-dangle
    ).toEqual([user])
  })
})
