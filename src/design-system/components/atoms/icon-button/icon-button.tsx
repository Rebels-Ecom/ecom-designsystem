import styles from './icon-button.module.css'
import cx from 'classnames'
import { ILink } from '../../../../types/links'
import { LinkComponent } from '../ui-link/ui-link'
import { Icon, TIcon } from '../icon/icon'

export type TIconButtonSize = 'small' | 'large'

export interface IIconButton extends ILink {
    icon: TIcon
    size?: TIconButtonSize
    isLink: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    linkUrl?:string
}

const IconButton = ({
    icon,
    size = 'small',
    linkComponent: Link = LinkComponent,
    isLink = false,
    linkUrl,
    onClick
}: IIconButton ) => {

    if(!icon)
        return null

    return (
        <div>
            {isLink
            ?
                <Link className={cx(styles.iconButton, size==='large' ? styles.buttonLarge : styles.buttonSmall)} to={linkUrl}><Icon icon={icon}></Icon></Link>
            :
                <button className={cx(styles.iconButton, size==='large' ? styles.buttonLarge : styles.buttonSmall)} onClick={onClick}><Icon icon={icon}></Icon></button>
            }
        </div>
    )
}

export { IconButton }
