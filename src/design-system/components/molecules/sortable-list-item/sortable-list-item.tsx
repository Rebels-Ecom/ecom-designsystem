import React from 'react'
import { IconButton } from '../../atoms'
import styles from './sortable-list-item.module.css'
import { mediaQueryHelper } from '../../layouts'

export interface ISortableListItem {
  children: React.ReactNode
  id: string
  name: string
  onClick?: () => void
}

function SortableListItem({ children, onClick }: ISortableListItem) {
  const { isMobile } = mediaQueryHelper();
  if (!children) return null
  return (
    <button className={styles.listItem} onClick={onClick}>
      <div className={styles.itemWrapper}>
        {children}
        {onClick && !isMobile && (
          <IconButton
            type="button"
            onClick={onClick}
            icon="icon-chevrons-right"
            noPadding
            isTransparent
            noBorder
          />
        )}
      </div>
    </button>
  )
}

export { SortableListItem }
