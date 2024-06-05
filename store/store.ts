import { configureStore } from '@reduxjs/toolkit'
import toastReducer from './reducers/toastReducer'
import modalReducer from './reducers/modalReducer'

const store = configureStore({
  reducer: { toast: toastReducer, modal: modalReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
