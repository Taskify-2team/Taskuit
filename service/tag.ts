/* eslint-disable @typescript-eslint/no-explicit-any */
import { TAG_URL } from '@/service/instance'
import { createAsyncThunk } from '@reduxjs/toolkit'

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
  async ({ userId, columnId, tagBody }: { userId: number; columnId: number; tagBody: Tag }) => {
    const response = await TAG_URL.post(`/tags?userId=${userId}&columnId=${columnId}`, tagBody)
    return response.data
  },
)
