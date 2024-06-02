import axios from 'axios'

const INSTANCE_URL = axios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/5-2',
})

export default INSTANCE_URL
