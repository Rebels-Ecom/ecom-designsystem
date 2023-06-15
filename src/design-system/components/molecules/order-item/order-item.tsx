import React from 'react'
import { Icon } from '../../atoms'
import styles from './order-item.module.css'
import cx from 'classnames'

export interface IOrderItem {
  children: React.ReactNode
  linkUrl?: string
  linkComponent: any
}

function OrderItem({ children, linkUrl, linkComponent: Link } : IOrderItem) {
  return (
    <div className={cx(styles.summaryItem, styles.summaryItemLink)}>
      {linkUrl ? (
          <Link className={styles.linkWrapper}>
            <div>{children}</div>
            {linkUrl && <Icon icon={'icon-chevrons-right'}></Icon>}
          </Link>
      ) : (
          <div>{children}</div>
      )}
    </div>
  )
}

export { OrderItem }