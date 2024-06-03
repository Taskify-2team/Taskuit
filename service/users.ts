import axios from './instance'

export const signupAccess = async (params) => {
  const response = await axios.post(`/users`, {
    email: params.email,
    nickname: params.nickname,
    password: params.password,
  })
  return response
}
