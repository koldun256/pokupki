import PurchaseList from './PurchaseList'
import PurchaseAddForm from './PurchaseAddForm'
import classes from './Sidebar.module.css'

function Sidebar() {
  return <div className={classes.sidebar}>
    <PurchaseAddForm />
    <PurchaseList />
  </div>
}

export default Sidebar
