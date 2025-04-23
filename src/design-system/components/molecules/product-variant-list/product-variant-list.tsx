import cx from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from '../../../hooks'
import { Icon, IconButton } from '../../atoms'
import { IProductVariant, ProductVariant } from '../product-variant/product-variant'
import styles from './product-variant-list.module.css'

export interface IProductVariantList {
  className?: string
  variantsList: Array<IProductVariant>
  onVariantSelect: CallableFunction
  selectedVariantId: string
  sellerOnlyTooltipText?: string
  onCloseVariants: CallableFunction
  isRestrictedUser?: boolean
  absolutePositioned?: boolean
  open?: boolean
}

const ProductVariantList = ({
  className,
  variantsList,
  onVariantSelect,
  selectedVariantId,
  sellerOnlyTooltipText,
  onCloseVariants,
  isRestrictedUser,
  absolutePositioned,
}: IProductVariantList) => {
  const [selectedProductVariantId, setSelectedProductVariantId] = useState(selectedVariantId)
  const [hasReachedBottom, setHasReachedBottom] = useState(false)
  const variantsRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleScroll = (event: any) => {
      if (listRef?.current) {
        const height = Math.ceil(event.target.scrollHeight - listRef.current?.getBoundingClientRect().height || 0)

        if (event.target.scrollTop >= height - 20 && !hasReachedBottom) {
          setHasReachedBottom(true)
        }
        if (event.target.scrollTop < height - 20 && hasReachedBottom) {
          setHasReachedBottom(false)
        }
      }
    }

    listRef.current?.addEventListener('scroll', handleScroll)

    return () => listRef.current?.removeEventListener('scroll', handleScroll)
  }, [hasReachedBottom])

  function handleOnChangeVariant(e: React.FormEvent<HTMLInputElement>) {
    const selectedValue = e.currentTarget.value
    setSelectedProductVariantId(selectedValue)
    const selectedProduct = variantsList.find((variant) => variant.variantId === selectedValue)
    onVariantSelect(selectedProduct, variantsList)
  }

  function handleOnClickVariant(partNo: string) {
    setSelectedProductVariantId(partNo)
    const selectedProduct = variantsList.find((variant) => variant.variantId === partNo)
    onVariantSelect(selectedProduct, variantsList)
  }

  function handleScrollToBottom() {
    if (listRef?.current) {
      const height = Math.ceil(listRef.current.scrollHeight - listRef.current?.getBoundingClientRect().height || 0)

      listRef.current.scrollTo({ top: height ?? 0, behavior: 'smooth' })
    }
  }

  function handleScrollToTop() {
    if (listRef?.current) {
      listRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useOnClickOutside({ ref: variantsRef, onClose: onCloseVariants })

  return (
    <div ref={variantsRef} className={cx(styles.productVariantList, className ? className : '')}>
      <IconButton
        className={styles.buttonClose}
        type="button"
        onClick={() => onCloseVariants()}
        icon="icon-x"
        size="large"
        isTransparent
        noBorder
        noPadding
      />
      <ul
        ref={listRef}
        className={cx(styles.variantsList, {
          [styles.hasScrollBar]: variantsList?.length > 2,
          [styles.absolute]: absolutePositioned,
        })}
      >
        {variantsList.map((variant) => (
          <li key={variant.variantId} className={styles.listItem}>
            <ProductVariant
              key={variant.variantId}
              {...variant}
              onChange={handleOnChangeVariant}
              onClick={handleOnClickVariant}
              checked={variant.variantId === selectedProductVariantId}
              sellerOnlyTooltipText={sellerOnlyTooltipText}
              isRestrictedUser={isRestrictedUser}
            />
          </li>
        ))}
        {variantsList?.length > 2 && (
          <div className={styles.showMoreContainer}>
            <AnimatePresence initial={false} exitBeforeEnter>
              {hasReachedBottom && (
                <motion.button
                  key="arrow-up"
                  className={styles.showMoreBtn}
                  onClick={handleScrollToTop}
                  initial={{ scale: 0.2 }}
                  animate={{ scale: hasReachedBottom ? 1 : 0 }}
                  exit={{ scale: 0.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon icon="icon-chevron-up" />
                </motion.button>
              )}
              {!hasReachedBottom && (
                <motion.button
                  key="arrow-down"
                  className={styles.showMoreBtn}
                  onClick={handleScrollToBottom}
                  initial={{ scale: 0.2 }}
                  animate={{ scale: hasReachedBottom ? 0 : 1 }}
                  exit={{ scale: 0.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon icon="icon-chevron-down" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        )}
      </ul>
    </div>
  )
}

export { ProductVariantList }
