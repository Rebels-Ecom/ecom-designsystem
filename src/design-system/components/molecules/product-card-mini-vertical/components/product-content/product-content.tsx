import cx from 'classnames'
import React from 'react'
import styles from './product-content.module.css'

type ProductContentProps = {
  productName: string
  productUrl: string | undefined
  Link: any // Replace 'any' with the actual type of your Link component
  onClick?: () => void
  quantity: number
  itemNumberPerSalesUnit: number
  price: string
  isRestrictedUser?: boolean
  hidePrice?: boolean
}

const ProductContent: React.FC<ProductContentProps> = ({
  productName,
  productUrl,
  Link,
  onClick,
  quantity,
  itemNumberPerSalesUnit,
  price,
  isRestrictedUser,
  hidePrice,
}) => {
  return (
    <div className={`${styles.productContent}`}>
      {productUrl && Link ? (
        <Link to={productUrl} href={productUrl} onClick={onClick} className={styles.productNameLink}>
          <h2 className={cx(styles.productName, 'bodyS')}>{productName}</h2>
        </Link>
      ) : (
        <h2 className={cx(styles.productName, 'bodyS')}>{productName}</h2>
      )}
      {!hidePrice && !isRestrictedUser && (
        <>
          <p className={cx(styles.detail, 'bodyS')}>{`${quantity} x (${itemNumberPerSalesUnit} styck)`}</p>
          <p className={cx(styles.detail, 'bodyS fontBold')}>{`Pris: ${price} kr`}</p>
        </>
      )}
    </div>
  )
}

export default ProductContent
