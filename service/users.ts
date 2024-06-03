import axios from './instance'

export const signupAccess = async (params) => {
  const response = await axios.post(`/users`, {
    headers: {
      'include-access-token': true,
    },
    body: {
      email: params.email,
      nickname: params.nickname,
      password: params.password,
    },
  })
  return response
}
