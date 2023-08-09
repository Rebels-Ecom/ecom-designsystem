import styles from './icon-link.module.css'
import cx from 'classnames'
import { LinkComponent } from '../ui-link/ui-link'
import { Icon, TIcon } from '../icon/icon'
import { ILink, TTarget } from '../../../../types/links'

export interface IIconLink extends ILink {
  children: React.ReactNode
  href: string
  isExternal?: boolean
  linkComponent?: any
  icon: TIcon
  target?: TTarget
  className?: string
}

const IconLink = ({ children, href, isExternal, linkComponent: Link = LinkComponent, icon, target, className }: IIconLink) => {
  const Tag = isExternal ? 'a' : Link
  if (!icon) return null
  return (
    <div className={styles.linkWrapper}>
      {icon && (
        <Tag to={!isExternal ? href : undefined} href={isExternal ? href : undefined} className={cx('body', className ? className : '')} target={target}>
          {children && <span className={styles.linkLabel}>{children}</span>}
          <Icon icon={icon} className={styles.icon}></Icon>
        </Tag>
      )}
    </div>
  )
}

export { IconLink }
