import { ILink } from '../../../../types/links'
import { Button, Icon } from '../../atoms'
import { TIcon } from '../../atoms/icon/icon'
import styles from './social-media-links.module.css'

export type TSocialMediaLink = {
    icon: TIcon
} & ILink
  
export interface ISocialMediaLinks {
    socialMediaLinks: Array<TSocialMediaLink>
}

const SocialMediaLinks = ({socialMediaLinks} : ISocialMediaLinks ) => {

    if(!Array.isArray(socialMediaLinks) || !socialMediaLinks.length)
        return null;

    return(
        <ul className={styles.socialMediaLinksList}>
            {socialMediaLinks.map((link, index)=>(
                <Button 
                    key={`${link.text}-${index}`}
                    className={styles.socialMediaLinkItem} 
                    type='button' 
                    surface='tertiary' 
                    size='small'
                    rounded 
                    >
                    <Icon icon={link.icon} className={styles.socialMediaIcon}/>
                </Button>
            ))}
        </ul>
    )
}

export { SocialMediaLinks}