import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Video } from './Video'
import beerVideo from '../../../assets/videos/beerVideo.mp4'

// Minimal WebVTT captions track (muted/decorative video has no audio, but this exercises the
// `tracks` API and keeps the a11y pass clean).
const captions = [{ src: 'data:text/vtt,WEBVTT%0A%0A', kind: 'captions', srcLang: 'sv', label: 'Svenska', default: true }] as const

const meta = {
  title: 'Design System/Atoms/Video',
  component: Video,
  args: {
    videoUrl: beerVideo,
    label: 'Öl hälls upp i ett glas',
    tracks: [...captions],
    className: 'h-64 w-full max-w-xl',
  },
} satisfies Meta<typeof Video>

export default meta
type Story = StoryObj<typeof meta>

export const Autoplaying: Story = {
  // No mutating interaction here: the story stays playing so the autoplay behaviour is what you see.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const video = canvasElement.querySelector('video') as HTMLVideoElement
    // Muted (so autoplay is permitted and no audio plays, 1.4.2) with an accessible name (1.1.1).
    await expect(video).toHaveAttribute('aria-label', 'Öl hälls upp i ett glas')
    await expect(video.muted).toBe(true)
    // In the playing state the control offers to pause (2.2.2) — asserted without clicking.
    await expect(canvas.getByRole('button', { name: 'Pausa videon' })).toBeInTheDocument()
  },
}

export const PlayPauseControl: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The pause/play control is keyboard-operable and toggles the accessible name (2.2.2 / 4.1.2).
    const control = canvas.getByRole('button')
    const initialLabel = control.getAttribute('aria-label')
    await userEvent.click(control)
    await expect(control.getAttribute('aria-label')).not.toBe(initialLabel)
  },
}

export const WithDarkOverlay: Story = {
  args: { videoWithOpacity: 'dark' },
}

// Static frame for the review gallery only. No legacy visual baseline is mapped: the legacy
// `video-story` PNG captured a non-deterministic auto-playing frame (no poster), and V2 adds a
// pause control, so a pixel diff would be meaningless — intentionally absent from baseline-map.ts.
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { autoPlay: false, poster: undefined },
}
