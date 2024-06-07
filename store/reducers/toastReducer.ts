/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface initialStateType {
  toastState: boolean
  toastName: string
}

const initialState: initialStateType = {
  toastState: false,
  toastName: '',
}

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    openToast: (state, action) => {
      state.toastState = true
      state.toastName = action.payload
    },
    closeToast: (state) => {
      state.toastState = false
      state.toastName = ''
    },
  },
})

export const { openToast, closeToast } = toastSlice.actions

export default toastSlice.reducer
