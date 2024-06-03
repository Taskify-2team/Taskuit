import axios from './instance'

export const loginAccess = async (params) => {
  const response = await axios.post(`/auth/login`, {
    email: params.email,
    password: params.password,
  })
  return response
}
