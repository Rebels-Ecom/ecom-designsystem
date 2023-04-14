import React, { useState} from 'react'
import styles from './cart-product.module.css'
import { ProductQuantityInput } from '../product-quantity-input/product-quantity-input'
import { IButton, Button } from '../../atoms/button/button'
import { convertNumToStr } from '../../../../helpers/format-helper'
import { ProductVariantList } from '../product-variant-list/product-variant-list'
import { IProduct } from '../../../../types/product'
import { getProductPicture } from '../../../../helpers/picture-helper'
import cx from 'classnames'
import { Picture } from '../../atoms/picture/picture'
import { ITag, Tag } from '../../atoms/tag/tag'
import { Below } from '../../layouts/breakpoints/below'
import { Above } from '../../layouts/breakpoints/above'
import { IconButton } from '../../atoms/icon-button/icon-button'
import { LinkComponent } from '../../atoms/ui-link/ui-link'

export interface ICartProduct extends IProduct {
    product: IProduct
    changePackagingButton: IButton
    addToCartButton: IButton
    addToCart: CallableFunction
    className: string
}

const CartProduct = ({ productId, productName, productImageUrl, country, packaging, priceStr, price, salesUnit, itemNumberPerSalesUnit, tags, productVariantList, changePackagingButton, addToCartButton, addToCart, productDescription, className }: ICartProduct ) => {
    const [product, setProduct] = useState(
        {   productId,
            productName, 
            productImage: getProductPicture(productId, productImageUrl),
            country,
            packaging,
            priceStr,
            price,
            salesUnit,
            itemNumberPerSalesUnit,
            quantity: '1',
            totalPrice: convertNumToStr(price*itemNumberPerSalesUnit),
            tags,
            productDescription,
            productVariantList,
            selectedVariantId: productId
        }
    )
    const [variantsListOpen, setVariantsListOpen] = useState<Boolean>(false);

    function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
        const quantity = parseInt(e.target.value) || 1;
        setProduct({
            ...product, 
            quantity:quantity.toString(),
            totalPrice: convertNumToStr(product.price * product.itemNumberPerSalesUnit * quantity)})
    }

    const ProductTags = ({tagsList=[]} : {tagsList:Array<ITag>}) => {
        return(
          <ul className={styles.tagsList}>
            {Array.isArray(tagsList) && tagsList.length>0 && tagsList.map((tag, index)=>(
              <li key={index}>
                <Tag {...tag} ></Tag>
              </li>
              ))
            }
          </ul>
        )
      }

//MAKE PRODUCT QUANTITY INPUT DISPLAY PRICE IN SAME ROW AS QUANTITY
const productPageUrl = '/'

        return(
            <div className= {cx(styles.productDetails)}>
                <div className={styles.imageWrapper}>
                    <Picture {...product.productImage} classNamePicture={styles.cardPicture} classNameImg={`${styles.cardImage}`} /> 
                </div>

                <div className={styles.contentWrapper}>
                    <ProductTags tagsList={product.tags}/>
                    <h3 className={styles.heading}>{product.productName}</h3>
                    <p className={cx(styles.textPurple, 'bodyS')}>{`${product.packaging}: ${product.priceStr} kr/st`}</p>
                    {product.country!=='' && <p className={cx(styles.textGray, 'bodyS')}>{`Land: ${product.country}`}</p>}
                    <p className={styles.description}>{product.productDescription}</p>
                
                    <ProductQuantityInput
                        className={styles.quantityInput}
                        salesUnit = {product.salesUnit}
                        itemNumberPerSalesUnit = {product.itemNumberPerSalesUnit}
                        totalPrice = {product.totalPrice}
                        quantity = {product.quantity}
                        quantityInputId = {product.productId}
                        onChange={handleOnChangeQuantity}
                    />
                </div>
                <IconButton icon={'icon-chevrons-right'} isLink={true} linkUrl={productPageUrl} linkComponent = { LinkComponent }></IconButton>
            </div>
        )

}

export { CartProduct }
