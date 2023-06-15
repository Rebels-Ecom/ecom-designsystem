import React from 'react'
import styles from './loader.module.css'
import cx from 'classnames'

export type TLoaderSize = 'xs' | 'sm' | 'md' | 'lg'
export type TLoaderColor = 'default' | 'orange'
export type TLoaderPosition = 'absolute' | 'relative'

export interface ILoader {
    visible: boolean
    position?: TLoaderPosition
    size?: TLoaderSize
    text?: string
    color?: TLoaderColor
}

function getLoaderSize(size:TLoaderSize){
    switch(size){
        case 'xs': 
            return 'loaderXSmall'
        case 'md': 
            return 'loaderMedium'
        case 'lg': 
            return 'loaderLarge'
        case 'sm':
        default:
            return 'loaderSmall'
    }
}

function getLoaderColor(color:TLoaderColor){
    switch(color){
        case 'orange': 
            return 'loaderOrange'
        case 'default':
        default:
            return 'loaderDefaultColor'
    }
}

function getLoaderPosition(position:TLoaderPosition){
    switch(position){
        case 'relative': 
            return 'loaderRelativePos'
        case 'absolute':
        default:
            return 'loaderAbsolutePos'
    }
}

function Loader({ visible, position='absolute', text, color='default', size='sm' } : ILoader) {
    if(!visible)
        return null

    return (
        <div className={cx(styles.loader, styles[getLoaderPosition(position)])}>
            <div className={cx(styles.loaderSpinner, styles[getLoaderSize(size)], styles[getLoaderColor(color)])}/>
            {text && <div className={styles.loaderText}>{text}</div>}
        </div>
    )
}

export { Loader }