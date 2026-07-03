import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, within } from 'storybook/test'
import { Picture } from './Picture'
import teaser1 from '../../../assets/placeholders/Teaser1.png'
import teaser2 from '../../../assets/placeholders/Teaser2.png'
import teaser3 from '../../../assets/placeholders/Teaser3.png'
import fallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg'

const meta = {
  title: 'Design System/Atoms/Picture',
  component: Picture,
} satisfies Meta<typeof Picture>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'picture-default',
    src: teaser3,
    sources: [{ srcset: teaser3 }],
    alt: 'Seasonal product teaser',
    loading: 'eager',
    width: 320,
    height: 320,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const img = canvas.getByRole('img', { name: 'Seasonal product teaser' })
    // Loading state is exposed to AT and cleared once the image settles (4.1.2).
    fireEvent.load(img)
    await expect(img).toHaveAttribute('aria-busy', 'false')
  },
}

// Different art per breakpoint via native <source media> — mobile shows teaser1, wider
// viewports teaser2, and teaser3 is the <img> fallback for browsers without <picture>.
export const Responsive: Story = {
  args: {
    id: 'picture-responsive',
    src: teaser3,
    sources: [
      { srcset: teaser1, media: '(max-width: 767px)' },
      { srcset: teaser2, media: '(min-width: 768px)' },
    ],
    alt: 'Seasonal product teaser',
    loading: 'eager',
    width: 320,
    height: 320,
  },
}

export const FallsBackOnError: Story = {
  args: {
    id: 'picture-fallback',
    src: 'not-a-valid-url',
    sources: [{ srcset: 'not-a-valid-url' }],
    fallbackImageUrl: fallbackImage,
    alt: 'Bilden kunde inte laddas',
    loading: 'eager',
    width: 160,
    height: 160,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const img = canvas.getByRole('img', { name: 'Bilden kunde inte laddas' })
    fireEvent.error(img)
    await expect(img).toHaveAttribute('src', fallbackImage)
  },
}

// Static frame for the review gallery. No legacy visual baseline is mapped: the legacy
// `picture-story` PNGs depend on network image loading + a time-based skeleton state,
// which can't be reproduced deterministically (see MIGRATION-PROGRESS batch notes).
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    id: 'picture-visual',
    src: teaser3,
    sources: [{ srcset: teaser3 }],
    alt: 'Seasonal product teaser',
    loading: 'eager',
    width: 320,
    height: 320,
  },
}
