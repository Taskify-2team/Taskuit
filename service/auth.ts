import axios from './instance'

export default async function LoginAccess(email: string, password: string) {
  const response = await axios.post(`/auth/login`, {
    headers: { 'exclude-access-token': true },
    body: {
      email,
      password,
    },
  })
  return response
}
