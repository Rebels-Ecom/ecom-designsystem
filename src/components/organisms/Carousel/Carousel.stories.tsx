import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Carousel } from './Carousel'
import { CarouselItem } from './CarouselItem'
import { Picture } from '../../atoms/Picture'
import { Video } from '../../atoms/Video'
import teaser1 from '../../../assets/placeholders/Teaser1.png'
import teaser2 from '../../../assets/placeholders/Teaser2.png'
import teaser3 from '../../../assets/placeholders/Teaser3.png'
import beerVideo from '../../../assets/videos/beerVideo.mp4'

// Minimal WebVTT captions track so the muted demo video keeps axe's `video-caption` rule green.
const captions = [
  { src: 'data:text/vtt,WEBVTT%0A%0A', kind: 'captions', srcLang: 'sv', label: 'Svenska', default: true },
] as const

const teasers = [teaser1, teaser2, teaser3]

const meta = {
  title: 'Design System/Organisms/Carousel',
  component: Carousel,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

/** Demo slides so the track always overflows and the controls render. */
function DemoSlides({ count = 6 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <CarouselItem key={index}>
          <div className="flex h-40 w-full items-center justify-center rounded bg-surface-disabled font-primary text-body text-text-default">
            {`Slide ${index + 1}`}
          </div>
        </CarouselItem>
      ))}
    </>
  )
}

/** Canonical usage: swipe-or-click carousel with arrows and pagination dots. */
export const Default: Story = {
  args: {
    ariaLabel: 'Utvalda produkter',
    breakpoints: { sm: { perPage: 1 }, md: { perPage: 2 }, lg: { perPage: 3 } },
    onNavigation: fn(),
    children: <DemoSlides />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    // Prev is disabled at the start (nothing before slide 0). Control names default to English.
    await expect(canvas.getByRole('button', { name: 'Previous' })).toBeDisabled()
    // The non-drag alternative: activating the arrow navigates by one slide (2.5.7 / 2.1.1).
    const next = await canvas.findByRole('button', { name: 'Next' })
    await userEvent.click(next)
    await expect(args.onNavigation).toHaveBeenCalledWith(1)
  },
}

/**
 * Localisation: control accessible-names default to English and are overridden via `labels`
 * (here, Swedish). Proves the i18n convention — the library bakes in no locale.
 */
export const Localized: Story = {
  args: {
    ariaLabel: 'Utvalda produkter',
    breakpoints: { sm: { perPage: 1 }, md: { perPage: 2 }, lg: { perPage: 3 } },
    labels: {
      previous: 'Föregående',
      next: 'Nästa',
      goToPage: (page, total) => `Gå till sida ${page} av ${total}`,
    },
    children: <DemoSlides />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Föregående' })).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Nästa' })).toBeInTheDocument()
  },
}

/**
 * Keyboard navigation: focusing the track and pressing `End` jumps to the last page — proving the
 * slide-index engine reaches `maxIndex` and disables "next" even when the final page is partial.
 */
export const KeyboardToEnd: Story = {
  args: {
    ariaLabel: 'Utvalda produkter',
    breakpoints: { sm: { perPage: 1 }, md: { perPage: 2 }, lg: { perPage: 4 } },
    children: <DemoSlides count={7} />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const track = await canvas.findByRole('group', { name: 'Utvalda produkter' })
    const nextBtn = canvas.getByRole('button', { name: 'Next' })
    await expect(nextBtn).toBeEnabled()
    track.focus()
    await userEvent.keyboard('{End}')
    // After reaching the end, "next" disables and "previous" is available.
    await waitFor(() => expect(nextBtn).toBeDisabled(), { timeout: 2000 })
    await expect(canvas.getByRole('button', { name: 'Previous' })).toBeEnabled()
  },
}

/** Multiple slides visible, advancing two at a time (`perMove`). */
export const MultiVisibleMultiMove: Story = {
  args: {
    ariaLabel: 'Kampanjer',
    breakpoints: { sm: { perPage: 1, perMove: 1 }, md: { perPage: 2, perMove: 2 }, lg: { perPage: 3, perMove: 3 } },
    onNavigation: fn(),
    children: <DemoSlides count={9} />,
  },
}

/** One pagination dot per slide instead of per page. */
export const DotsPerItem: Story = {
  args: {
    ariaLabel: 'Bildspel',
    dotPerItem: true,
    breakpoints: { sm: { perPage: 1 }, md: { perPage: 1 }, lg: { perPage: 1 } },
    children: <DemoSlides count={5} />,
  },
}

/**
 * Vertical (top-to-bottom) carousel. The track height is constrained via `trackClassName`; in a
 * column the slide size drives height, so slide content fills it with `h-full`.
 */
export const Vertical: Story = {
  args: {
    ariaLabel: 'Nyheter',
    direction: 'vertical',
    trackClassName: 'h-80',
    breakpoints: { sm: { perPage: 2 }, md: { perPage: 2 }, lg: { perPage: 2 } },
    children: (
      <>
        {Array.from({ length: 6 }, (_, index) => (
          <CarouselItem key={index}>
            <div className="flex h-full w-full items-center justify-center rounded bg-surface-disabled font-primary text-body text-text-default">
              {`Slide ${index + 1}`}
            </div>
          </CarouselItem>
        ))}
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Vertical arrows are up/down and follow the same disabled-at-start rule.
    await expect(await canvas.findByRole('button', { name: 'Previous' })).toBeDisabled()
    await expect(canvas.getByRole('button', { name: 'Next' })).toBeEnabled()
  },
}

/** Product images as slides, each a `Picture` atom (real `alt` text per slide). */
export const WithImages: Story = {
  args: {
    ariaLabel: 'Produktbilder',
    breakpoints: { sm: { perPage: 1 }, md: { perPage: 2 }, lg: { perPage: 3 } },
    children: (
      <>
        {[...teasers, ...teasers].map((src, index) => (
          <CarouselItem key={index}>
            <Picture
              id={`carousel-image-${index}`}
              src={src}
              sources={[{ srcset: src }]}
              alt={`Produktbild ${index + 1}`}
              loading="eager"
              width={320}
              height={192}
              classNamePicture="block w-full"
              classNameImg="h-48 w-full rounded object-cover"
            />
          </CarouselItem>
        ))}
      </>
    ),
  },
}

/** Mixed media: `Picture` and autoplaying, muted, captioned `Video` slides in one carousel. */
export const WithMedia: Story = {
  args: {
    ariaLabel: 'Produkter i bild och film',
    breakpoints: { sm: { perPage: 1 }, md: { perPage: 2 }, lg: { perPage: 3 } },
    children: (
      <>
        <CarouselItem>
          <Picture
            id="media-image-1"
            src={teaser1}
            sources={[{ srcset: teaser1 }]}
            alt="Produktbild 1"
            loading="eager"
            width={320}
            height={192}
            classNamePicture="block w-full"
            classNameImg="h-48 w-full rounded object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <Video
            videoUrl={beerVideo}
            label="Öl hälls upp i ett glas"
            tracks={[...captions]}
            className="h-48 w-full overflow-hidden rounded"
          />
        </CarouselItem>
        <CarouselItem>
          <Picture
            id="media-image-2"
            src={teaser2}
            sources={[{ srcset: teaser2 }]}
            alt="Produktbild 2"
            loading="eager"
            width={320}
            height={192}
            classNamePicture="block w-full"
            classNameImg="h-48 w-full rounded object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <Video
            videoUrl={beerVideo}
            label="Öl hälls upp, närbild"
            tracks={[...captions]}
            className="h-48 w-full overflow-hidden rounded"
          />
        </CarouselItem>
        <CarouselItem>
          <Picture
            id="media-image-3"
            src={teaser3}
            sources={[{ srcset: teaser3 }]}
            alt="Produktbild 3"
            loading="eager"
            width={320}
            height={192}
            classNamePicture="block w-full"
            classNameImg="h-48 w-full rounded object-cover"
          />
        </CarouselItem>
      </>
    ),
  },
}

/** Dots suppressed — arrows still provide the keyboard/pointer navigation alternative. */
export const WithoutPagination: Story = {
  args: {
    ariaLabel: 'Kampanjer',
    hidePagination: true,
    breakpoints: { sm: { perPage: 1 }, md: { perPage: 2 }, lg: { perPage: 3 } },
    children: <DemoSlides />,
  },
}

/**
 * Static frame for the review gallery. NOT mapped to a legacy baseline: the legacy `carousel-story`
 * renders an `ArticleList` (an organism not yet migrated), so the frame can't be reproduced.
 */
export const Visual: Story = {
  args: {
    ariaLabel: 'Utvalda produkter',
    breakpoints: { sm: { perPage: 1 }, md: { perPage: 2 }, lg: { perPage: 3 } },
    children: <DemoSlides />,
  },
  parameters: { layout: 'fullscreen' },
  tags: ['visual'],
  render: (args) => (
    <div className="p-8">
      <Carousel {...args} />
    </div>
  ),
}
