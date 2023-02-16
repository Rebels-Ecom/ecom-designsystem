import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DataTable } from './data-table'

export default {
  title: 'Design System/Molecules/DataTable',
  component: DataTable,
} as ComponentMeta<typeof DataTable>

const Template: ComponentStory<typeof DataTable> = (args) => {
  return (
    <>
      <div style={{ width: '100%', marginTop: '2rem', maxWidth: 768 }}>
        <DataTable {...args} />
      </div>
    </>
  )
}

export const DataTableStory = Template.bind({})

DataTableStory.args = {
  data: [
    {
      Salong: 'Salong 1',
      Platser: 123,
      Ljud: 'Dolby',
      'Ta med mat': 'Ja',
      Internet: 'Wi-Fi/Fast',
    },
    {
      Salong: 'Salong 2',
      Platser: 75,
      Ljud: 'Dolby',
      'Ta med mat': 'Ja',
      Internet: 'Wi-Fi/Fast',
    },
    {
      Salong: 'Salong 3',
      Platser: 24,
      Ljud: 'Dolby',
      'Ta med mat': 'Ja',
      Internet: 'Wi-Fi/Fast',
    },
    {
      Salong: 'Salong 4',
      Platser: 100,
      Ljud: 'Dolby',
      'Ta med mat': 'Ja',
      Internet: 'Wi-Fi/Fast',
    },
  ],
}

DataTableStory.storyName = 'Data Table'
