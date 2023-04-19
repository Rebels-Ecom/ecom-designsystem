import React, { useState } from 'react'
import styles from './cart-product-list.module.css'
import { CartProduct, ICartProduct } from '../../molecules/cart-product/cart-product'
import { ToggleButton } from '../../atoms'
import cx from 'classnames'


export interface ICartProductList {
  productCards: Array<ICartProduct>
  onRemoveProduct: CallableFunction
  labelExpandList: string
  labelCollapseList: string
  className?: string
}

const CartProductList = ({ productCards, onRemoveProduct, labelExpandList, labelCollapseList, className }: ICartProductList) => {
  
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  function handleExpandList(){
    setIsExpanded(!isExpanded)
  }

  function handleRemoveProduct(id: string){
    onRemoveProduct(id)
  }

  return (
    <div className={styles.cartProductList}>
      <ul className={cx(styles.list, isExpanded ? styles.expanded : styles.collapsed, className ? className : '')}>
        {productCards.map((card: ICartProduct) => (
          <li key={card.product.productId} className={styles.listItem}>
            <CartProduct key={card.product.productId} {...card} onClickRemoveProduct={()=>handleRemoveProduct(card.product.productId)}/>
          </li>
        ))}
      </ul>
      <ToggleButton toggleBtnLabelExpand={labelExpandList} toggleBtnLabelCollapse={labelCollapseList} isExpanded={isExpanded} onToggleClick={handleExpandList}></ToggleButton>
    </div>
    
  )
}

export { CartProductList }
