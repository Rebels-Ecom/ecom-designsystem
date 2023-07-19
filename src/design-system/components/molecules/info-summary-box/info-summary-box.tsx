import React from 'react'
import styles from './info-summary-box.module.css'
import cx from 'classnames'

export interface IInfoSummaryBox {
  label?: string
  linkLabel?: string
  withBackground?: boolean
  onClick?: CallableFunction
  children: React.ReactNode
}

function InfoSummaryBox({ label, children, linkLabel, withBackground, onClick }: IInfoSummaryBox) {
  return (
    <div className={styles.infoSummaryBox}>
      {linkLabel && onClick && (
        <button type={'button'} onClick={() => onClick} className={cx(styles.linkButton, 'body')}>
          {linkLabel}
        </button>
      )}
      {label && (
        <label className={styles.label} htmlFor="infoSummary">
          {label}
        </label>
      )}
      <div id="infoSummary" className={cx(styles.box, withBackground ? styles.withBackground : '')}>
        {children}
      </div>
    </div>
  )
}

export { InfoSummaryBox }
