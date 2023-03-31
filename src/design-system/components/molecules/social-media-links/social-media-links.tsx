import styles from './social-media-links.module.css'
import { SocialMediaLink, TSocialMediaLink } from '../../atoms/social-media-link/social-media-link'

export interface ISocialMediaLinks {
    socialMediaLinks: Array<TSocialMediaLink>
}

const SocialMediaLinks = ({socialMediaLinks} : ISocialMediaLinks ) => {

    if(!Array.isArray(socialMediaLinks) || !socialMediaLinks.length)
        return null;

    return(
        <ul className={styles.socialMediaLinksList}>
            {socialMediaLinks.map((link, index)=>(
                <SocialMediaLink key={`${link.title}-${index}`} {...link}/>
            ))}
        </ul>
    )
}

export { SocialMediaLinks}