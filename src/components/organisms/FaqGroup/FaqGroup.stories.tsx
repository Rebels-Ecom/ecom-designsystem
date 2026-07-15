import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { FaqGroup } from './FaqGroup'

const items = [
  { question: 'How do I place an ==order==?', answer: <p>Add products to your cart and go to checkout.</p> },
  { question: 'What are the delivery days?', answer: <p>Deliveries run Tuesdays and Fridays.</p> },
  { question: 'How do I change my account details?', answer: <p>Open your profile and edit your details.</p> },
]

// Self-contained decorative icon so the stories carry no external asset dependency.
const icon =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><circle cx="30" cy="30" r="28" fill="%23003E51"/><text x="30" y="40" font-size="34" fill="white" text-anchor="middle" font-family="sans-serif">?</text></svg>'

const meta = {
  title: 'Design System/Organisms/FaqGroup',
  component: FaqGroup,
  args: { title: 'Ordering & delivery', items },
} satisfies Meta<typeof FaqGroup>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical group. The `play` proves the structure: a named `region` titled by its `<h3>`, wrapping
 * the composed accordion (one button per question).
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const region = canvas.getByRole('region', { name: 'Ordering & delivery' })
    await expect(region).toBeInTheDocument()
    await expect(canvas.getByRole('heading', { level: 3, name: 'Ordering & delivery' })).toBeInTheDocument()
    await expect(canvas.getAllByRole('button')).toHaveLength(3)
  },
}

/**
 * With a labelled category icon and a "view more" link. The `play` asserts the icon's accessible
 * name and the link's `href` — the link's visible text is its accessible name (2.4.4 in region context).
 */
export const WithIconAndLink: Story = {
  args: {
    imgSrc: icon,
    imgAlt: 'Ordering',
    viewMoreLink: '/faq/ordering',
    viewMoreLabel: 'See all ordering questions',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('img', { name: 'Ordering' })).toBeInTheDocument()
    await expect(canvas.getByRole('link', { name: 'See all ordering questions' })).toHaveAttribute(
      'href',
      '/faq/ordering',
    )
  },
}

/** `limit` caps how many questions the composed list renders. */
export const Limited: Story = {
  args: { limit: 1 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getAllByRole('button')).toHaveLength(1)
  },
}

/*
 * Gallery-only Visual (no baseline — legacy shipped no story/snapshot). A representative group with a
 * decorative icon and a "view more" link for human review; behaviour is covered by the play tests.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    imgSrc: icon,
    imgAlt: 'Ordering',
    viewMoreLink: '/faq/ordering',
    viewMoreLabel: 'See all ordering questions',
  },
}
