import React from 'react'
import { Heading, Icon } from '../../atoms'
import styles from './order-item.module.css'
import cx from 'classnames'
import { getOrderStatusTagColor } from '../../../../helpers/tag-helper'
import { Tag, TTagColor } from '../../atoms/tag/tag'

export interface IOrderItem {
  title?: string
  children: React.ReactNode
  orderDate?: string
  deliveryDate?: string
  orderStatus?: string
  linkUrl?: string
  linkComponent: any
  onClick?: () => void
}

function OrderItem({ title, children, orderDate, deliveryDate, orderStatus, linkUrl, linkComponent: Link, onClick }: IOrderItem) {
  return (
    <div className={styles.orderItem}>
      {linkUrl ? (
        <Link className={styles.linkWrapper} to={linkUrl} href={linkUrl} onClick={onClick}>
          <div className={styles.linkContentWrapper}>
            {orderDate || deliveryDate ? (
              <div className={styles.tagsWrapper}>
                {orderDate && <Tag text={orderDate} shape={'rectangular'} color={'grey'} />}
                {deliveryDate && (
                  <Tag text={deliveryDate} shape={'rectangular'} color={orderStatus ? getOrderStatusTagColor(orderStatus as TTagColor) : 'grey'} />
                )}
              </div>
            ) : null}
            {title && <h4 className={styles.title}>{title}</h4>}
            <div>{children}</div>
          </div>
          {linkUrl && <Icon icon={'icon-chevrons-right'}></Icon>}
        </Link>
      ) : (
        <div>{children}</div>
      )}
    </div>
  )
}

export { OrderItem }
