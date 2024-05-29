import React from 'react'
import { Button, Icon, UILink } from '../../atoms'
import styles from './order-item.module.css'
import { Tag } from '../../atoms/tag/tag'
import cx from 'classnames'
import { IIcon, TIcon } from '../../atoms/icon/icon'

type TStatusIcon = 'success' | 'warning' | 'error'
export interface IOrderItem {
  orderNumber?: string // TODO: make required?
  orderNumberLabel?: string // TODO: make required?
  orderStatus?: string // TODO: make required?
  /**
   * Defines the background color of the status label
   * @default 'default'
   */
  statusIcon?: TStatusIcon
  deliveryDate?: string
  deliveryDateLabel?: string
  linkComponent?: any
  linkUrl?: string
  // Defines if border should be added
  border?: boolean
  onDownload?: () => void
  downloadLabel?: string
  downloadUrl?: string
  title?: string
  children: React.ReactNode
  orderDate?: string
  orderDateLabel?: string;
  btnLabel?: string
  onClick?: () => void;
  customOrderNumber?: string;
  customOrderNumberLabel?: string;
}

const OrderItem = ({
  orderNumber,
  orderNumberLabel,
  title,
  children,
  orderDate,
  orderDateLabel,
  deliveryDate,
  deliveryDateLabel,
  orderStatus,
  linkUrl,
  linkComponent: Link,
  btnLabel,
  onClick,
  onDownload,
  downloadLabel,
  downloadUrl,
  border,
  statusIcon,
  customOrderNumber,
  customOrderNumberLabel
}: IOrderItem) => {
  const getIcon = (): TIcon => {
    switch (statusIcon) {
      case 'warning':
        return 'icon-alert-circle'
      case 'error':
        return 'icon-alert-triangle'
      case 'success':
      default:
        return 'icon-check'
    }
  }
  return (
    <div className={cx(styles.orderItem, { [styles.border]: border })}>
      {linkUrl ? (
        <>
          <div className={styles.firstRow}>
            {orderNumber && orderNumberLabel && (
              <Link to={linkUrl}>
                <h4 className={styles.orderNumber} onClick={onClick}>{`${orderNumberLabel} ${orderNumber}`}</h4>
              </Link>
            )}
            <div className={styles.statusWrapper}>
              {orderStatus && (
                <span className={styles.status}>
                  {orderStatus}
                  {statusIcon && <Icon className={styles.statusIcon} icon={getIcon()} />}
                </span>
              )}
              <Link to={linkUrl}>
                <h4 className={styles.orderNumber} onClick={onClick}></h4>
                <Icon className={styles.icon} icon={'icon-chevrons-right'}></Icon>
              </Link>
            </div>
          </div>
          {(customOrderNumber && customOrderNumberLabel) && (
            <div className={styles.secondRow}>
              <p className={styles.deliveryDate}>{customOrderNumberLabel} <span>{customOrderNumber}</span></p>
            </div>
          )}
          <div className={styles.secondRow}>
            {deliveryDate && deliveryDateLabel && <p className={styles.deliveryDate}>{`${deliveryDateLabel} ${deliveryDate}`}</p>}
            {downloadLabel && downloadUrl && (
              <UILink className={styles.downloadLink} onSurface="transparent" linkComponent="a" isExternal target={'_blank'} href={downloadUrl}>
                {downloadLabel}
              </UILink>
            )}
          </div>
          <div>{children}</div>
        </>
      ) : (
        <>
          <div className={styles.firstRow}>
            {orderNumber && orderNumberLabel && onClick && <h4 className={styles.orderNumber} onClick={onClick}>{`${orderNumberLabel} ${orderNumber}`}</h4>}
            {btnLabel && onClick && (
              <div className={styles.statusWrapper}>
                <Button type={'button'} surface={'primary'} onClick={onClick}>
                  {btnLabel}
                </Button>
              </div>
            )}
          </div>
          <div className={cx(styles.secondRow, styles.secondRowCol)}>
            {orderDate && orderDateLabel && <p className={styles.deliveryDate}>{`${orderDateLabel} ${orderDate}`}</p>}
            {deliveryDate && deliveryDateLabel && <p className={styles.deliveryDate}>{`${deliveryDateLabel} ${deliveryDate}`}</p>}
          </div>
          <div>{children}</div>
        </>
      )}
    </div>
  )
}

export { OrderItem }
