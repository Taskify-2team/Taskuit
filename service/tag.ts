/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '@/service/instance'
import { createAsyncThunk } from '@reduxjs/toolkit'

export interface Tag {
  userId: number
  cardId: number
  content: string
  color: string
}

export const getTagList = createAsyncThunk<any, any>('tag/getTagList', async ({ userId }) => {
  const response = await axios.get(`/api/tag`, userId)
  return response.data
})
