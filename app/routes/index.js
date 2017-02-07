import CoreLayout from '../components/CoreLayout'
import Home from './Home'
import Feature from './Feature'
import Login from './Login'
import Logout from './Logout'
import Profile from './Profile'

export default {
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    Feature,
    Login,
    Logout,
    Profile,
  ],
}
