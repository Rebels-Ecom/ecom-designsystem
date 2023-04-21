import React from 'react'
import styles from './cart-sidebar.module.css'
import cx from 'classnames'

export interface ICartSidebar {
  children: React.ReactNode
  classNames?: Array<string>
}

function CartSidebar({children, classNames=[]}: ICartSidebar) {
  return (
    <div className={cx(styles.cartSidebar, ...classNames)}>
        {children}
    </div>
  )
}

export { CartSidebar }