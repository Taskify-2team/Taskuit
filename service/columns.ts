import axios from './instance'

export const postColumn = async (params) => {
  const response = await axios.post(`/columns`, {
    title: params.title,
    dashboardId: params.dashboardId,
  })
  return response
}
