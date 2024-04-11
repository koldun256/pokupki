import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from './hooks.ts'
import { add } from './purchasesSlice.ts'
import { useState } from 'react'
import classes from './PurchaseAddForm.module.css'

function PurchaseAddForm() {
  const dispatch = useAppDispatch()

  const [name, setName] = useState<string>('')
  const [cost, setCost] = useState<string>('')

  const submit = () => {
    const cat = { name: 'Еда', color: '#7fbbb3' }
    dispatch(add({
      name,
      cost: parseInt(cost),
      category: cat,
      date: new Date()
    }))
  }

  return <div className={classes.addForm}>
    <div className={classes.row1}>
      <input className={classes.name} value={name} onChange={e => setName(e.target.value)} />
      <input className={classes.cost} value={cost} onChange={e => setCost(e.target.value)} />
    </div>
    <button className={classes.add} onClick={submit}>Add</button>
  </div>
}

export default PurchaseAddForm
