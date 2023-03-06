import cx from 'classnames'
import { ILink } from '../../../../types/links'
import { TButtonSurface, TButtonSize } from '../../../../types/button'
import { LinkComponent } from '../ui-link/ui-link'

export interface ILinkButton extends ILink {
  children: React.ReactNode
  surface: TButtonSurface
  size?: TButtonSize
  fullWidth?: boolean
}

export const defaultButtonClasses = 'flex justify-center items-center font-secondaryBold no-underline hover:cursor-pointer'
export const primaryButtonClasses = 'text-cta-primary hover:text-cta-primary visited:text-cta-primary bg-cta-primary hover:bg-cta-primary-hover border-transparent'  
export const secondaryButtonClasses = 'text-cta-secondary bg-cta-secondary border-1 border-cta-secondary hover:text-cta-secondary-hover hover:border-cta-secondary-hover visited:text-cta-secondary'  
export const tertiaryButtonClasses = 'text-cta-tertiary hover:text-cta-tertiary visited:text-cta-tertiary bg-cta-tertiary hover:bg-cta-tertiary-hover border-transparent' 

export function getButtonSurfaceClasses(surface: TButtonSurface) {
  switch (surface) {
    case 'secondary':
      return secondaryButtonClasses
    case 'tertiary':
      return tertiaryButtonClasses
    case 'primary':
    default:
      return primaryButtonClasses
  }
}

export function getSizeClasses(size: TButtonSize) {
  const largeClasses = `h-48 px-32 p-16 text-cta-lg`
  const smallClasses = `h-40 px-32 py-10 text-cta-sm`
  switch (size) {
    case 'small':
      return smallClasses
    case 'large':
    default:
      return largeClasses
  }
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
  id,
}: ILinkButton) => {
  const classNames = cx(defaultButtonClasses, getSizeClasses(size), getButtonSurfaceClasses(surface),fullWidth && 'w-full', className)
  const Tag = isExternal ? 'a' : Link
  return (
    <Tag to={!isExternal ? href : undefined} href={isExternal ? href : undefined} target={target} title={title} className={classNames} id={id ? id : undefined}>
      {children}
    </Tag>
  )
}

export { LinkButton }
