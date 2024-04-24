import React from 'react'
import styles from './alert-message.module.css'
import { Icon } from '../icon/icon'
import { IconButton } from '../icon-button/icon-button'
import { ContentWrapper } from '../../layouts/content-wrapper/content-wrapper'
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
      <ContentWrapper>
        <div className={styles.wrapper}>
          <IconButton className={styles.invisibleSpacerItem} type="button" icon="icon-x" size="small" onClick={() => {}} />
          <span>{children}</span>
          <IconButton className={styles[`${type}-icon`]} type="button" onClick={onClose} icon="icon-x" size="small" round noBorder name='Close alert message' />
        </div>
      </ContentWrapper>
    </div>
  )
}

export { AlertMessage }
