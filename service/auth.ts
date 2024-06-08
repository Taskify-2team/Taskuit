import axios from './instance'

export const LoginAccess = async (id: string, password: string) => {
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

export const updatePassword = async ({
  password,
  newPassword,
}: {
  password: string
  newPassword: string
}) => {
  const response = await axios.put(`/auth/password`, {
    password,
    newPassword,
  })
  return response.data
}
