import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import type { PictureProps } from '../../atoms/Picture'
import type { TagProps } from '../../atoms/Tag'
import type { LinkButtonProps } from '../LinkButton'
import teaserImage from '../../../assets/placeholders/Teaser1.png'
import { Teaser, type TeaserProps } from './Teaser'

const image: PictureProps = {
  id: 'teaser-image',
  src: teaserImage,
  sources: [{ srcset: teaserImage }],
  alt: 'Bartender pouring a beer at the counter',
}

const roundTag: TagProps = { text: 'Kurs', shape: 'round', color: 'mint', size: 'sm' }
const rectTag: TagProps = { text: 'Kurs', shape: 'rectangular', color: 'mint', size: 'lg' }

const linkButton: LinkButtonProps = {
  children: 'Boka din plats',
  href: '#bokningsforfragan',
  surface: 'primary',
  size: 'large',
}

const baseArgs = {
  heading: 'Mer smak med Melleruds',
  preamble: 'Utmärkt pilsner',
  image,
  linkButton,
} satisfies Partial<TeaserProps>

const meta = {
  title: 'Design System/Molecules/Teaser',
  component: Teaser,
  parameters: { layout: 'fullscreen' },
  args: {
    ...baseArgs,
    imageRound: true,
    imagePosition: 'left',
    tag: roundTag,
    tagPosition: 'left',
  },
} satisfies Meta<typeof Teaser>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical: heading is a real heading, the CTA is a real link pointing at its destination. */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { name: 'Mer smak med Melleruds' })).toBeInTheDocument()
    const cta = canvas.getByRole('link', { name: 'Boka din plats' })
    await expect(cta).toHaveAttribute('href', '#bokningsforfragan')
    await expect(canvas.getByText('Utmärkt pilsner')).toBeVisible()
  },
}

/** Rich body content renders between the preamble and the CTA. */
export const WithRichText: Story = {
  args: {
    richText: (
      <ul>
        <li>Perfekt som sällskapsdryck</li>
        <li>Med en utsökt beska</li>
        <li>Svensk ljus lager</li>
      </ul>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Svensk ljus lager')).toBeVisible()
  },
}

/**
 * Visual parity — the legacy `teaser-round` frame: two round teasers, image-left then image-right,
 * each with the "Kurs" tag, heading, preamble and CTA. Mapped `reviewOnly` (the legacy PNG is a
 * full-page capture taller than the fixed viewport, so it can't pixel-match — see baseline-map).
 */
export const Visual: Story = {
  tags: ['visual'],
  render: (args) => (
    <div>
      <Teaser {...args} imagePosition="left" />
      <Teaser {...args} imagePosition="right" />
    </div>
  ),
}

/** Visual parity — the legacy `teaser-square` frame (rectangular image + rectangular tag). */
export const VisualSquare: Story = {
  tags: ['visual'],
  args: { imageRound: false, tag: rectTag },
  render: (args) => (
    <div>
      <Teaser {...args} imagePosition="left" />
      <Teaser {...args} imagePosition="right" />
    </div>
  ),
}
