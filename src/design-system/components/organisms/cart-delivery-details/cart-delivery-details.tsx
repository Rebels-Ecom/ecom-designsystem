import React from 'react'
import styles from './cart-delivery-details.module.css'
import cx from 'classnames'

export interface ICartDeliveryDetails {
  children: React.ReactNode
  loading? :boolean
  className?: string
}

function CartDeliveryDetails({ children, className, loading=false }: ICartDeliveryDetails) {
  return (
    <div className={cx(styles.cartDeliveryDetails, className ? className : '')}>
      {loading && <div className={styles.overlay}></div>}
      <div className={styles.contentWrapper}>
        {children}
      </div>
    </div>
  )
}

export { CartDeliveryDetails }