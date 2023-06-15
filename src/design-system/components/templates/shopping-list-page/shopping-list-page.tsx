import React from 'react'
import styles from './shopping-list-page.module.css'

export interface IShoppingList {
    children: React.ReactNode
}

export default function ShoppingListPage({children} : IShoppingList) {
  return (
    <div>{children}</div>
  )
}

export { ShoppingListPage }
