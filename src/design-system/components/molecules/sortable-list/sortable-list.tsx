import React, { useState, useEffect } from 'react'
import styles from './sortable-list.module.css'
import cx from 'classnames'
import { IconButton, Loader } from '../../atoms'

export type TSpacing = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ISortableList {
  listHeading?: string
  sortingOptions: Array<ISortingOption>
  children: Array<React.ReactNode>
  loading?: boolean
  withSeparatingLines?: boolean
  spacing?: TSpacing
  className?: string
}

export interface ISortingOption {
  name: string
  onClickUp: CallableFunction
  onClickDown: CallableFunction
}

const SortingOption = ({ name, onClickUp, onClickDown }: ISortingOption) => {
  return (
    <div className={styles.sortingOption}>
      <div className={styles.optionName}>{name}</div>
      <IconButton icon={'icon-chevron-up'} isLink={false} onClick={() => onClickUp()}></IconButton>
      <IconButton icon={'icon-chevron-down'} isLink={false} onClick={() => onClickDown()}></IconButton>
    </div>
  )
}

const SortingOptions = ({ sortingOptions }: { sortingOptions: Array<ISortingOption> }) => {
  return (
    <ul className={styles.sortingOptionsList}>
      {sortingOptions.map((option) => (
        <li key={option.name}>
          <SortingOption {...option}></SortingOption>
        </li>
      ))}
    </ul>
  )
}

const SortableList = ({ listHeading, sortingOptions, children, loading, withSeparatingLines, spacing = 'md', className }: ISortableList) => {
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
    <div className={cx(styles.sortableList, className && className)}>
      {loading ? (
        <Loader visible={loading} size="sm" position="relative" color="orange" />
      ) : (
        <div>
          {listHeading && <div className={cx(styles.listHeading, 'h4')}>{listHeading}</div>}
          <SortingOptions sortingOptions={sortingOptions} />
          <ul className={styles.list}>
            {children?.map((item: React.ReactNode) => (
              <li key={Math.random()} className={cx(styles.listItem, withSeparatingLines ? styles.withSeparatingLines : '', styles[getItemsSpacing(spacing)])}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export { SortableList }