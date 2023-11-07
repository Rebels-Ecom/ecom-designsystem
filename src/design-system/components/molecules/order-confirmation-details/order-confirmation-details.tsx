import React from 'react'
import styles from './order-confirmation-details.module.css'
import cx from 'classnames'

export type TPaddingSize = 'sm' | 'md' | 'lg'
export interface IOrderConfirmationItem {
  label: string
  value: string
  isTotal?: boolean
}

export interface IOrderConfirmationDetails {
  detailItems: IOrderConfirmationItem[]
  label?: string
  withBackground?: boolean
  withBorder?: boolean
  padding?: TPaddingSize
}

function OrderConfirmationDetails({ detailItems, label, withBackground, withBorder, padding = 'md' }: IOrderConfirmationDetails) {
  return (
    <div
      className={cx('body', styles.detailItemWrapper, withBackground && styles.withBackground, withBorder && styles.withBorder, styles[`padding-${padding}`])}
    >
      {label && (
        <p className={styles.detailItem}>
          <b>{label}</b>
        </p>
      )}
      {detailItems.map((item: IOrderConfirmationItem, index: number) => (
        <p className={styles.detailItem} key={`${item.label}-${index}`}>
          <span>{item.label}</span>
          <span className={item.isTotal ? styles.totalAmount : ''}>{item.value}</span>
        </p>
      ))}
    </div>
  )
}

export { OrderConfirmationDetails }
