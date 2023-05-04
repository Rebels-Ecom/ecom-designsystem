import React from 'react'
import styles from './account-box-list.module.css'
import { AccountBox, IAccountBox } from '../../molecules/account-box/account-box'
import { IPicture, Picture } from '../../atoms/picture/picture'

export interface IAccountBoxList {
  logotype: IPicture
  heading: string
  text: string
  accountsList: IAccountBox[]
}

function AccountBoxList({logotype, heading, text, accountsList} : IAccountBoxList) {
  return (
    <div className={styles.accountBoxList}>
      <Picture {...logotype} classNamePicture={styles.logoPicture} classNameImg={styles.logoImg} />
      <h3>{heading}</h3>
      <p>{text}</p>
      <div className={styles.listWrapper}>
        {
          Array.isArray(accountsList) && accountsList.length>0 && accountsList.map((accountBox: IAccountBox, index)=> <AccountBox key={index} {...accountBox}></AccountBox>)
        }
      </div>
    </div>
  )
}

export { AccountBoxList }