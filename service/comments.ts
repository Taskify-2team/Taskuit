import axios from './instance'

export const postComment = async (params) => {
  const response = await axios.post(`/comments`, {
    headers: {
      'include-access-token': true,
    },
    body: {
      content: params.content,
      cardId: params.cardId,
      columnId: params.columnId,
      dashboardId: params.dashboardId,
    },
  })
  return response
}
