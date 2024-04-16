import CategoryList from './CategoryList'
import Sidebar from './Sidebar'
import { useAppSelector } from './hooks'
import classes from './App.module.css'
import { selectCategories } from './purchasesSlice'
import {default as theme} from './light.module.css'

function App() {
  const categories = useAppSelector(selectCategories)
  console.log(theme)

  return <div className={classes.app + ' ' + theme.light}>
    <Sidebar />
    <div className={classes.categories}>
      <CategoryList category={categories[0]} />
      <CategoryList category={categories[1]} />
    </div>
  </div>
}

export default App
