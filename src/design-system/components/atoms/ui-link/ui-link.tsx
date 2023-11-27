import cx from 'classnames'
import styles from './ui-link.module.css'
import { Icon, TIcon } from '../icon/icon'
import { ILink } from '../../../../types/links'
import { TSurface } from '../../../../types/surface'

export interface IUILink extends ILink {
  iconLeft?: TIcon;
  iconRight?: TIcon;
  onSurface: TSurface;
  children: React.ReactNode;
  noUnderline?: boolean;
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
  iconLeft,
  iconRight,
  onSurface = 'transparent',
  noUnderline,
}: IUILink) => {
  const Tag = isExternal ? 'a' : Link
  return (
    <Tag
      to={!isExternal ? href : undefined}
      href={isExternal ? href : undefined}
      target={target}
      title={title}
      className={cx(
        styles.link,
        styles[onSurface],
        className
      )}
    >
      {iconLeft && <Icon icon={iconLeft} className={cx(styles.icon, styles.left)} />}
      <span className={cx(styles.linkText, {[styles.noUnderline]: noUnderline })}>{children}</span>
      {iconRight && <Icon icon={iconRight} className={cx(styles.icon, styles.right)} />}
    </Tag>
  )
}

export { UILink }
