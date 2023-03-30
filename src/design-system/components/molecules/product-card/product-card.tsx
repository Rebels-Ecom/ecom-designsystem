import React, { useState} from 'react'
import styles from './product-card.module.css'
import { CardImage } from '../card-image/card-image'
import { ProductQuantityInput } from '../product-quantity-input/product-quantity-input'
import { IButton, Button } from '../../atoms/button/button'
import { convertNumToStr } from '../../../../helpers/format-helper'
import { ProductVariantList } from '../product-variant-list/product-variant-list'
import { IProduct } from '../../../../types/product'
import { getProductPicture } from '../../../../helpers/picture-helper'
import cx from 'classnames'

export interface IProductCard extends IProduct {
    product: IProduct
    changePackagingButton: IButton
    addToCartButton: IButton
    addToCart: CallableFunction
    className: string
}

const ProductCard = ({ productId, productName, productImageUrl, country, packaging, priceStr, price, salesUnit, itemNumberPerSalesUnit, tags, productVariantList, changePackagingButton, addToCartButton, addToCart, className }: IProductCard ) => {
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

    function handleVariantsButtonClick(){
        setVariantsListOpen(true)
    }

    function handlePackageChange(selectedVariant:any){
        const quantity = product.productId===selectedVariant.variantId ? parseInt(product.quantity) : 1;
        setProduct({
            ...product, 
            productId: selectedVariant.variantId,
            productImage: selectedVariant.image,
            country: selectedVariant.country,
            packaging: selectedVariant.variantName,
            priceStr: selectedVariant.listPricePerUnitString,
            price: selectedVariant.price,
            salesUnit: selectedVariant.salesUnit,
            itemNumberPerSalesUnit: selectedVariant.itemNumberPerSalesUnit,
            totalPrice: convertNumToStr(selectedVariant.price * selectedVariant.itemNumberPerSalesUnit * quantity),
            quantity: quantity.toString(),
            selectedVariantId: selectedVariant.variantId
        });

        setVariantsListOpen(false)
    }

    if(variantsListOpen) {
        return(
            <ProductVariantList className= {styles.productCard} variantsList= {product.productVariantList} onVariantSelect={handlePackageChange} selectedVariantId={product.selectedVariantId}/>
        )
    }
    else {
        return(
            <div className= {cx(styles.productCard)}>
                <CardImage 
                    heading={product.productName}
                    image = {product.productImage}
                    articleId = {product.productId}
                    country = {product.country}
                    packaging = {product.packaging}
                    unitPriceStr = {product.priceStr}
                    productTags = {product.tags}
                />
                <Button {...changePackagingButton} surface='secondary' iconRight={{icon:'icon-layers'}} rounded onClick={()=>handleVariantsButtonClick()}>Byt förpackning</Button>
                <ProductQuantityInput
                    className={styles.productCardInput}
                    salesUnit = {product.salesUnit}
                    itemNumberPerSalesUnit = {product.itemNumberPerSalesUnit}
                    totalPrice = {product.totalPrice}
                    quantity = {product.quantity}
                    quantityInputId = {product.productId}
                    onChange={handleOnChangeQuantity}
                />
                <Button {...addToCartButton} className={styles.productCardBtn} fullWidth onClick={()=>addToCart(product)}>Lägg i kundvagn</Button>
            </div>
        )
    }
}

export { ProductCard }
