import axios from 'axios'
import { logout } from '../shared/hooks'

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:3001/hotel-management/v1',
  timeout: 5000
})

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem('user')
    if (userDetails) {
      const token = JSON.parse(userDetails).token
      config.headers.Authorization = `${token}`
    }
    console.log(userDetails)
    return config
  },
  (e) => {
    return Promise.reject(e)
  }
)

export const login = async (data) => {
  try {
    return await apiClient.post('auth/login', data)
  } catch (e) {
    return {
      error: true,
      e
    }
  }
}
export const register = async (data) => {
  try {
    return await apiClient.post('/auth/register', data)
  } catch (e) {
    return {
      error: true,
      e
    }
  }
}

export const listHotels = async (data) => {
  try {
    return await apiClient.get('/hotel', data)
  } catch (e) {
    return {
      error: true,
      e
    }
  }
}

export const addHotel = async (data) => {
  try {
    return await apiClient.post('/hotel', data)
  } catch (e) {
    return {
      error: true,
      e
    }
  }
}
