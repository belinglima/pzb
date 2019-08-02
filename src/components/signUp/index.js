import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, AsyncStorage } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'


import api from '../../services/api'
import { login, setUser, TOKEN_APP, USER_AUTH } from '../../services/auth'

import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText
} from './styles'
import ImageOverlay from 'react-native-image-overlay';

navigationOptions = {
  header: null,
}

export default class signUp extends Component {
  state = {
    email: '',
    password: '',
    username: '',
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

   handleUsernameChange = (username) => {
    this.setState({ username: username})
  }

  handleEmailChange = (email) => {
    this.setState({ email: email})
  }

  handlePasswordChange = (password) => {
    this.setState({ password: password})
  }

  handleSignIn = () => {
    this.props.navigation.navigate(('SignIn'))
  }

  handleSignUp = async () => {
    if(this.state.username.length === 0 || this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState({ error: 'Preencha as informações!' })
    } else {
      try {
        
        this.setState({ error: '' })

         await api.post('/signup', {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        })

        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'SignIn' }),
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
      <ImageOverlay
        source={require("../../../assets/AuthBackground.jpg")}
        overlayColor="#fff"
        overlayAlpha={0.6}
        height={'100%'} 
        contentPosition="bottom"
      >
      <Container>
        <StatusBar hidden/>
        <Logo source={require('../../../assets/logoRegister.png')} resizeMode="contain"/>
        <Input
          placeholder="Nome do Usuario"
          value={this.state.username}
          onChangeText={this.handleUsernameChange}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor='#1F00DF'
        />
        <Input
          placeholder="Endereço de e-mail"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor='#1F00DF'
        />
        <Input 
            placeholder="Senha"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            placeholderTextColor='#1F00DF'
        />

        {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}

        <Button onPress={this.handleSignUp}>
          <ButtonText>CADSATRAR</ButtonText>
        </Button>

        <SignUpLink onPress={this.handleSignIn}>
          <SignUpLinkText>Já possuo conta!</SignUpLinkText>
        </SignUpLink>
      </Container>
      </ImageOverlay>
    )
  }
}