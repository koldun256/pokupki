import { Category, selectCategoryPurchases, selectCategoryCost } from './purchasesSlice'
import { useAppDispatch, useAppSelector } from './hooks'
import PurchaseCard from './PurchaseCard'
import classes from './CategoryList.module.css'
import { CSSProperties } from 'react'

type Props = { category: Category }

function CategoryList(props: Props) {
  const cost = useAppSelector(selectCategoryCost(props.category))
  const purchases = useAppSelector(selectCategoryPurchases(props.category))
  
  const purchaseElements = purchases.map(purchase => <PurchaseCard purchase={purchase} key={purchase.id} />)
  const style = {'--color': props.category.color} as CSSProperties

  return <div className={classes.categoryList} style={style}>
    <div className={classes.header}>{props.category.name}</div>
    <div className={classes.purchases}>{purchaseElements}</div>
    <div className={classes.footer}>{cost}</div>
  </div>
}

export default CategoryList
