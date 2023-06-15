import React from 'react'
import styles from './delivery-date-info.module.css'
import { Icon } from '../../atoms/icon/icon'
import cx from 'classnames'

export interface IDateInfo {
  dateLabel: string
}

function DeliveryDateInfo({ dateLabel }: IDateInfo) {
  return (
    <div className={cx('cta-l', styles.dateWrapper)}>
      <span className={styles.dateLabel}>{dateLabel}</span>
      <span className={styles.iconWrapper}><Icon icon={'icon-calendar'}></Icon></span>
    </div>
  )
}

export { DeliveryDateInfo }