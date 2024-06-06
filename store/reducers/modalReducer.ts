/* eslint-disable no-param-reassign */
import { ModalTypeList } from '@/components/Modals/ModalTypeList'
import { createSlice } from '@reduxjs/toolkit'

interface initialStateType {
  modalState: boolean
  modalName: ModalTypeList | null
  modalProps: Record<string, any>
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
