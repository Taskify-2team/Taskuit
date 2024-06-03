import axios from './instance'

export const postDashboard = async (params) => {
  const response = await axios.post(`/dashboards`, {
    headers: {
      'include-access-token': true,
    },
    body: {
      title: params.title,
      color: params.color,
    },
  })
  return response
}
