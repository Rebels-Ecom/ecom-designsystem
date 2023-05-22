import React from 'react'
import styles from './user-info-summary.module.css'

export interface IUserSummary {
  userName: string
  companyName: string
  customerNumber?: string
  role?: string
}

export interface IUserInfoSummary {
  label?: string,
  infoSummary: IUserSummary
}

function UserInfoSummary({ label, infoSummary } : IUserInfoSummary) {
  return (
    <div className={styles.userInfoSummary}>
      { label && <p><b> {label} </b></p> }
      { infoSummary.userName && <p><b> {infoSummary.userName.toUpperCase()} </b></p> }
      { infoSummary.companyName && <p> {infoSummary.companyName} </p> }
      { infoSummary.customerNumber && <p> {infoSummary.customerNumber} </p> }
      { infoSummary.role && <p> {infoSummary.role} </p> }
    </div>
  )
}

export { UserInfoSummary }