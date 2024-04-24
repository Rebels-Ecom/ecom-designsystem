import styles from './link-button.module.css'
import cx from 'classnames'
import { ILink } from '../../../../types/links'
import { TButtonSurface, TButtonSize } from '../../../../types/button'
import { LinkComponent } from '../ui-link/ui-link'

export interface ILinkButton extends ILink {
  children: React.ReactNode
  surface: TButtonSurface
  size?: TButtonSize
  fullWidth?: boolean
  rounded?: boolean
  round?: boolean
  disabled?: boolean
  name?: string
}

export function getButtonSize(surface: TButtonSize) {
  switch (surface) {
    case 'x-small':
      return 'cta-xs'
    case 'large':
      return 'cta-l'
    case 'small':
    default:
      return 'cta-s'
  }
}

const LinkButton = ({
  className,
  surface = 'primary',
  size = 'small',
  children,
  fullWidth,
  linkComponent: Link = LinkComponent,
  href,
  target,
  title,
  isExternal,
  id,
  rounded,
  round,
  disabled,
  name
}: ILinkButton) => {
  const classNames = cx(styles.button, getButtonSize(size), styles[surface], {
    [styles.fullWidth]: fullWidth,
    [styles.rounded]: rounded,
    [styles.round]: round,
    [styles.disabled]: disabled,
  }, className)
  
  const Tag = isExternal ? 'a' : Link
  return (
    <Tag aria-label={name} to={!isExternal ? href : undefined} href={isExternal ? href : undefined} target={target} title={title} className={classNames} id={id ? id : undefined}>
      {children}
    </Tag>
  )
}

export { LinkButton }
