import { useAppDispatch, useAppSelector } from './hooks.ts'
import { add, selectCategories, selectNextPurchaseId } from './purchasesSlice.ts'
import { CSSProperties, useState } from 'react'
import classes from './PurchaseAddForm.module.css'
import { Category } from './purchasesSlice.ts'

type ButtonProps = {
  category: Category,
  selected: boolean,
  onSelect: () => void
}

function CategoryButton({ category, selected, onSelect }: ButtonProps) {
  const style = {'--color': category.color} as CSSProperties
  return <div
    style={style}
    onClick={onSelect}
    className={classes.categoryButton + (selected ? ' ' + classes.selected : '')}>
    {category.name}
  </div>
}

function PurchaseAddForm() {
  console.log(classes)
  const dispatch = useAppDispatch()

  const [name, setName] = useState<string>('')
  const [cost, setCost] = useState<string>('')
  const nextId = useAppSelector(selectNextPurchaseId)
  const categories = useAppSelector(selectCategories)
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0])

  const submit = () => {
    if(cost == '' || name == '') return
    dispatch(add({
      name,
      cost: parseInt(cost),
      category: selectedCategory,
      id: nextId,
      date: new Date()
    }))
    setName('')
    setCost('')
    setSelectedCategory(categories[0])
  }

  const categoryButtons = categories.map(category => <CategoryButton 
    category={category} 
    key={category.id}
    selected={category == selectedCategory}
    onSelect={() => setSelectedCategory(category)}
  />)

  return <div className={classes.addForm}>
    <div className={classes.row1}>
      <input className={classes.name} value={name} onChange={e => setName(e.target.value)} />
      <input className={classes.cost} value={cost} onChange={e => /^\d*$/.test(e.target.value) && setCost(e.target.value)} />
    </div>
    <div className={classes.categorySelector}>{categoryButtons}</div>
    <button className={classes.submit} onClick={submit}>Add</button>
  </div>
}

export default PurchaseAddForm
