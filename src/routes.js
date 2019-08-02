import { createStackNavigator } from 'react-navigation'

import SignIn from './components/signIn'
import SignUp from './components/signUp'
import Main from './components/home'

const Routes = createStackNavigator(
  {
    SignIn,
    SignUp,
    Main
  },{
    header: null,
    headerMode: 'none'
  })

export default Routes
