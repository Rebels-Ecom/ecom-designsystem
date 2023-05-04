import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DeliveryForm } from './delivery-form'

const meta: Meta<typeof DeliveryForm> = {
  title: 'Design System/Organisms/DeliveryForm',
  component: DeliveryForm,
}

export default meta
type Story = StoryObj<typeof DeliveryForm>

const DeliveryFormStoryTemplate: Story = {
  render: ({ ...args }) => (
    <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
      <DeliveryForm {...args} />
    </div>
  ),
}

export const DeliveryFormStory = {
  ...DeliveryFormStoryTemplate,
  args: {
    expandButtonText: 'Expandera',
    collapseButtonText: 'Stäng',
    customerInfo: [
      {id: 'restaurantName', value:'Beer Fest', label: 'Restaurangnamn', labelHelperText:'' },
      {id: 'city', value:'Tyresö', label: 'Ort' },
      {id: 'address', value:'Granängsringen 3', label: 'Adress' },
      {id: 'zipcode', value:'135 44', label: 'Postnummer' },
      {id: 'customerId', value:'1234-567890', label: 'Kundnummer' },
      {id: 'contactPerson', value:'135 44', label: 'Kontaktperson', labelHelperText:'(firmatecknaren)' },
      {id: 'email', value:'jon.jonsson@beerfest.com', label: 'Din e-post', labelHelperText: '(firmatecknare, för inloggning med administratörsbehörighet)' },
      {id: 'phone', value:'070 - 133 7700', label: 'Telefonummer' },
    ],
    customerInfoSummaryLabel: 'Dina uppgifter',
    customerInfoSummary: {
      companyName: 'Beer Fest',
      contactPerson: 'Jon Jonsson',
      address: 'Granängsringen 3',
      zipcode: '135 44',
      city: 'Tyresö',
    }
  },
}
