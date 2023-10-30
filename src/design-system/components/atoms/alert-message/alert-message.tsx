import React from 'react'
import styles from './alert-message.module.css'
import { Icon } from '../icon/icon'
import { IconButton } from '../icon-button/icon-button'
import cx from 'classnames'

export type TAlertMessageType = 'info' | 'warning' | 'error'
export interface IAlertMessage {
  children: React.ReactNode
  type: TAlertMessageType
  isOpen: boolean
  onClose: () => void
}

function getAlertIcon(type: TAlertMessageType) {
  switch (type) {
    case 'info':
      return 'icon-info'
    case 'warning':
      return 'icon-alert-circle'
    case 'error':
      return 'icon-alert-circle'
    default:
      return 'icon-info'
  }
}

function AlertMessage({ children, type, isOpen, onClose }: IAlertMessage) {
  if (!isOpen) return null
  return (
    <div className={cx(styles.alertMessage, styles[type])}>
      <div className={styles.contentWrapper}>
        {type && <Icon icon={getAlertIcon(type)} />}
        <span>{children}</span>
        <IconButton type="button" onClick={onClose} icon="icon-x" size="large" isTransparent noBorder />
      </div>
    </div>
  )
}

export { AlertMessage }
