import PurchaseCard from './PurchaseCard.tsx'
import { useAppSelector } from './hooks.ts'
import { selectPurchaseList } from './purchasesSlice.ts'
import classes from './PurchaseList.module.css'

function PurchaseList() {
  const purchaseList = useAppSelector(selectPurchaseList)

  const purcaseCards = purchaseList.map(purchase => <PurchaseCard purchase={purchase}/>)
  
  return <div className={classes.list}>
    {purcaseCards}
  </div>
}

export default PurchaseList
