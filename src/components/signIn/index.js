import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, AsyncStorage } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'


import api from '../../services/api'
import { login, setUser, TOKEN_APP, USER_AUTH } from '../../services/auth'

import {
  Background,
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText
} from './styles'

navigationOptions = {
  header: null,
}

export default class SignIn extends Component {
    state = {
      email: '',
      password: '',
      error: ''
    }

    static propTypes = {
      navigation: PropTypes.shape({
          navigate: PropTypes.func,
          dispatch: PropTypes.func
      }).isRequired 
    }

    async componentDidMount () {
      const user = JSON.parse( await AsyncStorage.getItem('@SpaceApi:user'))
      const token = await AsyncStorage.getItem('@SpaceApi:token')

      if (token && user) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Main' }),
          ]
        })

        this.props.navigation.dispatch(resetAction)
      }

    }

     handleEmailChange = (email) => {
      this.setState({ email: email})
    }

    handlePasswordChange = (password) => {
      this.setState({ password: password})
    }

    handleSignup = () => {
      this.props.navigation.navigate(('SignUp'))
    }

    handleSignin = async () => {
      if(this.state.email.length === 0 || this.state.password.length === 0) {
        this.setState({ error: 'Preencha as informações!' })
      } else {
        try {
          
          this.setState({ error: '' })

          const res = await api.post('/signin', {
            email: this.state.email,
            password: this.state.password
          })

          
          const token = res.data.token.token
          const user = res.data.user

          await AsyncStorage.multiSet([
            ['@SpaceApi:token', token ],
            ['@SpaceApi:user', JSON.stringify(user) ]
          ])

          const resetAction = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Main' }),
            ]
          })

          this.props.navigation.dispatch(resetAction)

        } catch (err) {
          this.setState({ error: `${err}`})
        }
      }
    }

  render () {
    return (
      <Background
        source={require("../../../assets/AuthBackground.jpg")}
        overlayColor="#1F00DF"
        overlayAlpha={0.6}
        height={'100%'} 
        contentPosition="bottom"
      >
      <Container>
        <StatusBar hidden/>
        <Logo source={require('../../../assets/logoLogin.png')} resizeMode="contain"/>
        <Input
          placeholder="Endereço de e-mail"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input 
            placeholder="Senha"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
        />

        {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}

        <Button onPress={this.handleSignin}>
          <ButtonText>ACESSAR</ButtonText>
        </Button>

        <SignUpLink onPress={this.handleSignup}>
          <SignUpLinkText>Não possuo conta!</SignUpLinkText>
        </SignUpLink>
      </Container>
      </Background>
    )
  }
}