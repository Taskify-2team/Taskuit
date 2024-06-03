import axios from './instance'

export const postColumn = async (params) => {
  const response = await axios.post(`/columns`, {
    headers: {
      'include-access-token': true,
    },
    body: {
      title: params.title,
      dashboardId: params.dashboardId,
    },
  })
  return response
}
