import { useEffect, useState } from 'react'
import type { ProductVariantListItem } from '../ProductVariantList'
import { productPicture } from './productPicture'
import type {
  ProductCardImagePriority,
  ProductCardProduct,
  ProductCardVariant,
  ResolvedProductCardProduct,
} from './types'

/** Legacy `convertNumToStr`: fixed to two decimals with a comma decimal separator. */
export function convertNumToStr(value: number): string {
  return value.toFixed(2).toString().replace('.', ',')
}

/** Inputs {@link useProductCardState} needs from the dispatcher's props. */
export interface UseProductCardStateParams {
  /** The product to render (the raw consumer shape). */
  product: ProductCardProduct
  /** Native `<img>` priority hints forwarded to the derived `Picture`. */
  imagePriority?: ProductCardImagePriority
  /** Starting quantity for the field (dual quantity mode: seed). */
  defaultQuantity?: string
  /** Upper bound for the quantity — larger values are rejected. */
  maxQuantity?: number
  /** Allow negative quantities (drops the clamp to 0). */
  allowNegative?: boolean
  /** When supplied the quantity is controlled (notify), otherwise it is kept internally (uncontrolled). */
  onChangeQuantity?: (product: ProductCardProduct) => void
  /** Fires with the newly-merged product when a packaging variant is applied. */
  onVariantChange?: (product: ProductCardProduct) => void
  /** Analytics / lazy-load hook fired when the variant picker is opened. */
  onVariantsButtonClick?: () => void
}

/** The merged product plus the picker state and the handlers the child cards forward to. */
export interface UseProductCardStateResult {
  /** The merged, stateful product (image, resolved quantity, running total, selected variant). */
  product: ResolvedProductCardProduct
  /** Whether the variant picker is open. */
  variantsOpen: boolean
  /** Report a new quantity (dual mode: notifies `onChangeQuantity` when controlled, else updates state). */
  handleChangeQuantity: (quantity: number) => void
  /** Open the variant picker (and fire the analytics hook). */
  handleVariantsButtonClick: () => void
  /** Close the variant picker. */
  handleCloseVariants: () => void
  /** Apply the variant chosen in the picker — resolves the narrow picker item to the full variant. */
  handleVariantSelect: (variant: ProductVariantListItem | undefined) => void
}

/**
 * Owns the ProductCard dispatcher's stateful price / quantity / variant math: the quantity clamp, the
 * dual (controlled vs internal) quantity mode, the running total, and re-deriving the whole product
 * when a packaging variant is chosen. Extracted from the dispatcher so the behaviour has one home and
 * is covered by the ProductCard contract stories (the repo's test vehicle). The math mirrors legacy
 * v1.6.6 exactly — including the quirks — so it must stay behaviourally identical.
 */
export function useProductCardState({
  product,
  imagePriority,
  defaultQuantity,
  maxQuantity,
  allowNegative,
  onChangeQuantity,
  onVariantChange,
  onVariantsButtonClick,
}: UseProductCardStateParams): UseProductCardStateResult {
  const {
    partNo,
    primaryImageUrl,
    pricePerUnit,
    itemNumberPerSalesUnit,
    quantity,
    priceStr,
    activeCampaign,
    outOfStock,
  } = product

  function getQuantity(value: string | undefined): string {
    const parsedQuantity = parseInt(value ?? '', 10)
    if (!value || isNaN(parsedQuantity)) return '1'
    if (parsedQuantity < 0 && !allowNegative) return '0'
    return value
  }

  function computeTotalPrice(): string {
    const safePrice = pricePerUnit && isFinite(pricePerUnit) ? pricePerUnit : 0
    const chosen = defaultQuantity ?? getQuantity(quantity)
    const qty = chosen ? parseInt(chosen, 10) : 0
    return convertNumToStr(safePrice * itemNumberPerSalesUnit * qty)
  }

  const [variantsListOpen, setVariantsListOpen] = useState(false)
  const [myProduct, setProduct] = useState<ResolvedProductCardProduct>({
    ...product,
    productImage: productPicture(partNo, primaryImageUrl, imagePriority),
    quantity: getQuantity(quantity),
    pricePerUnit: pricePerUnit && isFinite(pricePerUnit) ? pricePerUnit : 0,
    totalPrice: computeTotalPrice(),
    selectedVariantId: partNo,
  })

  useEffect(() => {
    setProduct((prevState) => ({
      ...prevState,
      quantity: getQuantity(quantity),
      priceStr,
      pricePerUnit: pricePerUnit && isFinite(pricePerUnit) ? pricePerUnit : 0,
      totalPrice: computeTotalPrice(),
      activeCampaign,
      outOfStock,
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity, priceStr, pricePerUnit, activeCampaign, outOfStock])

  function handleChangeQuantity(productQuantity: number) {
    if (maxQuantity !== undefined && productQuantity > maxQuantity) {
      return
    }
    const newProduct: ResolvedProductCardProduct = {
      ...myProduct,
      quantity: productQuantity.toString(),
      totalPrice: convertNumToStr(
        (myProduct.pricePerUnit ?? 0) * myProduct.itemNumberPerSalesUnit * productQuantity,
      ),
    }
    if (onChangeQuantity) {
      onChangeQuantity(newProduct)
    } else {
      setProduct(newProduct)
    }
  }

  function handleVariantsButtonClick() {
    setVariantsListOpen(true)
    onVariantsButtonClick?.()
  }

  function handleCloseVariants() {
    setVariantsListOpen(false)
  }

  function handlePackageChange(selectedVariant: ProductCardVariant) {
    const q =
      myProduct.partNo === selectedVariant.variantId ? parseInt(myProduct.quantity, 10) : 1

    setProduct((prevState) => {
      const updatedProduct: ResolvedProductCardProduct = {
        ...prevState,
        partNo: selectedVariant.variantId,
        productImage: selectedVariant.image ?? prevState.productImage,
        packaging: selectedVariant.variantName,
        price: selectedVariant.price,
        priceStr: selectedVariant.priceStr,
        pricePerUnit:
          selectedVariant.pricePerUnit && isFinite(selectedVariant.pricePerUnit)
            ? selectedVariant.pricePerUnit
            : 0,
        pricePerUnitString: selectedVariant.pricePerUnitString,
        salesUnit: selectedVariant.salesUnit,
        itemNumberPerSalesUnit:
          selectedVariant.itemNumberPerSalesUnit ?? prevState.itemNumberPerSalesUnit,
        totalPrice: convertNumToStr(
          (selectedVariant.price ?? 0) * (selectedVariant.itemNumberPerSalesUnit ?? 0) * q,
        ),
        quantity: q.toString(),
        selectedVariantId: selectedVariant.variantId,
        sellerOnly: selectedVariant.sellerOnly,
        activeCampaign: selectedVariant.activeCampaign,
        productUrl: `/Product/${selectedVariant.variantId}`,
        outOfStock: selectedVariant.outOfStock,
        isAccessoryPotItem: selectedVariant.isAccessoryPotItem,
        // Tags (Eko/Vegan/Fairtrade …) are product-level descriptors, so a variant that doesn't carry
        // its own inherits the original product's — they no longer vanish on variant switch. (Genuinely
        // per-SKU states above — outOfStock/sellerOnly/activeCampaign — stay variant-specific.)
        tags: selectedVariant.tags ?? product.tags,
      }
      onVariantChange?.(updatedProduct)
      return updatedProduct
    })
    setVariantsListOpen(false)
  }

  // Single narrow→rich resolution point: the pickers emit the narrow {@link ProductVariantListItem}
  // shape, so we look the chosen id back up in the rich `productVariantList` and hand the full variant
  // to `handlePackageChange`. Previously each child card re-implemented this lookup.
  function handleVariantSelect(variant: ProductVariantListItem | undefined) {
    const richVariant = variant
      ? myProduct.productVariantList?.find((item) => item.variantId === variant.variantId)
      : undefined
    if (richVariant) handlePackageChange(richVariant)
  }

  return {
    product: myProduct,
    variantsOpen: variantsListOpen,
    handleChangeQuantity,
    handleVariantsButtonClick,
    handleCloseVariants,
    handleVariantSelect,
  }
}
