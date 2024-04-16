import PurchaseList from './PurchaseList'
import PurchaseAddForm from './PurchaseAddForm'
import CategoryList from './CategoryList'
import { useAppSelector } from './hooks'
import classes from './App.module.css'
import { selectCategories } from './purchasesSlice'

function App() {
  const categories = useAppSelector(selectCategories)

  return <div className={classes.app}>
    <CategoryList category={categories[0]} />
    <CategoryList category={categories[1]} />

    <PurchaseList />
    <PurchaseAddForm />
  </div>
}

export default App
