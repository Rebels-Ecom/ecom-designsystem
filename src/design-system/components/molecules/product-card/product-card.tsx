import React, { useState} from 'react'
import styles from './product-card.module.css'
import { CardImage } from '../card-image/card-image'
import { ProductQuantityInput } from '../product-quantity-input/product-quantity-input'
import { IButton, Button } from '../../atoms/button/button'
import { convertNumToStr } from '../../../../helpers/format-helper'
import { ProductVariantList } from '../product-variant-list/product-variant-list'
import { IProduct } from '../../../../types/product'
import { getProductPicture } from '../../../../helpers/picture-helper'

export interface IProductCard extends IProduct {
    product: IProduct
    button: IButton
    addToCart: CallableFunction
}

const ProductCard = ({ productId, productName, productImageUrl, country, packaging, priceStr, price, salesUnit, itemNumberPerSalesUnit, productVariantList, button, addToCart }: IProductCard ) => {
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
            productVariantList,
            selectedVariantId: productId
        }
    )
    const [packageMenuOpen, setPackageMenuOpen] = useState<Boolean>(false);

    function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
        const quantity = parseInt(e.target.value) || 1;
        setProduct({
            ...product, 
            quantity:quantity.toString(),
            totalPrice: convertNumToStr(product.price * product.itemNumberPerSalesUnit * quantity)})
    }

    function handleButtonClick(){
        setPackageMenuOpen(true)
    }

    function handlePackageChange(selectedVariant:any){
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
            totalPrice: convertNumToStr(selectedVariant.price * selectedVariant.itemNumberPerSalesUnit),
            selectedVariantId: selectedVariant.variantId
        });

        setPackageMenuOpen(false)
    }

    if(packageMenuOpen) {
        return(
            <ProductVariantList className= {styles.productCard} variantsList= {product.productVariantList} onVariantSelect={handlePackageChange} selectedVariantId={product.selectedVariantId}/>
        )
    }
    else {
        return(
            <div className= {styles.productCard}>
                <CardImage 
                    heading={product.productName}
                    image = {product.productImage}
                    articleId = {product.productId}
                    country = {product.country}
                    packaging = {product.packaging}
                    unitPriceStr = {product.priceStr}
                    onClick = {handleButtonClick}
                />
                <ProductQuantityInput
                    className={styles.productCardInput}
                    salesUnit = {product.salesUnit}
                    itemNumberPerSalesUnit = {product.itemNumberPerSalesUnit}
                    totalPrice = {product.totalPrice}
                    quantity = {product.quantity}
                    quantityInputId = {product.productId}
                    onChange={handleOnChangeQuantity}
                />
                <Button {...button} className={styles.productCardBtn} fullWidth onClick={()=>addToCart(product)}>Add to cart</Button>
            </div>
        )
    }
}

export { ProductCard }
