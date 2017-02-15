import expect from 'expect'
import configStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import { LOAD_USERS } from 'App/actions/types'
import { loadUsers } from 'App/actions/users'

describe('Users action creators', () => {
  const middlewares = [thunk]
  const mockStore = configStore(middlewares)

  describe('loadUsers', () => {
    it('should dispatch LOAD_USERS with users retrieved', (done) => {
      const resultsMock = [
        {
          username: 'username',
          type: 'user-type',
        },
      ]

      fetchMock.get('/api/users', {
        status: 200,
        body: resultsMock,
      })

      const store = mockStore()
      store.dispatch(loadUsers())
        .then(() => {
          const actionsFired = store.getActions()
          expect(actionsFired.length).toBe(1)
          expect(actionsFired[0].type).toBe(LOAD_USERS)
          expect(actionsFired[0].users).toEqual(resultsMock)
          done()
        })
    })
  })
})
