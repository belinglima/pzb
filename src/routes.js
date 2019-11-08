import { createStackNavigator } from 'react-navigation'

import SignIn from './components/signIn'
import SignUp from './components/signUp'
import Home from './components/home'

const Routes = createStackNavigator(
  {
    SignIn,
    SignUp,
    Home,
  },{
    header: null,
    headerMode: 'none'
  })

export default Routes
