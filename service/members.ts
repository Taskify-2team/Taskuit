import axios from './instance'

export const getMemberList = async (page: number, id: number, size?: number) => {
  const query = `?page=${page || 1}&size=${size || 4}&dashboardId=${id}`
  const response = await axios.get(`/members${query}`)
  return response.data
}

export const deleteMemberList = async (id: number) => {
  const response = await axios.delete(`/members/${id}`)
  return response
}
