import axios from './instance'

export const getMemberList = async (page: number, id: number) => {
  const query = `?page=${page || 1}&size=4&dashboardId=${id}`
  const response = await axios.get(`/members${query}`)
  return response.data
}

export const deleteMember = async (id: number) => {
  const response = await axios.delete(`/members/${id}`)
  return response
}
