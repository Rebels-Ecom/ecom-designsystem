import placeholderImage from '../../../assets/placeholders/defaultFallbackImage.svg';
import type { ProductCardVariant, ResolvedProductCardProduct } from './types';

/**
 * Story-only fixtures for the ProductCard family (not part of the public API). Mirror the legacy
 * `dummy-product.ts` products (El Esteco Malbec, Norrlands Guld) in the V2 `ProductCardProduct` shape,
 * with the translation labels filled in so the Visual stories render clean, representative frames (the
 * legacy story mappers left them undefined, printing "undefined:" in the price line).
 *
 * **Deterministic images:** `primaryImageUrl` is left empty so the card renders the bundled local
 * fallback illustration (via {@link Picture}), and each variant thumbnail points at that same bundled
 * placeholder — no network request, so frames look identical run-to-run and offline, and the variant
 * picker shows a clean placeholder rather than a broken-image glyph. (The real app supplies genuine
 * image URLs.)
 */

const wineVariants: ProductCardVariant[] = [
  {
    productName: 'El Esteco Malbec',
    variantName: '75cl Engångsglas',
    variantId: '2543824',
    priceStr: '136',
    country: 'Argentina',
    price: 136,
    pricePerUnit: 136,
    pricePerUnitString: '136',
    salesUnit: 'ST',
    itemNumberPerSalesUnit: 1,
    sellerOnly: true,
    image: { id: 'variant-2543824', src: placeholderImage, sources: [] },
  },
  {
    productName: 'El Esteco Malbec',
    variantName: '75cl Kolli',
    variantId: '2543814',
    priceStr: '136',
    country: 'Argentina',
    price: 136,
    pricePerUnit: 136,
    pricePerUnitString: '136',
    salesUnit: 'KLI',
    itemNumberPerSalesUnit: 6,
    sellerOnly: false,
    image: { id: 'variant-2543814', src: placeholderImage, sources: [] },
  },
];

export const dummyWineProduct: ResolvedProductCardProduct = {
  partNo: '2543824',
  productName: 'El Esteco Malbec',
  productUrl: '/Product/2543824',
  primaryImageUrl: '',
  country: 'Argentina',
  packaging: '75cl Engångsglas',
  price: 136,
  priceStr: '136',
  pricePerUnit: 136,
  pricePerUnitString: '136',
  salesUnit: 'ST',
  itemNumberPerSalesUnit: 1,
  quantity: '1',
  totalPrice: '136,00',
  tags: [
    { text: 'Eko', color: 'green', shape: 'pill', size: 'md' },
    { text: 'Fairtrade', color: 'blue', shape: 'pill', size: 'md' },
    { text: 'Vegan', color: 'purple', shape: 'pill', size: 'md' },
  ],
  productVariantList: wineVariants,
  partNoLabel: 'Art.nr.',
  unitLabel: 'st',
  currencyLabel: 'kr',
  priceLabel: 'Pris',
  aLabel: 'à',
};

export const dummyProductNoVariants: ResolvedProductCardProduct = {
  partNo: '1105101',
  productName: 'Norrlands Guld Export 5,3',
  productUrl: '/Product/1105101',
  primaryImageUrl: '',
  country: 'Sverige',
  packaging: '50cl Returglas',
  price: 22.677,
  priceStr: '22,68',
  pricePerUnit: 22.677,
  pricePerUnitString: '22,68',
  salesUnit: 'KLI',
  itemNumberPerSalesUnit: 15,
  quantity: '1',
  totalPrice: '340,16',
  tags: [],
  productVariantList: [
    {
      productName: 'Norrlands Guld Export 5,3',
      variantName: '50cl Returglas',
      variantId: '1105101',
      priceStr: '22,68',
      country: 'Sverige',
      price: 22.677,
      pricePerUnit: 22.677,
      pricePerUnitString: '22,68',
      salesUnit: 'KLI',
      itemNumberPerSalesUnit: 15,
      sellerOnly: false,
      image: { id: 'variant-1105101', src: placeholderImage, sources: [] },
    },
  ],
  partNoLabel: 'Art.nr.',
  unitLabel: 'kolli',
  currencyLabel: 'kr',
  priceLabel: 'Pris',
  aLabel: 'à',
};

export const dummyBeerProduct: ResolvedProductCardProduct = {
  partNo: '1125111',
  productName: 'Norrlands Guld',
  productUrl: '/Product/1125111',
  primaryImageUrl: '',
  country: 'Sweden',
  packaging: '33cl Engångsglas',
  price: 1,
  priceStr: '1',
  pricePerUnit: 1,
  pricePerUnitString: '1',
  salesUnit: 'st',
  itemNumberPerSalesUnit: 1,
  quantity: '1',
  totalPrice: '1,00',
  tags: [{ text: 'Nyhet', color: 'purple', shape: 'pill', size: 'md' }],
  productVariantList: [
    {
      productName: 'Norrlands Guld',
      variantName: '33cl Engångsglas',
      variantId: '1125111',
      priceStr: '1',
      country: 'Sweden',
      price: 1,
      pricePerUnit: 1,
      pricePerUnitString: '1',
      salesUnit: 'st',
      itemNumberPerSalesUnit: 24,
      sellerOnly: false,
      image: { id: 'variant-1125111', src: placeholderImage, sources: [] },
    },
    {
      productName: 'Norrlands Guld',
      variantName: '30l FAT',
      variantId: '1125141',
      priceStr: '1',
      country: 'Sweden',
      price: 1,
      pricePerUnit: 1,
      pricePerUnitString: '1',
      salesUnit: 'Kolli',
      itemNumberPerSalesUnit: 1,
      sellerOnly: false,
      image: { id: 'variant-1125141', src: placeholderImage, sources: [] },
    },
  ],
  partNoLabel: 'Art.nr.',
  unitLabel: 'kolli',
  currencyLabel: 'kr',
  priceLabel: 'Pris',
  aLabel: 'à',
};
