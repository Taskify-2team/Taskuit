import axios from './instance'

const getMemberList = async (page: number, id: number) => {
  const query = `?page=${page || 1}&size=4&dashboardId=${id}`
  const response = await axios.get(`/members${query}`)
  return response.data
}

export default getMemberList
