import styles from './link-button.module.css'
import cx from 'classnames'
import { ILink } from '../../../../types/links'
import { TButtonSurface, TButtonSize } from '../../../../types/button'
import { LinkComponent } from '../ui-link/ui-link'

export interface ILinkButton extends ILink {
  children?: React.ReactNode
  surface: TButtonSurface
  size?: TButtonSize
  fullWidth?: boolean
}

const LinkButton = ({
  className,
  surface = 'primary',
  size = 'large',
  children,
  fullWidth,
  linkComponent: Link = LinkComponent,
  href,
  target,
  title,
  isExternal,
  text,
  id,
}: ILinkButton) => {
  const classNames = cx(styles.button, styles[size], styles[surface], fullWidth && styles.fullWidth, className)
  const Tag = isExternal ? 'a' : Link
  return (
    <Tag to={!isExternal ? href : undefined} href={isExternal ? href : undefined} target={target} title={title} className={classNames} id={id ? id : undefined}>
      {children || text}
    </Tag>
  )
}

export { LinkButton }
