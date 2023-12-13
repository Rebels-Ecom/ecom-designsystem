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
  visibleSpecs?: Array<IProductSpec>
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
  addToCart: CallableFunction
  className: string
  campaign?: TCampaignBox
  limitedProduct?: TCampaignBox
  showFavoriteIcon?: boolean
  isFavoriteIconActive?: boolean
  onFavoriteIconClick?: CallableFunction
  showAddToPurchaseListIcon?: boolean
  onSaveToPurchaseListClick?: CallableFunction
  onPackageChange?: CallableFunction
}

const ProductDetails = ({
  partNo,
  productName,
  productImageUrl,
  packaging,
  priceStr,
  price,
  packagePriceString,
  packagePrice,
  salesUnit,
  itemNumberPerSalesUnit,
  productVariantList,
  productDetail,
  addToCart,
  productDescription,
  campaign,
  limitedProduct,
  showFavoriteIcon,
  isFavoriteIconActive,
  onFavoriteIconClick,
  showAddToPurchaseListIcon,
  onSaveToPurchaseListClick,
  partNoLabel,
  priceLabel,
  currencyLabel,
  unitLabel,
  addToCartLabel,
  quantityPerPackageLabel,
  aLabel,
  packagePerPalletLabel1,
  packagePerPalletLabel2,
  onPackageChange,
}: IProductDetails) => {
  const [product, setProduct] = useState({
    partNo,
    productName,
    productImage: getProductPicture(partNo, productImageUrl ? productImageUrl : fallbackProductImageUrl),
    packaging,
    priceStr,
    price,
    packagePriceString,
    packagePrice,
    salesUnit,
    itemNumberPerSalesUnit,
    quantity: '1',
    totalPrice: packagePrice ? convertNumToStr(packagePrice) : '',
    productVariantList,
    selectedVariantId: partNo,
    priceLabel,
    unitLabel,
    currencyLabel,
  })
  const [variantsListOpen, setVariantsListOpen] = useState<Boolean>(false)
  const packagePerPallet = productDetail?.invisibleSpecs.find((spec) => spec.name === 'PackagePerPallet')

  function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(e.target.value) || 0
    setProduct({
      ...product,
      quantity: quantity.toString(),
      totalPrice: convertNumToStr(product.packagePrice * quantity),
    })
  }

  function handleVariantsButtonClick() {
    setVariantsListOpen(true)
  }

  function getProductSpecs(specs: Array<IProductSpec>) {
    if (specs && Array.isArray(specs) && specs.length > 0) {
      return specs.map((spec, index) => {
        return spec.value && spec.value !== 'False' && <p key={index} className={cx(styles.specsText, 'bodyS')}>{`${spec.name} : ${spec.value}`}</p>
      })
    }
    return null
  }

  function handlePackageChange(selectedVariant: any) {
    onPackageChange && onPackageChange(selectedVariant.variantId)
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
  if (!productDetail) return null

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
              <p className={cx(styles.textPurple, 'bodyS')}>{`${product.priceLabel}: ${
                product.packagePriceString
              } ${currencyLabel}/${salesUnit.toLowerCase()}`}</p>
              <p className={cx(styles.textGrey, 'bodyS')}>
                {`${quantityPerPackageLabel} ${product.itemNumberPerSalesUnit} ${unitLabel} ${aLabel} ${product.priceStr} ${currencyLabel}`}
              </p>
              <p className={cx(styles.textGrey, 'bodyS')}>{`${partNoLabel} ${product.partNo}`}</p>
            </div>

            {campaign?.title && <CampaignBox {...campaign} />}

            {!campaign && limitedProduct && <CampaignBox {...limitedProduct} />}

            <div className={styles.specs}>{productDetail.visibleSpecs && getProductSpecs(productDetail.visibleSpecs)}</div>

            {productDescription && <p className={styles.description}>{productDescription}</p>}

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
              quantityInputId={product.partNo}
              onChange={handleOnChangeQuantity}
            />
            {packagePerPallet && (
              <p className={cx(styles.textGrey, 'bodyS')}>{`${packagePerPalletLabel1} ${packagePerPallet.value} ${packagePerPalletLabel2}`}</p>
            )}
            <div className={styles.buttonsWrapper}>
              <Button
                className={styles.btn}
                type={'button'}
                surface={'primary'}
                size="large"
                onClick={() => addToCart(product)}
                disabled={product.quantity === '0'}
              >
                {addToCartLabel}
              </Button>
              {showAddToPurchaseListIcon && onSaveToPurchaseListClick && (
                <IconButton
                  type="button"
                  icon={'icon-file-plus'}
                  className={styles.purchaseListIcon}
                  onClick={() => onSaveToPurchaseListClick(product.partNo)}
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
                  onClick={() => onFavoriteIconClick(product.partNo)}
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
