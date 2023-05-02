import React, { useState } from 'react'
import styles from './product-card.module.css'
import cx from 'classnames'
import { Picture } from '../../atoms/picture/picture'
import { getProductPicture } from '../../../../helpers/picture-helper'
import { DividerLines } from '../../atoms/divider-lines/divider-lines'
import { ProductQuantityInput } from '../product-quantity-input/product-quantity-input'
import { Button, IButton } from '../../atoms/button/button'
import { IProduct } from '../../../../types/product'
import { convertNumToStr } from '../../../../helpers/format-helper'
import { ProductVariantList } from '../product-variant-list/product-variant-list'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { TagsList } from '../tags-list/tags-list'
import { Placeholder } from '../../atoms/placeholder/placeholder'


export interface IProductCard extends IProduct {
  product: IProduct
  changePackagingButton: IButton
  addToCartButton: IButton
  addToCart: CallableFunction
  loading: boolean
}

function ProductCard({ product, changePackagingButton, addToCartButton, addToCart, loading }: IProductCard ) {
  const { productId, productImageUrl, price, itemNumberPerSalesUnit} = product
  const [variantsListOpen, setVariantsListOpen] = useState<Boolean>(false)
  const [ myProduct, setProduct ] = useState(
    { ...product,
      productImage: getProductPicture(productId, productImageUrl),
      quantity: '1',
      totalPrice: convertNumToStr(price*itemNumberPerSalesUnit),
      selectedVariantId: productId
    }
  ) 

  function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(e.target.value) || 1
    setProduct({
      ...myProduct, 
      quantity:quantity.toString(),
      totalPrice: convertNumToStr(product.price * product.itemNumberPerSalesUnit * quantity)
    })
  }

  function handleVariantsButtonClick(){
      setVariantsListOpen(true)
  }

  function handlePackageChange(selectedVariant:any){
    const quantity = product.productId===selectedVariant.variantId ? parseInt(product.quantity) : 1;
    setProduct({
      ...myProduct, 
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
    })
    setVariantsListOpen(false)
  }

  if(variantsListOpen) {
    return(
        <ProductVariantList className= {styles.productCard} variantsList= {product.productVariantList} onVariantSelect={handlePackageChange} selectedVariantId={myProduct.selectedVariantId}/>
    )
  }
  else {
    return (
      <div className={styles.productCard}>
        { Array.isArray(myProduct.tags) && myProduct.tags.length ? <>{ loading ? <Placeholder type='tags' /> : <TagsList tagsList={myProduct.tags}/> }</> : null }
        { loading 
          ?
          <Placeholder type='image' />
          :
          <div className={styles.imageWrapper}>
              <Picture {...myProduct.productImage} classNamePicture={styles.cardPicture} classNameImg={`${styles.cardImage}`} fallbackImageUrl={fallbackProductImageUrl}/> 
          </div>
        }
        { loading 
          ?
          <div className={styles.placeholderContent}>
            <Placeholder type={'heading'} />
            <Placeholder type={'p_short'} />
            <Placeholder type={'p_long'} />
            <Placeholder type={'p_long'} />
          </div>
          :
          <div className={`${styles.cardContent}`}>
            <h5 className={styles.heading}>{myProduct.productName}</h5>
            <DividerLines/>
            <p className={cx(styles.textGray, 'bodyS')}>{`Art.nr. ${productId} - ${myProduct.country}`}</p>
            <p className={cx(styles.textPurple, 'bodyS')}>{`${myProduct.packaging}: ${myProduct.priceStr} kr/st`}</p>
          </div>
        }
        <Button {...changePackagingButton} surface='secondary' iconRight={{icon:'icon-layers'}} rounded fullWidth onClick={()=>handleVariantsButtonClick()} disabled={loading}>Byt förpackning</Button>
        { loading 
          ?
          <div className={styles.placeholderContent}>
            <Placeholder type={'p_long'} />
            <Placeholder type={'p_long'} />
          </div>
          :
          <ProductQuantityInput
            className={styles.productCardInput}
            salesUnit = {myProduct.salesUnit}
            itemNumberPerSalesUnit = {myProduct.itemNumberPerSalesUnit}
            totalPrice = {myProduct.totalPrice}
            quantity = {myProduct.quantity}
            quantityInputId = {myProduct.productId}
            onChange={handleOnChangeQuantity}
          />
        }
        <Button {...addToCartButton} className={!loading ? styles.productCardBtn : ''} fullWidth onClick={()=>addToCart(product)} disabled={loading}>Lägg i kundvagn</Button>
      </div>
    )
  }
}

export { ProductCard }