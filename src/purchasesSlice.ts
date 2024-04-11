import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

export interface Purchase {
  name: string,
  cost: number
}

interface PurchasesState {
  purchaseList: Purchase[]
}

const initialState: PurchasesState = { purchaseList: [] }

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

export default purchasesSlice.reducer
