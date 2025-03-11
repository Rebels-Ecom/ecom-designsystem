import React from 'react'
import fallbackProductImageUrl from '../../../../../../assets/fallback-images/defaultFallbackImage.svg'
import { Picture } from '../../../../atoms'
import { IPicture } from '../../../../atoms/picture/picture'
import styles from './product-image.module.css'

type ProductCardImageProps = {
  productUrl: string | undefined
  Link: any // Replace 'any' with the actual type of your Link component
  onClick?: () => void
  productImage: IPicture // Replace 'any' with the actual type of your productImage
}

const ProductCardImage = React.memo(({ productUrl, Link, onClick, productImage }: ProductCardImageProps) => {
  return (
    <>
      {Link && productUrl ? (
        <Link to={productUrl} href={productUrl} onClick={onClick}>
          <Picture
            {...productImage}
            classNamePicture={styles.picture}
            classNameImg={styles.image}
            fallbackImageUrl={fallbackProductImageUrl}
          />
        </Link>
      ) : (
        <Picture
          {...productImage}
          classNamePicture={styles.picture}
          classNameImg={styles.image}
          fallbackImageUrl={fallbackProductImageUrl}
        />
      )}
    </>
  )
})

export default ProductCardImage
