import cx from 'classnames'
import React from 'react'
import styles from './info-summary-box.module.css'

export interface IInfoSummaryBox {
  label?: string
  linkLabel?: string
  withBackground?: boolean
  backgroundColor?: 'yellow' | 'blue'
  onClick?: CallableFunction
  children: React.ReactNode
}

function InfoSummaryBox({ label, children, linkLabel, withBackground, onClick, backgroundColor }: IInfoSummaryBox) {
  function handleOnClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    onClick && onClick()
  }
  return (
    <div className={styles.infoSummaryBox}>
      {linkLabel && onClick && (
        <button type={'button'} onClick={handleOnClick} className={cx(styles.linkButton, 'body')}>
          {linkLabel}
        </button>
      )}
      {label && (
        <label className={styles.label} htmlFor="infoSummary">
          {label}
        </label>
      )}
      <div
        id="infoSummary"
        className={cx(styles.box, withBackground ? styles.withBackground : '', {
          [styles[backgroundColor || 'yellow']]: !!backgroundColor,
        })}
      >
        {children}
      </div>
    </div>
  )
}

export { InfoSummaryBox }
