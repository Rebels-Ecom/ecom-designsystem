import React, { useState } from 'react'
import styles from './cart-product-list.module.css'
import { CartProduct, ICartProduct } from '../../molecules/cart-product/cart-product'
import { ToggleButton } from '../../atoms'
import cx from 'classnames'


export interface ICartProductList {
  children: React.ReactNode
  className?: string
}

const CartProductList = ({ children, className }: ICartProductList) => {
  
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  function handleExpandList(){
    setIsExpanded(!isExpanded)
  }

  if(!children)
    return null

  return (
    <div className={cx(styles.cartProductList, className && className)}>
      {children}
      {/* <ul className={cx(styles.list, isExpanded ? styles.expanded : styles.collapsed, className ? className : '')}>
        {children.map((productItem: ICartProduct) => (
          <li key={productItem.product.productId} className={styles.listItem}>
            <CartProduct key={productItem.product.productId} {...productItem} onClickRemoveProduct={()=>handleRemoveProduct(productItem.product.productId)}/>
          </li>
        ))}
      </ul> */}
      {/* <ToggleButton toggleBtnLabelExpand={labelExpandList} toggleBtnLabelCollapse={labelCollapseList} isExpanded={isExpanded} onToggleClick={handleExpandList}></ToggleButton> */}
    </div>
    
  )
}

export { CartProductList }
