import { TNavLink } from '../../../../types/links';
import { Icon } from '../../atoms/icon/icon';
import { LinkButton } from '../../atoms/link-button/link-button';
import styles from './footer-top-bar.module.css'

export interface IFooterTopBar {
    footerTopBarLinks: Array<TNavLink>,  
    linkComponent: any, 
}

function isValidLinkType(linkType:string){
  return (linkType==='login' || linkType==='register' || linkType==='contact') ? true : false;
}

function getIcon(linkType:string) {
  const topBarIcons: any = {
    'register': 'icon-plus-circle',
    'login': 'icon-user',
    'contact': 'icon-phone'
  }
  return topBarIcons[linkType];
}

const FooterTopBar = ({footerTopBarLinks, linkComponent: Link }: IFooterTopBar) => {
  return(
    <div className={styles.footerTopBar}>
      {Array.isArray(footerTopBarLinks) && footerTopBarLinks.length && <ul className={styles.navLinksList}>
        {footerTopBarLinks.map((link: TNavLink, index) => (
          <LinkButton
            key={`${link.title}-${index}`}
            className={styles.linkItem} 
            surface='secondary' 
            size= 'small'
            rounded 
            href={link.href}
            isExternal={link.isExternal}
          >
            {isValidLinkType(link.navLinkType) && <Icon icon={getIcon(link.navLinkType)}/>}
            <span className={styles.buttonLinkText}>{link.title}</span>
          </LinkButton>
        ))}
      </ul>}
    </div>
  )
}

export { FooterTopBar }