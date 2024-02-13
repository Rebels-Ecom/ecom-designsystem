import { useRef, useState } from 'react'
import { Button, IButton } from '../../atoms/button/button'
import { IProductVariant, ProductVariant } from '../product-variant/product-variant'
import styles from './product-variant-list.module.css'
import { useOnClickOutside } from '../../../hooks'

export interface IProductVariantList {
  className?: string
  variantsList: Array<IProductVariant>
  onVariantSelect: CallableFunction
  selectedVariantId: string
  sellerOnlyTooltipText?: string
  onCloseVariants: CallableFunction
  isRestrictedUser?: boolean
}

const ProductVariantList = ({
  className,
  variantsList,
  onVariantSelect,
  selectedVariantId,
  sellerOnlyTooltipText,
  onCloseVariants,
  isRestrictedUser,
}: IProductVariantList) => {
  const [selectedProductVariantId, setSelectedProductVariantId] = useState(selectedVariantId)
  const variantsRef = useRef<HTMLDivElement>(null)

  function handleOnChangeVariant(e: React.FormEvent<HTMLInputElement>) {
    const selectedValue = e.currentTarget.value
    setSelectedProductVariantId(selectedValue)
  }
  
  function handleOnClickVariant(partNo: string) {
    setSelectedProductVariantId(partNo);
  }

  function handleSelectVariant() {
    const selectedProduct = variantsList.find((variant) => variant.variantId === selectedProductVariantId)
    onVariantSelect(selectedProduct, variantsList)
  }

  useOnClickOutside({ ref: variantsRef, onClose: onCloseVariants })

  return (
    <div ref={variantsRef} className={className ? className : ''}>
      <ul className={styles.variantsList}>
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
      </ul>
      <Button className={styles.productCardBtn} type="button" surface="primary" size="small" fullWidth onClick={handleSelectVariant}>
        Välj variant
      </Button>
    </div>
  )
}

export { ProductVariantList }
