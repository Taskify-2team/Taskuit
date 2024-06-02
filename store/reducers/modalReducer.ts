/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface Props {
  isOpen: boolean
  props: string
}

const initialState: Props = {
  isOpen: false,
  props: '',
}

const modalSlice = createSlice({
  name: 'modal', // 리듀서 이름 (useState로 치면 state의 이름)
  initialState, // 전역에서 관리할 데이터의 초기값 (useState로 치면 .. = useState( 요기에 들어가는 값 ))
  reducers: {
    // 디스패치로 어떤 동작을 할지 정하는 곳 (useState로 치면 setter함수에 해당하는)
    openModal: (state, action) => {
      state.isOpen = true
      state.props = action.payload // action.payload 안에 디스패치 호출할때 인자로 넘겨준 값이 들어있음
    },
    closeModal: (state) => {
      state.isOpen = false
      state.props = ''
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
