import styled from 'styled-components';
import ImageOverlay from 'react-native-image-overlay'

export const Background = styled(ImageOverlay)`
`

export const Container = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    width: 100%;
`

export const Logo = styled.Image`
    height: 30%;
    marginBottom: 40px;
`

export const Input = styled.TextInput`
    paddingHorizontal: 20px;
    paddingVertical: 12px;
    background-color: transparent;
    alignSelf: stretch;
    marginBottom: 15px;
    marginHorizontal: 20px;
    fontSize: 16px;
    borderBottomColor: #fff;
    color: #fff;
    borderBottomWidth: 2;
`
export const Button = styled.TouchableHighlight`
    padding: 20px;
    border-radius: 35;
    shadow-color: #000;
    shadow-offset: {width: 0; height: 30};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 5;
    backgroundColor: #fff;
    alignSelf: stretch;
    margin: 15px;
    marginHorizontal: 20px;
`
export const ErrorMessage = styled.Text`
    textAlign: center;
    color: #ce2009;
    fontSize: 16px;
    marginBottom: 15px;
    marginHorizontal: 20px;
`

export const ButtonText = styled.Text`
    color: #2900FF;
    fontSize: 16px;
    textAlign: center;
`

export const SignUpLink = styled.TouchableHighlight`
    padding: 10px;
    marginTop: 20px;
`
export const SignUpLinkText = styled.Text`
    color: #999;
    fontWeight: bold;
    fontSize: 16px;
    textAlign: center;
`
