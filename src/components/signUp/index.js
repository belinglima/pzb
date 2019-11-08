import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, AsyncStorage } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'

import api from '../../services/api'

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
    email: 'teste@gmail.com',
    password: 'teste',
    name: 'teste de usuario',
    cpf: '12345678909',
    error: ''
  }

  static propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        dispatch: PropTypes.func
    }).isRequired 
  }

  async componentDidMount () {
    const user = JSON.parse( await AsyncStorage.getItem('@PizabreakApp:user'))
    const token = await AsyncStorage.getItem('@PizabreakApp:token')

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

  handleNameChange = (name) => {
    this.setState({ name: name})
  }

  handleCPFChange = (cpf) => {
    this.setState({ cpf: cpf})
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
    if(this.state.name.length === '' || this.state.email.length === '' 
    || this.state.cpf.length === '' || this.state.password.length === '') {
      this.setState({ error: 'Preencha as informações!' })
    } else {
      try {
        
        this.setState({ error: '' })

         await api.post('/user', {
          name: this.state.name,
          email: this.state.email,
          cpf: this.state.cpf,
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
        source={require("../../../assets/AuthBackground.png")}
        overlayColor="#fff"
        overlayAlpha={0.6}
        height={'100%'} 
        blurRadius={2}
        contentPosition="bottom"
      >
      <Container>
        <StatusBar hidden/>
        <Logo source={require('../../../assets/logoRegister.png')} resizeMode="contain"/>
        <Input
          placeholder="Nome"
          value={this.state.name}
          onChangeText={this.handleNameChange}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor='#1F00DF'
        />        
        <Input
        placeholder="CPF"
        value={this.state.cpf}
        onChangeText={this.handleCPFChange}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor='#1F00DF'
      />
        <Input
          placeholder="E-mail"
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
          <ButtonText>CADASTRAR</ButtonText>
        </Button>

        <SignUpLink onPress={this.handleSignIn}>
          <SignUpLinkText>Já possuo conta!</SignUpLinkText>
        </SignUpLink>
      </Container>
      </ImageOverlay>
    )
  }
}