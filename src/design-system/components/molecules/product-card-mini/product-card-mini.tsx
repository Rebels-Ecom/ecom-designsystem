import cx from 'classnames';
import { getProductPicture } from "../../../../helpers/picture-helper";
import { Picture } from "../../atoms";
import { IProductCard } from "../product-card/product-card";
import styles from './product-card-mini.module.css';
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg';

export interface IProductCardMini extends Pick<IProductCard, 'product' | 'imagePriority'> {};

const ProductCardMini = ({ product, imagePriority }: IProductCardMini) => {
  if (!product) {
    return null;
  }

  const {
    partNo,
    primaryImageUrl,
    productName,
    packaging,
    priceLabel,
    priceStr,
    currencyLabel,
    unitLabel,
    country,
    partNoLabel
   } = product;
  const prodImg = getProductPicture(partNo, primaryImageUrl, '120', undefined, imagePriority?.loading, imagePriority?.fetchPriority);

  return (
    <div className={styles.productCardMini}>
      <Picture
        {...prodImg}
        classNamePicture={styles.picture}
        classNameImg={styles.image}
        fallbackImageUrl={fallbackProductImageUrl}
      />
      <div className={styles.textContent}>
        <h2 className={cx(styles.name, 'h5')}>{productName}</h2>
        {packaging && (
          <p className={cx(styles.info)}>{packaging}</p>
        )}
        <p className={cx(styles.info)}>
          {`${priceLabel}: ${
            priceStr ? `${priceStr} ${currencyLabel ?? ''}/${unitLabel ? unitLabel.toLowerCase() : ''}` : ''
          }`}</p>

        {(country !== '' || partNo !== '') && (
          <p className={cx(styles.info)}>{`${partNo ? `${partNoLabel} ${partNo}` : ''} ${country && `- ${country}`}`}</p>
        )}
      </div>
    </div>
  )
}

export {
  ProductCardMini
}
