import { createAsyncThunk } from '@reduxjs/toolkit'
import { Card, CardList, PostCard, UpdateCard } from '@/types/dashboard'
import { CARD_REQUEST_SIZE } from '@/constants/number'
import axios from './instance'

export const postDashBoardCard = async (props: PostCard) => {
  const response = await axios.post(`/cards`, props)
  return response
}

export const getDashBoardCard = async (params: { cursorId?: number | null; columnId: number }) => {
  const cursorIdParam = params.cursorId ? `&cursorId=${params.cursorId}` : ''
  const response = await axios.get(`/cards?size=6&columnId=${params.columnId}${cursorIdParam}`)
  return response
}

export const getCardList = createAsyncThunk<CardList, { cursorId: number; columnId: number }>(
  'card/getCardList',
  async ({ cursorId, columnId }) => {
    const cursorIdParam = cursorId ? `&cursorId=${cursorId}` : ''
    const response = await axios.get(
      `/cards?size=${CARD_REQUEST_SIZE}&columnId=${columnId}${cursorIdParam}`,
    )
    return response.data
  },
)

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

export const updateCard = createAsyncThunk<Card, { newCardBody: UpdateCard; cardId: number }>(
  'card/updateCard',
  async (params) => {
    const response = await axios.put(`/cards/${params.cardId}`, {
      assigneeUserId: params.newCardBody.assigneeUserId,
      columnId: params.newCardBody.columnId,
      title: params.newCardBody.title,
      description: params.newCardBody.description,
      dueDate: params.newCardBody.dueDate,
      tags: params.newCardBody.tags,
      imageUrl: params.newCardBody.imageUrl,
    })
    return response.data
  },
)

export const deleteDashBoardCard = async (param: number) => {
  const response = await axios.delete(`/cards/${param}`)
  return response
}
