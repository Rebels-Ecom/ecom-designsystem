import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProductVariantList } from '../../../../molecules'
import { IProductVariant } from '../../../../molecules/product-variant/product-variant'
import { IProductDetails } from '../../product-details'
import cx from 'classnames'
import styles from './variant-selector.module.css'

interface IVariantSelector {
  variantList: Array<IProductVariant>
  selectedVariantId: string
  onSelect: (v: any) => void
  onClose: () => void
  isMobile: boolean
  isRestrictedUser: boolean
  tooltips?: IProductDetails['tooltips']
  isOpen: boolean
  alignBottom?: boolean
}

const mobileVariants = {
  hidden: {
    opacity: 0,
    y: '100%',
    scale: 0.98,
    zIndex: 95,
    transitionEnd: { zIndex: 95 },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    zIndex: 105,
    transitionEnd: { zIndex: 105 },
  },
  exit: {
    opacity: 0,
    y: '100%',
    scale: 0.98,
    zIndex: 95,
    transitionEnd: { zIndex: 95 },
  },
}

const desktopVariants = {
  hidden: { opacity: 0, y: '100%', scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: '100%', scale: 0.98 },
}

const VariantSelector = ({
  variantList = [],
  selectedVariantId,
  onSelect,
  onClose,
  isMobile,
  isRestrictedUser,
  tooltips,
  isOpen,
  alignBottom,
}: IVariantSelector) => {
  const className = !isMobile ? cx(styles.contentWrapper, styles.productVariants) : undefined

  useEffect(() => {
    const el = document.body

    if (el && isMobile) {
      if (isOpen) {
        el.classList.add('no-scroll')
      } else {
        el.classList.remove('no-scroll')
      }
    }

    return () => el?.classList?.remove('no-scroll')
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="variant-selector"
          className={cx(className, styles.variantSelector, { [styles.alignBottom]: alignBottom })}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={isMobile ? mobileVariants : desktopVariants}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={!isMobile ? { zIndex: 'auto' } : undefined}
        >
          <ProductVariantList
            variantsList={variantList}
            selectedVariantId={selectedVariantId}
            onVariantSelect={onSelect}
            onCloseVariants={onClose}
            isRestrictedUser={isRestrictedUser}
            sellerOnlyTooltipText={tooltips?.sellerOnly}
            className={styles.list}
            hideBottomBtn
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { VariantSelector }
