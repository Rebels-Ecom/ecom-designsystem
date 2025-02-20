import cx from 'classnames'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { Icon, Picture } from '../../atoms'
import { IProductVariant } from '../product-variant/product-variant'
import styles from './vertical-variant.module.css'

const VerticalVariant = ({
  checked,
  onClick,
  variantId,
  sellerOnly,
  image,
  isRestrictedUser,
  variantName,
  partNoLabel,
  priceStr,
  currencyLabel,
  unitLabel,
}: IProductVariant) => {
  return (
    <button className={cx(styles.verticalVariant, { [styles.selected]: checked })} onClick={() => onClick?.(variantId)}>
      <div className={styles.mainContent}>
        <div className={styles.imageWrapper}>
          <Picture
            {...image}
            classNamePicture={styles.picture}
            classNameImg={`${styles.image}`}
            fallbackImageUrl={fallbackProductImageUrl}
          />{' '}
        </div>

        <div className={`${styles.contentWrapper}`}>
          <div className={styles.topRow}>
            {sellerOnly && <Icon className={styles.sellerIcon} icon="icon-eye" size="small" />}
          </div>
          <p className={styles.heading}>{variantName}</p>
          {!isRestrictedUser && (
            <>
              <p className={styles.partNo}>{`${partNoLabel} ${variantId}`}</p>
              <p className={styles.price}>{`${priceStr} ${currencyLabel}/${unitLabel}`}</p>
            </>
          )}
        </div>
      </div>
      {checked && <Icon icon="icon-check" className={styles.selectedIcon} />}
    </button>
  )
}

export { VerticalVariant }
