import React from 'react'
import { Button, Icon, IconButton, UiDatePicker } from '../../atoms'
import styles from './search-nav-bar-links.module.css'
import { IUiDatePicker } from '../../atoms/ui-date-picker/ui-date-picker'

export interface INavLinks {
  onClickCart?: CallableFunction
  isMyAccountPage?: boolean
  datePicker: IUiDatePicker
  onClickSelectDate: CallableFunction
  onClickMyAccountBtn?: CallableFunction
}

const SearchNavBarLinks = ({ isMyAccountPage=false, datePicker, onClickSelectDate, onClickCart, onClickMyAccountBtn } : INavLinks) => {
  return (
    <div className={styles.searchNavBarLinks}>
      <div className={styles.buttonsWrapper}>
        <IconButton icon={'icon-heart'} isLink={false} linkComponent={undefined} size='medium' isTransparent></IconButton>
        <IconButton icon={'icon-shopping-cart'} isLink={false} linkComponent={undefined} onClick={onClickCart ? ()=>onClickCart() : ()=>{}} size='medium' isTransparent></IconButton>
      </div>
      {isMyAccountPage && <div className={styles.buttonsWrapper}>
        <UiDatePicker className={styles.button} {...datePicker} onDateSelected={onClickSelectDate}></UiDatePicker>
        <Button className={styles.button} type={'button'} surface={'primary'} rounded iconRight={{icon: 'icon-x-circle'}} onClick={onClickMyAccountBtn ? ()=>onClickMyAccountBtn() : ()=>{}}>Mitt spendrups</Button>
      </div>}
    </div>
  )
}

export { SearchNavBarLinks }
