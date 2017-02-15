import expect from 'expect'
import configStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import { GET_USER } from 'App/actions/types'
import { getUser } from 'App/actions/userUpdated'

describe('User-updated action creators', () => {
  const middlewares = [thunk]
  const mockStore = configStore(middlewares)

  describe('getUser', () => {
    it('should dispatch GET_USER with user retrieved', (done) => {
      const userId = 'some-user-id'

      const resultsMock = [
        {
          username: 'username',
          type: 'user-type',
        },
      ]

      fetchMock.get(`/api/users/${userId}`, {
        status: 200,
        body: resultsMock,
      })

      const store = mockStore()
      store.dispatch(getUser(userId))
        .then(() => {
          const actionsFired = store.getActions()
          expect(actionsFired.length).toBe(1)
          expect(actionsFired[0].type).toBe(GET_USER)
          expect(actionsFired[0].user).toEqual(resultsMock)
          done()
        })
    })
  })
})
