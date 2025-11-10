import React from 'react'
import cx from 'classnames'
import styles from './product-info.module.css'

interface IProductInfo {
  isRestrictedUser: boolean
  priceLabel?: string
  packagePriceString: string
  currencyLabel?: string
  salesUnit: string
  quantityPerPackageLabel?: string
  itemNumberPerSalesUnit: number
  unitLabel?: string
  aLabel?: string
  priceStr: string
  partNoLabel?: string
  partNo: string
  totalPrice?: string
  isMobile?: boolean
}

const ProductInfo = ({
  aLabel,
  currencyLabel,
  isRestrictedUser,
  itemNumberPerSalesUnit,
  packagePriceString,
  partNo,
  partNoLabel,
  priceLabel,
  priceStr,
  quantityPerPackageLabel,
  salesUnit,
  unitLabel,
  isMobile,
  totalPrice,
}: IProductInfo) => {
  return !isRestrictedUser ? (
    <div className={styles.productInfo}>
      <p
        className={cx(styles.textPurple, styles.specsText, 'bodyS')}
      >{`${priceLabel}: ${packagePriceString} ${currencyLabel}/${salesUnit.toLowerCase()}`}</p>

      <p className={cx(styles.specsText, 'bodyS')}>
        {`${quantityPerPackageLabel} ${itemNumberPerSalesUnit} ${unitLabel} ${aLabel} ${priceStr} ${currencyLabel}`}
      </p>
      <p className={cx(styles.specsText, 'bodyS')}>{`${partNoLabel} ${partNo}`}</p>
      {isMobile && (
        <p className={cx(styles.specsText, styles.totalPrice, 'bodyS')}>
          {totalPrice} {currencyLabel}
        </p>
      )}
    </div>
  ) : null
}

export { ProductInfo }
