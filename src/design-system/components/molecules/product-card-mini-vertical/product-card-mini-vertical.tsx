import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { Picture, Placeholder } from '../../atoms'
import { Tag } from '../../atoms/tag/tag'
import { IProductCard, TProductCardVertical } from '../product-card/product-card'
import { QuantityChanger } from '../quantity-changer/quantity-changer'
import styles from './product-card-mini-vertical.module.css'

const ProductCardMiniVertical = ({
  product,
  loading,
  linkComponent: Link,
  productImage,
  onClick,
}: IProductCard & TProductCardVertical) => {
  const {
    activeCampaign,
    partNo,
    partNoLabel,
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
    outOfStock,
    tags,
    isLimitedProduct,
    sellerOnly,
    isAccessoryPotItem,
    priceLabel,
    currencyLabel,
    unitLabel,
    outOfStockLabel,
    limitedLabel,
  } = product || {}

  const tagsList = activeCampaign ? tags?.slice(0, 3) : tags
  console.log(tagsList)

  return (
    <div className={styles.productCardMiniVertical}>
      {loading ? (
        <Placeholder type="tags" />
      ) : Array.isArray(tagsList) && !!tagsList.length ? (
        <div className={styles.tagsList}>
          {tagsList?.map((tag) => (
            <Tag {...tag} noText className={styles.tag} />
          ))}
        </div>
      ) : // <TagsList tagsList={activeCampaign ? tags.slice(0, 3) : tags} />
      null}
      {loading ? (
        <Placeholder type="image" />
      ) : (
        <>
          {productUrl && Link ? (
            <Link to={productUrl} href={productUrl} className={styles.imageWrapper} onClick={onClick}>
              <Picture
                {...productImage}
                classNamePicture={styles.picture}
                classNameImg={styles.image}
                fallbackImageUrl={fallbackProductImageUrl}
              />
            </Link>
          ) : (
            <div className={styles.imageWrapper}>
              <Picture
                {...productImage}
                classNamePicture={styles.picture}
                classNameImg={styles.image}
                fallbackImageUrl={fallbackProductImageUrl}
              />
            </div>
          )}
        </>
      )}
      <div className={styles.content}>
        {/* {!!args.product.tags?.length ? <TagsList tagsList={args.product.tags} /> : null} */}
        {/* <h2 className={`${styles.productName} h5`}>{heading}</h2> */}
        <div className={styles.quantityWrapper}>
          <span style={{ fontSize: '0.875rem' }}>100 kr</span>
          <QuantityChanger id="product-card-mini-vertical" quantity="1" />
        </div>
      </div>
    </div>
  )
}

export { ProductCardMiniVertical }
