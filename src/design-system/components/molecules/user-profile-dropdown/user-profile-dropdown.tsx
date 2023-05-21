import React, { useCallback, useRef, useState } from 'react'
import styles from './user-profile-dropdown.module.css'
import useOnClickOutside from '../../../hooks/useOnClickOutside'

export interface IUserProfileDropdown {
    children: React.ReactNode,
    isOpen: boolean
    setIsOpen?: (isOpen: boolean) => void
}

function UserProfileDropdown({ children, isOpen, setIsOpen  } : IUserProfileDropdown) {
    const dropdownElement = useRef<HTMLDivElement | null>(null)
    const onClose = useCallback(() => {
        setIsOpen && setIsOpen(false)
      }, [setIsOpen])
      
    useOnClickOutside({ ref: dropdownElement, onClose })

    if(!isOpen)
        return null
    return (
        <div className={styles.userProfileDropdown}>
            <div ref={dropdownElement} className={styles.dropdown}>{ children }</div>
        </div>
    )
}

export { UserProfileDropdown }