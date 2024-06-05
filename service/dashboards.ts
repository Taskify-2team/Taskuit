import axios from './instance'

export const postDashboard = async (params: { title: string; color: string }) => {
  const response = await axios.post(`/dashboards`, {
    title: params.title,
    color: params.color,
  })
  return response
}

export const getDashBoard = async (page: number, size: number = 5) => {
  const query = `navigationMethod=pagination&page=${page}&size=${size}`
  const response = await axios.get(`/dashboards?${query}`)
  return response.data
}

export const getDashBoardInfo = async (id: number) => {
  const response = await axios.get(`/dashboards/${id}`)
  return response.data
}

export const putDashBoard = async (id: number, dashBoard: { title: string; color: string }) => {
  const response = await axios.put(`/dashboards/${id}`, {
    title: dashBoard.title,
    color: dashBoard.color,
  })
  return response
}
