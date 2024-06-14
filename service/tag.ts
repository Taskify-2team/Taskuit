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
  async ({ userId, columnId }: { userId: string; columnId: number }) => {
    const { data } = await TAG_URL.get(`/tags?userId=${userId}&columnId=${columnId}`)
    return camelcaseKeys(data.data, { deep: true })
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
    userId: string
    columnId: number
    cardId: number
    tags: TagsType[]
  }) => {
    const { data } = await TAG_URL.post(`/tags?userId=${userId}&columnId=${columnId}`, {
      tags,
      cardId,
    })
    return camelcaseKeys(data.data, { deep: true })
  },
)

export const getDbUserId = createAsyncThunk(
  'tag/getDbUserId',
  async ({ userId }: { userId: number }) => {
    const { data } = await TAG_URL.post(`/users?userId=${userId}`)
    return camelcaseKeys(data.data, { deep: true })
  },
)
