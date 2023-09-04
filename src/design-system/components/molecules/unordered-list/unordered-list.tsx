import React from 'react'
import styles from './unordered-list.module.css'
import cx from 'classnames'
import { Loader } from '../../atoms'

export type TSpacing = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export interface IUnorderedList {
  children: Array<React.ReactNode>
  loading?: boolean
  withSeparatingLines?: boolean
  spacing?: TSpacing
  className?: string
}

const UnorderedList = ({ children, loading, withSeparatingLines, spacing = 'md', className }: IUnorderedList) => {
  function getItemsSpacing(spacing: TSpacing) {
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

  if (!Array.isArray(children) || !children.length) return null

  return (
    <div className={cx(styles.cartProductList, className && className)}>
      {loading ? (
        <Loader visible={loading} size="sm" position="relative" color="orange" />
      ) : (
        <ul className={styles.list}>
          {children?.map((item: React.ReactNode) => (
            <li key={Math.random()} className={cx(styles.listItem, withSeparatingLines ? styles.withSeparatingLines : '', styles[getItemsSpacing(spacing)])}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { UnorderedList }
