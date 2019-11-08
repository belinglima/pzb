import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { onSignOut } from '../../services/auth'
  
export default () => (
  

        <View style={styles.textContent}>
            <Text style={{fontSize: 18}}>Deseja Realmente Sair?</Text>
            <Button
                onPress={this.handleLogout}
                onPress={() => onSignOut().then(() => this.props.navigation.navigate("SignIn"))}
                title="SIM"
                color="#841584"
              />
        </View>

);

const styles = StyleSheet.create({
  textContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});