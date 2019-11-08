import { AsyncStorage } from 'react-native'

export const TOKEN_APP = '@PizabreakApp:token'
export const USER_AUTH = '@PizabreakApp:user'

export const isAuthenticated = async () => await AsyncStorage.getItem(TOKEN_APP) !== null
export const getToken = async () => await AsyncStorage.getItem(TOKEN_APP)

export const login = async token => {
   await AsyncStorage.setItem(TOKEN_APP, token)
}

export const setUser = async user => {
    await AsyncStorage.setItem(USER_AUTH, JSON.stringify(user))
}

export const onSignOut = () => AsyncStorage.removeItem(TOKEN_APP);
// export const logout = async () => {
//   await AsyncStorage.clear()
// }
