/** Deterministic "you might also want" recommendations for the {@link CartRecommendations} stories. */

import type { CartLine } from '../_shared/cartModel'

export const recommendationFixtures: CartLine[] = [
  {
    partNo: '4827616',
    productName: 'Lantchips Gräddfil',
    packaging: 'Chips 40g',
    primaryImageUrl: '',
    pricePerUnit: 7.9,
    itemNumberPerSalesUnit: 20,
    salesUnit: 'st',
    quantity: 1,
  },
  {
    partNo: '3011201',
    productName: 'Coca-Cola Zero',
    packaging: '33cl Burk',
    primaryImageUrl: '',
    pricePerUnit: 6.5,
    itemNumberPerSalesUnit: 20,
    salesUnit: 'st',
    quantity: 1,
    pant: 20,
  },
  {
    partNo: '5567012',
    productName: 'Ramlösa Citron',
    packaging: '33cl Glas',
    primaryImageUrl: '',
    pricePerUnit: 9.25,
    itemNumberPerSalesUnit: 24,
    salesUnit: 'st',
    quantity: 1,
    pant: 24,
  },
  {
    partNo: '6690341',
    productName: 'Zeunerts Julmust',
    packaging: '33cl Burk',
    primaryImageUrl: '',
    pricePerUnit: 8.4,
    itemNumberPerSalesUnit: 24,
    salesUnit: 'st',
    quantity: 1,
    pant: 24,
  },
]
