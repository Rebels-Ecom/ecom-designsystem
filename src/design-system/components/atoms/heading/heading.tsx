import React, { useMemo } from 'react'
import styles from './heading.module.css'
import cx from 'classnames'

export type THeadingAlignment = 'left' | 'center' | 'right'
export type TOrder = 1 | 2 | 3 | 4 | 5

export interface IHeading {
  children: string
  order: TOrder
  align?: THeadingAlignment
  noMargin?: boolean
  className?: string
  /**
   * Sets the margin prop in rem
   * Takes either a single number, e.g. 1 or an array of numbers, e.g. [1, 0] or [1, 0, 0, 1] (top, right, bottom, left)
   * TODO: maybe remove this property after a proper design has been applied for our headings?
   * @default '0'
  */
  margin?: Array<number> | number;
  color?: 'error'; // TODO: add more options if needed
}

function getHeadingSize(size: TOrder) {
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

function getHeadingAlignment(alignment: THeadingAlignment) {
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

function Heading({ children, order = 3, align = 'left', noMargin, className = '', margin, color }: IHeading) {
  const marginValue = useMemo(() => {
    if (!margin && margin !== 0) {
      return "";
    }

    if (typeof margin === "number") {
      return `${margin}rem`;
    }

    return margin.map(p => `${p}rem`).join(' ');

  }, [margin]);

  const Tag  = getHeadingSize(order);

  return (
    <Tag
      className={cx(
        styles.heading,
        styles[getHeadingAlignment(align)],
        getHeadingSize(order),
        {
          [styles.noMargin]: noMargin,
          [styles[color ?? '']]: color
        },
        className
      )}
      style={{ margin: marginValue }}
    >
      {children}
    </Tag>
  )
}

export { Heading }
