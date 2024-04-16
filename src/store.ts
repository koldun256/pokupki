import { configureStore } from '@reduxjs/toolkit'
import purchasesReducer from './purchasesSlice.ts'
import themeReducer from './themeSlice.ts'

const store = configureStore({
  reducer: {
    purchases: purchasesReducer,
    theme: themeReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export default store
