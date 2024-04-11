import PurchaseList from './PurchaseList'
import PurchaseAddForm from './PurchaseAddForm'
import classes from './App.module.css'

function App() {
  return <div className={classes.app}>
    <PurchaseList />
    <PurchaseAddForm />
  </div>
}

export default App
