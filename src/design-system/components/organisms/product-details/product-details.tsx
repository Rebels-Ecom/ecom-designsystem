import React, { useState} from 'react'
import styles from './product-details.module.css'
import { ProductQuantityInput } from '../../molecules/product-quantity-input/product-quantity-input'
import { IButton, Button } from '../../atoms/button/button'
import { convertNumToStr } from '../../../../helpers/format-helper'
import { ProductVariantList } from '../../molecules/product-variant-list/product-variant-list'
import { IProduct } from '../../../../types/product'
import { getProductPicture } from '../../../../helpers/picture-helper'
import cx from 'classnames'
import { Picture } from '../../atoms/picture/picture'
import { ITag, Tag } from '../../atoms/tag/tag'
import { Below } from '../../layouts/breakpoints/below'
import { Above } from '../../layouts/breakpoints/above'
import { LoadingBars } from '../../molecules'
import { ILoadingBar } from '../../atoms/loading-bar/loading-bar'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { CampaignBox, TCampaignBox } from '../../atoms/campaign-box/campaign-box'

export interface IProductSpec {
    name: string
    value: string
}

export interface IProductDetail {
    visibleSpecs: Array<IProductSpec>
    visibleDescription: string
    invisibleSpecs: Array<IProductSpec>
    invisibleDescription: string
    tags: Array<ITag>
    loaderValues: Array<ILoadingBar>
}

export interface IProductDetails extends IProduct {
    product: IProduct
    productDetail: IProductDetail
    changePackagingButton: IButton
    addToCartButton: IButton
    addToCart: CallableFunction
    className: string
    campaign?: TCampaignBox
}

const ProductDetails = ({ productId, productName, productImageUrl, packaging, priceStr, price, salesUnit, itemNumberPerSalesUnit, productVariantList, productDetail, changePackagingButton, addToCartButton, addToCart, campaign }: IProductDetails ) => {
    const [product, setProduct] = useState(
        {   productId,
            productName, 
            productImage: getProductPicture(productId, productImageUrl ? productImageUrl : fallbackProductImageUrl),
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
    const [variantsListOpen, setVariantsListOpen] = useState<Boolean>(false)

    function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
        const quantity = parseInt(e.target.value);
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
            productImage: getProductPicture(selectedVariant.variantId, selectedVariant.imageUrl ? selectedVariant.imageUrl : fallbackProductImageUrl),
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
            <div className= {cx(styles.productDetails)}>
                <div className={styles.imageOuterWrapper}>
                    <Above breakpoint="md">{(matches: any) => matches &&productDetail?.loaderValues && productDetail.loaderValues.length>0 && <LoadingBars loadingBars={productDetail.loaderValues} className={styles.loadingBars}></LoadingBars>}</Above>
                    <div className={cx(styles.imageWrapper, styles.variantsListOpen)}>
                        <Below breakpoint="md">{(matches: any) => matches && productDetail.tags && <ProductTags tagsList={productDetail.tags}/>}</Below>
                        <Picture {...product.productImage} classNamePicture={styles.cardPicture} classNameImg={`${styles.cardImage}`} fallbackImageUrl={fallbackProductImageUrl}/> 
                    </div>
                </div>
                <ProductVariantList className= {cx(styles.contentWrapper, styles.productVariants)} variantsList= {product.productVariantList} onVariantSelect={handlePackageChange} selectedVariantId={product.selectedVariantId}/>            
            </div>
        )
    }
    else {
        return(
            <div className= {cx(styles.productDetails)}>
                <div className={cx(styles.content, styles.leftContent)}>
                    <Above breakpoint="md">{
                        (matches: any) => matches && productDetail?.loaderValues && productDetail.loaderValues.length > 0 && (
                            <LoadingBars loadingBars={productDetail.loaderValues} className={styles.loadingBars} />
                        )}
                    </Above>

                    <div className={styles.imageWrapper}>
                        <Below breakpoint="md">
                            {(matches: any) => matches && productDetail.tags && <ProductTags tagsList={productDetail.tags}/>}
                        </Below>
                        <Picture {...product.productImage} classNamePicture={styles.cardPicture} classNameImg={`${styles.cardImage}`} fallbackImageUrl={fallbackProductImageUrl} /> 
                    </div>
                </div>

                <div className={cx(styles.content, styles.rightContent)}>
                    <Above breakpoint="md">
                        {(matches: any) => matches && productDetail.tags && <ProductTags tagsList={productDetail.tags} />}
                    </Above>
                    <div>
                        <h3 className={styles.heading}>{product.productName}</h3>
                        <p className={cx(styles.textPurple, 'bodyS')}>{`${product.packaging}: ${product.priceStr} kr/st`}</p>
                    </div>

                    {campaign?.title && (
                        <CampaignBox {...campaign} />
                    )}

                    <div className={styles.specs}>
                        {Array.isArray(productDetail.visibleSpecs) && productDetail.visibleSpecs.length>0 && productDetail.visibleSpecs.map((spec, index)=> <p key={index} className={cx(styles.specsText, 'bodyS')}>{`${spec.name} : ${spec.value}`}</p>)}
                    </div>

                    {productDetail?.visibleDescription && <p className={styles.description}>{productDetail.visibleDescription}</p>}

                    {Array.isArray(product.productVariantList) && product.productVariantList.length>1 && 
                        <Button {...changePackagingButton} className={styles.btn} surface='secondary' iconRight={{icon:'icon-layers'}} rounded onClick={()=>handleVariantsButtonClick()}>Byt förpackning</Button>
                    }
                    <ProductQuantityInput
                        className={styles.quantityInput}
                        salesUnit = {product.salesUnit}
                        itemNumberPerSalesUnit = {product.itemNumberPerSalesUnit}
                        totalPrice = {product.totalPrice}
                        quantity = {product.quantity}
                        quantityInputId = {product.productId}
                        onChange={handleOnChangeQuantity}
                    />
                    {/* TODO: clean up, and let props control this more */}
                    <Button
                        {...addToCartButton}
                        className={styles.btn}
                        size='large'
                        onClick={()=>addToCart(product)}
                        disabled={product.quantity === '0'}
                    >Lägg i kundvagn</Button>
                </div>
                
            </div>
        )
    }
}

export { ProductDetails}
