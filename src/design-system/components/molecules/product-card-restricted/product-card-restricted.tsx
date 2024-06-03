import React from 'react'
import styles from './product-card-restricted.module.css'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { Picture, Placeholder, Button, IconButton, Icon } from '../../atoms'
import cx from 'classnames'
import { ProductVariantList } from '../product-variant-list/product-variant-list'
import { TagsList } from '../tags-list/tags-list'
import { IProductCard, TProductCardVertical } from '../product-card/product-card'
import { IconWithTooltip } from '../../atoms'

const ProductCardRestricted = ({
  product,
  loading = false,
  hideCartButton,
  addToCart,
  addToCartBtnLabel,
  linkComponent: Link,
  variantsOpen,
  handlePackageChange,
  selectedVariantId,
  productImage,
  onVariantsButtonClick,
  className,
  disabled,
  buttonLoading,
  sellerOnlyTooltipText,
  accessoryPotItemTooltipText,
  onCloseVariants,
  onClick,
}: IProductCard & TProductCardVertical) => {
  const { partNo, productName, productUrl, productVariantList, country, packaging, quantity, tags, sellerOnly, isAccessoryPotItem } = product

  const packageBtnDisabled = !productVariantList || productVariantList.length <= 1

  function handleVariantBtnClick() {
    onVariantsButtonClick && onVariantsButtonClick()
  }

  if (variantsOpen && selectedVariantId) {
    return (
      <ProductVariantList
        className={styles.productCardVertical}
        variantsList={productVariantList}
        onVariantSelect={handlePackageChange}
        onCloseVariants={onCloseVariants}
        selectedVariantId={selectedVariantId}
        sellerOnlyTooltipText={sellerOnlyTooltipText}
        isRestrictedUser={true}
      />
    )
  } else {
    return (
      <div className={cx(styles.productCardVertical, className ? className : '')}>
        <div className={styles.tagsWrapper}>
          {sellerOnly && (
            <>
              {sellerOnlyTooltipText ? (
                <IconWithTooltip content={sellerOnlyTooltipText} icon={{ icon: 'icon-eye' }} />
              ) : (
                <Icon icon={'icon-eye'} size={'large'} />
              )}
            </>
          )}
          {isAccessoryPotItem && (
            <>
              {accessoryPotItemTooltipText ? (
                <IconWithTooltip content={accessoryPotItemTooltipText} text="S" />
              ) : (
                <span className={styles.standardIcon}>S</span>
              )}
            </>
          )}
          {loading ? <Placeholder type="tags" /> : Array.isArray(tags) && tags.length ? <TagsList tagsList={tags} /> : null}
        </div>
        {loading ? (
          <Placeholder type="image" />
        ) : (
          <>
            {productUrl && Link ? (
              <Link to={productUrl} href={productUrl} className={styles.imageWrapper} onClick={onClick}>
                <Picture
                  {...productImage}
                  classNamePicture={styles.cardPicture}
                  classNameImg={`${styles.cardImage}`}
                  fallbackImageUrl={fallbackProductImageUrl}
                />
              </Link>
            ) : (
              <div className={styles.imageWrapper}>
                <Picture
                  {...productImage}
                  classNamePicture={styles.cardPicture}
                  classNameImg={`${styles.cardImage}`}
                  fallbackImageUrl={fallbackProductImageUrl}
                />
              </div>
            )}
          </>
        )}

        {loading ? (
          <div className={styles.placeholderContent}>
            <Placeholder type={'heading'} />
            <Placeholder type={'heading'} />
            <Placeholder type={'p_long'} />
          </div>
        ) : (
          <div className={`${styles.cardContent}`}>
            {productUrl && Link ? (
              <Link to={productUrl} href={productUrl} className={styles.headingWrapper} onClick={onClick}>
                <h5 className={styles.heading}>{productName}</h5>
              </Link>
            ) : (
              <h5 className={styles.heading}>{productName}</h5>
            )}
            {country && <p className={cx(styles.textGray, 'bodyS')}>{country}</p>}
          </div>
        )}
        <Button
          type={'button'}
          surface="secondary"
          iconRight={packageBtnDisabled ? undefined : { icon: 'icon-layers' }}
          rounded
          fullWidth
          onClick={() => handleVariantBtnClick()}
          disabled={loading || packageBtnDisabled}
        >
          {packaging}
        </Button>
        {!hideCartButton && (
          <div className={styles.cartButtonWrapper}>
            <Button
              type={'button'}
              surface={'primary'}
              className={!loading ? styles.productCardBtn : ''}
              fullWidth
              onClick={() => addToCart(product)}
              disabled={buttonLoading || loading || disabled || quantity === '0'}
              loading={buttonLoading}
            >
              {addToCartBtnLabel}
            </Button>
          </div>
        )}
      </div>
    )
  }
}

export { ProductCardRestricted }
