import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { IntroBlock } from './IntroBlock'

const meta = {
  title: 'Design System/Molecules/IntroBlock',
  component: IntroBlock,
} satisfies Meta<typeof IntroBlock>

export default meta
type Story = StoryObj<typeof meta>

// The legacy story's rich body relied on the browser's UA margins + global bold-heading rules; V2's
// Tailwind preflight resets those, so the parity frame re-adds equivalent margins/weight inline. The
// legacy lead line was an `<h5>` (a stray heading jumping h1→h5, which axe rejects); it's really
// emphasised body copy, so it renders as bold text — visually identical, no bogus heading in the outline.
const richBody = (
  <section className="text-center" style={{ color: '#000000' }}>
    <p className="font-bold" style={{ fontSize: '20px', margin: '1.67em 0' }}>
      Vi vill stolt presentera våra två nya profilglas, speciellt framtagna för att få varje serverad
      Mariestads att visa sig från sin allra bästa sida.
    </p>
    <p style={{ margin: '1em 0' }}>
      En trevlig ölupplevelse är mer än bara stunden då drycken når smaklökarna. Det är många delar som
      ska falla på plats. Från det första intrycket som ett perfekt upphällt öl med vacker skumkrona ger,
      till smaken av ölets sista droppar. För att helhetsupplevelsen ska få toppbetyg behöver alla
      detaljer ses över. En av dessa detaljer är valet av glas.
    </p>
    <p style={{ margin: '1em 0' }}>
      I samarbete med en av världens främsta glasdesigner presenterar därför Mariestads stolt sina två
      nya profilglas. Dessa är speciellt framtagna och designade för att komplettera och förhöja
      upplevelsen av ett öl från Mariestads.
    </p>
  </section>
)

const ingress =
  'En trevlig ölupplevelse är mer än bara stunden då drycken når smaklökarna. Det är många delar som ska falla på plats. Från det första intrycket som ett perfekt upphällt öl med vacker skumkrona ger, till smaken av ölets sista droppar. För att helhetsupplevelsen ska få toppbetyg behöver alla detaljer ses över. En av dessa detaljer är valet av glas.'

/**
 * Canonical intro block. The play test proves the title is the page `<h1>` and the ingress copy is
 * present.
 */
export const Default: Story = {
  args: {
    title: 'En extraordnär rom till choklad',
    ingress,
    richText: richBody,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('heading', { level: 1, name: 'En extraordnär rom till choklad' }),
    ).toBeInTheDocument()
  },
}

/** Title + ingress only, no rich body. */
export const TitleAndIngress: Story = {
  args: { title: 'En extraordnär rom till choklad', ingress },
}

// Reproduces the legacy `intro-block-story` frame (title + ingress + rich body).
export const Visual: Story = {
  tags: ['visual'],
  args: {
    title: 'En extraordnär rom till choklad',
    ingress,
    richText: richBody,
  },
  parameters: { layout: 'fullscreen' },
  render: (args) => <IntroBlock {...args} />,
}
