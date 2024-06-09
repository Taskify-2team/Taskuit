/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface initialStateType {
  toastName: string
}

const initialState: initialStateType = {
  toastName: '',
}

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    openToast: (state, action) => {
      state.toastName = action.payload
    },
    closeToast: (state) => {
      state.toastName = ''
    },
  },
})

export const { openToast, closeToast } = toastSlice.actions

export default toastSlice.reducer
