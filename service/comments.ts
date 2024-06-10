import { PostComment, UpdateComment } from '@/types/dashboard'
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

export const getComments = async (params: { cardId: number; cursorId: number | null }) => {
  const cursorIdParam = params.cursorId ? `&cursorId=${params.cursorId}` : ''
  const response = await axios.get(`/comments?size=3&cardId=${params.cardId}${cursorIdParam}`)
  return response
}

export const updateComment = async (params: UpdateComment) => {
  const response = await axios.put(`/comments/${params.id}`, {
    content: params.content,
  })
  return response
}

export const deleteComment = async (param: number) => {
  const response = await axios.delete(`/comments/${param}`)
  return response
}
