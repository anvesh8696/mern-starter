import expect from 'expect'

import { LOAD_USERS } from 'App/actions/types'
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
})
