import expect from 'expect'
import configStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { SHOW_MESSAGE, HIDE_MESSAGE } from 'App/actions/types'
import { showMessage, hideMessage } from 'App/actions/messages'

describe('Messages action creators', () => {
  const middlewares = [thunk]
  const mockStore = configStore(middlewares)

  describe('showMessage', () => {
    it('should dispatch SHOW_MESSAGE and HIDE_MESSAGE', (done) => {
      const store = mockStore()
      // Set timeout to 0 to dispatch HIDE_MESSAGE immediately.
      store.dispatch(showMessage('message', 0))
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

  describe('hideMessage', () => {
    it('should dispatch HIDE_MESSAGE', (done) => {
      const store = mockStore()
      store.dispatch(hideMessage('message-id'))

      const actionsFired = store.getActions()
      expect(actionsFired.length).toBe(1)
      expect(actionsFired[0].type).toBe(HIDE_MESSAGE)
      done()
    })
  })
})
