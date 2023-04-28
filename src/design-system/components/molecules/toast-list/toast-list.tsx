import React, { useEffect, useState } from 'react'
import styles from './toast-list.module.css'
import cx from 'classnames'
import { ICartProduct } from '../cart-product/cart-product'
import { ProductToast } from '../../atoms/product-toast/product-toast'

export type TToastPosition = 'top-left' | 'top-right'
export interface IToastList {
    toastList: Array<ICartProduct>
    autoCloseDelay?: number
    position?: TToastPosition
}

function ToastList({ toastList, autoCloseDelay=1000, position='top-right' } : IToastList) {

    const [list, setList] = useState(toastList)

    useEffect(() => {
        setList([...toastList])
    }, [toastList])

    useEffect(() => {
        const interval = setInterval(() => {
            if (toastList.length && list.length) {
                removeToast(toastList[0].product.productId)
            }
        }, autoCloseDelay)
        
        return () => {
            clearInterval(interval)
        }

    }, [toastList, list])

   const removeToast = (id:string) => {
        const listItemIndex = list.findIndex(e => e.product.productId === id)
        const toastListItem = toastList.findIndex(e => e.product.productId === id)
        list.splice(listItemIndex, 1)
        toastList.splice(toastListItem, 1)
        setList([...list])
    }

    if(!list)
        return null

    return (
        <div className={cx(styles.toastListContainer, styles[position])}>
            {list.map((toast, i)=> <ProductToast key={i} className={styles.toastWrapper} cartProduct={toast} position={position}></ProductToast>)}  
        </div>
    )
}

export  { ToastList }