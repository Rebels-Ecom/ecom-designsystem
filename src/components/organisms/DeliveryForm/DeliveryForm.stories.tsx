import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { DeliveryForm } from './DeliveryForm'

const meta = {
  title: 'Design System/Organisms/DeliveryForm',
  component: DeliveryForm,
  parameters: { layout: 'fullscreen' },
  args: {
    expandButtonText: 'Expandera',
    collapseButtonText: 'Stäng',
    customerInfo: [
      { id: 'restaurantName', value: 'Beer Fest', label: 'Restaurangnamn' },
      { id: 'city', value: 'Tyresö', label: 'Ort' },
      { id: 'address', value: 'Granängsringen 3', label: 'Adress' },
      { id: 'zipcode', value: '135 44', label: 'Postnummer' },
      { id: 'customerId', value: '1234-567890', label: 'Kundnummer' },
      { id: 'contactPerson', value: 'Jon Jonsson', label: 'Kontaktperson', labelHelperText: '(firmatecknaren)' },
      {
        id: 'email',
        value: 'jon.jonsson@beerfest.com',
        label: 'Din e-post',
        labelHelperText: '(firmatecknare, för inloggning med administratörsbehörighet)',
      },
      { id: 'phone', value: '070 - 133 7700', label: 'Telefonummer' },
    ],
    customerInfoSummaryLabel: 'Dina uppgifter',
    customerInfoSummary: {
      companyName: 'Beer Fest',
      contactPerson: 'Jon Jonsson',
      address: 'Granängsringen 3',
      zipcode: '135 44',
      city: 'Tyresö',
    },
  },
} satisfies Meta<typeof DeliveryForm>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical: the toggle is a disclosure — collapsed shows the summary; activating reveals the fields. */
export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '1254px', margin: '0 auto' }}>
      <DeliveryForm {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const toggle = canvas.getByRole('button', { name: 'Expandera' })
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await expect(canvas.getByText('Beer Fest')).toBeVisible()

    await userEvent.click(toggle)
    const expanded = canvas.getByRole('button', { name: 'Stäng' })
    await expect(expanded).toHaveAttribute('aria-expanded', 'true')
    // The read-only fields are now reachable and named by their labels.
    await expect(canvas.getByLabelText('Restaurangnamn')).toBeVisible()
  },
}

/** Visual parity — the legacy `delivery-form-story` frame (collapsed summary + toggle). */
export const Visual: Story = {
  tags: ['visual'],
  render: (args) => (
    <div style={{ maxWidth: '1254px', margin: '0 auto' }}>
      <DeliveryForm {...args} />
    </div>
  ),
}
