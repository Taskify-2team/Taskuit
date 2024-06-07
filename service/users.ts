import axios from './instance'

export const SignUpAccess = async (id: string, nickname: string, password: string) => {
  const response = await axios.post(`/users`, {
    email: id,
    nickname,
    password,
  })
  return response
}

export const getUserInfo = async () => {
  const response = await axios.get(`/users/me`)
  return response
}
