import axios from './instance'

export const loginAccess = async (params) => {
  const response = await axios.post(`/auth/login`, {
    headers: { 'exclude-access-token': true },
    body: {
      email: params.email,
      password: params.password,
    },
  })
  return response
}
