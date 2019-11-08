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
    alignSelf: flex-end;
    justifyContent: flex-end;
`
export const InfoNumb = styled.Text`
    fontSize: 36px;
    color: #fff;
`

export const Logout = styled.TouchableHighlight`
    height: 40px;
    width: 40px;
    padding: 10px;
    margin: 10px;
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