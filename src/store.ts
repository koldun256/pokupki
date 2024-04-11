import { configureStore } from '@reduxjs/toolkit'
import purchasesReducer from './purchasesSlice.ts'

const store = configureStore({
  reducer: {
    purchases: purchasesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export default store
