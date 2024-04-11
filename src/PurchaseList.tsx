import { useState } from 'react'
import PurchaseCard from './PurchaseCard.tsx'

function PurchaseList() {
  const [purchases, setPurchases] = useState<string[]>([])
  const purcaseCards = purchases.map(todo => <PurchaseCard name={todo}/>)

  const addPurchase = () => setPurchases([...purchases, 'asdf'])

  return <>
    {purcaseCards}
    <button onClick={addPurchase}>add</button>
  </>
}

export default PurchaseList
