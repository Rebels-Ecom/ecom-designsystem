/**
 * Fixtures for the {@link MiniCartDrawer} stories. The cart lines + reducer come from the shared
 * `_shared/cartModel` (the same model the CheckoutPage uses); this only adds the extras the mini-cart
 * stories need: the `partNo`s seeded as favourites and an "addable" product the harness can drop into the
 * cart to demo the `ADD_TO_CART` → toast flow.
 */

import { cartFixtureLines, type CartLine } from '../_shared/cartModel'

export { cartFixtureLines }

/** `partNo`s that start marked as favourites (the first fixture line). */
export const favoriteIds: string[] = cartFixtureLines
  .filter((line) => line.isFavorite)
  .map((line) => line.partNo)

/** A product not already in the cart — used by the harness to demo `ADD_TO_CART` + the toast. */
export const addableProduct: CartLine = {
  partNo: '9931002',
  productName: 'Mariestads Export',
  packaging: '50cl Burk',
  primaryImageUrl: '',
  pricePerUnit: 12.5,
  itemNumberPerSalesUnit: 24,
  salesUnit: 'st',
  quantity: 1,
  pant: 24,
}
