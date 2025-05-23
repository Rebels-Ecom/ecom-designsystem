import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { Icon, IconWithTooltip } from '../../atoms'
import { RadioButton } from '../../atoms/inputs/radio-button/radio-button'
import { IPicture, Picture } from '../../atoms/picture/picture'
import { FlexContainer } from '../../layouts'
import styles from './product-variant.module.css'

export interface IProductVariant {
  productName: string
  variantName: string
  variantId: string
  country: string
  priceStr: string
  salesUnit: string
  itemNumberPerSalesUnit: number
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
  outOfStock?: boolean
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
}: IProductVariant) => {
  return (
    <button className={styles.productVariant} onClick={() => onClick?.(variantId)}>
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
          <RadioButton
            id={variantId}
            name={`variant-radio-${productName}`}
            checked={checked}
            value={variantId}
            onChange={onChange}
          />
        </div>
      </FlexContainer>
      <FlexContainer stretch alignItems="center">
        <div className={styles.imageWrapper}>
          <Picture
            {...image}
            classNamePicture={styles.picture}
            classNameImg={`${styles.image}`}
            fallbackImageUrl={fallbackProductImageUrl}
          />{' '}
        </div>
        <div className={`${styles.contentWrapper}`}>
          <p className={styles.heading}>{variantName}</p>
          {!isRestrictedUser && (
            <>
              <p className={styles.textGray}>{`${partNoLabel} ${variantId}`}</p>
              <p className={styles.textPurple}>{`${priceStr} ${currencyLabel}/${unitLabel}`}</p>
            </>
          )}
        </div>
      </FlexContainer>
    </button>
  )
}

export { ProductVariant }
