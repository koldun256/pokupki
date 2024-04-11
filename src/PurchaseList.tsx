import PurchaseCard from './PurchaseCard.tsx'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks.ts'
import { add, selectPurchaseList } from './purchasesSlice.ts'
import './PurchaseList.css'

function PurchaseList() {
  const dispatch = useAppDispatch()
  const purchaseList = useAppSelector(selectPurchaseList)

  const purcaseCards = purchaseList.map(purchase => <PurchaseCard purchase={purchase}/>)

  useEffect(() => {
    console.log('asdf')
    let cat1 = {name: 'Еда', color: 'green'}
    dispatch(add({name: 'Яблоко', cost: 30, date: new Date(), category: cat1}))
    dispatch(add({name: 'Яблоко', cost: 30, date: new Date(), category: cat1}))
  }, [])
  const addPurchase = () => {}

  return <div className='list'>
    {purcaseCards}
    <button onClick={addPurchase} className='add'>add</button>
  </div>
}

export default PurchaseList
