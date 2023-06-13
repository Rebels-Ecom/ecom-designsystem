import React from 'react'
import styles from './shopping-list.module.css'

export interface IShoppingList {
    children: React.ReactNode
}

export default function ShoppingList({children} : IShoppingList) {
  return (
    <div className={styles.listWrapper}>{children}</div>
  )
}

export { ShoppingList }
