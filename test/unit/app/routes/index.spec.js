import expect from 'expect'
import { match, createMemoryHistory } from 'react-router'
import configStore from 'redux-mock-store'

import createRoutes from 'App/routes'
import CoreLayout from 'App/components/CoreLayout'
import Home from 'App/routes/Home'
import Feature from 'App/routes/Feature'
import Login from 'App/routes/Login'
import Profile from 'App/routes/Profile'
import NotFound from 'App/routes/NotFound'

describe('Routes', () => {
  const createLocation = createMemoryHistory().createLocation
  const mockStore = configStore()

  let routes
  beforeEach(() => {
    const store = mockStore()
    routes = createRoutes(store)
  })

  describe('Route /', () => {
    it('should render Home', (done) => {
      match({ routes, location: createLocation('/') }, (err, redirectLocation, renderProps) => {
        expect(renderProps).toExist()
        expect(renderProps.routes.length).toBe(2)
        expect(renderProps.routes[0].component).toEqual(CoreLayout)
        expect(renderProps.routes[1].component).toEqual(Home)
        done()
      })
    })
  })

  describe('Route /features', () => {
    it('should render Feature', (done) => {
      match({ routes, location: createLocation('/features') }, (err, redirectLocation, renderProps) => {
        expect(renderProps).toExist()
        expect(renderProps.routes.length).toBe(2)
        expect(renderProps.routes[1].component).toEqual(Feature)
        done()
      })
    })
  })

  describe('Route /login', () => {
    it('should render Login', (done) => {
      match({ routes, location: createLocation('/login') }, (err, redirectLocation, renderProps) => {
        expect(renderProps).toExist()
        expect(renderProps.routes.length).toBe(2)
        expect(renderProps.routes[1].component).toEqual(Login)
        done()
      })
    })

    it('should redirect to /profile for logged in users', (done) => {
      const store = mockStore({
        user: {
          username: 'username',
        },
      })
      routes = createRoutes(store)

      match({ routes, location: createLocation('/login') }, (err, redirectLocation) => {
        expect(redirectLocation).toExist()
        expect(redirectLocation.pathname).toBe('/profile')
        done()
      })
    })
  })

  describe('Route /profile', () => {
    it('should redirect to /login for guests', (done) => {
      match({ routes, location: createLocation('/profile') }, (err, redirectLocation) => {
        expect(redirectLocation).toExist()
        expect(redirectLocation.pathname).toBe('/login')
        done()
      })
    })

    it('should render Profile', (done) => {
      const store = mockStore({
        user: {
          username: 'username',
        },
      })
      routes = createRoutes(store)

      match({ routes, location: createLocation('/profile') }, (err, redirectLocation, renderProps) => {
        expect(renderProps).toExist()
        expect(renderProps.routes.length).toBe(3)
        expect(renderProps.routes[2].component).toEqual(Profile)
        done()
      })
    })
  })

  describe('Unknown route', () => {
    it('should render NotFound', (done) => {
      match({ routes, location: createLocation('/unknown-route') }, (err, redirectLocation, renderProps) => {
        expect(renderProps).toExist()
        expect(renderProps.routes.length).toBe(2)
        expect(renderProps.routes[1].component).toEqual(NotFound)
        done()
      })
    })
  })
})
