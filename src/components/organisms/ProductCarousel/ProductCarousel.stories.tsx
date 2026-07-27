import type { Decorator, Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, within } from 'storybook/test'
import beerGlass from '../../../assets/product-images/beer-glass.jpg'
import {
  dummyBeerProduct,
  dummyProductNoVariants,
  dummyWineProduct,
} from '../ProductCard/productCardFixtures'
import type { ProductCardProduct, ProductCardProps } from '../ProductCard'
import { ProductCarousel } from './ProductCarousel'

// Real, bundled product photo so the review frames render a genuine image — never a blank/broken one.
const withImage = (product: ProductCardProduct): ProductCardProduct => ({
  ...product,
  primaryImageUrl: beerGlass,
})

const products: ProductCardProduct[] = [
  withImage(dummyWineProduct),
  withImage(dummyBeerProduct),
  withImage(dummyProductNoVariants),
]

const verticalCard = (product: ProductCardProduct): ProductCardProps => ({
  cardDisplay: 'vertical',
  product,
  loading: false,
  addToCartBtnLabel: 'Lägg i varukorg',
  addToCart: fn(),
})

const cards: ProductCardProps[] = Array.from({ length: 6 }, (_, i) =>
  verticalCard(products[i % products.length]),
)

// The carousel is a wide, page-level module — present it inside the legacy max-width wrapper.
const inPage: Decorator = (Story) => (
  <div style={{ margin: 'auto', maxWidth: '77.5rem' }}>
    <Story />
  </div>
)

const meta = {
  title: 'Design System/Organisms/ProductCarousel',
  component: ProductCarousel,
  decorators: [inPage],
  args: {
    productCards: cards,
    addToCart: fn(),
    ariaLabel: 'Recommended products',
  },
} satisfies Meta<typeof ProductCarousel>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical carousel. The `play` proves the carousel is a named region and that every product renders
 * as an `<article>` card (all slides live in the DOM behind the scroll viewport).
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('region', { name: 'Recommended products' }),
    ).toBeInTheDocument()
    await expect(canvas.getAllByRole('article').length).toBeGreaterThan(0)
  },
}

/**
 * Two-per-page on every breakpoint (matches the app's related-products layout).
 */
export const TwoPerPage: Story = {
  args: {
    productsPerPageMobile: 2,
    productsPerPageTablet: 2,
    productsPerPageDesktop: 2,
  },
}

/**
 * Empty — no products. The carousel renders nothing rather than an empty, arrow-less track (the legacy
 * story passed `productCards: []`, capturing a blank frame).
 */
export const Empty: Story = {
  args: { productCards: [] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('region')).toBeNull()
  },
}

/*
 * Gallery review frame (current-only). The legacy `product-carousel-story` baseline is **blank** — its
 * story passed `productCards: []`, so nothing rendered. The V2 Visual instead renders a populated
 * carousel (a deliberately *different* scene), so it is NOT mapped to the legacy baseline. No `play`.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}
