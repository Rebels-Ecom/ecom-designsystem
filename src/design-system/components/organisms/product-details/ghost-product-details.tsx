import cx from 'classnames';
import styles from './product-details.module.css';
import { LoadingBars } from '../../molecules';
import { Picture, Placeholder } from '../../atoms';
import { getProductPicture } from '../../../../helpers/picture-helper';
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'

const GhostProductDetails = () => {
  return (
    <div className={cx(styles.productDetails)}>
      <div className={cx(styles.content, styles.leftContent)}>
        <LoadingBars
          loadingBars={[
            { color: 'orange', name: 'Beska', value: '1' },
            { color: 'orange', name: 'Sötma', value: '1' },
            { color: 'orange', name: 'Fyllighet', value: '1' },
          ]}
          className={styles.loadingBars}
        />
        <div className={styles.imageWrapper}>
          <Picture
            {...getProductPicture('loading', fallbackProductImageUrl)}
            id='loading'
            classNamePicture={styles.cardPicture}
            classNameImg={`${styles.cardImage}`}
            fallbackImageUrl={fallbackProductImageUrl}
          />
        </div>
      </div>
      <div className={cx(styles.content, styles.rightContent)}>
        <div>
          <Placeholder type='heading' />
          <Placeholder type='p_long' />
          <Placeholder type='p_short' />
          <Placeholder type='p_short' />
        </div>
        <div>
          <Placeholder type='heading' />
          <Placeholder type='p_long' />
          <Placeholder type='p_short' />
          <Placeholder type='p_short' />
        </div>
      </div>
    </div>
  )
}

export {
  GhostProductDetails
}
