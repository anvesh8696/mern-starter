import expect from 'expect'
import configStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import { LOAD_USERS, ADD_USER } from 'App/actions/types'
import { loadUsers, addUser } from 'App/actions/users'

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

  describe('addUser', () => {
    it('should dispatch ADD_USER with new user added', (done) => {
      const user = {
        username: 'username',
        password: 'password',
        type: 'user-type',
      }

      fetchMock.post('/api/users', {
        status: 200,
        body: user,
      })

      const store = mockStore()
      store.dispatch(addUser(user))
        .then(() => {
          const actionsFired = store.getActions()
          expect(actionsFired.length).toBe(2)
          expect(actionsFired[0].type).toBe(ADD_USER)
          expect(actionsFired[0].user).toEqual(user)
          done()
        })
    })
  })
})
