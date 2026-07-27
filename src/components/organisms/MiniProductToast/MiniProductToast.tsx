import type { Ref } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../../lib/cn'
import { useBreakpoint } from '../../atoms/Breakpoints'
import { Loader } from '../../atoms/Loader'
import { IconButton } from '../../molecules/IconButton'
import { ProductCardMini, type ProductCardMiniProduct } from '../ProductCardMini'
import type { ProductCardImagePriority } from '../ProductCard/types'

/** A cart line the toast can surface — just the product it wraps. */
export interface MiniProductToastCartItem {
  /** The product summarised by the mini card. */
  product: ProductCardMiniProduct
}

/** Cart-shortcut button descriptor. */
export interface MiniProductToastNotification {
  /** Current cart line-count — shown on the badge and folded into the button's accessible name. */
  quantity: number
  /** Fires when the cart button is activated (e.g. navigate to the cart). */
  onClick: (data?: unknown) => void
}

export interface MiniProductToastLabels {
  /** Accessible name for the cart-shortcut button — receives the current item count. @default `View cart, {quantity} items` */
  cart: (quantity: number) => string
}

export const defaultMiniProductToastLabels: MiniProductToastLabels = {
  cart: (quantity) => `View cart, ${quantity} items`,
}

export interface MiniProductToastProps {
  /** Cart lines; the toast surfaces the **last** one as a {@link ProductCardMini}. @default [] */
  cartProducts?: MiniProductToastCartItem[]
  /** Whether the toast is slid in (on-screen) or slid away (off-screen and inert). */
  open: boolean
  /** Reflect a pending cart update — shows a spinner and disables the cart-shortcut button. @default false */
  loading?: boolean
  /** Optional cart-shortcut button with a live item-count badge. */
  notification?: MiniProductToastNotification
  /** Native `<img>` priority hints forwarded to the mini card's `Picture`. */
  imagePriority?: ProductCardImagePriority
  /** Image URL swapped in when the product image is missing or broken. */
  fallbackImageUrl?: string
  /** Overridable UI strings (English defaults) — see {@link MiniProductToastLabels}. */
  labels?: Partial<MiniProductToastLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root status container. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Mini "added to cart" toast (organism) — a fixed panel that slides in from the top (mobile) or the
 * right (desktop) showing the **last** cart line as a {@link ProductCardMini}, above an optional
 * cart-shortcut {@link IconButton} with a live badge and a busy {@link Loader}.
 *
 * Accessibility: the panel is a polite live region (`role="status"` / `aria-live="polite"`, 4.1.3) so a
 * cart addition is announced without stealing focus — it is deliberately **non-modal** (no focus trap,
 * no focus move-in). While closed it is slid off-screen **and `inert`** (React 19), which removes it from
 * the tab order and the accessibility tree — so the off-screen cart button can't be tabbed into (the
 * legacy toast left it focusable) and stale content isn't announced; opening drops `inert` and the new
 * product is announced. The cart button's count is folded into its accessible name via `labels.cart`
 * (the badge is decorative). The slide-in collapses to an instant appearance under
 * `prefers-reduced-motion` (2.3.3†), so a throttled tab never leaves it stuck mid-transition.
 */
function MiniProductToast({
  cartProducts = [],
  open,
  loading = false,
  notification,
  imagePriority,
  fallbackImageUrl,
  labels,
  className,
  ref,
}: MiniProductToastProps) {
  const t = { ...defaultMiniProductToastLabels, ...labels }
  const { isMobile } = useBreakpoint()
  const reduceMotion = useReducedMotion()

  const productToShow = cartProducts[cartProducts.length - 1]
  const showNotification = Boolean(notification)
  const offscreen = isMobile ? { y: '-100%' } : { x: '110%' }
  const resting = isMobile ? { y: open ? 0 : '-100%' } : { x: open ? 0 : '110%' }

  return (
    <motion.div
      ref={ref}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      initial={reduceMotion ? false : offscreen}
      animate={resting}
      transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeIn' }}
      className={cn(
        'fixed inset-x-0 top-0 z-modal box-border flex flex-col gap-2 bg-white shadow-lg md:left-auto md:pb-6',
        className,
      )}
    >
      {/* Off-screen while closed → out of the tab order and the a11y tree (React 19 `inert`). */}
      <div inert={!open} className="flex flex-col gap-2">
        {(showNotification || loading) && (
          <div className="flex items-center justify-between border-b border-border-grey px-4 py-2">
            {notification && (
              <IconButton
                type="button"
                icon="icon-shopping-cart"
                label={t.cart(notification.quantity)}
                notification={notification.quantity}
                size="medium"
                noBorder
                isTransparent
                onClick={notification.onClick}
                disabled={loading}
              />
            )}
            {loading && <Loader visible position="relative" size="xs" />}
          </div>
        )}

        {productToShow?.product && (
          <ProductCardMini
            product={productToShow.product}
            imagePriority={imagePriority}
            fallbackImageUrl={fallbackImageUrl}
          />
        )}
      </div>
    </motion.div>
  )
}

export { MiniProductToast }
