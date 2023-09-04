import React from 'react'
import styles from './message-popup.module.css'
import { TIcon, Icon } from '../icon/icon'
import cx from 'classnames'
import { IconButton } from '../icon-button/icon-button'

export type TPopupPosition = 'relative' | 'absolute'
export type TArrowPosition = 'left' | 'right' | 'center'

export interface IMessagePopup {
    children: React.ReactNode
    isOpen: boolean
    onClose: () => void
    position?: TPopupPosition
    icon?: TIcon
    arrowPosition?: TArrowPosition
}

function MessagePopup({ children, isOpen, icon, position='relative', arrowPosition='left', onClose } : IMessagePopup) {
  if(!isOpen) return null
  return (
    <div className={cx(styles.messagePopup, styles[arrowPosition], styles[position])}>
      {icon && <Icon icon={icon} className={styles.icon}></Icon>}
      {children}
      <IconButton className={styles.iconBtnClose} onClick={onClose} icon={'icon-x'} size="large" isTransparent isLink={false} linkComponent={undefined}></IconButton>
    </div>
  )
}

export { MessagePopup }