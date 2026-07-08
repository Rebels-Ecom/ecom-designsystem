import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { RichText } from './RichText'

const meta = {
  title: 'Design System/Molecules/RichText',
  component: RichText,
} satisfies Meta<typeof RichText>

export default meta
type Story = StoryObj<typeof meta>

// Clean, valid CMS markup: ordered heading levels, a real list, and a descriptive link. (The legacy
// dummy content had empty `<h2></h2>`/`<strong></strong>` and 404-ing image paths, which would fail
// the axe a11y gate — a11y of the markup is the consumer's responsibility, so stories model good input.)
const sampleContent = [
  '<h2>Ölets historia</h2>',
  '<p>Ölets historia sträcker sig cirka 9000 år bakåt i tiden, med de första bevisen funna i gamla krukskärvor i Kina. Under dessa år har receptet förfinats och bryggerikonsten utvecklats.</p>',
  '<h3>Tre huvudkategorier</h3>',
  '<ul><li>Underjäst öl, ofta kallat lager</li><li>Överjäst öl, samlingsnamnet ale</li><li>Spontanjäst öl</li></ul>',
  '<p>Läs mer om <a href="#lager">våra lageröl och deras karaktär</a>.</p>',
].join('')

/**
 * Canonical article body. The `play` tabs to the link embedded in the content and asserts it is
 * focusable, correctly targeted, and underlined (the non-colour cue applied by the wrapper, 1.4.1).
 */
export const Default: Story = {
  args: { richTextContent: sampleContent },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { name: 'Ölets historia' })).toBeInTheDocument()
    const link = canvas.getByRole('link', { name: /lageröl/i })
    await userEvent.tab()
    await expect(link).toHaveFocus()
    await expect(link).toHaveAttribute('href', '#lager')
    await expect(getComputedStyle(link).textDecorationLine).toContain('underline')
  },
}

/**
 * Gallery-only visual frame. No legacy baseline is mapped: the legacy `rich-text-story` frames
 * render Word-paste HTML that depends on browser UA margins, an IcoMoon bullet font, and 404-ing
 * image paths — all reset/absent under V2's preflight — so a faithful pixel diff isn't reproducible
 * (same class as IntroBlock). See baseline-map note.
 */
export const Visual: Story = {
  args: { richTextContent: sampleContent },
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}
