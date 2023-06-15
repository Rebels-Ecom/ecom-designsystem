import React from 'react'
import styles from './loading-bars.module.css'
import cx from 'classnames'
import { ILoadingBar, LoadingBar } from '../../atoms/loading-bar/loading-bar'

export interface ILoadingBars {
    className?: string
    loadingBars: Array<ILoadingBar>
}

function LoadingBars({className, loadingBars} :ILoadingBars ) {

  return (
    <div className={cx(styles.loadingBarsWrapper, className ? className : '')}>
      {loadingBars.map((bar: ILoadingBar) => <LoadingBar key={bar.name} {...bar}/> )}
    </div>
  )
}

export { LoadingBars }