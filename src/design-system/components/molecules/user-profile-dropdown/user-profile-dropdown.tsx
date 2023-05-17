import React, { useState } from 'react'
import styles from './user-profile-dropdown.module.css'
import { Button } from '../../atoms/button/button'

export interface IUserProfileDropdown {
    children: React.ReactNode
}

function UserProfileDropdown({ children  } : IUserProfileDropdown) {
    const [isOpen, setIsOpen ] = useState<boolean>(false)
    return (
        <div>
            <Button className={styles.button} type={'button'} surface={'primary'} rounded iconRight={{icon: 'icon-settings'}} onClick={()=>setIsOpen(!isOpen)}>Mitt spendrups</Button>
            <div className={styles.dropdown}>{isOpen && children}</div>
        </div>
    )
}

export { UserProfileDropdown }