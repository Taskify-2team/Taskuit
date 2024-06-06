import axios from './instance'

export default async function SignUpAccess(id: string, nickname: string, password: string) {
  const response = await axios.post(`/users`, {
    email: id,
    nickname,
    password,
  })
  return response
}
