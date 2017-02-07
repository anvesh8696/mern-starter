import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import Feature from './Feature'
import Login from './Login'

export default {
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    {
      path: 'features',
      component: Feature,
    },
    {
      path: 'login',
      component: Login,
    },
  ],
}
