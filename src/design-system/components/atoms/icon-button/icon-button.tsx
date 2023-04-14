import styles from './icon-button.module.css'
import cx from 'classnames'
import { ILink } from '../../../../types/links'
import { LinkComponent } from '../ui-link/ui-link'
import { Icon, TIcon } from '../icon/icon'

export type TIconButtonSize = 'small' | 'large'

export interface IIconButton {
    icon: TIcon
    size?: TIconButtonSize
    isTransparent?: boolean
    isLink: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    linkUrl?:string
    linkComponent: any
    className?: string
}

const IconButton = ({
    icon,
    size = 'small',
    isTransparent = false,
    isLink = false,
    linkUrl,
    onClick,
    linkComponent: Link,
    className
}: IIconButton ) => {

    if(!icon)
        return null

    return (
        <div>
            {isLink
            ?
                <Link className={cx(styles.iconButton, size==='large' ? styles.buttonLarge : styles.buttonSmall, isTransparent && styles.buttonTransparent, className ? className : '')} to={linkUrl}><Icon icon={icon}></Icon></Link>
            :
                <button className={cx(styles.iconButton, size==='large' ? styles.buttonLarge : styles.buttonSmall, isTransparent && styles.buttonTransparent, className ? className : '')} onClick={onClick}><Icon icon={icon}></Icon></button>
            }
        </div>
    )
}

export { IconButton }
