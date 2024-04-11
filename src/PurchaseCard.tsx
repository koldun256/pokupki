import { Purchase } from './purchasesSlice'
type Props = { purchase: Purchase }

function PurchaseCard({ purchase }: Props) {
  return <div>{purchase.name}</div>
}

export default PurchaseCard
