import axios from './instance'

export const postDashboard = async (params) => {
  const response = await axios.post(`/dashboards`, {
    title: params.title,
    color: params.color,
  })
  return response
}
