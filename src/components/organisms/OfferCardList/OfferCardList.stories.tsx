import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { OfferCardList, type OfferCardListOffer } from './OfferCardList'

const meta = {
  title: 'Design System/Organisms/OfferCardList',
  component: OfferCardList,
} satisfies Meta<typeof OfferCardList>

export default meta
type Story = StoryObj<typeof meta>

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'

// Reproduces the legacy `offersList`: OfferCardStory1 / OfferCardStory2 alternating six times.
const offers: OfferCardListOffer[] = [
  { id: 'offer-1', icon: 'icon-refresh-cw', heading: '24/7 Support', richText: lorem },
  { id: 'offer-2', icon: 'icon-mail', heading: 'Säkra leveranser', richText: lorem },
  { id: 'offer-3', icon: 'icon-refresh-cw', heading: '24/7 Support', richText: lorem },
  { id: 'offer-4', icon: 'icon-mail', heading: 'Säkra leveranser', richText: lorem },
  { id: 'offer-5', icon: 'icon-refresh-cw', heading: '24/7 Support', richText: lorem },
  { id: 'offer-6', icon: 'icon-mail', heading: 'Säkra leveranser', richText: lorem },
]

/**
 * Canonical usage: six offers in a swipe carousel (four per page on desktop). The play test proves
 * the carousel exposes a labelled region and every offer renders as a heading.
 */
export const Default: Story = {
  args: {
    offers,
    ariaLabel: 'Offers',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The Carousel exposes its scroll track as a labelled group named by `ariaLabel`.
    await expect(canvas.getByRole('group', { name: 'Offers' })).toBeInTheDocument()
    await expect(canvas.getAllByRole('heading')).toHaveLength(6)
  },
}

/**
 * The carousel's own control names are overridable (English defaults) — this library ships to
 * consumers of any locale. Here the previous/next arrows are localised to Swedish.
 */
export const Localized: Story = {
  args: {
    offers,
    ariaLabel: 'Erbjudanden',
    carouselLabels: { previous: 'Föregående', next: 'Nästa' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('group', { name: 'Erbjudanden' })).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Nästa' })).toBeInTheDocument()
  },
}

// Reproduces the legacy `OfferCardListStory` frame: six alternating offer cards in the carousel.
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    offers,
    ariaLabel: 'Offers',
  },
}
