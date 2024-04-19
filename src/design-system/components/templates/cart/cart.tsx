import React from 'react'
import styles from './cart.module.css'

export interface ICart {
  children: React.ReactNode
}

function Cart({ children }: ICart) {
  return (
    <div className={styles.cart}>
      {children}
    </div>
  )
}

export { Cart }
