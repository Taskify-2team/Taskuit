/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface initialStateType {
  modalName: string
  modalProps: Record<string, string | number | null>
}

const initialState: initialStateType = {
  modalName: '',
  modalProps: {},
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalName = action.payload.modalName
      state.modalProps = action.payload.modalProps
    },
    closeModal: (state) => {
      state.modalName = ''
      state.modalProps = {}
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
