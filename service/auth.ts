import axios from './instance'

export default async function LoginAccess(id: string, password: string) {
  const response = await axios.post(
    `/auth/login`,
    {
      email: id,
      password,
    },
    {
      headers: { 'exclude-access-token': true },
    },
  )
  return response
}
