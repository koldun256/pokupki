import CategoryList from './CategoryList'
import Sidebar from './Sidebar'
import { useAppSelector } from './hooks'
import classes from './App.module.css'
import { selectCategories } from './purchasesSlice'
import themes from './colors.module.css'
import { selectTheme } from './themeSlice'
import ThemeSwitcher from './ThemeSwitcher'

function App() {
  const categories = useAppSelector(selectCategories)
  const theme = useAppSelector(selectTheme)

  return <div className={`${classes.app} ${themes[theme]}`}>
    <ThemeSwitcher />
    <Sidebar />
    <div className={classes.categories}>
      <CategoryList category={categories[0]} />
      <CategoryList category={categories[1]} />
    </div>
  </div>
}

export default App
