/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface initialStateType {
  text: string
  warn: boolean
}

const initialState: initialStateType = {
  text: '',
  warn: false,
}

const myToastSlice = createSlice({
  name: 'myToast',
  initialState,
  reducers: {
    openMyToast: (state, action) => {
      state.text = action.payload.text
      state.warn = action.payload.warn
    },
    closeMyToast: (state) => {
      state.text = ''
      state.warn = false
    },
  },
})

export const { openMyToast, closeMyToast } = myToastSlice.actions

export default myToastSlice.reducer
