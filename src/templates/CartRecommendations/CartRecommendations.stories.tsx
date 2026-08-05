import { useReducer } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { DemoLink } from '../_shared/chrome'
import { cartReducer, type CartState } from '../_shared/cartModel'
import { CartRecommendations } from './CartRecommendations'
import { recommendationFixtures } from './CartRecommendations.fixtures'

/**
 * **CartRecommendations templates** — the cart's "you might also want" carousel wired live. The harness
 * runs the shared `cartReducer`; adding a recommended product dispatches `ADD_TO_CART`, and a status line
 * reports the running cart count so the add is observable (in the app it feeds the mini-cart). Untagged.
 */

const emptyCart: CartState = {
  lines: [],
  termsAccepted: false,
  deliveryDate: '2026-07-31',
  customOrderNo: '',
  status: 'shopping',
  showPrices: true,
}

function Harness() {
  const [state, dispatch] = useReducer(cartReducer, emptyCart)
  const addToCart = (partNo: string) => {
    const rec = recommendationFixtures.find((r) => r.partNo === partNo)
    if (rec) dispatch({ type: 'ADD_TO_CART', line: { ...rec, quantity: 1 } })
  }
  return (
    <div className="p-4">
      <p role="status">Varukorg: {state.lines.length} produkter</p>
      <CartRecommendations
        recommendations={recommendationFixtures}
        onAddToCart={addToCart}
        linkComponent={DemoLink}
      />
    </div>
  )
}

const meta = {
  title: 'Design System/Templates/Flow 1 — Checkout/CartRecommendations',
  component: CartRecommendations,
  parameters: { layout: 'fullscreen', controls: { disable: true } },
  args: {
    recommendations: recommendationFixtures,
    onAddToCart: () => {},
  },
} satisfies Meta<typeof CartRecommendations>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The recommendations strip. The `play` checks the heading, the carousel region and that adding a
 * recommended product feeds the cart (count 0 → 1).
 */
export const Default: Story = {
  render: () => <Harness />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { level: 3, name: 'Du kanske även gillar' })).toBeInTheDocument()
    await expect(canvas.getByRole('region', { name: 'Du kanske även gillar' })).toBeInTheDocument()
    await expect(canvas.getByText('Varukorg: 0 produkter')).toBeInTheDocument()

    const card = canvas.getByRole('article', { name: 'Coca-Cola Zero' })
    await userEvent.click(within(card).getByRole('button', { name: 'Lägg i varukorg' }))
    await expect(canvas.getByText('Varukorg: 1 produkter')).toBeInTheDocument()
  },
}
