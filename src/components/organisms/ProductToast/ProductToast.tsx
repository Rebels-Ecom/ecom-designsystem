import { useEffect, useRef } from 'react'
import type { ReactNode, Ref } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../../lib/cn'
import { mergeRefs } from '../../../lib/mergeRefs'
import { CartProduct, type CartProductItem } from '../CartProduct'
import { IconButton } from '../../molecules/IconButton'

export type ProductToastPosition = 'top-left' | 'top-right'

export interface ProductToastNotification {
  /** Current cart line-count — shown on the cart button's badge and folded into its accessible name. */
  quantity: number
  /** Fires when the cart button is activated (e.g. navigate to the cart). */
  onClick: () => void
}

export interface ProductToastLabels {
  /** Accessible name for the close button. @default 'Close' */
  close: string
  /** Accessible name for the cart button — receives the current item count. @default `View cart, {quantity} items` */
  cart: (quantity: number) => string
}

export const defaultProductToastLabels: ProductToastLabels = {
  close: 'Close',
  cart: (quantity) => `View cart, ${quantity} items`,
}

export interface ProductToastProps {
  /** The product that was added to the cart — rendered as a price-less {@link CartProduct} row. */
  product: CartProductItem
  /**
   * Confirmation message shown centered above the product (e.g. "Added to cart"). This is
   * consumer-supplied content, so it is not part of `labels`; it is announced via the status region.
   */
  label?: string
  /** Viewport corner the toast is pinned to and slides in from. @default 'top-left' */
  position?: ProductToastPosition
  /**
   * Called when the toast requests to close — the close button, `Escape`, or an outside pointer
   * press. When omitted, no close affordances render (a purely informational toast).
   */
  onClose?: () => void
  /** Optional cart-shortcut button with a live item-count badge. */
  notification?: ProductToastNotification
  /** Reflect the product's pending state — swaps the row for a spinner and disables the cart button. @default false */
  loading?: boolean
  /** Image URL swapped in when the product image is missing or broken — forwarded to {@link CartProduct}. */
  fallbackImageUrl?: string
  /** Heading above the recommended-products slot (e.g. "You might also like"). Consumer-supplied content. */
  recommendedProductsTitle?: string
  /**
   * Recommended-products slot, rendered after a divider. Supply your own product cards here — the
   * toast imposes no recommended-product model, keeping it free of unmigrated dependencies.
   */
  children?: ReactNode
  /** Overridable UI strings (English defaults) — see {@link ProductToastLabels}. */
  labels?: Partial<ProductToastLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root status container. */
  ref?: Ref<HTMLDivElement>
}

const positionClasses: Record<ProductToastPosition, string> = {
  'top-left': 'left-0 top-0',
  'top-right': 'right-0 top-0',
}

/**
 * "Added to cart" confirmation toast (organism) — a fixed, side-pinned panel that slides in with the
 * added {@link CartProduct} row, an optional cart-shortcut {@link IconButton}, and an optional
 * recommended-products slot below a divider.
 *
 * Accessibility: the panel is a polite live region (`role="status"` / `aria-live="polite"`, 4.1.3) so
 * the confirmation and product are announced without stealing focus — it is deliberately **non-modal**
 * (no `aria-modal`, no focus trap, no focus move-in), because a passive confirmation must not cage the
 * keyboard; {@link DrawerSidebar} is the modal counterpart. It is still dismissible: a visible close
 * button (named via `labels.close`, shown on every breakpoint unlike the legacy which hid it on
 * desktop), `Escape`, or an outside pointer press all call `onClose`. The cart button's count is folded
 * into its accessible name via `labels.cart` (the badge itself is decorative). The slide-in collapses
 * to an instant appearance under `prefers-reduced-motion` (2.3.3†). The consumer owns mount/unmount
 * (wrap in Framer's `AnimatePresence` for an exit animation) and any auto-dismiss timer (2.2.1).
 */
function ProductToast({
  product,
  label,
  position = 'top-left',
  onClose,
  notification,
  loading = false,
  fallbackImageUrl,
  recommendedProductsTitle,
  children,
  labels,
  className,
  ref,
}: ProductToastProps) {
  const t = { ...defaultProductToastLabels, ...labels }
  const reduceMotion = useReducedMotion()
  const rootRef = useRef<HTMLDivElement>(null)
  const showClose = Boolean(onClose)
  const hasRecommended = Boolean(recommendedProductsTitle) || Boolean(children)

  // Non-modal dismissal: an outside pointer press or `Escape` closes the toast. It never traps or
  // moves focus — a polite status notification must not cage the keyboard. Wired only when closable.
  useEffect(() => {
    if (!onClose) return
    const handlePointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <motion.div
      ref={mergeRefs<HTMLDivElement>(rootRef, ref)}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      initial={reduceMotion ? false : { x: position === 'top-left' ? '-100%' : '100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'tween', duration: reduceMotion ? 0 : 0.2 }}
      className={cn('fixed z-modal h-full', positionClasses[position], className)}
    >
      <div className="flex h-full w-11/12 flex-col overflow-y-auto bg-surface-default p-4 shadow-lg lg:w-155">
        {(showClose || Boolean(notification)) && (
          <div
            className={cn(
              'flex items-center',
              notification && showClose ? 'justify-between' : 'justify-end',
            )}
          >
            {notification && (
              <IconButton
                type="button"
                icon="icon-shopping-cart"
                label={t.cart(notification.quantity)}
                notification={notification.quantity}
                size="medium"
                onClick={notification.onClick}
                disabled={loading}
              />
            )}
            {showClose && (
              <IconButton
                type="button"
                icon="icon-x"
                label={t.close}
                size="large"
                isTransparent
                noBorder
                onClick={onClose}
              />
            )}
          </div>
        )}

        {label && (
          <p className="mb-2 border-b border-border-grey pb-2 text-center font-bold text-text-default">
            {label}
          </p>
        )}

        <CartProduct
          product={product}
          hidePrice
          loading={loading}
          fallbackImageUrl={fallbackImageUrl}
        />

        {hasRecommended && (
          <>
            <hr className="my-3 h-px border-0 bg-border-grey" />
            {recommendedProductsTitle && (
              <p className="mb-2 font-bold text-text-default">{recommendedProductsTitle}</p>
            )}
            {children}
          </>
        )}
      </div>
    </motion.div>
  )
}

export { ProductToast }
