import cx from 'classnames'
import styles from './ui-link.module.css'
import { Icon, TIcon } from '../icon/icon'
import { ILink } from '../../../../types/links'
import { TSurface } from '../../../../types/surface'

export type TSize = 'default' | 'large'

export interface IUILink extends ILink {
  iconLeft?: TIcon
  iconRight?: TIcon
  size: TSize
  onSurface: TSurface
  children?: React.ReactNode
}

export const LinkComponent = ({ children, ...props }: any) => <div {...props}>{children}</div>

const UILink = ({
  linkComponent: Link = LinkComponent,
  children,
  href,
  target,
  isExternal,
  title,
  className,
  iconLeft: IconLeft,
  iconRight: IconRight,
  size = 'default',
  onSurface = 'transparent',
}: IUILink) => {
  const Tag = isExternal ? 'a' : Link
  return (
    <Tag
      to={!isExternal ? href : undefined}
      href={isExternal ? href : undefined}
      target={target}
      title={title}
      className={cx(styles.link, styles[size], styles[onSurface], IconLeft && styles.withIconLeft, IconRight && styles.withIconRight, className)}
    >
      {IconLeft && (
        <span className={styles.iconLeft}>
          <Icon icon={IconLeft} className={styles.icon} />
        </span>
      )}
      <span className={styles.linkText}>{children}</span>
      {IconRight && (
        <span className={styles.iconRight}>
          <Icon icon={IconRight} className={styles.icon} />
        </span>
      )}
    </Tag>
  )
}

export { UILink }
