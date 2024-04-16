import PurchaseList from './PurchaseList'
import PurchaseAddForm from './PurchaseAddForm'
import classes from './Sidebar.module.css'

function Sidebar() {
  return <div className={classes.sidebar}>
    <PurchaseAddForm />
    <div className={classes.scroll}>
    <PurchaseList />
    </div>
  </div>
}

export default Sidebar
