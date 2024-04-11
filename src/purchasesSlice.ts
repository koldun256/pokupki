import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

export interface Purchase {
  name: string,
  cost: number,
  date: Date,
  // id: number,
  category: Category
}

export interface Category {
  name: string,
  color: string,
}

interface PurchasesState {
  categories: Category[],
  purchaseList: Purchase[]
}

const initialState: PurchasesState = { 
  purchaseList: [],
  categories: [
    {
      name: 'Еда',
      color: 'green'
    },
    {
      name: 'Дом',
      color: 'brown'
    }
  ]
}

export const purchasesSlice = createSlice({
  name: 'purchases',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Purchase>) => {
      state.purchaseList = [...state.purchaseList, action.payload]
    }
  }
})

export const { add } = purchasesSlice.actions

export const selectPurchaseList = (state: RootState) => state.purchases.purchaseList
export const selectCategories = (state: RootState) => state.purchases.categories

export default purchasesSlice.reducer
