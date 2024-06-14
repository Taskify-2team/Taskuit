/* eslint-disable @typescript-eslint/no-explicit-any */
import { TagsType } from '@/components/Modals/ModalContents/EditToDo'
import { TAG_URL } from '@/service/instance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import camelcaseKeys from 'camelcase-keys'

export interface Tag {
  cardId: number
  text: string
  color: string
}

export const getTagList = createAsyncThunk(
  'tag/getTagList',
  async ({ userId, columnId }: { userId: number; columnId: number }) => {
    const response = await TAG_URL.get(`/tags?userId=${userId}&columnId=${columnId}`)
    return response.data
  },
)

export const postTag = createAsyncThunk(
  'tag/postTag',
  async ({
    userId,
    columnId,
    cardId,
    tags,
  }: {
    userId: number
    columnId: number
    cardId: number
    tags: TagsType[]
  }) => {
    const response = await TAG_URL.post(`/tags?userId=${userId}&columnId=${columnId}`, {
      tags,
      cardId,
    })
    return response.data
  },
)

export const getDbUserId = createAsyncThunk(
  'tag/getUserId',
  async ({ userId }: { userId: number }) => {
    const response = await TAG_URL.post(`/users?userId=${userId}`)
    return camelcaseKeys(response.data, { deep: true })
  },
)
