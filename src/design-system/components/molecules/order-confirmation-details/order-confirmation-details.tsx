import React from 'react'
import styles from './order-confirmation-details.module.css'
import cx from 'classnames'

export interface IOrderConfirmationItem {
    label: string
    value: string
    isTotal?: boolean
}

export interface IOrderConfirmationDetails {
    detailItems: IOrderConfirmationItem[],
    label?: string,
    withBackground?: boolean
}

function OrderConfirmationDetails({detailItems, label, withBackground} : IOrderConfirmationDetails) {
  return (
    <div className={cx('body', styles.detailItemWrapper, withBackground && styles.withBackground)}>
          {label && <p className={styles.detailItem}><b>{label}</b></p>}
          {
            detailItems.map((item: IOrderConfirmationItem)=>
                <p className={styles.detailItem}>
                    <span>{item.label}</span>
                    <span className={item.isTotal ? styles.totalAmount : ''}>{item.value}</span>
                </p>)
          }
    </div>
  )
}

export { OrderConfirmationDetails }