import { Purchase } from './purchasesSlice'
import classes from './PurchaseCard.module.css'

type Props = { purchase: Purchase }

function PurchaseCard({ purchase }: Props) {
  return <div className={classes.card}>
    <div className={classes.category} style={{backgroundColor: purchase.category.color}}></div>
    <div>
      <div className={classes.name}>{purchase.name}</div>
      <div className={classes.date}>{purchase.date.toDateString()}</div>
    </div>
    <div className={classes.cost}>{purchase.cost}</div>
  </div>
}

export default PurchaseCard
