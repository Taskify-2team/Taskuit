import axios from './instance'

export const postDashboard = async (params: { title: string; color: string }) => {
  const response = await axios.post(`/dashboards`, {
    title: params.title,
    color: params.color,
  })
  return response
}

export const getDashBoard = async (page: number) => {
  const query = `navigationMethod=pagination&page=${page}&size=5`
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

export const inviteUser = async (params: { dashboardId: number; email: string }) => {
  const response = await axios.post(`/dashboards/${params.dashboardId}/invitations`, {
    email: params.email,
  })
  return response
}

export const getDashBoardInvitation = async (id: number, page: number) => {
  const query = `page=${page}&size=4`
  const response = await axios.get(`/dashboards/${id}/invitations?${query}`)
  return response.data
}

export const cancelInvite = async (dashboardId: number, invitationId: number) => {
  const response = await axios.delete(`/dashboards/${dashboardId}/invitations/${invitationId}`)
  return response
}

export const deleteDashBoard = async (dashboardId: number) => {
  const response = await axios.delete(`dashboards/${dashboardId}`)
  return response
}
