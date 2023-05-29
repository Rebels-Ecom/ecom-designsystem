import React from 'react'
import styles from './account-box.module.css'
import { Button } from '../../atoms'
import { IButton } from '../../atoms/button/button'

export interface IAccountBox {
    companyName: string
    accountNumber: string
    contactPerson?: string
    address?: string
    zipcode?: string
    city?: string
    chooseAccountBtn: IButton
    onClickChooseAccount: CallableFunction
}

function AccountBox({companyName, accountNumber, contactPerson, address, zipcode, city, chooseAccountBtn, onClickChooseAccount} : IAccountBox) {
  return (
    <div className={styles.accountBox}>
        <p><b>{companyName}</b></p>
        <p>{contactPerson}</p>
        <p>{address}, {zipcode}, {city}</p>
        <Button {...chooseAccountBtn} type={'button'} surface={'primary'} onClick={()=>onClickChooseAccount(accountNumber)}></Button>
    </div>
  )
}

export { AccountBox }