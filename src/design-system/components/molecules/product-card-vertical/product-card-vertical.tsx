import React from 'react'
import styles from './product-card-vertical.module.css'
import { ProductQuantityInput } from '../product-quantity-input/product-quantity-input'
import { IProduct } from '../../../../types/product'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { Picture, DividerLines, Loader, Placeholder, Button } from '../../atoms'
import { IButton } from '../../atoms/button/button'
import cx from 'classnames'
import { ProductVariantList } from '../product-variant-list/product-variant-list'
import { TagsList } from '../tags-list/tags-list'
import { IPicture } from '../../atoms/picture/picture'

export interface IProductCardVertical {
  loading: boolean
  product: IProduct
  productImage: IPicture
  addToCartButton: IButton
  addToCart: CallableFunction
  hideCartButton?: boolean
  changePackagingButton: IButton
  handlePackageChange: CallableFunction
  selectedVariantId?: string
  onChangeQuantity?: CallableFunction
  productQuantityDisabled?: boolean
  variantsOpen?: boolean
  onVariantsButtonClick: CallableFunction
  linkComponent?: any
  className?: string
}

const ProductCardVertical = ({
  product,
  loading = false,
  addToCartButton,
  addToCart,
  onChangeQuantity,
  productQuantityDisabled,
  linkComponent: Link,
  variantsOpen,
  handlePackageChange,
  selectedVariantId,
  productImage,
  changePackagingButton,
  onVariantsButtonClick,
  className,
}: IProductCardVertical) => {
  const {
    productId,
    productName,
    productUrl,
    productVariantList,
    country,
    packaging,
    priceStr,
    totalPrice,
    quantity,
    salesUnit,
    itemNumberPerSalesUnit,
    tags,
  } = product

  const hideChangePackagingBtn = !productVariantList || productVariantList.length <= 1

  function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(e.target.value) || 1
    onChangeQuantity && onChangeQuantity(quantity)
  }

  function handleVariantBtnClick() {
    onVariantsButtonClick && onVariantsButtonClick()
  }

  if (variantsOpen && selectedVariantId) {
    return (
      <ProductVariantList
        className={styles.productCardVertical}
        variantsList={productVariantList}
        onVariantSelect={handlePackageChange}
        selectedVariantId={selectedVariantId}
      />
    )
  } else {
    return (
      <div className={cx(styles.productCardVertical, className ? className : '')}>
        {Array.isArray(tags) && tags.length ? <>{loading ? <Placeholder type="tags" /> : <TagsList tagsList={tags} />}</> : null}
        {loading ? (
          <Placeholder type="image" />
        ) : (
          <div className={styles.imageWrapper}>
            <Picture {...productImage} classNamePicture={styles.cardPicture} classNameImg={`${styles.cardImage}`} fallbackImageUrl={fallbackProductImageUrl} />
          </div>
        )}

        {loading ? (
          <div className={styles.placeholderContent}>
            <Placeholder type={'heading'} />
            <Placeholder type={'p_short'} />
            <Placeholder type={'p_long'} />
            <Placeholder type={'p_long'} />
          </div>
        ) : (
          <div className={`${styles.cardContent}`}>
            {productUrl && Link ? (
              <Link to={productUrl} href={productUrl} className={styles.headingWrapper}>
                <h5 className={styles.heading}>{productName}</h5>
              </Link>
            ) : (
              <h5 className={styles.heading}>{productName}</h5>
            )}
            <DividerLines />
            <p className={cx(styles.textGray, 'bodyS')}>{`Art.nr. ${productId} - ${country}`}</p>
            <p className={cx(styles.textPurple, 'bodyS')}>{`${packaging}: ${priceStr} kr/st`}</p>
          </div>
        )}
        <Button
          {...changePackagingButton}
          surface="secondary"
          iconRight={{ icon: 'icon-layers' }}
          rounded
          fullWidth
          onClick={() => handleVariantBtnClick()}
          disabled={loading}
          className={hideChangePackagingBtn ? styles.hiddenPackagingBtn : ''}
        >
          Byt förpackning
        </Button>
        {loading ? (
          <div className={styles.placeholderContent}>
            <Placeholder type={'p_long'} />
            <Placeholder type={'p_long'} />
          </div>
        ) : (
          <ProductQuantityInput
            className={styles.productCardInput}
            salesUnit={salesUnit}
            itemNumberPerSalesUnit={itemNumberPerSalesUnit}
            totalPrice={totalPrice}
            quantity={quantity}
            quantityInputId={productId}
            disabled={productQuantityDisabled}
            onChange={handleOnChangeQuantity}
          />
        )}
        <Button {...addToCartButton} className={!loading ? styles.productCardBtn : ''} fullWidth onClick={() => addToCart(product)} disabled={loading}>
          Lägg i kundvagn
        </Button>
      </div>
    )
  }
}

export { ProductCardVertical }
