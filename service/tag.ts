/* eslint-disable @typescript-eslint/no-explicit-any */
import { TAG_URL } from '@/service/instance'
import camelcaseKeys from 'camelcase-keys'

export interface Tag {
  text: string
  color: string
}

export const getTagList = async (columnId: number) => {
  const { data } = await TAG_URL.get(`/tags?columnId=${columnId}`)
  return camelcaseKeys(data.data, { deep: true })
}

export const postTag = async ({
  userId,
  columnId,
  cardId,
  tags,
}: {
  userId: string
  columnId: number
  cardId: number
  tags: Tag[]
}) => {
  const { data } = await TAG_URL.post(`/tags?userId=${userId}&columnId=${columnId}`, {
    tags,
    cardId,
  })
  return camelcaseKeys(data.data, { deep: true })
}

export const updateTags = async ({
  userId,
  columnId,
  cardId,
  tags,
}: {
  userId: string
  columnId: number
  cardId: number
  tags: Tag[]
}) => {
  const { data } = await TAG_URL.put(`/tags?userId=${userId}&columnId=${columnId}`, {
    tags,
    cardId,
  })
  return camelcaseKeys(data.data, { deep: true })
}

export const getDbUserId = async ({ userId }: { userId: number }) => {
  const { data } = await TAG_URL.post(`/users?userId=${userId}`)
  return camelcaseKeys(data.data, { deep: true })
}
