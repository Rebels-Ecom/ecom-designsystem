import React from 'react'
import { Icon } from '../icon/icon'
import styles from './message-banner.module.css'

export type TMessageBannerType = 'success' | 'information' | 'link' | 'update'
export interface IMessageBanner {
  children: React.ReactNode
  type?: TMessageBannerType
  color?: string
}

const defaultBkg = '#F2EFEA'

function getBannerIcon(type: TMessageBannerType) {
  switch (type) {
    case 'information':
      return 'icon-alert-circle'
    case 'success':
      return 'icon-check-circle'
    case 'link':
      return 'icon-arrow-right'
    case 'update':
      return 'icon-refresh-cw'
    default:
      return 'icon-check-circle'
  }
}

function MessageBanner({ children, type, color }: IMessageBanner) {
  return (
    <div className={styles.messageBanner} style={{ background: color ? color : defaultBkg, color: color && '#ffff' }}>
      {type && <Icon icon={getBannerIcon(type)} className={styles.bannerIcon}></Icon>}
      <span>{children}</span>
    </div>
  )
}

export { MessageBanner }
