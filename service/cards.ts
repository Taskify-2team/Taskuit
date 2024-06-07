import { PostCard, UpdateCard } from '@/types/dashboard'
import axios from './instance'

export const postDashBoardCard = async ({
  cardBody: { assigneeUserId, dashboardId, columnId, title, description, dueDate, tags },
  imageUrl,
}: {
  cardBody: PostCard
  imageUrl: string
}) => {
  const response = await axios.post(`/cards`, {
    assigneeUserId,
    dashboardId,
    columnId,
    title,
    description,
    dueDate,
    tags,
    imageUrl,
  })
  return response
}

export const getDashBoardCard = async (param: number) => {
  const response = await axios.get(`/cards?size=10&columnId=${param}`)
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

export const deleteDashBoardCard = async (param: number) => {
  const response = await axios.delete(`/cards/${param}`)
  return response
}
