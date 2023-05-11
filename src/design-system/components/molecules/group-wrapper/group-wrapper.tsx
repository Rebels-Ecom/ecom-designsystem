import React from 'react'
import styles from './group-wrapper.module.css'
import cx from 'classnames'

export type TGroupDirection = 'row' | 'column'
export type TGroupPosition = 'left' | 'right' | 'center' |'apart'
export type TSpacing = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type TAlign = 'left' | 'right' | 'center' |'baseline'

export interface IGroupWrapper {
    children: React.ReactNode
    direction?: TGroupDirection
    position?: TGroupPosition
    spacing?: TSpacing
    noWrap?: boolean
    align?: TAlign
}

function GroupWrapper({ children,  direction='row', position='left', spacing='md', noWrap= true, align='left' } : IGroupWrapper){

    function getGroupElementsPosition(position: TGroupPosition){
        switch (position) {
            case 'left':
              return 'leftPosition'
            case 'right':
              return 'rightPosition'
            case 'center':
                return 'centerPosition'
            case 'apart':
            default:
              return 'apartPosition'
        }
    }

    function getGroupElementsAlignment(alignment: TAlign){
        switch (alignment) {
            case 'left':
              return 'leftAlignment'
            case 'right':
              return 'rightAlignment'
            case 'center':
                return 'centerAlignment'
            case 'baseline':
            default:
              return 'baselineAlignment'
        }
    }

    function getGroupElementsSpacing(spacing: TSpacing){
        switch (spacing) {
            case 'xs':
              return 'spacing-xs'
            case 'sm':
              return 'spacing-sm'
            case 'md':
                return 'spacing-md'
            case 'lg':
                return 'spacing-lg'
            case 'xl':
            default:
              return 'spacing-xl'
        }
    }

    return(
        <div className={cx(
            styles.groupWrapper, 
            styles[direction],
            styles[getGroupElementsPosition(position)], 
            styles[getGroupElementsAlignment(align)], 
            styles[getGroupElementsSpacing(spacing)], 
            noWrap && styles.noWrap)} >
                {children}
        </div>
    )
}

export { GroupWrapper } 