import React from 'react'
import styles from './heading.module.css'
import cx from 'classnames'

export type THeadingAlignment = 'left' | 'center' | 'right'
export type TOrder = 1 | 2 | 3 | 4 | 5 

export interface IHeading {
    children: string
    order: TOrder
    align?: THeadingAlignment
    className?: string
}

function getHeadingSize(size: TOrder){
    switch (size) {
        case 1:
          return 'h1'
        case 2:
          return 'h2'
        case 3:
          return 'h3'
        case 4:
          return 'h4'
        case 5:
        default:
          return 'h5'
    }
}

function getHeadingAlignment(alignment: THeadingAlignment){
    switch (alignment) {
        case 'left':
          return 'leftAlignment'
        case 'right':
          return 'rightAlignment'
        case 'center':
        default:
          return 'centerAlignment'
    }
}

function Heading({ children, order=3, align='left', className} : IHeading){
    return(
       <div className={cx(styles.heading, styles[getHeadingAlignment(align)], getHeadingSize(order), className ? className : '')}>{ children }</div>
    )
}

export { Heading }
