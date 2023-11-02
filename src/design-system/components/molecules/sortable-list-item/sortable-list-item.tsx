import React from 'react'
import { IconButton } from '../../atoms'
import styles from './sortable-list-item.module.css'

export interface ISortableListItem {
  children: React.ReactNode
  id: string
  name: string
  onClick?: () => void
}

function SortableListItem({ children, onClick }: ISortableListItem) {
  if (!children) return null
  return (
    <div className={styles.listItem}>
      <div className={styles.itemWrapper}>
        {children}
        {onClick && <IconButton type="button" onClick={onClick} icon="icon-chevrons-right" noPadding isTransparent noBorder />}
      </div>
    </div>
  )
}

export { SortableListItem }
