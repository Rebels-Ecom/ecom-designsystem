import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { UiDatePicker } from './ui-date-picker'
import { deliveryDays } from './dummy-delivery-dates'

const meta: Meta<typeof UiDatePicker> = {
  title: 'Design System/Atoms/UiDatePicker',
  component: UiDatePicker,
}

export default meta
type Story = StoryObj<typeof UiDatePicker>

const UiDatePickerStoryTemplate: Story = {
  render: ({ ...args }) => {
    function setSelectedDate(date: Date) {
      console.log(`Trigger set delivery day - ${date.toISOString().split('T')[0]}`)
    }

    return (
      // <div style={{ margin: '2rem auto auto auto', width: '100%', display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
      <UiDatePicker {...args} onDateSelected={setSelectedDate} />
      // </div>
    )
  },
}

function getDates(dates: any) {
  return dates.map((date: any) => {
    return new Date(date.Time)
  })
}

export const UiDatePickerStory = {
  ...UiDatePickerStoryTemplate,
  args: {
    buttonLabel: 'Beställ inom 15 timmar för leverans om 2 dagar',
    selectedDeliveryDate: deliveryDays.SelectedDeliveryDate.toString(),
    deliveryDates: getDates(deliveryDays.DeliveryDates),
    holidayDates: getDates(deliveryDays.HollidayDates),
  },
}

export const UiDatePickerStoryDateLabel = {
  ...UiDatePickerStoryTemplate,
  args: {
    buttonLabel: '2023/11/27',
    selectedDeliveryDate: deliveryDays.SelectedDeliveryDate.toString(),
    deliveryDates: getDates(deliveryDays.DeliveryDates),
    holidayDates: getDates(deliveryDays.HollidayDates),
    showDateLabel: true,
  },
}
