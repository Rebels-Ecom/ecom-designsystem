import styles from './icon.module.css'
import cx from 'classnames'
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

export interface IIcon {
  icon: TIcon
  className?: CSSModuleClasses | string
}

const Icon = ({ icon, className }: IIcon) => {
  return <span className={cx('icomoon', icon, className ? className : styles.defaultStyling)} />
}

export { Icon }
