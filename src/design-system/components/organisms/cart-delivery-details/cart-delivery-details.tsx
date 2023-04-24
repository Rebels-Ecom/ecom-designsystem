import React from 'react'
import styles from './cart-delivery-details.module.css'
import cx from 'classnames'

export interface ICartDeliveryDetails {
  children: React.ReactNode
  className?: string
}

function CartDeliveryDetails({ children, className }: ICartDeliveryDetails) {
  return (
    <div className={cx(styles.cartDeliveryDetails, className ? className : '')}>
      <div className={styles.contentWrapper}>
        {children}
      </div>
    </div>
  )
}

export { CartDeliveryDetails }