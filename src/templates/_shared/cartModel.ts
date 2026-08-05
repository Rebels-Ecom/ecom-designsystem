/**
 * Shared checkout/cart state model for the Flow 1 templates (Storybook-only), reworked to match the real
 * Spendrups B2B checkout: the order summary is **Pris / Pant / Moms** (net price, deposit, VAT) with a
 * grand total, and the order is placed only after the terms checkbox is ticked (there is no coupon or
 * campaign box in the real cart). A small `useReducer` distilled from the app's `cartMachine` — actions
 * named for its real events; totals derived by {@link selectCartTotals}, never stored. Plain data + pure
 * functions so every checkout template can share it.
 */

import type { ProductCardProduct } from '../../components/organisms/ProductCard'

export interface CartLine {
  partNo: string
  productName: string
  /** Packaging label, e.g. "Ölglas 40cl". */
  packaging: string
  primaryImageUrl: string
  /** Per-piece list price (the "à" price). */
  pricePerUnit: number
  /** Pieces per sales unit (a "kolli"/tray). */
  itemNumberPerSalesUnit: number
  /** Sales-unit label, e.g. "st". */
  salesUnit: string
  /** Quantity in sales units. */
  quantity: number
  /** Deposit (pant) per sales unit, SEK. @default 0 */
  pant?: number
  /** Accessory-pot item — shows the orange "S" marker. */
  isAccessoryPotItem?: boolean
  /** Currently a favourite (filled heart). */
  isFavorite?: boolean
  /** Active campaign ribbon (title + optional brand colour). Mirrors the app's `getCampaignDetails`. */
  activeCampaign?: { title: string; color?: string }
  /** Out of stock — shows the ribbon (and, in the real cart, drives the stock alert). */
  outOfStock?: boolean
  /** Ribbon text when out of stock. @default 'Slut i lager' */
  outOfStockLabel?: string
  /** Stock shortage — only this many confirmed in stock; drives the "change product" alert. */
  stockShortage?: number
  /** Per-line loading skeleton (e.g. while the line is being replaced). */
  loading?: boolean
}

export interface CartState {
  lines: CartLine[]
  termsAccepted: boolean
  deliveryDate: string
  customOrderNo: string
  status: 'shopping' | 'submitting' | 'complete'
  /** Price visibility (the app's `cartData.ShowPrices` permission). @default true */
  showPrices: boolean
}

export type CartAction =
  | { type: 'ADD_TO_CART'; line: CartLine }
  | { type: 'UPDATE_CART'; partNo: string; quantity: number }
  | { type: 'REMOVE_FROM_CART'; partNo: string }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_FAVORITE'; partNo: string }
  | { type: 'REPLACE_LINE'; partNo: string; replacement: CartLine }
  | { type: 'ACCEPT_TERMS'; accepted: boolean }
  | { type: 'SET_DELIVERY_DATE'; date: string }
  | { type: 'ADD_CUSTOM_ORDER_NUMBER'; value: string }
  | { type: 'GO_TO_CHECKOUT' }

/** Swedish VAT rate used to derive the "Moms" line. */
export const VAT_RATE = 0.25

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.lines.find((l) => l.partNo === action.line.partNo)
      if (existing) {
        return cartReducer(state, {
          type: 'UPDATE_CART',
          partNo: action.line.partNo,
          quantity: existing.quantity + action.line.quantity,
        })
      }
      return { ...state, lines: [...state.lines, action.line] }
    }
    case 'UPDATE_CART':
      return {
        ...state,
        lines: state.lines
          .map((l) => (l.partNo === action.partNo ? { ...l, quantity: Math.max(0, action.quantity) } : l))
          .filter((l) => l.quantity > 0),
      }
    case 'REMOVE_FROM_CART':
      return { ...state, lines: state.lines.filter((l) => l.partNo !== action.partNo) }
    case 'CLEAR_CART':
      return { ...state, lines: [] }
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        lines: state.lines.map((l) =>
          l.partNo === action.partNo ? { ...l, isFavorite: !l.isFavorite } : l,
        ),
      }
    case 'REPLACE_LINE':
      // The "change product" flow: swap the shortage/out-of-stock line for its replacement in place,
      // clearing the stock flags (mirrors the app removing the old line and adding the replacement).
      return {
        ...state,
        lines: state.lines.map((l) => (l.partNo === action.partNo ? action.replacement : l)),
      }
    case 'ACCEPT_TERMS':
      return { ...state, termsAccepted: action.accepted }
    case 'SET_DELIVERY_DATE':
      return { ...state, deliveryDate: action.date }
    case 'ADD_CUSTOM_ORDER_NUMBER':
      return { ...state, customOrderNo: action.value }
    case 'GO_TO_CHECKOUT':
      return state.termsAccepted && state.lines.length > 0
        ? { ...state, status: 'complete' }
        : state
    default:
      return state
  }
}

/** Line total = per-piece price × pieces-per-sales-unit × quantity. */
export const lineTotal = (l: CartLine): number => l.pricePerUnit * l.itemNumberPerSalesUnit * l.quantity

export interface CartTotals {
  /** Net price (excl. deposit and VAT) — the "Pris" line. */
  pris: number
  /** Total deposit — the "Pant" line. */
  pant: number
  /** VAT — the "Moms" line. */
  moms: number
  /** Grand total shown beside the "Varukorg" heading. */
  total: number
  /** Number of distinct product lines ("Tillagda produkter"). */
  lineCount: number
}

export function selectCartTotals(state: CartState): CartTotals {
  const pris = state.lines.reduce((sum, l) => sum + lineTotal(l), 0)
  const pant = state.lines.reduce((sum, l) => sum + (l.pant ?? 0) * l.quantity, 0)
  const moms = pris * VAT_RATE
  return { pris, pant, moms, total: pris + pant + moms, lineCount: state.lines.length }
}

/** Swedish price format — comma decimal, 2 decimals (e.g. 438 → "438,00"). */
export const formatPrice = (n: number): string => n.toFixed(2).replace('.', ',')
/** Whole-krona format for headline totals (e.g. 922.75 → "923 kr"). */
export const formatKr = (n: number): string => `${Math.round(n)} kr`

// --- Shared ProductCard mapping (cart lines render as horizontal ProductCards in every Flow-1 template) --

/** Swedish `ProductCard` line labels shared by the checkout + mini-cart templates. */
export const productCardLineLabels = {
  quantity: 'Antal',
  pieces: 'st',
  priceSeparator: 'à',
  removeProduct: 'Ta bort produkt',
  addToFavorites: 'Spara som favorit',
  removeFromFavorites: 'Ta bort favorit',
  addToPurchaseList: 'Spara i inköpslista',
} as const

/**
 * Map a {@link CartLine} to the horizontal `ProductCard`'s product shape (Swedish price strings). Shared
 * so the checkout lines, the mini-cart lines and the toast's mini card all render from one mapping. Typed
 * against `ProductCardProduct` via a type-only import — no runtime coupling to the component.
 */
export function toProductCardProduct(line: CartLine): ProductCardProduct {
  return {
    partNo: line.partNo,
    productName: line.productName,
    productUrl: `/Product/${line.partNo}`,
    primaryImageUrl: line.primaryImageUrl,
    packaging: line.packaging,
    price: line.pricePerUnit,
    priceStr: formatPrice(line.pricePerUnit),
    pricePerUnit: line.pricePerUnit,
    pricePerUnitString: formatPrice(line.pricePerUnit),
    salesUnit: line.salesUnit,
    itemNumberPerSalesUnit: line.itemNumberPerSalesUnit,
    quantity: String(line.quantity),
    totalPrice: formatPrice(lineTotal(line)),
    productVariantList: [],
    isAccessoryPotItem: line.isAccessoryPotItem,
    activeCampaign: line.activeCampaign,
    campaignTitle: line.activeCampaign?.title,
    outOfStock: line.outOfStock,
    outOfStockLabel: line.outOfStock ? (line.outOfStockLabel ?? 'Slut i lager') : undefined,
    partNoLabel: 'Art.nr.',
    unitLabel: line.salesUnit,
    currencyLabel: 'kr',
    priceLabel: 'Pris',
    aLabel: 'à',
  }
}

// --- Fixtures (deterministic, Swedish; mirror the real checkout scenario) -------------------------

export const cartFixtureLines: CartLine[] = [
  {
    partNo: '4822656',
    productName: 'Blue Moon Glas',
    packaging: 'Ölglas 40cl',
    primaryImageUrl: '',
    pricePerUnit: 36.5,
    itemNumberPerSalesUnit: 6,
    salesUnit: 'st',
    quantity: 2,
    isAccessoryPotItem: true,
    isFavorite: true,
  },
  {
    partNo: '1105101',
    productName: 'Norrlands Guld Export',
    packaging: '33cl Engångsglas',
    primaryImageUrl: '',
    pricePerUnit: 8.99,
    itemNumberPerSalesUnit: 20,
    salesUnit: 'st',
    quantity: 1,
    pant: 20,
  },
  {
    partNo: '2078801',
    productName: 'Loka Naturell',
    packaging: '33cl Engångsglas',
    primaryImageUrl: '',
    pricePerUnit: 6.02,
    itemNumberPerSalesUnit: 20,
    salesUnit: 'st',
    quantity: 1,
    pant: 20,
  },
]

export const initialCartState: CartState = {
  lines: cartFixtureLines,
  termsAccepted: false,
  deliveryDate: '2026-07-31',
  customOrderNo: '',
  status: 'shopping',
  showPrices: true,
}
