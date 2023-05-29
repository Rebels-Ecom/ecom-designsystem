import React, { useCallback, useRef, useState } from 'react'
import styles from './user-profile-dropdown.module.css'
import useOnClickOutside from '../../../hooks/useOnClickOutside'
import { Button } from '../../atoms/button/button'

export interface IUserProfileDropdown {
    children: React.ReactNode,
    isDropdownOpen?: boolean
}

function UserProfileDropdown({ children , isDropdownOpen} : IUserProfileDropdown) {
    const [isOpen, setIsOpen ] = useState<boolean>(isDropdownOpen ? isDropdownOpen : false)
    const dropdownElement = useRef<HTMLDivElement | null>(null)
    const onClose = useCallback(() => {
        !isOpen && setIsOpen(false)
      }, [setIsOpen])
      
    useOnClickOutside({ ref: dropdownElement, onClose }) 

    return (
        <div className={styles.userProfileDropdown} ref={dropdownElement}>
            <Button className={styles.button} type={'button'} surface={'primary'} rounded iconRight={{icon: 'icon-settings'}} onClick={()=>setIsOpen(!isOpen)}>Mitt spendrups</Button>
            { isOpen && <div  className={styles.dropdown}>{ children }</div> }
        </div>
    )
}

export { UserProfileDropdown }