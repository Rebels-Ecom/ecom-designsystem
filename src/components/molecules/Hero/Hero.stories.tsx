import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Hero } from './Hero'
import promoHeroL1 from '../../../assets/hero-images/Promo_Hero_L1.png'
import promoHeroC3 from '../../../assets/hero-images/Promo_Hero_C3.png'

/* The legacy Hero stories composed the migrated `Picture` atom over these exact local hero assets
 * (`legacy/src/assets/hero-images/*`), so the `Visual*` frames below reproduce the real legacy
 * scene — not an arbitrary placeholder. They are `reviewOnly` baselines (see baseline-map.ts): the
 * background image matches, but the overlaid text uses the brand font + accessible colours and the
 * `h1` is the larger design-system size, so the frame diverges beyond the 2% gate and is paired for
 * human review in the gallery rather than pixel-gated. */
const imageMoscowMule = { id: 'hero-l1', sources: [], src: promoHeroL1, alt: '' }
const imageBottles = { id: 'hero-c3', sources: [], src: promoHeroC3, alt: '' }

const meta = {
  title: 'Design System/Molecules/Hero',
  component: Hero,
  parameters: { layout: 'fullscreen' },
  args: {
    image: imageMoscowMule,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Wisby är tillbaka, nu bättre en någonsin',
    preamble:
      'Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär',
    alignContent: 'left',
    theme: 'dark',
    link: {
      children: 'Beställ idag',
      href: '#bestalla',
      size: 'large',
      surface: 'primary',
      isExternal: true,
    },
  },
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical: dark-theme, left-aligned hero with an eyebrow, heading and a primary CTA. */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('heading', { name: 'Wisby är tillbaka, nu bättre en någonsin' }),
    ).toBeInTheDocument()
    const cta = canvas.getByRole('link', { name: 'Beställ idag' })
    await expect(cta).toHaveAttribute('href', '#bestalla')
    await userEvent.tab()
    await expect(cta).toHaveFocus()
  },
}

/** Visual parity with the legacy `HeroStoryLeft1` frame (left, dark, Promo_Hero_L1). */
export const VisualLeftDark: Story = {
  tags: ['visual'],
}

/** Visual parity with the legacy `HeroStoryCenter` frame (centred, light, Promo_Hero_C3). */
export const VisualCenterLight: Story = {
  tags: ['visual'],
  args: {
    image: imageBottles,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Vår smidiga spritzer på fat finns nu i ny smak',
    preamble:
      'Dominerande smak av kryddig ingefära balanseras upp av frisk och syrlig smak från limejuice. Lång eftersmak från den kryddiga ingefäran.',
    alignContent: 'center',
    theme: 'light',
    link: {
      children: 'Beställ idag',
      href: '#bestalla',
      size: 'large',
      surface: 'primary',
      isExternal: true,
    },
  },
}
