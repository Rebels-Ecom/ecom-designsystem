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
      {label && <p className={styles.label}>{label}</p>}
      {infoSummary.userName && <h5 className={styles.userName}>{infoSummary.userName.toUpperCase()}</h5>}
      {infoSummary.companyName && <p className={styles.infoText}> {infoSummary.companyName} </p>}
      {infoSummary.customerNumber && <p className={styles.infoText}> {infoSummary.customerNumber} </p>}
      {infoSummary.role && <p className={styles.infoText}>{infoSummary.role}</p>}
    </div>
  )
}

export { UserInfoSummary }