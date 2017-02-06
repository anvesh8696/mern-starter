import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import Feature from './Feature'

export default {
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    {
      path: 'features',
      component: Feature,
    },
  ],
}
