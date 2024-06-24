import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ITable, Table } from './table'
import { ContentWrapper } from '../../layouts'

const meta: Meta<typeof Table> = {
  title: 'Design System/Atoms/Table',
  component: Table,
  parameters: {
    controls: { exclude: ['listItems'] },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const TableStoryTemplate: Story = {
  render: (args) => {
    return (
      <ContentWrapper>
        <Table {...args} />
      </ContentWrapper>
    )
  }
};

export const TableStory = {
  ...TableStoryTemplate,
  args: {
    listItems: [
      {
        name: 'Name 1',
        status: 'OK',
        id: '1',
        "icon": {
          icon: 'icon-alert-circle',
          onClick: () => console.log('clicked'),
          type: 'button',
        },
        "icon2": {
          icon: 'icon-alert-circle',
          onClick: () => console.log('clicked'),
          type: 'button',
        },
      },
      {
        name: 'Name 2',
        status: 'IN PROGRESS',
        id: '2',
        "icon": {
          icon: 'icon-alert-circle',
          onClick: () => console.log('clicked'),
          type: 'button',
        },
      },
      {
        name: 'Name 3',
        status: 'DONE',
        id: '3',
        "icon": {
          icon: 'icon-alert-circle',
          onClick: () => console.log('clicked'),
          type: 'button',
        }
      },
      {
        name: 'Name 4',
        status: 'DONE',
        id: '4',
        "icon": {
          icon: 'icon-alert-circle',
          onClick: () => console.log('clicked'),
          type: 'button',
        }
      },
      {
        name: 'Name 5',
        status: 'DONE',
        id: '5',
        "icon": {
          icon: 'icon-alert-circle',
          onClick: () => console.log('clicked'),
          type: 'button',
        }
      },
      {
        name: 'Name 6',
        status: 'DONE',
        id: '6',
        "icon": {
          icon: 'icon-alert-circle',
          onClick: () => console.log('clicked'),
          type: 'button',
        }
      },
    ],
    hideColumnTitles: false,
    equalWidthColumns: false,
    listGap: 0,
  } as ITable
}

export const TableStoryTwo = {
  ...TableStoryTemplate,
  args: {
    listItems: [
      { animal: 'Dog', breed: 'Golden Retriever', id: '1' },
      { animal: 'Dog', breed: 'German Shepherd', id: '2' },
      { animal: 'Dog', breed: 'English Setter', id: '3' },
    ],
    hideColumnTitles: false,
    equalWidthColumns: false,
    listGap: 0,
  } as ITable
}
