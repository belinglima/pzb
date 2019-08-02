import axios from 'axios'
import { getToken } from './auth'
import { AsyncStorage } from 'react-native'

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

api.interceptors.request.use( async config => {
    const token = await AsyncStorage.getItem('@PizabreakApp:token')
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default api
