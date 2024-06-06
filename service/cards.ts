import { PostCard, UpdateCard } from '@/types/dashboard'
import axios from './instance'

export const postDashBoardCard = async (params: PostCard) => {
  const response = await axios.post(`/cards`, {
    assigneeUserId: params.assigneeUserId,
    dashboardId: params.dashboardId,
    columnId: params.columnId,
    title: params.title,
    description: params.description,
    dueDate: params.dueDate,
    tags: params.tags,
    imageUrl: params.imageUrl,
  })
  return response
}

export const getDashBoardCard = async (params: number) => {
  const response = await axios.get(`/cards?size=10&columnId=${params}`)
  return response
}

export const updateDashBoardCard = async (params: { newCardBody: UpdateCard; cardId: number }) => {
  const response = await axios.put(`/cards/${params.cardId}`, {
    assigneeUserId: params.newCardBody.assigneeUserId,
    columnId: params.newCardBody.columnId,
    title: params.newCardBody.title,
    description: params.newCardBody.description,
    dueDate: params.newCardBody.dueDate,
    tags: params.newCardBody.tags,
    imageUrl: params.newCardBody.imageUrl,
  })
  return response
}
