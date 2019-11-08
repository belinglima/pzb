import React from "react";
import { TouchableHighlight, StyleSheet, Text, View, ScrollView, Image } from "react-native";
import api from '../../services/api'
import get from '../../services/auth'


class Categoria extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.handleMonta()
  }

  async handleMonta() {
    try {
      const response = await api.get('/auth/category/');
      if(response){
        this.setState({
          data: response.data
        })
      }else {
        console.log("error undefined categorias")
      }
    } catch (error) {
      console.log(error)
    }
  }


  handleNavigation = (id) => {
    // console.log("t",id)
  }

  render() {
    const { data } = this.state;
    return (
        <ScrollView>
            <View >
              {data ? data.map(el => (
                <TouchableHighlight key={el.id} onPress={this.handleNavigation(el.id)}>
                  <Image 
                      source={{uri: `${el.image[0] === null ? 
                        [el.image.length -1].url : `<Text style={styles.text}>${el.title}</Text>` }` 
                      }}
                      style={styles.item}
                    />
                  </TouchableHighlight>
                ))
                :
                <Text>Teste de Categoria</Text>
              }
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "rgba(199, 21, 133, 0.56)",
    flexBasis: 0,
    flexGrow: 1,
    margin: 4,
    top: 30,
    bottom: 20,
    padding: 60,
    height: 100
  },
  text: {
    color: "#fff"
  }
});

export default Categoria;