import React from 'react'
import styles from './sub-navigation.module.css'
import { INavigationLink} from '../../../../types/links'
import { NavigationList } from '../navigation-list/navigation-list'
import cx from 'classnames'

export interface ISubNavigation {
    subNavLinks: Array<INavigationLink>
    isOpen: boolean
    isMobile?: boolean
    linkComponent?: any
}

function SubNavigation({subNavLinks, linkComponent: Link, isOpen, isMobile}: ISubNavigation) {
    return (
        <>
            {   isMobile ? 
                <div className={cx(styles.subNavDropdownMobile, isOpen ? styles.isVisible : '')}>
                    <NavigationList links={subNavLinks} linkComponent={Link} mobile isOpen={isOpen} />
                </div>
            :
                <div className={cx(styles.subNavDropdownDesktop, isOpen ? styles.isVisible : '')}>
                    <ul className={cx(styles.subNavList)}>
                        {subNavLinks.map((link: INavigationLink, index: number)=>(
                            <li key={index} className={styles.subNavItemWrapper}>
                                <div className={styles.listItem}>
                                    <a href={link.href}>{link.title?.toUpperCase()}</a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </>  
    )
}

export { SubNavigation }

