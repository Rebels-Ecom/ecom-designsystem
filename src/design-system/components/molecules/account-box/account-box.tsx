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

function AccountBox({
  companyName,
  accountNumber,
  contactPerson,
  address,
  zipcode,
  city,
  chooseAccountBtn,
  onClickChooseAccount
}: IAccountBox) {
  return (
    <div className={styles.accountBox}>
      <div>
        <p className={styles.companyName}>
          <b>{companyName}</b>
        </p>
        <p className={styles.accountNumber}>
          {accountNumber}
        </p>
        {contactPerson && <p>{contactPerson}</p>}
        <p>
          {address}, {zipcode}, {city}
        </p>
      </div>
      <Button {...chooseAccountBtn} type={'button'} surface={'primary'} onClick={() => onClickChooseAccount(accountNumber)}></Button>
    </div>
  )
}

export { AccountBox }
