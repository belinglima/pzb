import styled from 'styled-components'
import ImageOverlay from "react-native-image-overlay"

export const Container = styled.View`
    backgroundColor: #FFF;
    flex: 1;
    alignItems: center;
    justifyContent: flex-start;
    paddingHorizontal: 20px;
`
export const InfoText = styled.Text`
    color: #fff;
    fontSize: 24px;
    textAlign: center;
`
export const CardInfos = styled(ImageOverlay)`
`
export const InfosContainer = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    paddingHorizontal: 20px;
    paddingVertical: 40px;
`
export const Button = styled.TouchableHighlight`
    height: 45px;
    width: 50%;
    padding: 15px;
    margin: 15px;
    border-radius: 35;
    shadow-color: #000;
    shadow-offset: {width: 0; height: 30};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 5;
    backgroundColor: #fff;
    
`
export const ButtonText = styled.Text`
    color: #1F00DF;
    fontSize: 14px;
    textAlign: center;
`
export const InfosTrips = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    paddingHorizontal: 20px;
    paddingVertical: 20px;
`
export const InfoTripInfo = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    paddingHorizontal: 25px;
`
export const InfoTitle = styled.Text`
    fontSize: 12px;
    color: #B2A6FF;
`
export const InfoNumb = styled.Text`
    fontSize: 36px;
    color: #fff;
`

export const Logout = styled.TouchableHighlight`
    height: 50px;
    width: 50px;
    padding: 15px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    borderRadius: 96;
    shadow-color: #000;
    shadow-offset: {width: 0; height: 30};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 5;
    backgroundColor: #fff;
`