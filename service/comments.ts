import { PostComment } from '@/types/dashboard'
import axios from './instance'

export const postComment = async (params: PostComment) => {
  const response = await axios.post(`/comments`, {
    content: params.content,
    cardId: params.cardId,
    columnId: params.columnId,
    dashboardId: params.dashboardId,
  })
  return response
}

export const getComments = async () => {
  const response = await axios.post(`/comments`)
  return response
}
