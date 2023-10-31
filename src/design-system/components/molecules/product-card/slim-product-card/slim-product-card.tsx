import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './slim-product-card.module.css'
import { ProductQuantityInput } from '../../product-quantity-input/product-quantity-input'
import fallbackProductImageUrl from '../../../../../assets/fallback-images/defaultFallbackImage.svg'
// import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { Picture, Placeholder, Button, IconButton, SingleSelect, Icon, ExpandableWrapper } from '../../../atoms'
import cx from 'classnames'
import { ProductVariantList } from '../../product-variant-list/product-variant-list'
import { TCategoryProductCard, TProductCardSlim, TProductCardVertical } from '../category-product-card'
import { getProductPicture } from '../../../../../helpers/picture-helper'
import { IProductVariant } from '../../product-variant/product-variant'

const SlimProductCard = ({
  name,
  onChangeQuantity,
  campaign,
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
  productVariantList
}: TCategoryProductCard) => {
  const [slimProduct, setSlimProduct] = useState({
      productId,
      name,
      packaging,
      productImageUrl,
      country,
      defaultPrice,
      pricePerUnit,
      salesUnit,
      checked: !!productVariantList?.find(x => x.variantId === productId)?.checked,
  })
  const [variantsOpen, setVariantsOpen] = useState(false);
  const [cardHeight, setCardHeight] = useState<string | number>('auto');
  const hideChangePackagingBtn = !productVariantList || productVariantList.length <= 1
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = cardRef?.current?.getBoundingClientRect()?.height;
    setCardHeight(h ?? 'auto');
  }, [])

  function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(e.target.value) || 0
    onChangeQuantity && onChangeQuantity(quantity)
  }

  // function handleVariantBtnClick() {
  //   onVariantsButtonClick && onVariantsButtonClick()
  // }

  const style: { [key: string]: string } = ({
    '--campaign-color': campaign?.color ?? '#FFF',
  })

  const productImage = getProductPicture(slimProduct.productId, slimProduct.productImageUrl)

  const handleUpdateSlimProduct = (variant: any) => {
    const updatedProduct = {
      productId: variant.variantId,
      name: variant.productName,
      packaging: variant.variantName,
      productImageUrl: variant.image,
      country: variant.country,
      defaultPrice: variant.listPricePerUnitString,
      pricePerUnit: variant.listPricePerUnitString,
      salesUnit: variant.salesUnit,
      checked: true,
    }

    setSlimProduct(updatedProduct);
  }

  return (
    <motion.div
      className={cx(styles.slimProductWrapper, {[styles.variantsOpen]: variantsOpen})}
      initial={{ height: '163px' }}
      animate={{ height: variantsOpen ? 'auto' : cardHeight ?? '163px' }}
    >
      <div
        ref={cardRef}
        className={cx(styles.slimProductCard, {
          [styles.campaign]: campaign?.title,
          [styles.variantsOpen]: variantsOpen,
        })}
        style={style}
      >
        {loading ? (
          <div className={styles.imagePlaceholder}><Placeholder type="image" /></div>
        ) : (
            <Picture {...productImage} classNamePicture={styles.picture} classNameImg={`${styles.image}`} fallbackImageUrl={fallbackProductImageUrl} />
        )}
        {campaign?.title && <div className={styles.campaignBox}>{campaign.title}</div>}

        {loading ? (
          <div className={styles.placeholderContent}>
            <Placeholder type={'heading'} />
            <Placeholder type={'p_short'} />
            <Placeholder type={'p_long'} />
            <Placeholder type={'p_long'} />
          </div>
        ) : (
          <div className={`${styles.content}`}>
            <div className={styles.textContent}>
              {productUrl && Link ? (
                <Link to={productUrl} href={productUrl} className={styles.headingLink}>
                  <h5 className={styles.heading}>{slimProduct.name}</h5>
                </Link>
              ) : (
                <h5 className={styles.heading}>{slimProduct.name}</h5>
              )}
              {(slimProduct.productId || slimProduct.country) && <p className={cx(styles.artNr, 'bodyS')}>
                {`${slimProduct.productId ? 'Art.nr. ' + slimProduct.productId : ''} ${slimProduct.productId && slimProduct.country ? '-' : ''} ${slimProduct.country ?? ''}`}
              </p>}
              {slimProduct.packaging && slimProduct.pricePerUnit && <p className={cx(styles.packaging, 'bodyS')}>{`${slimProduct.packaging}: ${slimProduct.pricePerUnit} ${currency ?? 'kr'}/st`}</p>}
            </div>
            <ProductQuantityInput
              className={styles.productCardInput}
              salesUnit={slimProduct.salesUnit ?? '???'} // TODO: backup?
              itemNumberPerSalesUnit={salesUnitNumber ?? 0}
              totalPrice={(Number(slimProduct.defaultPrice ?? 0) * (defaultQuantity ?? 1)).toString()}
              quantity={defaultQuantity ?? 0}
              quantityInputId={slimProduct.productId}
              disabled={buttonLoading || loading || disabled}
              onChange={handleOnChangeQuantity}
              priceLabel={totalPriceLabel}
            />
          </div>
        )}
        {(!hideCartButton || !hideChangePackagingBtn) && <div className={styles.buttonContainer}>
          {!hideChangePackagingBtn && 
            <>
              {!variantsOpen && 
                <motion.div
                  key="open-btn"
                  initial={{ scale: 0.2 }}
                  animate={{ scale: variantsOpen ? 0 : 1 }}
                  exit={{ scale: 0.2 }}
                >
                  <IconButton
                    type='button'
                    icon={'icon-layers'}
                    onClick={() => setVariantsOpen(!variantsOpen)}
                    disabled={buttonLoading || loading || disabled}
                    loading={buttonLoading}
                    isTransparent={!variantsOpen}
                    className={styles.variantsButton}
                  /> 
                </motion.div>
              }
              {variantsOpen && 
                <motion.div
                  key="close-btn"
                  initial={{ scale: 0.2 }}
                  animate={{ scale: variantsOpen ? 1 : 0 }}
                  exit={{ scale: 0.2 }}
                >
                  <IconButton
                    type='button'
                    icon={'icon-x'}
                    onClick={() => setVariantsOpen(!variantsOpen)}
                    disabled={buttonLoading || loading || disabled}
                    loading={buttonLoading}
                    isTransparent={!variantsOpen}
                    className={cx(styles.variantsButton, styles.closeButton)}
                  />
                </motion.div>
              }
            </>
          }
          {!hideCartButton &&
            <IconButton
              type='button'
              icon='icon-shopping-cart'
              onClick={() => addToCart({
                productId: slimProduct.productId, quantity: defaultQuantity
              })}
              disabled={buttonLoading || loading || disabled}
              loading={buttonLoading}
              isTransparent
            />
          }
        </div>}
      </div>
      <motion.ul
        initial={{ y: '-100%' }}
        animate={{ y: variantsOpen ? '0' : '-100%' }}
        className={styles.productVariants}
      >
        {productVariantList?.map(variant => {
          const isChecked = variant.variantId === slimProduct.productId;
          return (
          <button key={variant.variantId} className={styles.variantButton} onClick={() => handleUpdateSlimProduct(variant)}>
            {variant.variantName && (
              <p className={cx(styles.variant, 'bodyS', {[styles.checked]: isChecked})}>
                {isChecked && <Icon icon='icon-check' />} {`${variant.variantName}`} <Icon icon='icon-chevron-right' />
              </p>
            )}
          </button>
        )})}
      </motion.ul>
    </motion.div>
  )
}

export { SlimProductCard }
