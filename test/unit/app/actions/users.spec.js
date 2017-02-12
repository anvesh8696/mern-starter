import expect from 'expect'
import configStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import { LOGIN_USER, LOGOUT_USER, SHOW_MESSAGE, HIDE_MESSAGE } from 'App/actions/types'
import { loginUser, logoutUser, changePassword } from 'App/actions/users'

describe('Users action creators', () => {
  const middlewares = [thunk]
  const mockStore = configStore(middlewares)

  describe('loginUser', () => {
    it('should dispatch LOGIN_USER', (done) => {
      fetchMock.post('/api/login', {
        status: 200,
      })

      const username = 'username'

      const store = mockStore()
      store.dispatch(loginUser(username, 'dummy-password'))
        .then(() => {
          const actionsFired = store.getActions()
          expect(actionsFired.length).toBe(1)
          expect(actionsFired[0].type).toBe(LOGIN_USER)
          expect(actionsFired[0].user).toEqual({
            username,
          })
          done()
        })
    })
  })

  describe('logoutUser', () => {
    it('should dispatch LOGOUT_USER', (done) => {
      fetchMock.get('/api/logout', {
        status: 200,
      })

      const store = mockStore()
      store.dispatch(logoutUser())
        .then(() => {
          const actionsFired = store.getActions()
          expect(actionsFired.length).toBe(1)
          expect(actionsFired[0].type).toBe(LOGOUT_USER)
          done()
        })
    })
  })

  describe('changePassword', () => {
    it('should dispatch SHOW_MESSAGE and HIDE_MESSAGE', (done) => {
      fetchMock.post('/api/profile/password', {
        status: 200,
      })

      const store = mockStore()
      store.dispatch(changePassword('dummy-password'))
        .then(() => {
          const actionsFired = store.getActions()
          expect(actionsFired.length).toBe(2)
          expect(actionsFired[0].type).toBe(SHOW_MESSAGE)
          expect(actionsFired[1].type).toBe(HIDE_MESSAGE)
          expect(actionsFired[0].messageId).toBe(actionsFired[1].messageId)
          done()
        })
    })
  })
})
