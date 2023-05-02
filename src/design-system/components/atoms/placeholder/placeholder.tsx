import React from 'react'
import styles from './placeholder.module.css'
import cx from 'classnames'

export type TPlaceholderType = 'image' | 'tags' | 'heading' | 'p_long' | 'p_short'
export interface IPlaceholder {
    type: TPlaceholderType
}

function Placeholder({type = 'heading'}: IPlaceholder) {

    function getPlaceholderType(type: TPlaceholderType){
        switch (type) {
            case 'image':
                return 'placeholderImage'
            case 'tags':
                return 'placeholderTags'
            case 'p_long':
                return 'placeholderParagraphLong'
            case 'p_short':
                return 'placeholderParagraphShort'
            case 'heading':
            default:
                return 'placeholderHeading'
        }
    }

    return (
        <div className={cx(styles.placeholder, styles[getPlaceholderType(type)])}/>
    )
}

export { Placeholder }