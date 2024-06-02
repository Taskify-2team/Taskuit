/* eslint-disable no-param-reassign */
import { UserInfo } from '@/types/user'
import { createSlice } from '@reduxjs/toolkit'

const initialUserData = {
  user: {
    id: 0,
    email: '',
    nickname: '',
    profileImageUrl: '',
    createdAt: '',
    updatedAt: '',
  },
  accessToken: '',
}

interface Props {
  isLoggedIn: boolean
  userData: UserInfo
}

const initialState: Props = {
  isLoggedIn: false,
  userData: { ...initialUserData },
}

const authSlice = createSlice({
  name: 'auth', // 리듀서 이름 (useState로 치면 state의 이름)
  initialState, // 전역에서 관리할 데이터의 초기값 (useState로 치면 .. = useState( 요기에 들어가는 값 ))
  reducers: {
    // 디스패치로 어떤 동작을 할지 정하는 곳 (useState로 치면 setter함수에 해당하는)
    login: (state, action) => {
      state.isLoggedIn = true
      state.userData = action.payload || {} // action.payload 안에 디스패치 호출할때 인자로 넘겨준 값이 들어있음
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.userData = initialUserData
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
