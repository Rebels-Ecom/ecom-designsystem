import React from 'react'
import styles from './search-nav-bar-links.module.css'

export interface INavLinks {
  children: React.ReactNode
}

const SearchNavBarLinks = ({ children } : INavLinks) => {
  return (
    <div className={styles.searchNavBarLinks}>
      {children}
    </div>
  )
}

export { SearchNavBarLinks }
