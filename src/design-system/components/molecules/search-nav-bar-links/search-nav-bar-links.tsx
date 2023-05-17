import React from 'react'
import { Button, Icon, IconButton, UiDatePicker } from '../../atoms'
import styles from './search-nav-bar-links.module.css'
import { IUiDatePicker } from '../../atoms/ui-date-picker/ui-date-picker'
import { IUserProfileDropdown, UserProfileDropdown } from '../user-profile-dropdown/user-profile-dropdown'

export interface INavLinks {
  onClickCart?: CallableFunction
  isUserLoggedIn?: boolean
  datePicker: IUiDatePicker
  userProfileDropdown: IUserProfileDropdown
  onClickSelectDate: CallableFunction
}

const SearchNavBarLinks = ({ isUserLoggedIn=false, datePicker, onClickSelectDate, onClickCart, userProfileDropdown } : INavLinks) => {
  return (
    <div className={styles.searchNavBarLinks}>
      <div className={styles.buttonsWrapper}>
        <IconButton icon={'icon-heart'} isLink={false} linkComponent={undefined} size='medium' isTransparent></IconButton>
        <IconButton icon={'icon-shopping-cart'} isLink={false} linkComponent={undefined} onClick={onClickCart ? ()=>onClickCart() : ()=>{}} size='medium' isTransparent></IconButton>
      </div>
      {isUserLoggedIn && <div className={styles.buttonsWrapper}>
        <UiDatePicker className={styles.button} {...datePicker} onDateSelected={onClickSelectDate}></UiDatePicker>
        <UserProfileDropdown {...userProfileDropdown}></UserProfileDropdown>
      </div>}
    </div>
  )
}

export { SearchNavBarLinks }
