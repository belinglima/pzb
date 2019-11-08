import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    View
  } from 'react-native';

export default class Carrinho extends Component {
  render() {
    return (
    <View style={styles.textContent}>
        <Text style={{fontSize: 18}}>Carrinho de Compras</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    textContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
  
    }
  });