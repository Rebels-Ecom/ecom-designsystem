import React from 'react'
import styles from './text.module.css'
import cx from 'classnames'

export type TTextAlignment = 'left' | 'center' | 'right'
export type TTextWeight = 'normal' | 'bold'
export type TTextSize = 'regular' | 'small'
export type TComponentType = 'a' | 'span'
export type TPadding = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface IText {
  children: React.ReactNode
  componentType?: TComponentType
  href?: string
  align?: TTextAlignment
  underline?: boolean
  borderBottom?: boolean
  weight?: TTextWeight
  size?: TTextSize
  className?: string
  upperCase?: boolean
  color?: 'error' // TODO: add more options if needed
  paddingLeft?: TPadding
  paddingRight?: TPadding
}

function Text({
  children,
  align = 'left',
  componentType,
  href,
  underline = false,
  borderBottom = false,
  weight,
  size = 'regular',
  className = '',
  upperCase,
  color,
  paddingLeft,
  paddingRight,
}: IText) {
  function getTextAlignment(alignment: TTextAlignment) {
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

  if (componentType === 'a' && href !== '')
    return (
      <a
        href={href}
        className={cx(
          styles.text,
          styles.linkText,
          'p',
          styles[getTextAlignment(align)],
          {
            [styles.textBold]: weight === 'bold',
            [styles.textUnderlined]: underline,
            [styles.textWithBottomBorder]: borderBottom,
            [styles[color ?? '']]: color,
          },
          className
        )}
      >
        {children}
      </a>
    )
  return (
    <span
      className={cx(
        styles.text,
        'p',
        styles[getTextAlignment(align)],
        paddingLeft ? styles[`padding-left-${paddingLeft}`] : '',
        paddingRight ? styles[`padding-right-${paddingRight}`] : '',
        size === 'small' ? 'bodyS' : 'body',
        className,
        {
          [styles.textBold]: weight === 'bold',
          [styles.textUnderlined]: underline,
          [styles.textWithBottomBorder]: borderBottom,
          [styles.upperCase]: upperCase,
          [styles[color ?? '']]: color,
        }
      )}
    >
      {children}
    </span>
  )
}

export { Text }
