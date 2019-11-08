import axios from 'axios'
import { AsyncStorage } from 'react-native'

const api = axios.create({
    baseURL: 'https://pizzabreakapi.herokuapp.com'
})

api.interceptors.request.use( async config => {
    const token = await AsyncStorage.getItem('@PizabreakApp:token')
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default api
