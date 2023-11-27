import React from 'react'
import styles from './order-status-list.module.css'
import { TTagColor, Tag } from '../../atoms/tag/tag'
import { capitalizeFirstLetter } from '../../../../helpers/format-helper'
import { getOrderStatusTagColor } from '../../../../helpers/tag-helper'


export interface IOrderStatus {
  name: string
  status: string
}

export interface IOrderStatusList {
  orderStatusList: Array<IOrderStatus>
}

/**
 * @deprecated
 */
function OrderStatusList({ orderStatusList } : IOrderStatusList) {
  return (
    <ul className={styles.tagsList}>
      {Array.isArray(orderStatusList) && orderStatusList.length>0 && orderStatusList.map((statusItem, index)=>(
        <li key={index}>
          <Tag text={capitalizeFirstLetter(statusItem.name)} shape={'pill'} color={statusItem.status ? getOrderStatusTagColor(statusItem.status as TTagColor) : 'grey'}/>
        </li>
        ))
      }
    </ul>
  )
}

export { OrderStatusList }