import React from 'react'
import styles from './loader.module.css'
import cx from 'classnames'

export interface ILoader {
    visible: boolean
    text?: string
    color?: string
}

function Loader({ visible, text, color } : ILoader) {
    if(!visible)
        return null

    return (
        <div className={styles.loader}>
            <div className={cx(styles.loaderSpinner)}/>
            <div className={styles.loaderText}>{text}</div>
        </div>
    )
}

export { Loader }