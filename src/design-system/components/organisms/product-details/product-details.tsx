import React, { useCallback, useRef, useState } from 'react'
import styles from './product-details.module.css'
import { motion } from 'framer-motion'
import { IButton } from '../../atoms/button/button'
import { calculateTotalPrice, convertNumToStr } from '../../../../helpers/format-helper'
import { IProduct } from '../../../../types/product'
import { getProductPicture } from '../../../../helpers/picture-helper'
import cx from 'classnames'
import { Picture } from '../../atoms/picture/picture'
import { ITag, Tag } from '../../atoms/tag/tag'
import { LoadingBars } from '../../molecules'
import { ILoadingBar } from '../../atoms/loading-bar/loading-bar'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { TCampaignBox } from '../../atoms/campaign-box/campaign-box'
import { IconButton } from '../../atoms/icon-button/icon-button'
import { mediaQueryHelper } from '../../layouts/breakpoints/hooks'
import { TAlertBox } from '../../atoms/alert-box/alert-box'
import { GhostProductDetails } from './ghost-product-details'
import { useDebounceWithPayload } from '../../../../helpers/generic-helper'
import { Icons } from './components/icons/icons'
import { VariantSelector } from './components/variant-selector/variant-selector'
import { ProductSpecs } from './components/product-specs/product-specs'
import { CampaignsAlerts } from './components/campaigns-alerts/campaigns-alerts'
import { Actions } from './components/actions/actions'
import { ProductInfo } from './components/product-info/product-info'
import MobileActions from './components/actions/mobile-actions'

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
  onChangeQuantity?: CallableFunction
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
  loading?: boolean
  tooltips?: {
    addToFavorites?: string
    removeFromFavorites?: string
    addToPurchaseList?: string
    changeVariant?: string
    sellerOnly?: string
    accessoryPotItem?: string
  }
  variantsInCart?: Array<{ variantId: string; quantity: number }>
}

const ProductDetails = ({
  isRestrictedUser,
  variantsInCart = [],
  partNo,
  productName,
  primaryImageUrl,
  packaging,
  priceStr,
  pricePerUnit,
  price,
  packagePriceString,
  packagePrice,
  salesUnit,
  itemNumberPerSalesUnit,
  productVariantList,
  productDetail,
  addToCart,
  onChangeQuantity,
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
  tooltips,
}: IProductDetails) => {
  const productVariants = productVariantList || []
  const initialVariantId = productVariants.find((pV) => pV.variantId === partNo)?.variantId || null
  const { isMobile, isTablet } = mediaQueryHelper()
  const [showFixedActions, setShowFixedActions] = useState(false)
  const [product, setProduct] = useState(() => {
    const initialCartItem = variantsInCart.find((item) => item.variantId === initialVariantId)
    const initialQuantity = initialCartItem ? initialCartItem.quantity : 0
    return {
      partNo,
      productName,
      productImage: getProductPicture(
        partNo,
        primaryImageUrl ? primaryImageUrl : fallbackProductImageUrl,
        isMobile || isTablet ? '120' : '240'
      ),
      packaging,
      priceStr,
      price,
      pricePerUnit,
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
      inputQuantity: initialQuantity,
    }
  })

  const [variantsListOpen, setVariantsListOpen] = useState(false)

  const productStateRef = useRef(product)
  const packagePerPallet =
    productDetail?.visibleSpecs?.find((spec) => spec.name === 'PackagePerPallet') ||
    productDetail?.invisibleSpecs?.find((spec) => spec.name === 'PackagePerPallet')

  const handleOnChangeQuantity = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value) || 0
    setProduct((prev) => ({
      ...prev,
      quantity: quantity.toString(),
      totalPrice: convertNumToStr(product.packagePrice * quantity),
    }))
  }, [])

  const debouncedRequest = useDebounceWithPayload(({ id, q }: any) => {
    onChangeQuantity?.({ ...productStateRef.current, partNo: id, quantity: q })
  }, 1000)

  const handleQuantityChange = useCallback(
    (newQuantity: number, id: string) => {
      setProduct((prevState) => ({
        ...prevState,
        quantity: newQuantity.toString(),
        totalPrice: calculateTotalPrice({
          unitPrice: prevState.pricePerUnit,
          quantity: newQuantity === 0 ? 1 : newQuantity,
          unitNumber: prevState.itemNumberPerSalesUnit,
        }),
        inputQuantity: newQuantity,
      }))

      debouncedRequest({ id: id, q: newQuantity })
    },
    [debouncedRequest]
  )

  const handleAddToCart = useCallback(() => {
    if (isRestrictedUser) {
      addToCart()
    } else {
      const newQ = product.quantity === '0' ? 1 : product.quantity
      setProduct((prev) => ({ ...prev, quantity: newQ.toString(), inputQuantity: Number(newQ) }))
      debouncedRequest({ id: product.partNo, q: newQ })
    }
  }, [isRestrictedUser, product, debouncedRequest])

  function handleVariantsButtonClick() {
    setVariantsListOpen(true)
  }

  function handleCloseVariants() {
    setVariantsListOpen(false)
  }

  const handlePackageChange = useCallback(
    (selectedVariant: any) => {
      onPackageChange?.(selectedVariant.variantId)
      setVariantsListOpen(false)
    },
    [onPackageChange]
  )

  function isFavoriteProduct(partNo: string) {
    if (!favoriteProductsIds || favoriteProductsIds.length === 0) return false
    return favoriteProductsIds.includes(partNo)
  }

  const ProductTags = ({ tagsList = [] }: { tagsList: Array<ITag> }) => {
    return Array.isArray(tagsList) && tagsList.length > 0 ? (
      <ul className={cx(styles.tagsList, { [styles.extraTopSpace]: sellerOnly || isAccessoryPotItem })}>
        {tagsList.map((tag, index) => (
          <li key={index}>
            <Tag {...tag}></Tag>
          </li>
        ))}
      </ul>
    ) : null
  }

  if (loading) {
    return <GhostProductDetails />
  }

  if (!productDetail) return null

  return (
    <div className={cx(styles.productDetails)}>
      <Icons sellerOnly={sellerOnly} isAccessoryPotItem={isAccessoryPotItem} tooltips={tooltips} />
      {isMobile && productDetail.tags && <ProductTags tagsList={productDetail.tags} />}

      <div className={cx(styles.content, styles.leftContent)}>
        {productDetail?.loaderValues && productDetail.loaderValues.length > 0 && (
          <LoadingBars loadingBars={productDetail.loaderValues} className={styles.loadingBars} />
        )}
        <div className={styles.imageWrapper}>
          <Picture
            {...product.productImage}
            classNamePicture={styles.cardPicture}
            classNameImg={styles.cardImage}
            fallbackImageUrl={fallbackProductImageUrl}
          />
        </div>
        {isMobile && (
          <div className={styles.buttonsWrapper}>
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
                name="Add to purchase list"
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
                name="Add to favorite list"
              />
            )}
          </div>
        )}
      </div>

      <div className={cx(styles.content, styles.rightContent)}>
        <>
          {!isMobile && <ProductTags tagsList={productDetail.tags} />}
          <h3 className={cx(styles.heading, { ['h4']: isMobile })}>{product.productName}</h3>
          <ProductInfo
            aLabel={aLabel}
            currencyLabel={currencyLabel}
            isRestrictedUser={isRestrictedUser}
            itemNumberPerSalesUnit={product.itemNumberPerSalesUnit}
            packagePriceString={product.packagePriceString}
            partNo={product.partNo}
            partNoLabel={partNoLabel}
            priceLabel={product.priceLabel}
            priceStr={product.priceStr}
            quantityPerPackageLabel={quantityPerPackageLabel}
            salesUnit={salesUnit}
            unitLabel={unitLabel}
            totalPrice={product.totalPrice}
            isMobile={isMobile}
          />
          {isMobile && (
            <motion.div
              viewport={{ amount: 0.2, margin: '-162px 0px 0px 0px' }}
              onViewportEnter={() => setShowFixedActions(false)}
              onViewportLeave={() => setShowFixedActions(true)}
              className={styles.mobileActionsWrapper}
            >
              <MobileActions
                addToCartLabel={addToCartLabel}
                handleAddToCart={handleAddToCart}
                handleQuantityChange={handleQuantityChange}
                inputQuantity={product.inputQuantity}
                outOfStock={!!product.outOfStock}
                packaging={product.packaging}
                partNo={product.partNo}
                variantList={product.productVariantList}
                availableForOrder={availableForOrder}
                loading={loading}
                handleVariantsButtonClick={handleVariantsButtonClick}
              />
            </motion.div>
          )}
          <CampaignsAlerts
            activeCampaign={product.activeCampaign}
            alertBox={alertBox}
            limitedProduct={limitedProduct}
          />
          {productDetail.visibleSpecs && <ProductSpecs specs={productDetail.visibleSpecs} />}

          {productDescription && <p className={styles.description}>{productDescription}</p>}

          <Actions
            showMobileActions={showFixedActions}
            isRestrictedUser={isRestrictedUser}
            addToCartLabel={addToCartLabel}
            handleAddToCart={handleAddToCart}
            addToCart={() => addToCart(product)}
            handleQuantityChange={handleQuantityChange}
            inputQuantity={product.inputQuantity}
            outOfStock={!!product.outOfStock}
            packaging={product.packaging}
            partNo={product.partNo}
            quantity={product.quantity}
            variantList={product.productVariantList}
            availableForOrder={availableForOrder}
            favoriteProductsIds={favoriteProductsIds}
            loading={loading}
            onFavoriteIconClick={onFavoriteIconClick}
            onSaveToPurchaseListClick={onSaveToPurchaseListClick}
            showAddToPurchaseListIcon={showAddToPurchaseListIcon}
            showFavoriteIcon={showFavoriteIcon}
            isMobile={isMobile}
            isTablet={isTablet}
            handleVariantsButtonClick={variantsListOpen ? () => {} : handleVariantsButtonClick}
            aLabel={aLabel}
            currencyLabel={currencyLabel}
            itemNumberPerSalesUnit={product.itemNumberPerSalesUnit}
            priceStr={product.priceStr}
            quantityPerPackageLabel={quantityPerPackageLabel}
            unitLabel={unitLabel}
            totalPrice={product.totalPrice}
            productName={product.productName}
            salesUnit={product.salesUnit}
            handleOnChangeQuantity={handleOnChangeQuantity}
          />
          {!isRestrictedUser && packagePerPallet && (
            <p className={cx(styles.textGrey, 'bodyS', styles.packagePerPalletText)}>
              {`${packagePerPalletLabel1} ${packagePerPallet.value} ${packagePerPalletLabel2}`}
            </p>
          )}
          <VariantSelector
            variantList={product.productVariantList}
            selectedVariantId={product.selectedVariantId}
            onSelect={handlePackageChange}
            onClose={handleCloseVariants}
            isMobile={isMobile}
            isRestrictedUser={isRestrictedUser}
            tooltips={tooltips}
            isOpen={variantsListOpen}
            alignBottom={!showFixedActions}
          />
        </>
      </div>
    </div>
  )
}

export { ProductDetails }
