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
    title: 'Dina leverans uppgifter',
    expandButtonText: 'Expandera',
    collapseButtonText: 'Stäng',
    customerInfoLabel: 'Dina uppgifter',
    customerInfoSummary: '<p><b>Beer Fest</b></p><p>Jon Jonsson</p><p>Granängsringen 3, 135 44, Tyresö</p>',
    restaurantNameLabel: 'Restaurangnamn',
    restaurantName: 'Beer Fest',
    cityLabel: 'Ort',
    city: 'Tyresö',
    addressLabel: 'Adress',
    address: 'Granängsringen 3',
    zipcodeLabel: 'Postnummer',
    zipcode: '135 44',
    customerIdLabel: 'Kundnummer',
    customerId: '1234-567890',
    contactPersonLabel: 'Kontaktperson',
    contactPersonLabelHelperText: '(firmatecknaren)',
    contactPerson: 'Jon Jonsson',
    emailLabel: 'Din e-post',
    emailLabelHelperText: '(firmatecknare, för inloggning med administratörsbehörighet)',
    email: 'jon.jonsson@beerfest.com',
    phoneLabel: 'Telefonummer',
    phone: '070 - 133 7700',
    errorMessage: ''
  },
}
