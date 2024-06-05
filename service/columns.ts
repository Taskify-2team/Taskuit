import axios from './instance'

export const postColumn = async () => {
  const response = await axios.post(`/columns`)
  return response
}

export const getColumns = async (dashboardId: number) => {
  const queryParam = `?dashboardId=${dashboardId}`
  const response = await axios.get(`/columns${queryParam}`)
  return response
}
