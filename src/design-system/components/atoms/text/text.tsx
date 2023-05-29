import React from 'react'
import styles from './text.module.css'
import cx from 'classnames'

export type TTextAlignment = 'left' | 'center' | 'right'
export type TTextWeight = 'normal' | 'bold'
export type TTextSize = 'regular' | 'small'
export type TComponentType = 'a' | 'span'

export interface IText {
  children: React.ReactNode
  componentType?: TComponentType
  href?: string
  align?: TTextAlignment
  underline?: boolean
  weight?: TTextWeight
  size?: TTextSize
  className?: string
}

function Text({ children, align = 'left', componentType, href, underline = false, weight, size = 'regular', className }: IText) {
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
          weight === 'bold' && styles.textBold,
          underline && styles.textUnderlined,
          styles[getTextAlignment(align)],
          className ? className : ''
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
        weight === 'bold' && styles.textBold,
        underline && styles.textUnderlined,
        styles[getTextAlignment(align)],
        size==='small' ? 'bodyS' : 'body',
        className ? className : ''
      )}
    >
      {children}
    </span>
  )
}

export { Text }
