/* eslint-disable no-param-reassign */
import axios, { InternalAxiosRequestConfig } from 'axios'
import { getSession, useSession } from 'next-auth/react'

const INSTANCE_URL = axios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/5-2',
})

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://taskuit.vercel.app/api'
    : 'http://localhost:3000/api'

export const TAG_URL = axios.create({
  baseURL,
})

INSTANCE_URL.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const session = await getSession()
    if (config.headers['exclude-access-token']) {
      delete config.headers['exclude-access-token']
      return config
    }
    if (session) {
      const accessToken = session.accessToken
      // const accessToken = localStorage.getItem('accessToken')
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default INSTANCE_URL
