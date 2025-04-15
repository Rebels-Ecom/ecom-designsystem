import cx from 'classnames'
import React, { ReactElement } from 'react'
import styles from './product-content.module.css'

type ProductContentProps = {
  productName: string
  productUrl: string | undefined
  Link: any // Replace 'any' with the actual type of your Link component
  onClick?: () => void
  quantity: number
  itemNumberPerSalesUnit: number
  price: string
  salesUnit: string
  isRestrictedUser?: boolean
  hidePrice?: boolean
  icons?: ReactElement
}

const ProductContent: React.FC<ProductContentProps> = ({
  productName,
  productUrl,
  Link,
  onClick,
  quantity,
  salesUnit,
  itemNumberPerSalesUnit,
  price,
  isRestrictedUser,
  hidePrice,
  icons,
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
      <div className={styles.bottom}>
        <div className={styles.left}>
          {!hidePrice && !isRestrictedUser && (
            <>
              <p
                className={cx(styles.detail, 'bodyS')}
              >{`${quantity} x ${salesUnit} (${itemNumberPerSalesUnit} styck)`}</p>
              <p className={cx(styles.detail, 'bodyS fontBold', styles.price)}>{`Pris: ${price} kr`}</p>
            </>
          )}
        </div>
        <div className={styles.right}>{icons && <div className={styles.right}>{icons}</div>}</div>
      </div>
    </div>
  )
}

export default ProductContent
