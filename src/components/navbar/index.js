import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';
import TabBar from "react-native-nav-tabbar";
import Categoria from '../screens/categorias';
import Pedidos from '../screens/pedidos';
import User from '../screens/user';
import Logout from '../screens/logout';
export default class index extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <View style={styles.container}>
          <TabBar>
              <TabBar.Item
                icon={require('../../../assets/Home.png')}
                selectedIcon={require('../../../assets/HomeActivee.png')}
                title="Home"
              >
                <Categoria />
              </TabBar.Item> 
              <TabBar.Item
                icon={require('../../../assets/icon-product-list-white.png')}
                selectedIcon={require('../../../assets/icon-product-list-colore.png')}
                title="Pedidos"
              >
                <Pedidos />
              </TabBar.Item>
              <TabBar.Item
                 icon={require('../../../assets/Friend.png')}
                 selectedIcon={require('../../../assets/FriendActivee.png')}
                 title="Perfil"
              >
                <User />
              </TabBar.Item>
              <TabBar.Item
              
                icon={require('../../../assets/logoutC.png')}
                selectedIcon={require('../../../assets/logout.png')}
                title="Sair"
              >
               <Logout />                               
              </TabBar.Item>
          </TabBar>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      top: 0,
      flexDirection:"row",
      justifyContent:"flex-end",
      alignItems: 'center',
  },
  textContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

  },
});