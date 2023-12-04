import React from 'react'
import { Icon, UILink } from '../../atoms'
import styles from './order-item.module.css'
import { Tag } from '../../atoms/tag/tag'
import cx from 'classnames'

export interface IOrderItem {
  orderNumber?: string // TODO: make required?
  orderNumberLabel?: string // TODO: make required?
  orderStatus?: string // TODO: make required?
  deliveryDate?: string
  deliveryDateLabel?: string
  linkComponent: any
  linkUrl: string
  // Defines if border should be added
  border?: boolean
  onDownload?: () => void
  downloadLabel?: string
  downloadUrl?: string
  title?: string
  children: React.ReactNode
  orderDate?: string
  onClick?: () => void
}

const OrderItem = ({
  orderNumber,
  orderNumberLabel,
  title,
  children,
  orderDate,
  deliveryDate,
  deliveryDateLabel,
  orderStatus,
  linkUrl,
  linkComponent: Link,
  onClick,
  onDownload,
  downloadLabel,
  downloadUrl,
  border,
}: IOrderItem) => {
  return 1 > 0 ? (
    <div className={cx(styles.orderItem, { [styles.border]: border })}>
      <div className={styles.firstRow}>
        {orderNumber && orderNumberLabel && (
          <Link to={linkUrl}>
            <h4 className={styles.orderNumber} onClick={onClick}>{`${orderNumberLabel} ${orderNumber}`}</h4>
          </Link>
        )}
        <div className={styles.statusWrapper}>
          {orderStatus && <span className={styles.status}>{orderStatus}</span>}
          <Link to={linkUrl}>
            <h4 className={styles.orderNumber} onClick={onClick}></h4>
            <Icon className={styles.icon} icon={'icon-chevrons-right'}></Icon>
          </Link>
        </div>
      </div>
      <div className={styles.secondRow}>
        {deliveryDate && deliveryDateLabel && <p className={styles.deliveryDate}>{`${deliveryDateLabel} ${deliveryDate}`}</p>}
        {downloadLabel && downloadUrl && (
          <UILink className={styles.downloadLink} onSurface="transparent" linkComponent="a" isExternal target={'_blank'} href={downloadUrl}>
            {downloadLabel}
          </UILink>
        )}
      </div>
    </div>
  ) : (
    <div className={styles.orderItem}>
      {linkUrl ? (
        <Link className={styles.linkWrapper} to={linkUrl} href={linkUrl} onClick={onClick}>
          <div className={styles.linkContentWrapper}>
            {orderDate || deliveryDate ? (
              <div className={styles.tagsWrapper}>{orderDate && <Tag text={orderDate} shape={'rectangular'} color={'grey'} />}</div>
            ) : null}
            {title && <h4 className={styles.title}>{title}</h4>}
            <div>{children}</div>
          </div>
          {linkUrl && (
            <Link to={linkUrl}>
              <Icon icon={'icon-chevrons-right'}></Icon>
            </Link>
          )}
        </Link>
      ) : (
        <div>{children}</div>
      )}
    </div>
  )
}

export { OrderItem }
