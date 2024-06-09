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

export const postCardImage = async (params: { columnId: number; imageFile: File }) => {
  const formData = new FormData()
  formData.append('image', params.imageFile)
  const response = await axios.post(`/columns/${params.columnId}/card-image`, formData)
  return response.data
}

export const deleteColumn = async (columnId: number) => {
  return axios.delete(`/columns/${columnId}`)
}

export const updateColumn = async (params: { title: string; columnId: number }) => {
  const response = await axios.put(`/columns/${params.columnId}`, { title: params.title })
  return response
}
