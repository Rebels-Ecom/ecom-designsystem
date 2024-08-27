import { IProductVariant } from '../product-variant/product-variant';
import cx from 'classnames';
import styles from './horizontal-variant.module.css';
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { FlexContainer } from '../../layouts';
import { Icon, IconWithTooltip, Picture } from '../../atoms';

const HorizontalVariant = ({
  checked,
  onClick,
  variantId,
  sellerOnly,
  sellerOnlyTooltipText,
  image,
  isRestrictedUser,
  variantName,
  partNoLabel,
  priceStr,
  currencyLabel,
  unitLabel
}: IProductVariant) => {
  return (
    <button className={cx(styles.horizontalVariant, {[styles.selected]: checked})} onClick={() => onClick?.(variantId)}>
      <FlexContainer stretch justifyContent="flex-end" alignItems="center" className={styles.topRow}>
        {sellerOnly && (
          <>
            {sellerOnlyTooltipText ? (
              <IconWithTooltip content={sellerOnlyTooltipText} icon={{ icon: 'icon-eye' }} />
            ) : (
              <Icon icon='icon-eye' size='large' />
            )}
          </>
        )}
      </FlexContainer>
      <div className={styles.mainContent}>
        <div className={styles.imageWrapper}>
          <Picture {...image} classNamePicture={styles.picture} classNameImg={`${styles.image}`} fallbackImageUrl={fallbackProductImageUrl} />{' '}
        </div>

        <div className={`${styles.contentWrapper}`}>
          <p className={styles.heading}>{variantName}</p>
          {!isRestrictedUser && (
            <>
              <p className={styles.partNo}>{`${partNoLabel} ${variantId}`}</p>
              <p className={styles.price}>{`${priceStr} ${currencyLabel}/${unitLabel}`}</p>
            </>
          )}
        </div>
      </div>
      {checked && <Icon icon='icon-check' className={styles.selectedIcon} />}
    </button>
  )
}

export {
  HorizontalVariant
}
