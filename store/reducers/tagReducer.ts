/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import { getDbUserId, getTagList, postTag } from '@/service/tag'
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
        const { columnId } = action.payload
        if (!state.tagList[columnId]) {
          state.tagList[columnId] = []
          state.tagList[columnId] = action.payload
        }
        state.tagList[columnId] = action.payload
      })
      .addCase(postTag.fulfilled, (state, action) => {
        state.tagList = action.payload
      })
      .addCase(getDbUserId.fulfilled, (state, action) => {
        state.userDbId = action.payload.id
      })
  },
})

export default tagSlice.reducer
