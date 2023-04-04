import React, { useState} from 'react'
import styles from './product-details.module.css'
import { CardImage } from '../card-image/card-image'
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

export interface IProductDetails extends IProduct {
    product: IProduct
    changePackagingButton: IButton
    addToCartButton: IButton
    addToCart: CallableFunction
    className: string
}

const ProductDetails = ({ productId, productName, productImageUrl, country, packaging, priceStr, price, salesUnit, itemNumberPerSalesUnit, tags, productVariantList, changePackagingButton, addToCartButton, addToCart, productDescription, className }: IProductDetails ) => {
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

    if(variantsListOpen) {
        return(
            <ProductVariantList className= {styles.productDetails} variantsList= {product.productVariantList} onVariantSelect={handlePackageChange} selectedVariantId={product.selectedVariantId}/>
        )
    }
    else {
        return(
            <div className= {cx(styles.productDetails)}>
               <div className={styles.imageWrapper}>
                    <Below breakpoint="sm">{(matches: any) => matches && product.tags && <ProductTags tagsList={product.tags}/>}</Below>
                    <Picture {...product.productImage} classNamePicture={styles.cardPicture} classNameImg={`${styles.cardImage}`} /> 
                </div>

                <div className={styles.contentWrapper}>
                
                    <Above breakpoint="md">{(matches: any) => matches && product.tags && <ProductTags tagsList={product.tags}/>}</Above>
                    <h3 className={styles.heading}>{product.productName}</h3>
                    <p className={styles.textPurple}>{`${packaging}: ${product.priceStr} kr/st`}</p>
                    {product.country!=='' && <p className={styles.textGray}>{`Land: ${product.country}`}</p>}
                    <p className={styles.description}>{product.productDescription}</p>
                    
                    <Button {...changePackagingButton} className={styles.btn} surface='secondary' iconRight={{icon:'icon-layers'}} rounded onClick={()=>handleVariantsButtonClick()}>Byt förpackning</Button>
                    <ProductQuantityInput
                        className={styles.quantityInput}
                        salesUnit = {product.salesUnit}
                        itemNumberPerSalesUnit = {product.itemNumberPerSalesUnit}
                        totalPrice = {product.totalPrice}
                        quantity = {product.quantity}
                        quantityInputId = {product.productId}
                        onChange={handleOnChangeQuantity}
                    />
                    <Button {...addToCartButton} className={styles.btn} size='large' onClick={()=>addToCart(product)}>Lägg i kundvagn</Button>
                </div>
                
            </div>
        )
    }
}

export { ProductDetails}
