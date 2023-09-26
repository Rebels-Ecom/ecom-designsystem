import React, { useRef } from 'react'
import styles from './user-profile-dropdown.module.css'
import useOnClickOutside from '../../../hooks/useOnClickOutside'
import { Button } from '../../atoms/button/button'

export interface IUserProfileDropdown {
    children: React.ReactNode;
    isDropdownOpen?: boolean;
    isOpen: boolean;
    onClick: () => void;
}

function UserProfileDropdownControlled({ children, isOpen, onClick} : IUserProfileDropdown) {
    const dropdownElement = useRef<HTMLDivElement | null>(null)  
    const handleClose = () => isOpen ? onClick() : undefined
    useOnClickOutside({ ref: dropdownElement, onClose: handleClose }) 

    return (
        <div className={styles.userProfileDropdown} ref={dropdownElement}>
            <Button className={styles.button} type='button' surface='x' iconRight={{ icon: 'icon-settings' }} onClick={onClick}>Mitt spendrups</Button>
            {isOpen && <div className={styles.dropdown}>{children}</div>}
        </div>
    )
}

export { UserProfileDropdownControlled }