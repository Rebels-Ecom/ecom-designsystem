import styles from './icon-button.module.css'
import cx from 'classnames'
import { LinkComponent } from '../ui-link/ui-link'
import { Icon, TIcon } from '../icon/icon'

export type TIconButtonSize = 'small' | 'medium' | 'large'

export interface IIconButton {
    icon: TIcon
    linkUrl?: string
    size?: TIconButtonSize
    isTransparent?: boolean
    isLink: boolean
    linkComponent?: any
    isExternal?: boolean
    className?: string
    children?: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function getIconButtonSize(surface: TIconButtonSize, hasChildren: boolean) {
    if(hasChildren)
        return 'buttonRectangular'
    switch (surface) {
      case 'medium':
        return 'buttonMedium'
      case 'large':
        return 'buttonLarge'
      case 'small':
      default:
        return 'buttonSmall'
    }
  }

const IconButton = ({
    icon, 
    linkUrl,
    size = 'small',
    isTransparent = false,
    isLink = false,
    isExternal=false,
    linkComponent: Link = LinkComponent,
    className,
    children,
    onClick
}: IIconButton ) => {

    const Tag = isExternal ? 'a' : Link

    if(!icon)
        return null

    return (
        <div>
            {isLink && linkUrl
            ?
                <Tag to={!isExternal ? linkUrl : undefined} href={isExternal ? linkUrl : undefined} className={cx(styles.iconButton, children? styles.hasChildren : '', styles[getIconButtonSize(size, children ? true : false)], isTransparent && styles.buttonTransparent, className ? className : '')}>
                    <Icon icon={icon}></Icon>
                    {children && children}
                </Tag>
            :
                <button className={cx(styles.iconButton, children? styles.hasChildren : '', styles[getIconButtonSize(size, children ? true : false)], isTransparent && styles.buttonTransparent, className ? className : '')} onClick={onClick}><Icon icon={icon}></Icon>{children && children}</button>
            }
        </div>
    )
}

export { IconButton }
