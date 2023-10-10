import React, { useRef } from 'react'
import styles from './user-profile-dropdown.module.css'
import useOnClickOutside from '../../../hooks/useOnClickOutside'
import { Button } from '../../atoms/button/button'
import { Icon, IconButton } from '../../atoms';

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
            <Button className={styles.button} type='button' surface='x' size='xx-small' onClick={onClick}><Icon icon='icon-menu' /></Button>
            {isOpen && <div className={styles.dropdown}>{children}</div>}
        </div>
    )
}

export { UserProfileDropdownControlled }