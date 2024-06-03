import axios from 'axios'

const INSTANCE_URL = axios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/5-2',
})

INSTANCE_URL.interceptors.request.use(
  async (config) => {
    if (config.headers['include-access-token']) {
      const accessToken = localStorage.getItem('accessToken')
      config.headers.Authorization = `Bearer ${accessToken}`
      delete config.headers['include-access-token']
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default INSTANCE_URL
