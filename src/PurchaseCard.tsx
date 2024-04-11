import { Purchase } from './purchasesSlice'
import './PurchaseCard.css'

type Props = { purchase: Purchase }

function PurchaseCard({ purchase }: Props) {
  return <div className='card'>
    <div className='category' style={{backgroundColor: purchase.category.color}}></div>
    <div>
      <div className='name'>{purchase.name}</div>
      <div className='date'>{purchase.date.getFullYear()}</div>
    </div>
    <div className='cost'>{purchase.cost}</div>
  </div>
}

export default PurchaseCard
