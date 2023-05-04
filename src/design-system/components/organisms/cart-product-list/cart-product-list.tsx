import React from 'react'
import styles from './cart-product-list.module.css'
import cx from 'classnames'

export interface ICartProductList {
  children: React.ReactNode
  className?: string
}

const CartProductList = ({ children, className }: ICartProductList) => {

  if(!children)
    return null

  return (
    <div className={cx(styles.cartProductList, className && className)}>
      {children}
    </div>
  )
}

export { CartProductList }
