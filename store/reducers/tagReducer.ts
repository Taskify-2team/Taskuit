/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import { getDbUserId, getTagList, postTag, updateTags } from '@/service/tag'
import { createSlice } from '@reduxjs/toolkit'

interface TagListType {
  tagList: any
  userDbId: string
}

const initialState: TagListType = {
  tagList: {},
  userDbId: '',
}

const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTagList.fulfilled, (state, action) => {
        let columnId
        action.payload.forEach((tag) => {
          columnId = tag.columnId
          if (!state.tagList[columnId]) {
            state.tagList[columnId] = []
            state.tagList[columnId] = [...state.tagList[columnId], tag]
          }
          const foundIndex = state.tagList[columnId].findIndex((v) => v.id === tag.cardId)
          if (foundIndex === -1) {
            state.tagList[columnId] = [...state.tagList[columnId], tag]
          } else {
            state.tagList[columnId][foundIndex] = tag
          }
        })
      })
      .addCase(getDbUserId.fulfilled, (state, action) => {
        state.userDbId = action.payload.id
      })
      .addCase(postTag.fulfilled, () => {})
      .addCase(updateTags.fulfilled, (state, action) => {})
  },
})

export default tagSlice.reducer
