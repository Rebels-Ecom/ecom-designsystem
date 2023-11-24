import React, { useState } from 'react'
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
import { IconButton } from '../../atoms/icon-button/icon-button'

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
  addToCartBtnLabel: string
  className: string
  campaign?: TCampaignBox
  limitedProduct?: TCampaignBox
  showFavoriteIcon?: boolean
  isFavoriteIconActive?: boolean
  onFavoriteIconClick?: CallableFunction
  showAddToPurchaseListIcon?: boolean
  onSaveToPurchaseListClick?: CallableFunction
}

const ProductDetails = ({
  productId,
  productName,
  productImageUrl,
  packaging,
  priceStr,
  price,
  salesUnit,
  itemNumberPerSalesUnit,
  productVariantList,
  productDetail,
  addToCart,
  addToCartBtnLabel,
  campaign,
  limitedProduct,
  showFavoriteIcon,
  isFavoriteIconActive,
  onFavoriteIconClick,
  showAddToPurchaseListIcon,
  onSaveToPurchaseListClick,
}: IProductDetails) => {
  const [product, setProduct] = useState({
    productId,
    productName,
    productImage: getProductPicture(productId, productImageUrl ? productImageUrl : fallbackProductImageUrl),
    packaging,
    priceStr,
    price,
    salesUnit,
    itemNumberPerSalesUnit,
    quantity: '1',
    totalPrice: convertNumToStr(price * itemNumberPerSalesUnit),
    productVariantList,
    selectedVariantId: productId,
  })
  const [variantsListOpen, setVariantsListOpen] = useState<Boolean>(false)

  function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(e.target.value) || 0
    setProduct({
      ...product,
      quantity: quantity.toString(),
      totalPrice: convertNumToStr(product.price * product.itemNumberPerSalesUnit * quantity),
    })
  }

  function handleVariantsButtonClick() {
    setVariantsListOpen(true)
  }

  function handlePackageChange(selectedVariant: any) {
    const quantity = product.productId === selectedVariant.variantId ? parseInt(product.quantity) : 1
    setProduct((prevState) => ({
      ...prevState,
      productId: selectedVariant.variantId,
      productImage: selectedVariant.image ?? fallbackProductImageUrl,
      packaging: selectedVariant.variantName,
      priceStr: selectedVariant.listPricePerUnitString,
      price: selectedVariant.price,
      salesUnit: selectedVariant.salesUnit,
      itemNumberPerSalesUnit: selectedVariant.itemNumberPerSalesUnit,
      totalPrice: convertNumToStr(selectedVariant.price * selectedVariant.itemNumberPerSalesUnit * quantity),
      quantity: quantity.toString(),
      selectedVariantId: selectedVariant.variantId,
    }))

    setVariantsListOpen(false)
  }

  const ProductTags = ({ tagsList = [] }: { tagsList: Array<ITag> }) => {
    return (
      <ul className={styles.tagsList}>
        {Array.isArray(tagsList) &&
          tagsList.length > 0 &&
          tagsList.map((tag, index) => (
            <li key={index}>
              <Tag {...tag}></Tag>
            </li>
          ))}
      </ul>
    )
  }

  return (
    <div className={cx(styles.productDetails)}>
      <Below breakpoint="md">{(matches: any) => matches && productDetail.tags && <ProductTags tagsList={productDetail.tags} />}</Below>

      <div className={cx(styles.content, styles.leftContent)}>
        {productDetail?.loaderValues && productDetail.loaderValues.length > 0 && (
          <LoadingBars loadingBars={productDetail.loaderValues} className={styles.loadingBars} />
        )}
        <div className={styles.imageWrapper}>
          <Picture
            {...product.productImage}
            classNamePicture={styles.cardPicture}
            classNameImg={`${styles.cardImage}`}
            fallbackImageUrl={fallbackProductImageUrl}
          />
        </div>
      </div>

      <div className={cx(styles.content, styles.rightContent)}>
        {variantsListOpen ? (
          <ProductVariantList
            className={cx(styles.contentWrapper, styles.productVariants)}
            variantsList={product.productVariantList}
            onVariantSelect={handlePackageChange}
            selectedVariantId={product.selectedVariantId}
          />
        ) : (
          <>
            <Above breakpoint="md">{(matches: any) => matches && productDetail.tags && <ProductTags tagsList={productDetail.tags} />}</Above>
            <div>
              <h3 className={styles.heading}>{product.productName}</h3>
              <p className={cx(styles.textPurple, 'bodyS')}>{`${product.packaging}: ${product.priceStr} kr/st`}</p>
              <p className={cx(styles.textGrey, 'bodyS')}>{`Artikelnummer: ${product.productId}`}</p>
            </div>

            {campaign?.title && <CampaignBox {...campaign} />}

            {!campaign && limitedProduct && <CampaignBox {...limitedProduct} />}

            <div className={styles.specs}>
              {Array.isArray(productDetail.visibleSpecs) &&
                productDetail.visibleSpecs.length > 0 &&
                productDetail.visibleSpecs.map((spec, index) => <p key={index} className={cx(styles.specsText, 'bodyS')}>{`${spec.name} : ${spec.value}`}</p>)}
            </div>

            {productDetail?.visibleDescription && <p className={styles.description}>{productDetail.visibleDescription}</p>}

            {Array.isArray(product.productVariantList) && product.productVariantList.length > 1 && (
              <Button
                type={'button'}
                className={styles.btn}
                surface={'secondary'}
                iconRight={{ icon: 'icon-layers' }}
                rounded
                onClick={() => handleVariantsButtonClick()}
              >
                {product.packaging}
              </Button>
            )}
            <ProductQuantityInput
              className={styles.quantityInput}
              salesUnit={product.salesUnit}
              itemNumberPerSalesUnit={product.itemNumberPerSalesUnit}
              totalPrice={product.totalPrice}
              quantity={product.quantity}
              quantityInputId={product.productId}
              onChange={handleOnChangeQuantity}
            />
            <div className={styles.buttonsWrapper}>
              <Button
                className={styles.btn}
                type={'button'}
                surface={'primary'}
                size="large"
                onClick={() => addToCart(product)}
                disabled={product.quantity === '0'}
              >
                {addToCartBtnLabel}
              </Button>
              {showAddToPurchaseListIcon && onSaveToPurchaseListClick && (
                <IconButton
                  type="button"
                  icon={'icon-file-plus'}
                  className={styles.purchaseListIcon}
                  onClick={() => onSaveToPurchaseListClick(product.productId)}
                  size="large"
                  isTransparent
                  noBorder
                  noPadding
                />
              )}
              {showFavoriteIcon && onFavoriteIconClick && (
                <IconButton
                  type="button"
                  icon={isFavoriteIconActive ? 'icon-heart1' : 'icon-heart-o'}
                  className={cx(styles.favoriteIcon, isFavoriteIconActive ? styles.favoriteIconActive : '')}
                  onClick={() => onFavoriteIconClick(product.productId)}
                  size="large"
                  isTransparent
                  noBorder
                  noPadding
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export { ProductDetails }
