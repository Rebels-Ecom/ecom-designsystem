import React from 'react'
import styles from './cart-sidebar.module.css'
import { ToggleSwitch } from '../../atoms/toggle-switch/toggle-switch'
import { Button, IButton } from '../../atoms/button/button'
import { FormGroup } from '../../molecules'
import { SlidingSidebar } from '../../molecules/sliding-sidebar/sliding-sidebar'
import { CartProductList, ICartProductList } from '../cart-product-list/cart-product-list'
import { IProductCardList, ProductCardList } from '../product-card-list/product-card-list'
import { Text } from '@mantine/core';
import cx from 'classnames'

export interface ICartSidebar {
  children: React.ReactNode
  classNames?: Array<string>
  // heading?: string
  // totalAmount?: string,
  // productsNumber?: number
  // text?: string
  // shoppingListButton?: IButton
  // latestOrderButton?: IButton
  // onClickShoppingList?: CallableFunction
  // onClickLatestOrder?: CallableFunction
  // onClickRemoveProduct?: CallableFunction
  // goToCartButton?: IButton
  // onClickGoToCart?: CallableFunction
  // toggleSwitchLabel?: string
  // onClickToggleSwitch?: CallableFunction
  // suggestedProductsList?: IProductCardList
  // addSuggestedProductToCart?: CallableFunction
}


function CartSidebar({children, classNames=[]}: ICartSidebar) {
  return (
    <div className={cx(styles.cartSidebar, ...classNames)}>
        {children}
    </div>
  )
}

export { CartSidebar }