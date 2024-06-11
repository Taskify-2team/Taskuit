/* eslint-disable no-param-reassign */
import { getColumnList } from '@/service/columns'
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

const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    addColumn: (state, action) => {
      state.columnList.data = state.columnList.data.map((column) =>
        column.id === action.payload.newColumnName.columnId
          ? { ...column, title: action.payload.newColumnName.title }
          : column,
      )
    },
    deleteColumn: (state, action) => {
      state.columnList.data = state.columnList.data.filter(
        (prevColumn) => prevColumn.id !== action.payload.columnId,
      )
    },
  },
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

export const { addColumn, deleteColumn } = columnSlice.actions

export default columnSlice.reducer
