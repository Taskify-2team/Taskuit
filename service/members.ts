import axios from './instance'

export const getMemberList = async (params) => {
  const query = `?page=${params.page || 1}&size=${params.size || 20}&dashboardId=${params.dashboardId}`
  const response = await axios.get(`/members${query}`, {
    headers: {
      'include-access-token': true,
    },
  })
  return response
}
