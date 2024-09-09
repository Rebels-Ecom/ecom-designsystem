import { motion } from "framer-motion";
import { IProductVariantList } from "../product-variant-list/product-variant-list";
import cx from 'classnames';
import styles from './horizontal-variants.module.css';
import { HorizontalVariant } from "../horizontal-variant/horizontal-variant";
import { useRef, useState } from "react";
import { useOnClickOutside } from "../../../hooks";
import { Carousel, CarouselItem } from "../../organisms";


const HorizontalVariants = ({ variantsList, onCloseVariants, open, onVariantSelect, selectedVariantId }: IProductVariantList) => {
  const variantsRef = useRef<HTMLDivElement>(null);
  const [selectedProductVariantId, setSelectedProductVariantId] = useState(selectedVariantId)
  function handleOnClickVariant(partNo: string) {
    setSelectedProductVariantId(partNo);
    const selectedProduct = variantsList.find((variant) => variant.variantId === partNo);
    onVariantSelect(selectedProduct, variantsList);
  }

  useOnClickOutside({ ref: variantsRef, onClose: onCloseVariants });

  return (
    <motion.div
      ref={variantsRef}
        className={cx(styles.horizontalVariants, {[styles.open]: open})}
        initial={{ y: '100%' }}
        animate={open ? { y: '0%' } : { y: '100%' }}
        exit={{ y: '100%' }}
        transition={{
          type: 'tween', // Use tween for smooth transitions
          duration: 0.3, // Duration of the animation
          ease: [0.4, 0, 0.2, 1], // Custom easing function for smoothness
        }}
      >
        <Carousel
          className={styles.carousel}
          noGrid
          trackClassName={styles.carouselTrack}
          splideProps={{
            options: {
              gap: '0.25rem',
            }
          }}
          zeroOffset
          breakpoints={
            {
              md: {
                perPage: 2,
                perMove: 2
              },
              lg: {
                perPage: 2,
                perMove: 2
              },
            }
          }
        >
          {variantsList?.map(variant => (
            <CarouselItem key={variant.variantId}>
              <HorizontalVariant
                {...variant}
                checked={variant.variantId === selectedProductVariantId}
                onClick={handleOnClickVariant}
              />
            </CarouselItem>
          ))}
        </Carousel>
      </motion.div>
  )
}

export {
  HorizontalVariants
}
