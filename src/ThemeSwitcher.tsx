import { useAppDispatch, useAppSelector } from "./hooks"
import { selectTheme, toggle } from "./themeSlice"
import classes from './ThemeSwitcher.module.css'
import Switch from 'react-switch'
import { Theme } from './themeSlice'

function ThemeSwitcher() {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

  return <Switch onChange={() => dispatch(toggle())} checked={theme == Theme.Light} className={classes.themeSwitcher}/>
}

export default ThemeSwitcher
