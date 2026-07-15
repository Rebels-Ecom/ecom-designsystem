import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { ProductDetails } from './ProductDetails'
import type { ProductDetailsProps, ProductDetailsVariant } from './ProductDetails'
import beerGlass from '../../../assets/product-images/beer-glass.jpg'
import fallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg'

// Swedish decimal formatting to match the real product page (463.2 → "463,20").
const sek = (value: number) => value.toFixed(2).replace('.', ',')

// Full per-variant product data. The demo wrapper swaps these in on selection — exactly what a real
// product page does when it reacts to `onPackageChange` — so the variant picker visibly updates the
// packaging, per-unit price and package price.
const variantProducts = [
  { variantId: '1139201', variantName: '50cl Returglas', priceStr: '30,88', price: 30.88, packagePriceString: '463,20', itemNumberPerSalesUnit: 15 },
  { variantId: '1139202', variantName: '33cl Burk', priceStr: '11,50', price: 11.5, packagePriceString: '276,00', itemNumberPerSalesUnit: 24 },
]

const beerVariants: ProductDetailsVariant[] = variantProducts.map(({ variantId, variantName, priceStr }) => ({
  variantId,
  variantName,
  priceStr,
  imageUrl: beerGlass,
}))

const beerArgs: ProductDetailsProps = {
  partNo: '1139201',
  productName: 'Mariestads Old Ox 6,9',
  primaryImageUrl: beerGlass,
  fallbackImageUrl: fallbackImage,
  packaging: '50cl Returglas',
  price: 30.88,
  priceStr: '30,88',
  packagePriceString: '463,20',
  salesUnit: 'Kolli',
  itemNumberPerSalesUnit: 15,
  productVariantList: beerVariants,
  productDetail: {
    visibleSpecs: [
      { name: 'Producent', value: 'Spendrups Bryggeri' },
      { name: 'Land', value: 'Sverige' },
      { name: 'Alkoholhalt', value: '6.9 %' },
      { name: 'Typ', value: 'Ljus Lager' },
    ],
    loaderValues: [
      { name: 'Beska', value: '4', color: 'orange' },
      { name: 'Sötma', value: '3', color: 'orange' },
      { name: 'Fyllighet', value: '5', color: 'orange' },
    ],
  },
  productDescription:
    'Mariestads Old Ox är en nygammal bekant i Mariestadssortimentet. Den är av bockölstyp och introducerades redan 1957, för att bli Mariestads flaggskepp på 60-talet. Old Ox har en kraftfull, balanserad maltighet och en utsökt balans mellan beska och sötma.',
  packagePerPalletText: 'Det går 45 kolli på 1 pall',
  formatPrice: sek,
  addToCart: fn(),
}

const wineArgs: ProductDetailsProps = {
  ...beerArgs,
  partNo: '201',
  productName: 'Rioja Reserva 2019',
  packaging: '6 x 75cl flaska',
  price: 89,
  priceStr: '89,00',
  packagePriceString: '534,00',
  itemNumberPerSalesUnit: 6,
  productVariantList: [{ variantId: '201', variantName: '6 x 75cl flaska', priceStr: '89,00', imageUrl: beerGlass }],
  productDetail: {
    visibleSpecs: [
      { name: 'Land', value: 'Spanien' },
      { name: 'Alkoholhalt', value: '13,5 %' },
    ],
    loaderValues: [
      { name: 'Fyllighet', value: '7', color: 'purple' },
      { name: 'Fruktsyra', value: '5', color: 'purple' },
    ],
  },
  productDescription: 'Kryddig och bärig med inslag av vanilj och ek.',
  packagePerPalletText: undefined,
}

/**
 * Wires variant selection to the displayed product — mirrors the parent page reacting to
 * `onPackageChange` by swapping in the new variant's packaging + prices.
 */
function ProductDetailsDemo(props: ProductDetailsProps) {
  const [variantId, setVariantId] = useState(props.partNo)
  const current = variantProducts.find((v) => v.variantId === variantId) ?? variantProducts[0]
  return (
    <ProductDetails
      {...props}
      partNo={current.variantId}
      packaging={current.variantName}
      priceStr={current.priceStr}
      price={current.price}
      packagePriceString={current.packagePriceString}
      itemNumberPerSalesUnit={current.itemNumberPerSalesUnit}
      productVariantList={beerVariants}
      onPackageChange={(id) => {
        setVariantId(id)
        props.onPackageChange?.(id)
      }}
    />
  )
}

const meta = {
  title: 'Design System/Organisms/ProductDetails',
  component: ProductDetails,
  parameters: { layout: 'padded' },
  args: beerArgs,
} satisfies Meta<typeof ProductDetails>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical: image + taste meters on one side, product info and buy actions on the other. */
export const Default: Story = {
  args: { addToCart: fn() },
  render: (args) => <ProductDetailsDemo {...args} />,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    // The panel is a region named by the product.
    await expect(canvas.getByRole('article', { name: 'Mariestads Old Ox 6,9' })).toBeInTheDocument()
    // The quantity control is always shown (defaults to 1).
    await expect(canvas.getByRole('spinbutton', { name: 'Quantity' })).toHaveValue(1)
    // Adding to cart reports the current selection.
    await userEvent.click(canvas.getByRole('button', { name: 'Add to cart' }))
    await expect(args.addToCart).toHaveBeenCalledWith(
      expect.objectContaining({ partNo: '1139201', quantity: 1 }),
    )
  },
}

/** The packaging button opens the variant picker; choosing a variant reports it and closes the picker. */
export const VariantPicker: Story = {
  args: { addToCart: fn(), onPackageChange: fn() },
  render: (args) => <ProductDetailsDemo {...args} />,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: /Choose variant: 50cl Returglas/ })
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(trigger)
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')
    // Pick a different variant from the overlay.
    const secondVariant = await canvas.findByRole('radio', { name: /33cl Burk/ })
    await userEvent.click(secondVariant)
    await expect(args.onPackageChange).toHaveBeenCalledWith('1139202')
    // The overlay closes and the trigger reflects the chosen variant — it visibly works end-to-end.
    await expect(await canvas.findByRole('button', { name: /Choose variant: 33cl Burk/ })).toBeInTheDocument()
  },
}

/** Favourite + purchase-list toggles fire their handlers. */
export const WithFavouriteAndPurchaseList: Story = {
  args: {
    addToCart: fn(),
    showFavoriteIcon: true,
    onFavoriteIconClick: fn(),
    showAddToPurchaseListIcon: true,
    onSaveToPurchaseListClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Add to favourites' }))
    await expect(args.onFavoriteIconClick).toHaveBeenCalledWith('1139201', false)
    await userEvent.click(canvas.getByRole('button', { name: 'Add to purchase list' }))
    await expect(args.onSaveToPurchaseListClick).toHaveBeenCalledWith('1139201')
  },
}

/** Restricted user — prices and the quantity control are hidden. */
export const RestrictedUser: Story = {
  args: { addToCart: fn(), isRestrictedUser: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByText(/Art no/)).not.toBeInTheDocument()
    await expect(canvas.queryByRole('spinbutton', { name: 'Quantity' })).not.toBeInTheDocument()
  },
}

/** Out of stock — the add-to-cart button is disabled (state exposed to AT, not just hidden). */
export const OutOfStock: Story = {
  args: { addToCart: fn(), outOfStock: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Add to cart' })).toBeDisabled()
  },
}

/** Wine variant with a single packaging — the variant trigger is disabled. */
export const Wine: Story = {
  args: { ...wineArgs, addToCart: fn() },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: /Choose variant: 6 x 75cl flaska/ })).toBeDisabled()
  },
}

/** Loading — a busy skeleton with a polite status message. */
export const Loading: Story = {
  args: { addToCart: fn(), loading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status')).toHaveTextContent('Loading product…')
  },
}

/** UI strings are overridable for non-English consumers. */
export const Localized: Story = {
  args: {
    addToCart: fn(),
    labels: { addToCart: 'Lägg i varukorg', partNo: 'Artikelnummer', totalPrice: 'Totalt', currency: 'kr' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Lägg i varukorg' })).toBeInTheDocument()
    await expect(canvas.getByText(/Artikelnummer 1139201/)).toBeInTheDocument()
  },
}

/**
 * Static frame for the review gallery, in Swedish to mirror the real product page. NOT mapped to a
 * legacy baseline: all four legacy `product-details` snapshots are Storybook **error frames** (the
 * legacy component crashed at capture with `convertNumToStr(undefined)` → "Cannot read properties of
 * undefined (reading 'toFixed')"), so there is no valid oracle. Current-only in the gallery.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  // Handlers are supplied via `render`, not `args`: the static Storybook build (the visual-review
  // gallery) serialises args and drops function values, which would leave the favourite/purchase-list
  // icons unrendered (their `show*` flag needs a paired handler).
  render: (args) => (
    <ProductDetails {...args} addToCart={() => {}} onSaveToPurchaseListClick={() => {}} onFavoriteIconClick={() => {}} />
  ),
  args: {
    showAddToPurchaseListIcon: true,
    showFavoriteIcon: true,
    labels: {
      addToCart: 'Lägg i varukorg',
      chooseVariant: 'Byt förpackning',
      partNo: 'Art.nr.',
      price: 'Listpris',
      quantityPerPackage: 'Antal/kolli',
      unit: 'st',
      each: 'à',
      quantity: 'Antal',
      pieces: 'styck',
      times: 'x',
      totalPrice: 'Pris:',
      currency: 'kr',
    },
  },
}
