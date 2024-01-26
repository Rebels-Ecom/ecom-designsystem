import styles from './icon.module.css'
import cx from 'classnames'

export type TIconSize = 'small' | 'medium' | 'large' | 'xlarge'
export type TIcon =
  | 'icon-alert-circle'
  | 'icon-bell'
  | 'icon-arrow-right'
  | 'icon-mail'
  | 'icon-map-pin'
  | 'icon-menu'
  | 'icon-x'
  | 'icon-phone'
  | 'icon-refresh-cw'
  | 'icon-search'
  | 'icon-x-circle'
  | 'icon-plus-circle'
  | 'icon-plus'
  | 'icon-chevron-up'
  | 'icon-chevron-down'
  | 'icon-chevron-left'
  | 'icon-chevron-right'
  | 'icon-chevrons-left'
  | 'icon-chevrons-right'
  | 'icon-layers'
  | 'icon-check'
  | 'icon-check-circle'
  | 'icon-user'
  | 'icon-heart'
  | 'icon-shopping-cart'
  | 'icon-award'
  | 'icon-package'
  | 'icon-users'
  | 'icon-facebook'
  | 'icon-instagram'
  | 'icon-linkedin'
  | 'icon-clipboard'
  | 'icon-download'
  | 'icon-calendar'
  | 'icon-settings'
  | 'icon-info'
  | 'icon-play'
  | 'icon-archive'
  | 'icon-file'
  | 'icon-file-text'
  | 'icon-message-circle'
  | 'icon-share'
  | 'icon-arrow-down-circle'
  | 'icon-trash'
  | 'icon-trash-2'
  | 'icon-edit'
  | 'icon-truck'
  | 'icon-share-2'
  | 'icon-heart-o'
  | 'icon-heart1'
  | 'icon-file-plus'
  | 'icon-eye'
  | 'icon-save'
  | 'icon-alert-triangle'
  | 'icon-trash-2'

export interface IIcon {
  icon: TIcon
  size?: TIconSize
  className?: CSSModuleClasses | string
  /**
   * optional color
   */
  color?: 'error';
}

const Icon = ({ icon, size, className, color }: IIcon) => {
  return (
    <span
      className={cx('icomoon', icon, className ? className : styles.defaultStyling, {
        [styles[`icon-${size}`]]: !!size,
        [styles[color ?? '']]: !!color,
      })}
    />
  )
}

export { Icon }
