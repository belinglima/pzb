import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { AsyncStorage } from 'react-native'

import {
    StyleSheet,
    Text,
    View
  } from 'react-native';

  handleChange = (e) => {
    e.onChangeText
  }


export default class User extends Component{
    state = {
        nome: '',
        email: '',
        loggedInUser: ''
    }
    
    async componentDidMount () {
   
        const user = JSON.parse( await AsyncStorage.getItem('@PizabreakApp:user'))
        const token = await AsyncStorage.getItem('@PizabreakApp:token')
  
        if (token && user ) {
          this.setState({ loggedInUser: user, tokenAuth: token })
        } else {
          this.setState({ error: 'sem user'})
        }
      
        try {
          const { id } = this.state.loggedInUser
          const res = await api.get(`/user/${id}`)
          if(res.data) {
            this.setState({
              nome: res.data.name,
              email: res.data.email
            })
          }
        } catch (err) {
         
        }
  
    }

    render() {
        return(
            <View style={Styles.textContent}>
                <Text style={{ fontSize: 18 }}>Usuario: {this.state.name}</Text>
                <TextInput
                    style={{ height: 40, width: 300 ,borderColor: 'gray', borderWidth: 1 }}
                    value={this.state.name}
                />
                 <TextInput
                    style={{ height: 40, width: 300 ,borderColor: 'gray', borderWidth: 1 }}
                    value={this.state.email}
                />
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    textContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})