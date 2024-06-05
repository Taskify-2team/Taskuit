/* eslint-disable no-param-reassign */
import { ModalListType } from '@/components/Modals/ModalListType'
import { createSlice } from '@reduxjs/toolkit'

interface initialStateType {
  modalState: boolean
  modalName: ModalListType | null
  modalProps: Record<string, string | number | null>
}

const initialState: initialStateType = {
  modalState: false,
  modalName: null,
  modalProps: {},
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalState = true
      state.modalName = action.payload.modalName
      state.modalProps = action.payload.modalProps
    },
    closeModal: (state) => {
      state.modalState = false
      state.modalName = null
      state.modalProps = {}
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
