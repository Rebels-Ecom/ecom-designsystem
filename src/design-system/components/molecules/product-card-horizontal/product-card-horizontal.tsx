import React from 'react'
import styles from './product-card-horizontal.module.css'
import { ProductQuantityInput } from '../product-quantity-input/product-quantity-input'
import { getProductPicture } from '../../../../helpers/picture-helper'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { Picture, IconButton, DividerLines, Loader, Placeholder, Button, Icon } from '../../atoms'
import cx from 'classnames'
import { TagsList } from '../tags-list/tags-list'
import { IProductCard, TProductCardHorizontal } from '../product-card/product-card'

const ProductCardHorizontal = ({
  product,
  loading = false,
  addToCartButton,
  addToCart,
  hideCartButton,
  onClickRemoveProduct,
  hideRemoveButton,
  removingProduct,
  onChangeQuantity,
  productQuantityDisabled,
  linkComponent: Link,
  className = "",
  defaultQuantity
}: IProductCard & TProductCardHorizontal) => {
  const { productId, productName, productUrl, productImageUrl, tags, country, packaging, priceStr, totalPrice, quantity, salesUnit, itemNumberPerSalesUnit } =
    product
  const productImage = getProductPicture(productId, productImageUrl)

  function handleRemoveProduct(id: string) {
    onClickRemoveProduct && onClickRemoveProduct(id)
  }

  function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(e.target.value) || 0
    onChangeQuantity && onChangeQuantity(quantity)
  }

  return (
    <div className={cx(styles.productCardHorizontal, className)}
    >
      {removingProduct? (
        <Loader visible text={'Loading'} />
      ) : (
        <>
          {loading ? (
            <>
              <div className={cx(styles.imageWrapper, styles.imageWrapperPlaceholder)}>
              <Placeholder type="image" />
              </div>
              <div className={styles.placeholderContent}>
                <Placeholder type={'heading'} />
                <DividerLines />
                <Placeholder type={'p_short'} />
                <Placeholder type={'p_short'} />
                <Placeholder type={'p_long'} />
              </div>
            </>
          ) : (
            <>
              <Picture
                {...productImage}
                classNamePicture={styles.picture}
                classNameImg={`${styles.image}`}
                fallbackImageUrl={fallbackProductImageUrl}
              />
              <div className={styles.contentWrapper}>
                {Array.isArray(tags) && tags.length ?
                  <TagsList tagsList={tags} /> : null
                }
                
                {productUrl && Link ? (
                  <Link to={productUrl} href={productUrl} className={styles.mainLink}>
                    <h5 className={styles.heading}>{productName}</h5>
                  </Link>
                ) : (
                  <h5 className={styles.heading}>{productName}</h5>
                )}

                <DividerLines />
                
                <p className={cx(styles.subTitle, 'bodyS')}>{`${packaging ? `${packaging}:` : ''} ${priceStr ? `${priceStr} kr/st` : ''}`}</p>
                
                {country !== '' && <p className={cx(styles.caption, 'bodyS')}>{`${productId ? `Art.nr. ${productId} -` : ''} ${country}`}</p>}

                <ProductQuantityInput
                  className={styles.quantityInput}
                  salesUnit={salesUnit}
                  itemNumberPerSalesUnit={itemNumberPerSalesUnit}
                  totalPrice={totalPrice}
                  quantity={defaultQuantity ?? quantity}
                  quantityInputId={productId}
                  onChange={handleOnChangeQuantity}
                  disabled={productQuantityDisabled}
                />
              </div>
              <div className={styles.buttonsWrapper}>
                {!hideRemoveButton && onClickRemoveProduct && (
                  <div className={styles.iconLink}>
                    <IconButton icon={'icon-x-circle'} onClick={() => handleRemoveProduct(productId)} isLink={false} isTransparent size="large"></IconButton>
                  </div>
                )}
                {/* TODO: replace this hc values with addToCartButton props? */}
                {!hideCartButton ? (
                  <Button
                    {...addToCartButton}
                    className={!loading ? styles.productCardBtn : ''}
                    size={'x-small'}
                    onClick={() => addToCart(product)}
                    disabled={loading || quantity <= '0'}
                  >
                    <Icon icon={'icon-shopping-cart'} className={styles.cartBtnIcon}></Icon>
                    {/* TODO: replace this hc copy with addToCartButton.children? */}
                    <span className={styles.cartBtnText}>Lägg i kundvagn</span>
                  </Button>
                ) : null}
              </div>
            </>
          )}
        </>
      )
      }
    </div>
  )
}

export { ProductCardHorizontal }