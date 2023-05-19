import React, { useCallback, useRef, useState } from 'react'
import styles from './user-profile-dropdown.module.css'
import { Button } from '../../atoms/button/button'
import useOnClickOutside from '../../../hooks/useOnClickOutside'

export interface IUserProfileDropdown {
    children: React.ReactNode
}

function UserProfileDropdown({ children  } : IUserProfileDropdown) {
    const [isOpen, setIsOpen ] = useState<boolean>(false)
    const dropdownElement = useRef<HTMLDivElement | null>(null)
    const onClose = useCallback(() => {
        setIsOpen(false)
      }, [setIsOpen])
      
    useOnClickOutside({ ref: dropdownElement, onClose })

    return (
        <div className={styles.userProfileDropdown}>
            <Button className={styles.button} type={'button'} surface={'primary'} rounded iconRight={{icon: 'icon-settings'}} onClick={()=>setIsOpen(!isOpen)}>Mitt spendrups</Button>
            { isOpen && <div ref={dropdownElement} className={styles.dropdown}>{ children }</div> }
        </div>
    )
}

export { UserProfileDropdown }