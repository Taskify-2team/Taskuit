import axios from './instance'

export default async function loginAccess (params) => {
  const response = await axios.post(`/auth/login`, {
    headers: { 'exclude-access-token': true },
    body: {
      email: params.email,
      password: params.password,
    },
  })
  return response
}
