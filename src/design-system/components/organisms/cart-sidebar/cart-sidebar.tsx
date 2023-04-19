import React from 'react'
import styles from './cart-sidebar.module.css'
import { ToggleSwitch } from '../../atoms/toggle-switch/toggle-switch'
import { Button, IButton } from '../../atoms/button/button'
import { FormGroup } from '../../molecules'
import { SlidingSidebar } from '../../molecules/sliding-sidebar/sliding-sidebar'
import { CartProductList, ICartProductList } from '../cart-product-list/cart-product-list'
import { IProductCardList, ProductCardList } from '../product-card-list/product-card-list'

export interface ICartSidebar {
  isOpen: boolean
  onClose: CallableFunction
  heading: string
  totalAmount: string,
  productsNumber: number
  text: string
  shoppingListButton: IButton
  latestOrderButton: IButton
  onClickShoppingList: CallableFunction
  onClickLatestOrder: CallableFunction
  cartProductsList: ICartProductList
  onClickRemoveProduct: CallableFunction
  goToCartButton: IButton
  onClickGoToCart: CallableFunction
  toggleSwitchLabel: string
  onClickToggleSwitch: CallableFunction
  suggestedProductsList: IProductCardList
  addSuggestedProductToCart: CallableFunction
}


function CartSidebar({isOpen, onClose, heading, totalAmount, productsNumber, text, shoppingListButton, onClickShoppingList, latestOrderButton, onClickLatestOrder, cartProductsList, onClickRemoveProduct, goToCartButton, onClickGoToCart, toggleSwitchLabel, onClickToggleSwitch, suggestedProductsList, addSuggestedProductToCart}: ICartSidebar) {
  return (
    <div className={styles.cartSidebar}>
      <SlidingSidebar isOpen={isOpen} onClose={()=>onClose()}>
        <div className={styles.headingWrapper}><h3>{heading}</h3><h3>{totalAmount}kr</h3></div>
        <p className={styles.text}> Du har totalt {productsNumber} olika produkter i din kundvagn. <span className={styles.text} dangerouslySetInnerHTML={{ __html: text }} ></span></p>
        <div className={styles.buttonsWrapper}>
          <Button {...shoppingListButton} type={'button'} surface={'secondary'} onClick={()=>onClickShoppingList()}></Button>
          <Button {...latestOrderButton} type={'button'} surface={'secondary'} onClick={()=>onClickLatestOrder()}></Button>
        </div>
        <CartProductList className={styles.productListWrapper} {...cartProductsList} onRemoveProduct={onClickRemoveProduct}/>
        <div className={styles.buttonsWrapper}>
          <Button {...goToCartButton} type={'button'} surface={'primary'} size={'large'} onClick={()=>onClickGoToCart()}></Button>
          <FormGroup label={toggleSwitchLabel} formElementId={'toggle-save-shopping-list'} className={styles.toggleSwitchWrapper}>
            <ToggleSwitch id={'toggle-save-shopping-list'} onChangeToggle={onClickToggleSwitch}></ToggleSwitch>
          </FormGroup>
        </div>
        <ProductCardList  className={styles.productListWrapper} {...suggestedProductsList} addToCart={addSuggestedProductToCart} />
      </SlidingSidebar>
    </div>
  )
}

export { CartSidebar }