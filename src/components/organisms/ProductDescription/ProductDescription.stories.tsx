import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { ProductDescription, type ProductDescriptionItem } from './ProductDescription'

const specs = (
  <dl className="mx-auto grid max-w-prose grid-cols-[auto_1fr] gap-x-8 gap-y-2">
    <dt className="font-bold">Producent</dt>
    <dd className="m-0">Wisby Bryggeri</dd>
    <dt className="font-bold">Ursprung</dt>
    <dd className="m-0">Sverige, Gotland</dd>
    <dt className="font-bold">Alkoholhalt</dt>
    <dd className="m-0">5,0 %</dd>
  </dl>
)

const onDownload = fn()

const items: ProductDescriptionItem[] = [
  { id: 'item1', label: 'Beskrivning', icon: 'icon-info', content: specs },
  { id: 'item2', label: 'Ladda ner produktbeskrivning', icon: 'icon-download', onClick: onDownload },
  { id: 'item3', label: 'Spela video', icon: 'icon-play', content: <p className="m-0 text-center">Video</p> },
]

const meta = {
  title: 'Design System/Organisms/ProductDescription',
  component: ProductDescription,
  args: { items },
} satisfies Meta<typeof ProductDescription>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical tabs. The `play` proves the "Beskrivning" button is a disclosure — `aria-expanded` flips
 * and its named `role="region"` panel shows/hides — while the download button is a plain action that
 * fires its handler and exposes no `aria-expanded`.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const description = canvas.getByRole('button', { name: 'Beskrivning' })
    await expect(description).toHaveAttribute('aria-expanded', 'false')
    await expect(canvas.queryByRole('region', { name: 'Beskrivning' })).toBeNull()

    await userEvent.click(description)
    await expect(description).toHaveAttribute('aria-expanded', 'true')
    await expect(canvas.getByRole('region', { name: 'Beskrivning' })).toBeVisible()

    await userEvent.click(description)
    await expect(description).toHaveAttribute('aria-expanded', 'false')

    // Action button: fires its handler, is not a disclosure.
    const download = canvas.getByRole('button', { name: 'Ladda ner produktbeskrivning' })
    await expect(download).not.toHaveAttribute('aria-expanded')
    await userEvent.click(download)
    await expect(onDownload).toHaveBeenCalled()
  },
}

/** Loading state — every button is disabled. */
export const Loading: Story = {
  args: { loading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Beskrivning' })).toBeDisabled()
    await expect(canvas.getByRole('button', { name: 'Spela video' })).toBeDisabled()
  },
}

/*
 * Visual parity — reproduces the legacy `product-description-story`: the three collapsed rounded
 * secondary buttons (Beskrivning / Ladda ner produktbeskrivning / Spela video), centred at `md`+ and
 * full-width-stacked below. No panel is open. No `play` — the captured frame must not mutate.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}
