import React from 'react'
import styles from './order-confirmation.module.css'
import cx from 'classnames'

export interface IOrderConfirmation {
    children: React.ReactNode
    className?: string
}

function OrderConfirmation({ children, className } : IOrderConfirmation) {
  return (
    <div className={cx(styles.orderConfirmation, className ? className : '')}>
      {children} 
    </div>
  )
}

export { OrderConfirmation }