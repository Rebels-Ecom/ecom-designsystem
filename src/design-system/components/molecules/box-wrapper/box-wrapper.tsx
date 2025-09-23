import React, { useMemo } from 'react'
import styles from './box-wrapper.module.css'
import cx from 'classnames'

export type TGroupDirection = 'default' | 'row' | 'column'
export type TGroupPosition = 'left' | 'right' | 'center' | 'apart'
export type TSpacing = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type TAlign = 'left' | 'right' | 'center' | 'baseline' | 'stretch'

export interface IGroupWrapper {
  children: React.ReactNode
  direction?: TGroupDirection
  position?: TGroupPosition
  spacing?: TSpacing
  noWrap?: boolean
  hasMaxWidth?: boolean
  withBorder?: boolean
  withStrongBorder?: boolean
  align?: TAlign
  /**
   * If true, applies an even vertical padding in order to vertically center the button
   * @default false
   */
  onlyButton?: boolean
  /**
   * If true, the default margin will be removed
   * @default false
   */
  noMargin?: boolean
  /**
   * Sets the padding prop in rem
   * Takes either a single number, e.g. 1 or an array of numbers, e.g. [1, 0] or [1, 0, 0, 1] (top, right, bottom, left)
   * Default is undefined, and therefore decided by styles/css
   * @default undefined
   */
  padding?: Array<number> | number
  backgroundColor?: 'light'
  style?: React.CSSProperties
}

function BoxWrapper({
  children,
  direction = 'default',
  position = 'left',
  spacing = 'md',
  noWrap = true,
  align = 'left',
  hasMaxWidth = true,
  withBorder = true,
  withStrongBorder = false,
  onlyButton = false,
  noMargin = false,
  padding,
  backgroundColor,
  style,
}: IGroupWrapper) {
  function getGroupElementsPosition(position: TGroupPosition) {
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

  function getGroupElementsAlignment(alignment: TAlign) {
    switch (alignment) {
      case 'left':
        return 'leftAlignment'
      case 'right':
        return 'rightAlignment'
      case 'center':
        return 'centerAlignment'
      case 'stretch':
        return 'stretchAlignment'
      case 'baseline':
      default:
        return 'baselineAlignment'
    }
  }

  function getGroupElementsSpacing(spacing: TSpacing) {
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

  function getGroupElementsDirection(direction: TGroupDirection) {
    switch (direction) {
      case 'column':
        return 'direction-column'
      case 'row':
        return 'direction-row'
      case 'default':
      default:
        return 'direction-default'
    }
  }

  const paddingValue = useMemo(() => {
    if (!padding && padding !== 0) {
      return ''
    }

    if (typeof padding === 'number') {
      return `${padding}rem`
    }

    return padding.map((p) => `${p}rem`).join(' ')
  }, [padding])

  return (
    <div
      className={cx(
        styles.boxWrapper,
        styles[getGroupElementsDirection(direction)],
        styles[getGroupElementsPosition(position)],
        styles[getGroupElementsAlignment(align)],
        styles[getGroupElementsSpacing(spacing)],
        {
          [styles[backgroundColor ?? '']]: backgroundColor,
          [styles.hasMaxWidth]: hasMaxWidth,
          [styles.withBorder]: withBorder,
          [styles.withStrongBorder]: withStrongBorder,
          [styles.noWrap]: noWrap,
          [styles.onlyButton]: onlyButton,
          [styles.noMargin]: noMargin,
        }
      )}
      style={{ ...style, padding: paddingValue }}
    >
      {children}
    </div>
  )
}

export { BoxWrapper }
