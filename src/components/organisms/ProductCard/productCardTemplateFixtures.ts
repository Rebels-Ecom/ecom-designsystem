import placeholderImage from '../../../assets/placeholders/defaultFallbackImage.svg';
import {
  dummyBeerProduct,
  dummyProductNoVariants,
  dummyWineProduct,
} from './productCardFixtures';
import type { ProductCardProduct, ProductCardVariant } from './types';

/**
 * Story-only fixtures for the ProductCard **Templates** (not part of the public API). Each product is
 * shaped exactly like the objects the consuming app (`spendrups-frontendapp`) feeds its cards — i.e.
 * the output of `productCardFactory` (category / content / brand / search listings) and
 * `productFromCartItemFactory` (cart / checkout / order / return / favourites / purchase-list lines),
 * with the i18next-filled Swedish `*Label` fields and the campaign already resolved to `{ title, color }`
 * the way `getCampaignDetails` does at the call site.
 *
 * **Deterministic images:** every `primaryImageUrl` is empty so the card renders the bundled fallback
 * illustration (via {@link Picture}), and each variant thumbnail points at that same bundled placeholder
 * — no network, so the templates look identical run-to-run and offline. (The real app supplies genuine
 * image URLs; the layout and behaviour are what these templates reproduce.)
 */

const thumb = (id: string) => ({ id, src: placeholderImage, sources: [] });

/** Swedish listing labels — mirrors the i18next keys `productCardFactory` fills in. */
const listingLabels = {
  partNoLabel: 'Art.nr.',
  unitLabel: 'st',
  currencyLabel: 'kr',
  priceLabel: 'Pris',
  aLabel: 'à',
} satisfies Partial<ProductCardProduct>;

// --- Listing products (category / content / brand / search grids) ---------------------------------

const mariestadsVariants: ProductCardVariant[] = [
  {
    productName: 'Mariestads Export',
    variantName: '33cl Burk',
    variantId: '8801201',
    priceStr: '11,90',
    country: 'Sverige',
    price: 11.9,
    pricePerUnit: 11.9,
    pricePerUnitString: '11,90',
    salesUnit: 'KLI',
    itemNumberPerSalesUnit: 24,
    sellerOnly: false,
    image: thumb('variant-8801201'),
  },
  {
    productName: 'Mariestads Export',
    variantName: '50cl Burk',
    variantId: '8801205',
    priceStr: '15,90',
    country: 'Sverige',
    price: 15.9,
    pricePerUnit: 15.9,
    pricePerUnitString: '15,90',
    salesUnit: 'KLI',
    itemNumberPerSalesUnit: 20,
    sellerOnly: false,
    image: thumb('variant-8801205'),
  },
];

/** Campaign product — a coloured ribbon (`activeCampaign` already resolved), plus an "Eko" tag. */
export const templateCampaignProduct: ProductCardProduct = {
  partNo: '8801201',
  productName: 'Mariestads Export',
  productUrl: '/Product/8801201',
  primaryImageUrl: '',
  country: 'Sverige',
  packaging: '33cl Burk',
  price: 11.9,
  priceStr: '11,90',
  pricePerUnit: 11.9,
  pricePerUnitString: '11,90',
  salesUnit: 'KLI',
  itemNumberPerSalesUnit: 24,
  quantity: '1',
  activeCampaign: { title: 'Kampanj', color: '#9a576f' },
  campaignTitle: 'Kampanj',
  tags: [{ text: 'Eko', color: 'green', shape: 'pill', size: 'md' }],
  productVariantList: mariestadsVariants,
  ...listingLabels,
};

/** Seller-only + accessory-pot markers, and a "Nyhet" tag — exercises the whole markers row. */
export const templateMarkersProduct: ProductCardProduct = {
  partNo: '7702105',
  productName: 'Briska Päron',
  productUrl: '/Product/7702105',
  primaryImageUrl: '',
  country: 'Sverige',
  packaging: '33cl Burk',
  price: 16.9,
  priceStr: '16,90',
  pricePerUnit: 16.9,
  pricePerUnitString: '16,90',
  salesUnit: 'KLI',
  itemNumberPerSalesUnit: 24,
  quantity: '1',
  sellerOnly: true,
  isAccessoryPotItem: true,
  tags: [{ text: 'Nyhet', color: 'purple', shape: 'pill', size: 'md' }],
  productVariantList: [
    {
      productName: 'Briska Päron',
      variantName: '33cl Burk',
      variantId: '7702105',
      priceStr: '16,90',
      country: 'Sverige',
      price: 16.9,
      pricePerUnit: 16.9,
      pricePerUnitString: '16,90',
      salesUnit: 'KLI',
      itemNumberPerSalesUnit: 24,
      sellerOnly: true,
      image: thumb('variant-7702105'),
    },
    {
      productName: 'Briska Päron',
      variantName: '4-pack 33cl Burk',
      variantId: '7702109',
      priceStr: '67,60',
      country: 'Sverige',
      price: 67.6,
      pricePerUnit: 16.9,
      pricePerUnitString: '16,90',
      salesUnit: 'FP',
      itemNumberPerSalesUnit: 4,
      sellerOnly: false,
      image: thumb('variant-7702109'),
    },
  ],
  ...listingLabels,
};

/** Out-of-stock — a grey "Slut i lager" ribbon (never the legacy white-on-orange). */
export const templateOutOfStockProduct: ProductCardProduct = {
  partNo: '4409301',
  productName: 'Explorer Vodka',
  productUrl: '/Product/4409301',
  primaryImageUrl: '',
  country: 'Sverige',
  packaging: '70cl Flaska',
  price: 289,
  priceStr: '289',
  pricePerUnit: 289,
  pricePerUnitString: '289',
  salesUnit: 'ST',
  itemNumberPerSalesUnit: 1,
  quantity: '1',
  outOfStock: true,
  outOfStockLabel: 'Slut i lager',
  tags: [],
  productVariantList: [
    {
      productName: 'Explorer Vodka',
      variantName: '70cl Flaska',
      variantId: '4409301',
      priceStr: '289',
      country: 'Sverige',
      price: 289,
      pricePerUnit: 289,
      pricePerUnitString: '289',
      salesUnit: 'ST',
      itemNumberPerSalesUnit: 1,
      sellerOnly: false,
      image: thumb('variant-4409301'),
    },
  ],
  ...listingLabels,
};

/** Limited product — a grey "Begränsat parti" ribbon. */
export const templateLimitedProduct: ProductCardProduct = {
  partNo: '3312077',
  productName: 'Nils Oscar Barrique',
  productUrl: '/Product/3312077',
  primaryImageUrl: '',
  country: 'Sverige',
  packaging: '33cl Flaska',
  price: 42.9,
  priceStr: '42,90',
  pricePerUnit: 42.9,
  pricePerUnitString: '42,90',
  salesUnit: 'ST',
  itemNumberPerSalesUnit: 1,
  quantity: '1',
  isLimitedProduct: true,
  limitedLabel: 'Begränsat parti',
  tags: [],
  productVariantList: [
    {
      productName: 'Nils Oscar Barrique',
      variantName: '33cl Flaska',
      variantId: '3312077',
      priceStr: '42,90',
      country: 'Sverige',
      price: 42.9,
      pricePerUnit: 42.9,
      pricePerUnitString: '42,90',
      salesUnit: 'ST',
      itemNumberPerSalesUnit: 1,
      sellerOnly: false,
      image: thumb('variant-3312077'),
    },
    {
      productName: 'Nils Oscar Barrique',
      variantName: '6-pack 33cl',
      variantId: '3312079',
      priceStr: '257,40',
      country: 'Sverige',
      price: 257.4,
      pricePerUnit: 42.9,
      pricePerUnitString: '42,90',
      salesUnit: 'FP',
      itemNumberPerSalesUnit: 6,
      sellerOnly: false,
      image: thumb('variant-3312079'),
    },
  ],
  ...listingLabels,
};

/**
 * A realistic listing grid: the two shared dummies (wine with Eko/Fairtrade/Vegan tags + a seller-only
 * variant, beer with a "Nyhet" tag) plus the campaign, marker, out-of-stock and limited products above.
 * Mirrors what `CategoryProductList` maps from `productsToDisplay`.
 */
export const templateCatalogProducts: ProductCardProduct[] = [
  dummyWineProduct,
  templateCampaignProduct,
  dummyBeerProduct,
  templateMarkersProduct,
  templateLimitedProduct,
  templateOutOfStockProduct,
];

// --- Line products (cart / checkout / order / return / favourites / purchase-list) ----------------

/**
 * Cart/checkout line shape (`productFromCartItemFactory`): a chosen quantity, `unitLabel` set to the
 * sales unit, and the campaign resolved. `totalPrice` is recomputed by the dispatcher from
 * `pricePerUnit × itemNumberPerSalesUnit × quantity`, so these values drive the visible line total.
 *
 * **No variant list.** `productFromCartItemFactory` never populates `productVariantList` (it keeps the
 * base Record default `[]`), so cart-family lines carry an empty list. The horizontal card only shows
 * its variant-switch button when `productVariantList.length > 1`, so leaving it empty is exactly how the
 * app suppresses variant switching in the cart — you don't re-pick a packaging on an existing line.
 */
export const templateCartLines: ProductCardProduct[] = [
  {
    partNo: '1125111',
    productName: 'Norrlands Guld',
    productUrl: '/Product/1125111',
    primaryImageUrl: '',
    country: 'Sverige',
    packaging: '33cl Burk',
    price: 285.6,
    priceStr: '285,60',
    pricePerUnit: 11.9,
    pricePerUnitString: '11,90',
    salesUnit: 'KLI',
    itemNumberPerSalesUnit: 24,
    quantity: '2',
    totalPrice: '571,20',
    tags: [{ text: 'Nyhet', color: 'purple', shape: 'pill', size: 'md' }],
    productVariantList: [],
    partNoLabel: 'Art.nr.',
    unitLabel: 'KLI',
    currencyLabel: 'kr',
    priceLabel: 'Pris',
    aLabel: 'à',
  },
  {
    partNo: '2311204',
    productName: 'Loka Citron',
    productUrl: '/Product/2311204',
    primaryImageUrl: '',
    country: 'Sverige',
    packaging: '33cl PET',
    price: 130,
    priceStr: '130,00',
    pricePerUnit: 6.5,
    pricePerUnitString: '6,50',
    salesUnit: 'KLI',
    itemNumberPerSalesUnit: 20,
    quantity: '1',
    totalPrice: '130,00',
    tags: [],
    productVariantList: [],
    partNoLabel: 'Art.nr.',
    unitLabel: 'KLI',
    currencyLabel: 'kr',
    priceLabel: 'Pris',
    aLabel: 'à',
  },
  {
    partNo: '2543814',
    productName: 'El Esteco Malbec',
    productUrl: '/Product/2543814',
    primaryImageUrl: '',
    country: 'Argentina',
    packaging: '75cl Kolli',
    price: 816,
    priceStr: '816,00',
    pricePerUnit: 136,
    pricePerUnitString: '136,00',
    salesUnit: 'KLI',
    itemNumberPerSalesUnit: 6,
    quantity: '1',
    totalPrice: '816,00',
    tags: [
      { text: 'Eko', color: 'green', shape: 'pill', size: 'md' },
      { text: 'Vegan', color: 'purple', shape: 'pill', size: 'md' },
    ],
    productVariantList: [],
    partNoLabel: 'Art.nr.',
    unitLabel: 'KLI',
    currencyLabel: 'kr',
    priceLabel: 'Pris',
    aLabel: 'à',
  },
];

/** A single checkout line carrying a resolved campaign ribbon (the checkout cart's `getCampaignDetails`). */
export const templateCheckoutCampaignLine: ProductCardProduct = {
  ...templateCartLines[0],
  activeCampaign: { title: 'Kampanj', color: '#9a576f' },
  campaignTitle: 'Kampanj',
};

/**
 * An order-history line: an already-ordered quantity plus the `à`-price meta. Order details lets the
 * quantity go negative (returns/credits) via `allowNegative`.
 */
export const templateOrderLine: ProductCardProduct = {
  ...templateCartLines[2],
  quantity: '3',
  totalPrice: '2 448,00',
};

/** Re-export the single-variant beer so the loading skeletons match the app's dummy shape. */
export { dummyProductNoVariants };
