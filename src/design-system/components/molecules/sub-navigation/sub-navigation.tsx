import React from 'react'
import styles from './sub-navigation.module.css'
import { ILink, ISubNav, ISubNavList} from '../../../../types/links'
import cx from 'classnames'

export interface ISubNavigation {
    subNav: ISubNav
    isOpen: boolean
    isMobile?: boolean
    linkComponent?: any
  }

function SubNavList({listName, listLinks}: {listName:string, listLinks: Array<ILink>}){
    return(
        <div className={styles.subNavListWrapper}>
            <h4 className={styles.listName}>{listName}</h4>
            <ul className={styles.list}>
                {listLinks.map((link : ILink, index: number) => (
                    <li key={index} className={styles.listItem}>
                        <a href={link.href}>{link.title?.toUpperCase()}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function SubNavigation({subNav, isOpen, isMobile}: ISubNavigation) {
    return (
        <>
        {   isMobile ? 
            <div className={cx(styles.subNavDropdown, isOpen ? styles.isVisible : '')}>
                {subNav.title && <h3 className={styles.title}>{subNav.title}</h3>}
                <ul className={cx(styles.subNavLists)}>
                    {subNav.lists.map((list: ISubNavList, index: number)=>(<SubNavList key={index} {...list}></SubNavList>))}
                </ul>
            </div>
        :
            <div className={cx(styles.subNavDropdown, isOpen ? styles.isVisible : '')}>
                {subNav.title && <h3 className={styles.title}>{subNav.title}</h3>}
                <ul className={cx(styles.subNavLists)}>
                    {subNav.lists.map((list: ISubNavList, index: number)=>(<SubNavList key={index} {...list}></SubNavList>))}
                </ul>
            </div>
        }
        </>
        
    )
}

export { SubNavigation }