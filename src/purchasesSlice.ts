import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

export interface Purchase {
  name: string,
  cost: number,
  date: Date,
  id: number,
  category: Category
}

export interface Category {
  name: string,
  color: string,
  id: number
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
      color: '#83c092',
      id: 0
    },
    {
      name: 'Дом',
      color: '#e69875',
      id: 1
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
export const selectNextPurchaseId = (state: RootState) => {
  const list = selectPurchaseList(state)
  if(list.length == 0) return 0
  const last = list[list.length - 1]
  return last.id + 1
}
export const selectCategoryPurchases = (category: Category) => (state: RootState) => 
  selectPurchaseList(state).filter(purchase => purchase.category == category)
export const selectCategoryCost = (category: Category) => (state: RootState) =>
  selectCategoryPurchases(category)(state).reduce((acc, purchase) => acc + purchase.cost, 0)

export default purchasesSlice.reducer
