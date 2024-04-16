import CategoryList from './CategoryList'
import Sidebar from './Sidebar'
import { useAppSelector } from './hooks'
import classes from './App.module.css'
import { selectCategories } from './purchasesSlice'

function App() {
  const categories = useAppSelector(selectCategories)

  return <div className={classes.app}>
    <Sidebar />
    <div className={classes.categories}>
      <CategoryList category={categories[0]} />
      <CategoryList category={categories[1]} />
    </div>
  </div>
}

export default App
