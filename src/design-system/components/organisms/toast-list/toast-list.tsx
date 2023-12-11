import React, { useEffect, useState } from 'react'
import styles from './toast-list.module.css'
import cx from 'classnames'
import { ICartProduct } from '../../molecules/cart-product/cart-product'
import { ProductToast } from '../../molecules/product-toast/product-toast'
import { AnimatePresence } from 'framer-motion'

export type TToastPosition = 'top-left' | 'top-right'
export interface IToastList {
  toastList: Array<ICartProduct>
  autoCloseDelay?: number
  position?: TToastPosition
}

function ToastList({ toastList, autoCloseDelay = 1000, position = 'top-right' }: IToastList) {
  const [list, setList] = useState(toastList)

  useEffect(() => {
    setList([...toastList])
  }, [toastList])

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length && list.length) {
        removeToast(toastList[0].product.partNo)
      }
    }, autoCloseDelay)

    return () => {
      clearInterval(interval)
    }
  }, [toastList, list])

  const removeToast = (id: string) => {
    const listItemIndex = list.findIndex((e) => e.product.partNo === id)
    const toastListItem = toastList.findIndex((e) => e.product.partNo === id)
    list.splice(listItemIndex, 1)
    toastList.splice(toastListItem, 1)
    setList([...list])
  }

  if (!list) return null

  return (
    <div className={cx(styles.toastListContainer, styles[position])}>
      <AnimatePresence>
        {list.map((toast, i) => (
          <ProductToast key={i} className={styles.toastWrapper} cartProduct={toast} position={position}></ProductToast>
        ))}
      </AnimatePresence>
    </div>
  )
}

export { ToastList }
