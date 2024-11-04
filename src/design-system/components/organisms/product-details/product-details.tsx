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
import { LoadingBars } from '../../molecules'
import { ILoadingBar } from '../../atoms/loading-bar/loading-bar'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { CampaignBox, TCampaignBox } from '../../atoms/campaign-box/campaign-box'
import { IconButton } from '../../atoms/icon-button/icon-button'
import { AlertBox, ButtonWithTooltip, Icon, IconWithTooltip } from '../../atoms'
import { mediaQueryHelper } from '../../layouts/breakpoints/hooks'
import { TAlertBox } from '../../atoms/alert-box/alert-box'
import { GhostProductDetails } from './ghost-product-details'

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
  isRestrictedUser: boolean
  productDetail: IProductDetail
  changePackagingButton: IButton
  addToCart: CallableFunction
  className: string
  limitedProduct?: TCampaignBox
  showFavoriteIcon?: boolean
  favoriteProductsIds?: Array<string>
  onFavoriteIconClick?: CallableFunction
  showAddToPurchaseListIcon?: boolean
  onSaveToPurchaseListClick?: CallableFunction
  onPackageChange?: CallableFunction
  alertBox?: TAlertBox
  availableForOrder?: boolean
  loading?: boolean;
  tooltips?: {
    addToFavorites?: string;
    removeFromFavorites?: string;
    addToPurchaseList?: string;
    changeVariant?: string;
    sellerOnly?: string;
    accessoryPotItem?: string;
  }
}

const ProductDetails = ({
  isRestrictedUser,
  partNo,
  productName,
  primaryImageUrl,
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
  limitedProduct,
  showFavoriteIcon,
  favoriteProductsIds,
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
  sellerOnly,
  isAccessoryPotItem,
  activeCampaign,
  outOfStock,
  alertBox,
  availableForOrder,
  loading,
  tooltips
}: IProductDetails) => {
  const { isMobile, isTablet } = mediaQueryHelper()
  const [product, setProduct] = useState({
    partNo,
    productName,
    productImage: getProductPicture(partNo, primaryImageUrl ? primaryImageUrl : fallbackProductImageUrl, (isMobile || isTablet) ? '120' : '240'),
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
    activeCampaign,
    outOfStock,
  })

  const [variantsListOpen, setVariantsListOpen] = useState<Boolean>(false)
  const packagePerPallet =
    productDetail?.visibleSpecs?.find((spec) => spec.name === 'PackagePerPallet') ||
    productDetail?.invisibleSpecs?.find((spec) => spec.name === 'PackagePerPallet')

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

  function handleCloseVariants() {
    setVariantsListOpen(false)
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

  function isFavoriteProduct(partNo: string) {
    if (!favoriteProductsIds || favoriteProductsIds.length === 0) return false
    return favoriteProductsIds.includes(partNo)
  }

  const ProductTags = ({ tagsList = [] }: { tagsList: Array<ITag> }) => {
    return Array.isArray(tagsList) &&
    tagsList.length > 0 ? (
      <ul className={styles.tagsList}>
        {tagsList.map((tag, index) => (
          <li key={index}>
            <Tag {...tag}></Tag>
          </li>
        ))}
      </ul>
    ) : null;
  }

  if (loading) {
    return <GhostProductDetails />
  }

  if (!productDetail) return null

  return (
    <div className={cx(styles.productDetails)}>
      {(sellerOnly || isAccessoryPotItem) && (
        <div className={styles.iconWrapper}>
          {sellerOnly && (
            <>
              {tooltips?.sellerOnly ? (
                <IconWithTooltip content={tooltips.sellerOnly} icon={{ icon: 'icon-eye' }} />
              ) : (
                <Icon icon={'icon-eye'} size={'large'} />
              )}
            </>
          )}
          {isAccessoryPotItem && (
            <>
              {tooltips?.accessoryPotItem ? (
                <IconWithTooltip content={tooltips.accessoryPotItem} text="S" />
              ) : (
                <span style={{ fontSize: '0.875rem', width: '1.25rem', height: '1.25rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <b>S</b>
                </span>
              )}
            </>
          )}
        </div>
      )}

      {isMobile && productDetail.tags && <ProductTags tagsList={productDetail.tags} />}

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
            sellerOnlyTooltipText={tooltips?.sellerOnly}
            onCloseVariants={handleCloseVariants}
            isRestrictedUser={isRestrictedUser}
          />
        ) : (
          <>
            {!isMobile && productDetail.tags && <ProductTags tagsList={productDetail.tags} />}
            <div>
              <h3 className={styles.heading}>{product.productName}</h3>
              {!isRestrictedUser && (
                <>
                  <p className={cx(styles.textPurple, styles.specsText, 'bodyS')}>{`${product.priceLabel}: ${
                    product.packagePriceString
                  } ${currencyLabel}/${salesUnit.toLowerCase()}`}</p>

                  <p className={cx(styles.textGrey, styles.specsText, 'bodyS')}>
                    {`${quantityPerPackageLabel} ${product.itemNumberPerSalesUnit} ${unitLabel} ${aLabel} ${product.priceStr} ${currencyLabel}`}
                  </p>
                  <p className={cx(styles.textGrey, styles.specsText, 'bodyS')}>{`${partNoLabel} ${product.partNo}`}</p>
                </>
              )}
            </div>

            {product?.activeCampaign?.title && <CampaignBox {...product.activeCampaign} />}

            {limitedProduct && <CampaignBox {...limitedProduct} limited />}
            {alertBox && <AlertBox {...alertBox} />}

            <div className={styles.specs}>{productDetail.visibleSpecs && getProductSpecs(productDetail.visibleSpecs)}</div>

            {productDescription && <p className={styles.description}>{productDescription}</p>}

            {Array.isArray(product.productVariantList) && (
              <ButtonWithTooltip
                content='Välj variant'
                type={'button'}
                className={cx(styles.btn, styles.variantBtn)}
                surface={'secondary'}
                iconRight={product.productVariantList.length <= 1 ? undefined : { icon: 'icon-layers' }}
                rounded
                onClick={() => handleVariantsButtonClick()}
                disabled={product.productVariantList.length <= 1}
                name='Select packaging'
                side={(isMobile || isTablet) ? 'top' : 'right'}
                align={(isMobile || isTablet) ? 'end' : 'center'}
                fullWidth
              >
                {product.packaging}
              </ButtonWithTooltip>
            )}
            {!isRestrictedUser && (
              <ProductQuantityInput
                className={styles.quantityInput}
                salesUnit={product.salesUnit}
                itemNumberPerSalesUnit={product.itemNumberPerSalesUnit}
                totalPrice={product.totalPrice}
                quantity={product.quantity}
                quantityInputId={product.partNo}
                onChange={handleOnChangeQuantity}
              />
            )}
            <div className={styles.buttonsWrapper}>
              <Button
                className={styles.btn}
                type={'button'}
                surface={'primary'}
                size="large"
                onClick={() => addToCart(product)}
                disabled={product.quantity === '0' || product.outOfStock || !availableForOrder}
                name='Add to cart'
                fullWidth
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
                  name='Add to purchase list'
                />
              )}
              {showFavoriteIcon && onFavoriteIconClick && (
                <IconButton
                  type="button"
                  icon={isFavoriteProduct(partNo) ? 'icon-heart1' : 'icon-heart-o'}
                  className={cx(styles.favoriteIcon, isFavoriteProduct(partNo) ? styles.favoriteIconActive : '')}
                  onClick={() => onFavoriteIconClick(product.partNo, isFavoriteProduct(partNo))}
                  size="large"
                  isTransparent
                  noBorder
                  noPadding
                  name='Add to favorite list'
                />
              )}
            </div>
            {!isRestrictedUser && packagePerPallet && (
              <p className={cx(styles.textGrey, 'bodyS', styles.packagePerPalletText)}>{`${packagePerPalletLabel1} ${packagePerPallet.value} ${packagePerPalletLabel2}`}</p>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export { ProductDetails }
