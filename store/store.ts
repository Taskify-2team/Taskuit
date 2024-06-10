import { configureStore } from '@reduxjs/toolkit'
import toastReducer from './reducers/toastReducer'
import modalReducer from './reducers/modalReducer'
import myToastReducer from './reducers/myToastReducer'

const store = configureStore({
  reducer: { toast: toastReducer, modal: modalReducer, myToast: myToastReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
