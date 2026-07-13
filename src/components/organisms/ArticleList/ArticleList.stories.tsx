import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { ArticleList, type ArticleListArticle } from './ArticleList'
import content9 from '../../../assets/blog-images/content9.webp'
import fallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg'

const meta = {
  title: 'Design System/Organisms/ArticleList',
  component: ArticleList,
} satisfies Meta<typeof ArticleList>

export default meta
type Story = StoryObj<typeof meta>

// Reproduces the legacy `articlesData`: five teaser cards on blog-images/Content9, a green "Tag N"
// per card, a "Läs mer" read-more link, and article 2 carrying long body text truncated at 116 chars
// with its tag removed (matching the legacy commented-out tags).
function makeArticle(
  n: number,
  opts: { text?: string; maxChar?: number; noTags?: boolean } = {},
): ArticleListArticle {
  return {
    id: `article-${n}`,
    fallbackImage,
    image: { id: `article-${n}-img`, src: content9, sources: [{ srcset: content9 }], alt: '' },
    imagePriority: { loading: 'eager' },
    heading: `Article ${n}`,
    text: opts.text ?? `Article ${n}`,
    maxChar: opts.maxChar,
    tags: opts.noTags ? undefined : [{ text: `Tag ${n}`, color: 'green', size: 'md' }],
    link: { href: '#', children: 'Läs mer', isExternal: true },
  }
}

const articlesData: ArticleListArticle[] = [
  makeArticle(1),
  makeArticle(2, {
    text: 'Article 2 aadjklsaj laksdj lajfkdlsjf slkjdfklsjlkdjfklsjdfkljsdlkfjsdkljflksdjfkljs kldsjfkljds lkjfsdlkjf lksjdkfljsdklfjsldkjflksjdlk jdsklfjlskdj lskjdflkjsldkjflksjd',
    maxChar: 116,
    noTags: true,
  }),
  makeArticle(3),
  makeArticle(4),
  makeArticle(5),
]

/**
 * Canonical usage: five articles in a swipe carousel. The play test proves every article renders as
 * an `<article>` and that the carousel exposes a labelled region (named by the `title`).
 */
export const Default: Story = {
  args: {
    title: 'Default',
    articles: articlesData,
    swipe: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getAllByRole('article')).toHaveLength(5)
    // The Carousel exposes its scroll track as a labelled group named by the list title.
    await expect(canvas.getByRole('group', { name: 'Default' })).toBeInTheDocument()
    // Each card carries a read-more link.
    await expect(canvas.getAllByRole('link', { name: /Läs mer/ }).length).toBeGreaterThan(0)
  },
}

/**
 * Static grid (no `swipe`): three cards laid out in a wrapping flex row (no carousel region). The
 * play test proves there is no carousel group and all three articles render.
 */
export const ThreeCards: Story = {
  args: {
    title: 'Three Cards',
    articles: articlesData.slice(0, 3),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getAllByRole('article')).toHaveLength(3)
    await expect(canvas.queryByRole('group')).not.toBeInTheDocument()
    await expect(canvas.getByRole('heading', { level: 2, name: 'Three Cards' })).toBeInTheDocument()
  },
}

/** All built-in UI strings are overridable — here the carousel region's accessible name is localised. */
export const Localized: Story = {
  args: {
    articles: articlesData,
    swipe: true,
    labels: { carouselRegion: 'Artiklar' },
    carouselLabels: { previous: 'Föregående', next: 'Nästa' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('group', { name: 'Artiklar' })).toBeInTheDocument()
  },
}

// ── Visual parity frames (reproduce the legacy ArticleList stories) ──

/** Legacy `Default` frame: five swipe-carousel cards. Also the frame Carousel's own baseline maps to. */
export const VisualDefault: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    title: 'Default',
    articles: articlesData,
    swipe: true,
  },
}

/** Legacy `Three_Cards` frame: three static cards (small/large/small). */
export const VisualThreeCards: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    title: 'Three Cards',
    articles: articlesData.slice(0, 3),
  },
}

/** Legacy `Full_Width` frame: a single full-width card (article 2 — long text, no tag). */
export const VisualFullWidth: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    title: 'Full Width',
    articles: articlesData.slice(1, 2),
  },
}
