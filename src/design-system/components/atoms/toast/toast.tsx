import React, { useEffect, useState } from 'react'
import styles from './toast.module.css'
import cx from 'classnames'
import { CartProduct, ICartProduct } from '../../molecules/cart-product/cart-product'

export type TToastPosition = 'top-left' | 'top-right' | 'center'
export interface IToast {
    toastList: Array<ICartProduct>
    position?: TToastPosition
    autoClose?: boolean
    autoCloseDelay?: number
}

function Toast({ toastList, position='top-right', autoClose=true, autoCloseDelay=3000 } : IToast) {
    console.log('CHILDREN', toastList)

    const [list, setList] = useState(toastList)
    useEffect(() => {
        setList([...toastList])
    }, [toastList])

     useEffect(() => {
        const interval = setInterval(() => {
            if (autoClose && toastList.length && list.length) {
                deleteToast(toastList[0].product.productId);
            }
        }, autoCloseDelay);
        
        return () => {
            clearInterval(interval);
        }

        // eslint-disable-next-line
    }, [toastList, autoClose, autoCloseDelay, list])

    const deleteToast = (id:string) => {
        console.log('LIST', list)
        console.log('TOAST LIST', toastList)
        const listItemIndex = list.findIndex(e => e.product.productId === id);
        const toastListItem = toastList.findIndex(e => e.product.productId === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([...list]);
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (autoClose && children.length && list.length) {
    //             deleteToast(children[0].productId);
    //         }
    //     }, autoCloseDelay);
        
    //     return () => {
    //         clearInterval(interval);
    //     }

    //     // eslint-disable-next-line
    // }, [children, autoClose, autoCloseDelay, list])

    // const deleteToast = (id:string) => {
    //     const listItemIndex = list.findIndex(e => e.productId === id);
    //     const toastListItem = children.findIndex(e => e.productId === id);
    //     list.splice(listItemIndex, 1);
    //     children.splice(toastListItem, 1);
    //     setList([...list]);
    // }

if(!list)
return null

    return (
        <div className={cx(styles.toastContainer, styles[position])}>
            {
                // children.map((toast, i)=><div key={i} className={styles.toast}>{ toast }</div>)
                list.map((toast, i)=>
                <CartProduct key={i} {...toast}></CartProduct>
                )
            }
            
        </div>
    )
}

export { Toast }