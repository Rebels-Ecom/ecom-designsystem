import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Table } from './table'

export default {
  title: 'Design System/Atoms/Table',
  component: Table,
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => {
  const data = [
    {
      Salong: 'Salong 1',
      Platser: 123,
      Internet: 'Wi-Fi/Fast',
    },
    {
      Salong: 'Salong 2',
      Platser: 75,
      Internet: 'Wi-Fi/Fast',
    },
    {
      Salong: 'Salong 3',
      Platser: 24,
      Internet: 'Wi-Fi/Fast',
    },
    {
      Salong: 'Salong 4',
      Platser: 100,
      Internet: 'Wi-Fi/Fast',
    },
  ]

  return (
    <>
      <div style={{ width: '100%', marginTop: '2rem', maxWidth: 768 }}>
        <Table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((cell: string, idx: number) => (
                <th key={`${cell}-${idx}`}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={`${row}-${index}`}>
                {Object.values(row).map((cell: string | number, idx: number) => (
                  <td key={`${cell}-${idx}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export const TableStories = Template.bind({})

TableStories.storyName = 'Table'
