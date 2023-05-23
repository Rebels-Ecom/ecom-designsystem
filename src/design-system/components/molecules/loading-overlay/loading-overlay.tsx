import React from 'react'
import styles from './loading-overlay.module.css'
import { Loader, TLoaderColor, TLoaderSize } from '../../atoms/loader/loader'
import cx from 'classnames'

export type TOverlayBackgroundColor = 'light' | 'dark'
export type TOverlayPosition = 'fixed' | 'absolute'

export interface ILoadingOverlay {
    isVisible: boolean,
    position?: TOverlayPosition,
    overlayBkgColor?: TOverlayBackgroundColor
    loaderSize?: TLoaderSize
    loaderColor?: TLoaderColor
    text?: string
    className?: string
}

function LoadingOverlay({ isVisible, position='fixed', overlayBkgColor = 'light', loaderSize = 'lg', text = '', loaderColor = 'orange', className } : ILoadingOverlay) {

    function getOverlayPosition(position: TOverlayPosition){
        switch (position) {
            case 'absolute':
                return 'positionAbsolute'
            case 'fixed':
            default: 
                return 'positionFixed'
        }
    }
  return (
    <div className={cx(styles.overlay, styles[overlayBkgColor], styles[getOverlayPosition(position)], className ? className : '')}>
        <Loader 
            visible={isVisible} 
            size={loaderSize} 
            text={text} 
            position='absolute' 
            color= { loaderColor}
        />
    </div>
  )
}

export { LoadingOverlay }