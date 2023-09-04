import React from 'react'
import { Checkbox } from '../../atoms'
import styles from './checkbox-list-item.module.css'

export interface ICheckboxListItem {
  children: React.ReactNode
  id: string
  name: string
  value: string
  checked: boolean
  onChange: () => void
}

function CheckboxListItem({ children, id, name, value, checked, onChange }: ICheckboxListItem) {
  if (!children) return null
  return (
    <div className={styles.checkboxListItem}>
      <div className={styles.itemWrapper}>{children}</div>
      <Checkbox id={id} name={name} value={value} checked={checked} onChange={onChange} />
    </div>
  )
}

export { CheckboxListItem }
