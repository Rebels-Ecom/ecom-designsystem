import cx from 'classnames'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useOnClickOutside } from '../../../hooks'
import { Carousel, CarouselItem } from '../../organisms'
import { IProductVariantList } from '../product-variant-list/product-variant-list'
import { VerticalVariant } from './vertical-variant'
import styles from './vertical-variants.module.css'

const VerticalVariants = ({
  variantsList,
  onCloseVariants,
  open,
  onVariantSelect,
  selectedVariantId,
  isRestrictedUser,
}: IProductVariantList) => {
  const variantsRef = useRef<HTMLDivElement>(null)
  const [selectedProductVariantId, setSelectedProductVariantId] = useState(selectedVariantId)
  function handleOnClickVariant(partNo: string) {
    setSelectedProductVariantId(partNo)
    const selectedProduct = variantsList.find((variant) => variant.variantId === partNo)
    onVariantSelect(selectedProduct, variantsList)
  }

  useOnClickOutside({ ref: variantsRef, onClose: onCloseVariants })

  return (
    <motion.div
      ref={variantsRef}
      className={cx(styles.verticalVariants, { [styles.open]: open })}
      initial={{ y: '100%' }}
      animate={open ? { y: '0%' } : { y: '100%' }}
      exit={{ y: '100%' }}
      transition={{
        type: 'tween',
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <Carousel
        className={styles.carousel}
        noGrid
        trackClassName={styles.carouselTrack}
        splideProps={{
          options: {
            gap: '0.25rem',
            direction: 'ttb',
            height: '100%',
            fixedHeight: '40%',
          },
        }}
        hidePagination
        zeroOffset
        breakpoints={{
          sm: {
            hideArrows: true,
          },
          md: {
            perPage: 2,
            perMove: 2,
          },
          lg: {
            perPage: 2,
            perMove: 2,
          },
        }}
      >
        {variantsList
          ?.sort(
            (a, b) =>
              Number(b.variantId === selectedProductVariantId) - Number(a.variantId === selectedProductVariantId)
          )
          ?.map((variant) => (
            <CarouselItem key={variant.variantId}>
              <VerticalVariant
                {...variant}
                checked={variant.variantId === selectedProductVariantId}
                onClick={handleOnClickVariant}
                isRestrictedUser={isRestrictedUser}
              />
            </CarouselItem>
          ))}
      </Carousel>
    </motion.div>
  )
}

export { VerticalVariants }
