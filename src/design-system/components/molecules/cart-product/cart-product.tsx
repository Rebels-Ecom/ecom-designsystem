import React from 'react'
import styles from './cart-product.module.css'
import { ProductQuantityInput } from '../product-quantity-input/product-quantity-input'
import { IProduct } from '../../../../types/product'
import { getProductPicture } from '../../../../helpers/picture-helper'
import cx from 'classnames'
import { Picture } from '../../atoms/picture/picture'
import { IconButton, IIconButton } from '../../atoms/icon-button/icon-button'
import { DividerLines } from '../../atoms/divider-lines/divider-lines'

export interface ICartProduct extends IProduct {
    product: IProduct
    iconButton: IIconButton
    className?: string
}

const CartProduct = ({ product, iconButton, className }: ICartProduct ) => {
    const {productId, productName, productImageUrl, country, packaging, priceStr, totalPrice,  quantity, salesUnit, itemNumberPerSalesUnit} = product
    const productImage = getProductPicture(productId, productImageUrl)

    return(
        <div className= {cx(styles.cartProduct, className ? className : '')}>
            <div className={styles.imageWrapper}>
                <Picture {...productImage} classNamePicture={styles.cardPicture} classNameImg={`${styles.cardImage}`} /> 
            </div>

            <div className={styles.contentWrapper}>
                <p className={styles.heading}>{productName}</p>
                <DividerLines/>
                <p className={cx(styles.textPurple, 'bodyS')}>{`${packaging}: ${priceStr} kr/st`}</p>
                {country!=='' && <p className={cx(styles.textGray, 'bodyS')}>{`Land: ${country}`}</p>}
                <ProductQuantityInput
                    className={styles.quantityInput}
                    salesUnit = {salesUnit}
                    itemNumberPerSalesUnit = {itemNumberPerSalesUnit}
                    totalPrice = {totalPrice}
                    quantity = {quantity}
                    quantityInputId = {productId}
                    disabled
                />
            </div>
            <div className={styles.iconLink}>
                <IconButton {...iconButton}></IconButton>
            </div>
        </div>
    )
}

export { CartProduct }
