import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './reducers/modalReducer'

const store = configureStore({
  reducer: { modal: modalReducer }, // reducers폴더에서 정의한 리듀서를 한데 모으는 곳 // 새 reducer를 정의했으면 이곳에 포함시켜줘야 함
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
