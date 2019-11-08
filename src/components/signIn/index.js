import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, AsyncStorage } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'

import api from '../../services/api'

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
      email: 'belinglima@gmail.com',
      password: 'belinglima',
      error: ''
    }

    static propTypes = {
      navigation: PropTypes.shape({
          navigate: PropTypes.func,
          dispatch: PropTypes.func
      }).isRequired 
    }

    async componentDidMount () {
      // const user = JSON.parse( await AsyncStorage.getItem('@PizabreakApp:user'))
      const token = await AsyncStorage.getItem('@PizabreakApp:token')

      if (token) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
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
      if(this.state.email.length === '' || this.state.password.length === '') {
        this.setState({ error: 'Preencha as informações!' })
      } else {
        try {
          
          this.setState({ error: '' })

          const res = await api.post('/sessions', {
            email: this.state.email,
            password: this.state.password
          })
        
         
          const token = res.data.token.token
          const user = res.data.nome

          await AsyncStorage.setItem("@PizabreakApp:token", token);
          await AsyncStorage.setItem("@PizabreakApp:user", user);     

          const resetAction = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Home' }),
            ]
          })

          this.props.navigation.dispatch(resetAction)

        } catch (err) {
          this.setState({ error: `${err}`})
        }  
        
    }}

  render () {
    return (
      <Background
        source={require("../../../assets/AuthBackground.png")}
        overlayColor="#DF013A"
        overlayAlpha={0.6}
        height={'100%'} 
        blurRadius={2}
        contentPosition="bottom"
      >
      <Container>
        <StatusBar hidden/>
        <Logo source={require('../../../assets/logoLogin.png')} resizeMode="contain"/>
        <Input
          placeholder="E-mail"
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
          <ButtonText>CONECTAR</ButtonText>
        </Button>

        <SignUpLink onPress={this.handleSignup}>
          <SignUpLinkText>Registre-Se</SignUpLinkText>
        </SignUpLink>
      </Container>
      </Background>
    )
  }
}