import CoreLayout from '../components/CoreLayout'
import Home from './Home'
import Feature from './Feature'
import Login from './Login'
import Protected from './Protected'

export default {
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    Feature,
    Login,
    Protected,
  ],
}
