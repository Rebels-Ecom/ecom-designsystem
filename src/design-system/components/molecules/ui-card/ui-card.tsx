import React from 'react'
import styles from './ui-card.module.css'
import cx from 'classnames'
import { IProductCard, ProductCard } from '../product-card/product-card';
import { Picture } from '../../atoms/picture/picture';
import { getProductPicture } from '../../../../helpers/picture-helper';
import { DividerLines } from '../../atoms/divider-lines/divider-lines';

function UiCard(product: IProductCard) {
  const {productId, productName, productImageUrl, country, packaging, priceStr, totalPrice,  quantity, salesUnit, itemNumberPerSalesUnit} = product
  const productImage = getProductPicture(productId, productImageUrl)
  const loading = true;
  return (
    <div className={styles.uiCard}>
      { loading ? 
        <div className={styles.uiPlaceholder}>
          {!loading ?
            <div className={styles.uiPlaceholderImage}>
                <div className={cx(styles.square, styles.image)}></div>
            </div>
            :
            <div className={styles.imageWrapper}>
                <Picture {...productImage} classNamePicture={styles.cardPicture} classNameImg={`${styles.cardImage}`} /> 
            </div>
          }
          { !loading ?
            <div className={styles.placeholderContent}>
              <div className={styles.placeholderHeading}></div>
              <div className={styles.placeholderParagraphShort}></div>
              <div className={styles.placeholderParagraphLong}></div>
              <div className={styles.placeholderParagraphLong}></div>
            </div>
            :
            <div className={`${styles.cardContent}`}>
              <h5 className={styles.heading}>{productName}</h5>
              <DividerLines/>
              <p className={cx(styles.textGray, 'bodyS')}>{`Art.nr. ${productId} - ${country}`}</p>
              <p className={cx(styles.textPurple, 'bodyS')}>{`${packaging}: ${priceStr} kr/st`}</p>
            </div>
          }
        </div>
        : <ProductCard {...product}></ProductCard>
      }
    </div>
  )
}

export { UiCard }