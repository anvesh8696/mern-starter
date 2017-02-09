import ProtectedContainer from './ProtectedContainer'
import Logout from './Logout'
import Profile from './Profile'

export default {
  component: ProtectedContainer,
  childRoutes: [
    Logout,
    Profile,
  ],
}
