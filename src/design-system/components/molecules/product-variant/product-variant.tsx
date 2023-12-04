import { RadioButton } from '../../atoms/inputs/radio-button/radio-button'
import { IPicture, Picture } from '../../atoms/picture/picture'
import styles from './product-variant.module.css'
import cx from 'classnames'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'

export interface IProductVariant {
  productName: string
  variantName: string
  variantId: string
  country: string
  priceStr: string
  salesUnit: string
  image: IPicture
  onChange: CallableFunction
  checked: boolean
  productIdLabel: string
  pieceLabel: string
  currencyLabel: string
}

const ProductVariant = ({
  image,
  productName,
  variantName,
  variantId,
  country,
  priceStr,
  onChange,
  checked,
  productIdLabel,
  currencyLabel,
  pieceLabel,
}: IProductVariant) => {
  return (
    <label className={styles.productVariant}>
      <div className={styles.imageWrapper}>
        <Picture {...image} classNamePicture={styles.picture} classNameImg={`${styles.image}`} fallbackImageUrl={fallbackProductImageUrl} />{' '}
      </div>
      <div className={`${styles.contentWrapper}`}>
        <p className={styles.heading}>{productName}</p>
        <p className={styles.heading}>{variantName}</p>
        <p className={cx(styles.textGray, 'bodyS')}>{`${productIdLabel} ${variantId} ${country && `- ${country}`}`}</p>
        <p className={cx(styles.textPurple, 'bodyS')}>{`${variantName}: ${priceStr} ${currencyLabel}/${pieceLabel}`}</p>
      </div>
      <div className={styles.radioWrapper}>
        <RadioButton id={variantId} name={`variant-radio-${productName}`} checked={checked} value={variantId} onChange={onChange} />
      </div>
    </label>
  )
}

export { ProductVariant }
