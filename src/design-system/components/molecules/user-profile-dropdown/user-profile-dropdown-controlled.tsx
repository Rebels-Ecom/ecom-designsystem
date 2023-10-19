import React, { useRef } from 'react'
import styles from './user-profile-dropdown.module.css'
import useOnClickOutside from '../../../hooks/useOnClickOutside'
import { IconButton } from '../../atoms';

export interface IUserProfileDropdown {
    children: React.ReactNode;
    isDropdownOpen?: boolean;
    isOpen: boolean;
    onClick: () => void;
}

// TODO: delete UserProfileDropdown and use this one instead
function UserProfileDropdownControlled({ children, isOpen, onClick} : IUserProfileDropdown) {
    const dropdownElement = useRef<HTMLDivElement | null>(null)  
    const handleClose = () => isOpen ? onClick() : undefined
    useOnClickOutside({ ref: dropdownElement, onClose: handleClose }) 

    return (
        <div className={styles.userProfileDropdown} ref={dropdownElement}>
            <IconButton type='button' icon='icon-user' onClick={onClick} size='medium' />
            {isOpen && <div className={styles.dropdown}>{children}</div>}
        </div>
    )
}

export { UserProfileDropdownControlled }