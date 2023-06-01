import React from 'react'
import styles from './loading-bar.module.css'
import cx from 'classnames'

export type TLoadingBarValue = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
export type TLoadingBarColor = 'orange' | 'purple'
export interface ILoadingBar {
    className?: string
    name: string
    value: string
    color: TLoadingBarColor
}

function LoadingBar({className, name, value, color} :ILoadingBar ) {

  function calculateFillPercentage(value: string){
    switch (value) {
      case '1':
        return 'fill_1'
      case '2':
        return 'fill_2'
      case '3':
        return 'fill_3'
      case '4':
        return 'fill_4'
      case '5':
        return 'fill_5'
      case '6':
        return 'fill_6'
      case '7':
        return 'fill_7'
      case '8':
        return 'fill_8'
      case '9':
        return 'fill_9'
      case '10':
        return 'fill_10'
      case '11':
        return 'fill_11'
      case '12':
      default:
        return 'fill_12'
    }
  }

  return (
    <div className={cx(styles.loadingBarWrapper, className ? className : '')}>
			<div className={cx(styles.loadingBar, color==='orange' ? styles.orangeBar : styles.purpleBar)}>
				<div className={cx(styles.loadingBarFill, styles[calculateFillPercentage(value)], color==='orange' ? styles.orangeFill : styles.purpleFill)}></div>
			</div>
      <div className={cx('body', styles.barText)}>{name}</div>
		</div>
  )
}

export { LoadingBar }