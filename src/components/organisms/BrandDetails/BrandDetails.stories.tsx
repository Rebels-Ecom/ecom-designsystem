import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { BrandDetails } from './BrandDetails'
import pang from '../../../assets/blog-images/pang.png'
import fallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg'

const meta = {
  title: 'Design System/Organisms/BrandDetails',
  component: BrandDetails,
} satisfies Meta<typeof BrandDetails>

export default meta
type Story = StoryObj<typeof meta>

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'

/**
 * Canonical brand hero: image + name + description + CTA. The play test proves the image, the `<h3>`
 * name and the read-more link all render (the link with its destination).
 */
export const Default: Story = {
  args: {
    title: 'Pang Pang',
    image: { url: pang, alt: 'Pang Pang', fallbackImage },
    text: description,
    link: { text: 'Läs mer', url: '#', isExternal: true },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('img', { name: 'Pang Pang' })).toBeInTheDocument()
    await expect(canvas.getByRole('heading', { level: 3, name: 'Pang Pang' })).toBeInTheDocument()
    const link = canvas.getByRole('link', { name: 'Läs mer' })
    await expect(link).toHaveAttribute('href', '#')
  },
}

/** With category chips under the image. */
export const WithTags: Story = {
  args: {
    title: 'Pang Pang',
    image: { url: pang, alt: 'Pang Pang', fallbackImage },
    tags: [
      { text: 'Bryggeri', color: 'green', size: 'md' },
      { text: 'Craft', color: 'blue', size: 'md' },
    ],
    text: description,
    link: { text: 'Läs mer', url: '#', isExternal: true },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('list')).toBeInTheDocument()
    await expect(canvas.getByText('Bryggeri')).toBeInTheDocument()
  },
}

// Reproduces the legacy `brand-details-story` frame: the Pang Pang logo, an h3 name, a centred
// three-sentence lorem description in a reading-measure column, and a "Läs mer" link (which diverges
// orange → accessible blue, the documented AA fix, a small glyph under the 2% gate).
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    title: 'Pang Pang',
    image: { url: pang, alt: 'Pang Pang', fallbackImage },
    text: description,
    link: { text: 'Läs mer', url: '#', isExternal: true },
  },
}
