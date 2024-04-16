import PurchaseList from './PurchaseList'
import PurchaseAddForm from './PurchaseAddForm'
import classes from './Sidebar.module.css'
import { useAppSelector } from './hooks.ts'
import { selectPurchaseList } from './purchasesSlice.ts'

function Sidebar() {
  const purchases = useAppSelector(selectPurchaseList)

  return <div className={classes.sidebar}>
    <PurchaseAddForm />
    <div className={classes.scroll}>
      <PurchaseList purchases={purchases} />
    </div>
  </div>
}

export default Sidebar
