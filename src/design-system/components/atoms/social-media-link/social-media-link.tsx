import { ILink } from '../../../../types/links'
import { Icon, LinkButton } from '../../atoms'
import { TIcon } from '../../atoms/icon/icon'
import styles from './social-media-link.module.css'

export type TSocialMediaLink = {
    icon: TIcon
} & ILink

const SocialMediaLink = (link : TSocialMediaLink ) => {
    return(
        <LinkButton 
            className={styles.socialMediaLink} 
            surface='secondary' 
            size='small'
            round 
            href={link.href}
            target={link.target ? link.target : '_blank'}
            isExternal={link.isExternal}
            >
            <Icon icon={link.icon} className={styles.socialMediaIcon}/>
        </LinkButton>
    )
}

export { SocialMediaLink}