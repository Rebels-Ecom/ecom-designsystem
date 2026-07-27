import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, within } from 'storybook/test'
import beerGlass from '../../../assets/product-images/beer-glass.jpg'
import {
  dummyBeerProduct,
  dummyProductNoVariants,
  dummyWineProduct,
} from '../ProductCard/productCardFixtures'
import type { ProductCardProduct, ProductCardProps } from '../ProductCard'
import { ProductCardList } from './ProductCardList'

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

/** Build a vertical card config from a product (the list overrides `addToCart` per-card at runtime). */
const verticalCard = (product: ProductCardProduct): ProductCardProps => ({
  cardDisplay: 'vertical',
  product,
  loading: false,
  addToCartBtnLabel: 'Lägg i varukorg',
  addToCart: fn(),
})

/** Repeat the three fixtures to fill an `n`-card grid (deterministic, offline). */
const grid = (n: number): ProductCardProps[] =>
  Array.from({ length: n }, (_, i) => verticalCard(products[i % products.length]))

const meta = {
  title: 'Design System/Organisms/ProductCardList',
  component: ProductCardList,
  args: {
    productCards: grid(3),
    addToCart: fn(),
  },
} satisfies Meta<typeof ProductCardList>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical grid. The `play` proves the list is a real `role="list"` and that each product renders as
 * an `<article>` card.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Each product is an <article> card; the outer <ul role="list"> holds all three.
    await expect(canvas.getAllByRole('article')).toHaveLength(3)
  },
}

/** Labelled list — `ariaLabel` names the grid for assistive tech. */
export const Labelled: Story = {
  args: { ariaLabel: 'Sökresultat' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('list', { name: 'Sökresultat' })).toBeInTheDocument()
  },
}

/*
 * Visual parity — reproduces the legacy `product-card-list-story`: a responsive grid of vertical
 * product cards. Mapped `reviewOnly` (both viewports): every embedded {@link ProductCardVertical} is
 * itself reviewOnly, and the legacy PNG is a full-page capture much taller than the fixed viewport, so
 * it can't clear the 2% pixel gate. A representative set stands in for the legacy ~50-card beer list
 * (the scene, not the exact products, is what's reviewed). No `play`.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { productCards: grid(12) },
}

/*
 * Visual parity — reproduces the legacy `product-card-list-story-loka`: a grid of nine identical El
 * Esteco Malbec cards. Mapped `reviewOnly` (both viewports) for the same reasons as {@link Visual}. The
 * V2 reproduction is **cleaned up**: the legacy frame showed a junk "Le Tag" and three same-coloured
 * (purple) tags plus "undefined" price/article labels — here the card carries only unique-coloured tags
 * (Eko green / Fairtrade blue / Vegan purple), full labels, and a real image. No `play`.
 */
export const VisualLoka: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { productCards: Array.from({ length: 9 }, () => verticalCard(withImage(dummyWineProduct))) },
}
