
import React from 'react'
import styles from '../product-card-vertical/product-card-vertical.module.css'
import { ProductQuantityInput } from '../product-quantity-input/product-quantity-input'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { Picture, DividerLines, Loader, Placeholder, Button } from '../../atoms'
import cx from 'classnames'
import { ProductVariantList } from '../product-variant-list/product-variant-list'
import { TagsList } from '../tags-list/tags-list'
import { TCategoryProductCard, TProductCardVertical } from './category-product-card'
import { getProductPicture } from '../../../../helpers/picture-helper'

const VerticalProductCard = ({
  name,
  onChangeQuantity,
  onVariantsButtonClick,
  variantsOpen,
  campaign,
  selectedVariantId,
  handlePackageChange,
  className,
  loading,
  productImageUrl,
  changePackagingButton,
  hideCartButton,
  addToCart,
  addToCartButton,
  buttonLoading,
  disabled,
  linkComponent: Link,
  packaging,
  pricePerUnit,
  productUrl,
  productId,
  country,
  salesUnit,
  salesUnitNumber,
  defaultPrice,
  defaultQuantity,
  unit,
  totalPriceLabel,
  currency,
}: TCategoryProductCard & TProductCardVertical) => {
  // const hideChangePackagingBtn = !productVariantList || productVariantList.length <= 1

  function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(e.target.value) || 0
    onChangeQuantity && onChangeQuantity(quantity)
  }

  function handleVariantBtnClick() {
    onVariantsButtonClick && onVariantsButtonClick()
  }

  const style: { [key: string]: string } = ({
    '--campaign-color': campaign?.color ?? '#FFF',
  })

  // TODO: calc total price
  const productImage = getProductPicture(productId ?? 'x', productImageUrl)

  if (variantsOpen && selectedVariantId) {
    return (
      <ProductVariantList
        className={styles.productCardVertical}
        variantsList={[]}
        // variantsList={productVariantList}
        onVariantSelect={handlePackageChange}
        selectedVariantId={selectedVariantId}
      />
    )
  } else {
    return (
      <div
        className={cx(styles.productCardVertical, className ? className : '', {
          [styles.campaign]: campaign?.title
        })}
        style={style}
      >
        {campaign?.title && <div className={styles.campaignBox}>{campaign.title}</div>}
        {/* {Array.isArray(tags) && tags.length ? <>{loading ? <Placeholder type="tags" /> : <TagsList tagsList={tags} />}</> : null} */}
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
                <h5 className={styles.heading}>{name}</h5>
              </Link>
            ) : (
              <h5 className={styles.heading}>{name}</h5>
            )}
            {(productId || country) && <p className={cx(styles.textGray, 'bodyS')}>
              {`${productId ? 'Art.nr. ' + productId : ''} ${productId && country ? '-' : ''} ${country ?? ''}`}
            </p>}
            {packaging && pricePerUnit && <p className={cx(styles.textPurple, 'bodyS')}>{`${packaging}: ${pricePerUnit} kr/st`}</p>}
 
          </div>
        )}
        {changePackagingButton && <Button
          {...changePackagingButton}
          surface="secondary"
          iconRight={{ icon: 'icon-layers' }}
          rounded
          fullWidth
          onClick={() => handleVariantBtnClick()}
          disabled={loading}
          // className={hideChangePackagingBtn ? styles.hiddenPackagingBtn : ''}
        >
          Byt förpackning
        </Button>}
        {loading ? (
          <div className={styles.placeholderContent}>
            <Placeholder type={'p_long'} />
            <Placeholder type={'p_long'} />
          </div>
        ) : (
          <div style={{ display: 'flex' }}>
            <ProductQuantityInput
              className={styles.productCardInput}
              salesUnit={salesUnit ?? 'xxx'}
              itemNumberPerSalesUnit={salesUnitNumber ?? 0}
              totalPrice={defaultPrice}
              quantity={Number(defaultQuantity ?? 0)}
              quantityInputId={productId}
              disabled={false} // TODO: fix this
              onChange={handleOnChangeQuantity}
              priceLabel={totalPriceLabel}
            />
            {/* <div>
                <p className={`${styles.textQuantity} bodyS`}>
                  {`x ${baseUnit ?? ''} (${baseUnitNumber} ${unit ?? 'styck'})`}
                </p>
                
                {totalPriceLabel && <p className={`${styles.textPrice} bodyS fontBold`}>
                  {`${totalPriceLabel}: ${totalPrice ?? defaultPrice} ${currency}`}
                </p>}
            </div> */}
          </div>
        )}
        {!hideCartButton &&
          <Button
            {...addToCartButton}
            className={!loading ? styles.productCardBtn : ''}
            fullWidth
            onClick={() => addToCart({
              productId,
              quantity: 0
            })}
            disabled={buttonLoading || loading || disabled}
            loading={buttonLoading}
          >
            Lägg i kundvagn
          </Button>
        }
      </div>
    )
  }
}

export { VerticalProductCard }
