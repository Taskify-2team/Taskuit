import axios from './instance'

export const postCard = async (params) => {
  const response = await axios.post(`/cards`, {
    headers: {
      'include-access-token': true,
    },
    body: {
      assigneeUserId: params.assigneeUserId,
      dashboardId: params.dashboardId,
      columnId: params.columnId,
      title: params.title,
      description: params.description,
      dueDate: params.dueDate,
      tags: params.tags,
      imageUrl: params.imageUrl,
    },
  })
  return response
}
