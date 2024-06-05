import axios from './instance'

export const postColumn = async (params: { title: string; dashboardId: number }) => {
  const response = await axios.post(`/columns`, {
    title: params.title,
    dashboardId: params.dashboardId,
  })
  return response
}

export const getColumns = async (dashboardId: string) => {
  const queryParam = `?dashboardId=${dashboardId}`
  const response = await axios.get(`/columns${queryParam}`)
  return response
}
