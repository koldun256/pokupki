import PurchaseCard from './PurchaseCard.tsx'
import { useAppDispatch, useAppSelector } from './hooks.ts'
import { add, selectPurchaseList } from './purchasesSlice.ts'

function PurchaseList() {
  const dispatch = useAppDispatch()
  const purchaseList = useAppSelector(selectPurchaseList)

  const purcaseCards = purchaseList.map(purchase => <PurchaseCard purchase={purchase}/>)

  const addPurchase = () => dispatch(add({name: "bipki", cost: 100}))

  return <>
    {purcaseCards}
    <button onClick={addPurchase}>add</button>
  </>
}

export default PurchaseList
