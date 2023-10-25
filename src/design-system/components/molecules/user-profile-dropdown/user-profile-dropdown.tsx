import React, { useCallback, useRef, useState } from 'react'
import styles from './user-profile-dropdown.module.css'
import useOnClickOutside from '../../../hooks/useOnClickOutside'
import { Button } from '../../atoms/button/button'
import { Icon, IconButton } from '../../atoms'

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
            <IconButton type='button' onClick={() => setIsOpen(!isOpen)} icon='icon-user' size='medium' />
            { isOpen && <div  className={styles.dropdown}>{ children }</div> }
        </div>
    )
}

export { UserProfileDropdown }