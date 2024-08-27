import { RadioButton } from '../../atoms/inputs/radio-button/radio-button'
import { IPicture, Picture } from '../../atoms/picture/picture'
import styles from './product-variant.module.css'
import cx from 'classnames'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { Icon } from '../../atoms'
import { FlexContainer } from '../../layouts'
import { IconWithTooltip } from '../../atoms'

export interface IProductVariant {
  productName: string
  variantName: string
  variantId: string
  country: string
  priceStr: string
  salesUnit: string
  sellerOnly: boolean
  image: IPicture
  onChange: CallableFunction
  onClick?: (partNo: string) => void
  checked: boolean
  partNoLabel: string
  unitLabel: string
  currencyLabel: string
  sellerOnlyTooltipText?: string
  isRestrictedUser?: boolean
  horizontal?: boolean;
}

const ProductVariant = ({
  image,
  productName,
  variantName,
  variantId,
  priceStr,
  onChange,
  onClick,
  checked,
  partNoLabel,
  currencyLabel,
  unitLabel,
  sellerOnly,
  sellerOnlyTooltipText,
  isRestrictedUser,
  horizontal
}: IProductVariant) => {
  return (
    <button className={cx(styles.productVariant, { [styles.horizontal]: horizontal })} onClick={() => onClick?.(variantId)}>
      <FlexContainer stretch justifyContent="flex-end" alignItems="center" className={styles.topRow}>
        {sellerOnly && (
          <>
            {sellerOnlyTooltipText ? (
              <IconWithTooltip content={sellerOnlyTooltipText} icon={{ icon: 'icon-eye' }} />
            ) : (
              <Icon icon={'icon-eye'} size={'large'} />
            )}
          </>
        )}
        <div className={styles.radioWrapper}>
          <RadioButton id={variantId} name={`variant-radio-${productName}`} checked={checked} value={variantId} onChange={onChange} />
        </div>
      </FlexContainer>
      <FlexContainer stretch alignItems="center">
        <div className={styles.imageWrapper}>
          <Picture {...image} classNamePicture={styles.picture} classNameImg={`${styles.image}`} fallbackImageUrl={fallbackProductImageUrl} />{' '}
        </div>
        <div className={`${styles.contentWrapper}`}>
          <p className={styles.heading}>{variantName}</p>
          {!isRestrictedUser && (
            <>
              <p className={cx(styles.textGray, 'bodyS')}>{`${partNoLabel} ${variantId}`}</p>
              <p className={cx(styles.textPurple, 'bodyS')}>{`${priceStr} ${currencyLabel}/${unitLabel}`}</p>
            </>
          )}
        </div>
      </FlexContainer>
    </button>
  )
}

export { ProductVariant }
