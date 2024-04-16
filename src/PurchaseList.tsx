import PurchaseCard from './PurchaseCard.tsx'
import classes from './PurchaseList.module.css'
import { Purchase } from './purchasesSlice.ts'

type Props = {
  purchases: Purchase[]
}

function PurchaseList(props: Props) {
  const content = props.purchases.length == 0 ?
    <div className={classes.placeholder}>Тут ничего нету</div> :
    props.purchases.map(purchase => <PurchaseCard purchase={purchase}/>)

  return <div className={classes.list}> {content} </div>
}

export default PurchaseList
