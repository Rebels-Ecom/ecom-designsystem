import React from 'react'
import { Button, IButton } from '../../atoms/button/button'
import { SlidingSidebar } from '../../molecules/sliding-sidebar/sliding-sidebar'
import { CartProductList, ICartProductList } from '../cart-product-list/cart-product-list'
import { IProductCardList, ProductCardList } from '../product-card-list/product-card-list'
import { Switch, Group, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import styles from './cart-sidebar.module.css'
import { Icon } from '../../atoms/icon/icon'

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
  goToCartButton: IButton
  onClickGoToCart: CallableFunction
  suggestedProductsList: IProductCardList
  addSuggestedProductToCart: CallableFunction
}

export function SwitchToggle() {
  //const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  

  return (
    <Group position="center" my={30}>
      <Switch
        checked={true}
        onChange={() => console.log('HEJ')}
        size="lg"
        onLabel={<Icon icon={'icon-alert-circle'} />}
        offLabel={<Icon icon={'icon-heart'}  />}
      />
    </Group>
  );
}


function CartSidebar({isOpen, onClose, heading, totalAmount, productsNumber, text, shoppingListButton, onClickShoppingList, latestOrderButton, onClickLatestOrder, cartProductsList, goToCartButton, onClickGoToCart, suggestedProductsList, addSuggestedProductToCart}: ICartSidebar) {
  return (
    <div>
      <SlidingSidebar isOpen={isOpen} onClose={()=>onClose()}>
        <div className={styles.headingWrapper}><h3>{heading}</h3><h3>{totalAmount}kr</h3></div>
        <p className={styles.text}> Du har totalt {productsNumber} olika produkter i din kundvagn. <span className={styles.text} dangerouslySetInnerHTML={{ __html: text }} ></span></p>
        <div className={styles.buttonsWrapper}>
          <Button {...shoppingListButton} type={'button'} surface={'secondary'} onClick={()=>onClickShoppingList()}></Button>
          <Button {...latestOrderButton} type={'button'} surface={'secondary'} onClick={()=>onClickLatestOrder()}></Button>
        </div>
        <CartProductList className={styles.productListWrapper} {...cartProductsList}/>
        <SwitchToggle></SwitchToggle>
        <Button {...goToCartButton} type={'button'} surface={'primary'} onClick={()=>onClickGoToCart()}></Button>
        <ProductCardList  className={styles.productListWrapper} {...suggestedProductsList} addToCart={addSuggestedProductToCart} />
      </SlidingSidebar>
    </div>
  )
}

export { CartSidebar }