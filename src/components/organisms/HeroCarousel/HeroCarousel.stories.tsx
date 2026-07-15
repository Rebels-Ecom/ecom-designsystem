import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { HeroCarousel } from './HeroCarousel'
import type { HeroProps } from '../../molecules/Hero'
import pistonheadHero from '../../../assets/hero-images/Pistonhead_Hero.svg'
import pistonheadLogo from '../../../assets/hero-images/pistonhead_logo.svg'
import promoHeroL1 from '../../../assets/hero-images/Promo_Hero_L1.png'
import beerVideo from '../../../assets/videos/beerVideo.mp4'

const pistonheadSlide: HeroProps = {
  image: { id: 'pistonhead-hero', src: pistonheadHero, sources: [], alt: '' },
  contentImage: { id: 'pistonhead-logo', src: pistonheadLogo, sources: [], alt: '' },
  topHeading: 'Kanske sommarens populäraste....',
  heading: 'Pistonhead lager',
  preamble:
    'Sedan starten för över 100 år sedan har vi vuxit till Sveriges ledande bryggeri Vi står i dag för en tredjedel av den svenska ölmarknaden',
  alignContent: 'center',
  theme: 'dark',
}

const wisbyLeft: HeroProps = {
  image: { id: 'hero-l1', src: promoHeroL1, sources: [], alt: '' },
  topHeading: 'Kanske sommarens populäraste....',
  heading: 'Wisby är tillbaka, nu bättre en någonsin',
  preamble:
    'Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär',
  alignContent: 'left',
  theme: 'dark',
}

// Content block sits on the right, but the title stays left-aligned (headingAlign decouples the two).
const wisbyRight: HeroProps = { ...wisbyLeft, alignContent: 'right', headingAlign: 'left' }

const videoSlide: HeroProps = {
  // Muted, autoplaying background video (paused under reduced motion, with a pause control from
  // `Video`); a captions `<track>` keeps axe's `video-caption` rule green. The image doubles as the poster.
  image: { id: 'video-hero-poster', src: promoHeroL1, sources: [], alt: '' },
  video: {
    videoUrl: beerVideo,
    label: 'Öl hälls upp i ett glas',
    poster: promoHeroL1,
    autoPlay: true,
    tracks: [{ src: 'data:text/vtt,WEBVTT%0A%0A', kind: 'captions', srcLang: 'sv', label: 'Svenska', default: true }],
  },
  isVideo: true,
  topHeading: 'Nyhet på fat',
  heading: 'Bryggd med passion',
  preamble: 'Se hur våra öl bryggs och tappas – från humle till glas.',
  alignContent: 'center',
  theme: 'dark',
}

const meta = {
  title: 'Design System/Organisms/HeroCarousel',
  component: HeroCarousel,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof HeroCarousel>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical: four heroes (including a muted background-video slide) with keyboard-operable controls. */
export const Default: Story = {
  args: {
    heroComponents: [pistonheadSlide, wisbyLeft, wisbyRight, videoSlide],
    onSlideChange: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    // The region is labelled and announces the first hero's heading.
    await expect(canvas.getByRole('region', { name: 'Highlights' })).toBeInTheDocument()
    await expect(canvas.getByRole('heading', { name: 'Pistonhead lager' })).toBeInTheDocument()
    // The video slide is present too.
    await expect(canvas.getByRole('heading', { name: 'Bryggd med passion' })).toBeInTheDocument()

    // The "Next" arrow advances the carousel and reports the target index (findByRole waits for the
    // layout-measurement effect to reveal the controls once the track overflows).
    await userEvent.click(await canvas.findByRole('button', { name: 'Next' }))
    await expect(args.onSlideChange).toHaveBeenCalledWith(1)

    // The last pagination dot jumps directly to the video slide.
    await userEvent.click(await canvas.findByRole('button', { name: 'Go to page 4 of 4' }))
    await expect(args.onSlideChange).toHaveBeenCalledWith(3)
  },
}

/** The carousel control names are overridable for non-English consumers. */
export const Localized: Story = {
  args: {
    heroComponents: [pistonheadSlide, wisbyLeft],
    ariaLabel: 'Utvalda erbjudanden',
    labels: { previous: 'Föregående', next: 'Nästa' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('region', { name: 'Utvalda erbjudanden' })).toBeInTheDocument()
    await expect(await canvas.findByRole('button', { name: 'Nästa' })).toBeInTheDocument()
  },
}

/**
 * Visual-parity frame — reproduces the legacy `HeroCarouselPistonheadStory`: the static Pistonhead
 * hero (dark, centred, skull logo) as the first of three slides, with the arrows level with the three
 * pagination dots. Paired `reviewOnly`: the background is a full-bleed brand SVG and the overlaid text
 * uses the brand font + accessible colours, so the frame diverges past the 2% gate but is a faithful
 * reproduction of the same scene.
 */
export const Visual: Story = {
  tags: ['visual'],
  args: {
    heroComponents: [pistonheadSlide, wisbyLeft, wisbyRight],
  },
}
