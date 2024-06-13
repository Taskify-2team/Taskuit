/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface StateType {
  tagList: any
}

const initialState: StateType = {
  tagList: {},
}

const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {},
})

export const {} = tagSlice.actions

export default tagSlice.reducer
