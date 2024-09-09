import React from 'react'
import styles from './cart-order-details.module.css'
import cx from 'classnames'

export interface ICartOrderDetails {
  children: React.ReactNode
  className?: string
}

/** @deprecated */
function CartOrderDetails({children, className}: ICartOrderDetails) {
  return (
    <div className={cx(styles.cartOrderDetails, className ? className : '')}>
      {children}
    </div>
  )
}

export { CartOrderDetails }