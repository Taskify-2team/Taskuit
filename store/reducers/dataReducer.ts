/* eslint-disable no-param-reassign */
import { ColumnList } from '@/types/dashboard'
import { createSlice } from '@reduxjs/toolkit'

interface initialStateType {
  columnList: ColumnList
  columnListStatus: string
}

const initialState: initialStateType = {
  columnList: {
    result: '',
    data: [],
  },
  columnListStatus: '',
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getColumnList.pending, (state) => {
        state.columnListStatus = 'pending'
      })
      .addCase(getColumnList.fulfilled, (state, action) => {
        state.columnListStatus = 'fulfilled'
        state.columnList = action.payload
      })
      .addCase(getColumnList.rejected, (state) => {
        state.columnListStatus = 'rejected'
      })
  },
})

// export const {} = dataSlice.actions

export default dataSlice.reducer
