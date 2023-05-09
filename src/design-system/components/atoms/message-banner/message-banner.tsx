import React from 'react'
import styles from './message-banner.module.css'
import { Icon } from '../icon/icon'
import cx from 'classnames'

export type TMessageBannerType = 'success' | 'information'
export interface IMessageBanner {
    children: React.ReactNode
    type: TMessageBannerType
}

function getBannerIcon(type: TMessageBannerType){
    switch (type) {
        case 'information':
          return 'icon-alert-circle'
        case 'success':
        default:
          return 'icon-check-circle'
    }
}

function getBannerBackground(type: TMessageBannerType){
    switch (type) {
        case 'information':
          return 'infoBkg'
        case 'success':
        default:
          return 'successBkg'
    }
}

function MessageBanner({children, type='success'}: IMessageBanner) {
    return (
        <div className={cx(styles.messageBanner, styles[getBannerBackground(type)])}>
            <span>{children}</span>
            <Icon icon={getBannerIcon(type)} className={styles.bannerIcon}></Icon>
        </div>
    )
}

export { MessageBanner }