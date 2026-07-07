import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { ArticleCard } from './ArticleCard'
import type { PictureProps } from '../../atoms/Picture'
import content9 from '../../../assets/blog-images/content9.webp'
import fallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg'

const meta = {
  title: 'Design System/Molecules/ArticleCard',
  component: ArticleCard,
  args: { fallbackImage },
} satisfies Meta<typeof ArticleCard>

export default meta
type Story = StoryObj<typeof meta>

// Linked-card image: decorative (empty alt) because the wrapping link carries the accessible name.
const linkedImage: PictureProps = {
  id: 'article-card-linked',
  src: content9,
  sources: [{ srcset: content9 }],
  loading: 'eager',
  alt: '',
}

// Standalone image (no link): given a real alt since nothing else describes it.
const describedImage: PictureProps = {
  id: 'article-card-static',
  src: content9,
  sources: [{ srcset: content9 }],
  loading: 'eager',
  alt: 'Cocktail garnerad med en grapefruktskiva',
}

const href = '/artiklar/ol-for-sommaren'

/** Full teaser: image link + overlaid tags + heading + excerpt + read-more CTA. */
export const Default: Story = {
  args: {
    image: linkedImage,
    imagePriority: { loading: 'eager' },
    tags: [{ text: 'Inspiration', color: 'green' }],
    heading: 'Öl för sommaren',
    text: 'Fem favoriter att svalka sig med när solen ligger på.',
    link: { href, children: 'Läs mer' },
  },
  render: (args) => (
    <div className="w-80">
      <ArticleCard {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Heading is a real h3.
    await expect(
      canvas.getByRole('heading', { level: 3, name: 'Öl för sommaren' }),
    ).toBeInTheDocument()
    // Two links (pointer image link + read-more CTA), both to the same article.
    const links = canvas.getAllByRole('link')
    await expect(links).toHaveLength(2)
    links.forEach((link) => expect(link).toHaveAttribute('href', href))
    // The visible CTA text resolves to the read-more link.
    await expect(canvas.getByText('Läs mer')).toBeVisible()
  },
}

/** Static variant: an image + heading + excerpt, but no link — no interactive descendants. */
export const Static: Story = {
  args: {
    image: describedImage,
    imagePriority: { loading: 'eager' },
    heading: 'Om vårt bryggeri',
    text: 'En kort introduktion till hantverket bakom våra öl.',
  },
  render: (args) => (
    <div className="w-80">
      <ArticleCard {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('link')).not.toBeInTheDocument()
    await expect(canvas.getByRole('img', { name: describedImage.alt })).toBeInTheDocument()
    await expect(canvas.getByRole('heading', { level: 3 })).toHaveTextContent('Om vårt bryggeri')
  },
}

// Gallery-only static frame (no legacy snapshot exists for ArticleCard — its visual baseline is
// deferred to ArticleList, whose Default story reproduces the legacy carousel frame). Tagged
// `['visual']` so it still surfaces in the review gallery (current-only).
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    image: linkedImage,
    imagePriority: { loading: 'eager' },
    tags: [{ text: 'Inspiration', color: 'green' }],
    heading: 'Öl för sommaren',
    text: 'Fem favoriter att svalka sig med när solen ligger på.',
    link: { href, children: 'Läs mer' },
  },
  render: (args) => (
    <div className="w-80 p-4">
      <ArticleCard {...args} />
    </div>
  ),
}
