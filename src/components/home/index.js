import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { AsyncStorage } from 'react-native'

import { 
  Container, 
  InfoText, 
  CardInfos, 
  InfosContainer,
  Button,
  ButtonText,
  InfosTrips,
  InfoTripInfo,
  InfoTitle,
  InfoNumb,
  Logout,
} from './styles'
import api from '../../services/api';

export default class Main extends Component {
  state = {
    loggedInUser: [],
    error: null,
    clima: [],
    city: [],
    backpacks: [],
    trips: [],
    personalInfos: {}
  }

  async componentDidMount () {
   
      const user = JSON.parse( await AsyncStorage.getItem('@SpaceApi:user'))
      const token = await AsyncStorage.getItem('@SpaceApi:token')

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
            backpacks: res.data.backpacks,
            trips: res.data.trips
          })
        }
      } catch (err) {
        
      }

  }

  handleLogout = async () => {
    await AsyncStorage.clear()
    
    this.props.navigation.navigate(('SignIn'))
  }


  render() {
    return (
      <Container>
        
        <CardInfos
        source={require("../../../assets/AuthBackground.jpg")}
          overlayColor="#1F00DF"
          overlayAlpha={0.8}
          height={350} 
          contentPosition="bottom"
        >
          

          <InfosContainer>
            <Logout onPress={this.handleLogout}>
              <InfoNumb style={{ color: '#3c3c3c'}}>X</InfoNumb>
            </Logout>
            {this.state.error && <Text>{this.state.error}</Text>}
            <InfoText>{this.state.loggedInUser.username}</InfoText>
            <Button>
              <ButtonText>NOVA VIAGEM</ButtonText>
            </Button>
            <InfosTrips>
              <InfoTripInfo>
                <InfoNumb>{this.state.backpacks.length}</InfoNumb>
                <InfoTitle>Malas Feitas</InfoTitle>
              </InfoTripInfo>
              <InfoTripInfo>
                <InfoNumb>{this.state.trips.length}</InfoNumb>
                <InfoTitle>Viagens</InfoTitle>
              </InfoTripInfo>
              <InfoTripInfo>
                <InfoNumb>3</InfoNumb>
                <InfoTitle>Locais Favoritos</InfoTitle>
              </InfoTripInfo>
            </InfosTrips>

          </InfosContainer>
        </CardInfos>        
      </Container>
    )
  }
}
