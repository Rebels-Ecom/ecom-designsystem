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
    linkComponent: any
    isExternal?: boolean
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function getIconButtonSize(surface: TIconButtonSize) {
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
    onClick
}: IIconButton ) => {

    const Tag = isExternal ? 'a' : Link

    if(!icon)
        return null

    return (
        <div>
            {isLink && linkUrl
            ?
                <Tag to={!isExternal ? linkUrl : undefined} href={isExternal ? linkUrl : undefined} className={cx(styles.iconButton, styles[getIconButtonSize(size)], isTransparent && styles.buttonTransparent, className ? className : '')}>
                    <Icon icon={icon}></Icon>
                </Tag>
            :
                <button className={cx(styles.iconButton, styles[getIconButtonSize(size)], isTransparent && styles.buttonTransparent, className ? className : '')} onClick={onClick}><Icon icon={icon}></Icon></button>
            }
        </div>
    )
}

export { IconButton }
