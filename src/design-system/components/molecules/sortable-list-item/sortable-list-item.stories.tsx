import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SortableListItem } from './sortable-list-item'
import { Text } from '../../atoms/text/text'
import { Heading } from '../../atoms'
import { GroupWrapper } from '../group-wrapper/group-wrapper'

const meta: Meta<typeof SortableListItem> = {
  title: 'Design System/Molecules/SortableListItem',
  component: SortableListItem,
}

export default meta
type Story = StoryObj<typeof SortableListItem>

const SortableListItemStoryTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <div style={{ margin: '3rem auto', maxWidth: '1800px' }}>
        <SortableListItem {...args} onClick={() => console.log('Open the modal')} />
      </div>
    )
  },
}

const itemEHandel = (
  <>
    <GroupWrapper direction="column">
      <Heading order={5} noMargin>
        E-HANDELSFRÅGOR
      </Heading>
      <Text>Hej, vi testar för att se var den här infon syns</Text>
    </GroupWrapper>
    <Text>23/09/04</Text>
    <Text>23/09/05</Text>
  </>
)

const itemLeverans = (
  <>
    <GroupWrapper direction="column" spacing={'xs'}>
      <Heading order={5} noMargin>
        FRÅGA OM LEVERANS
      </Heading>
      <Text>Test test</Text>
    </GroupWrapper>
    <Text>23/09/04</Text>
    <Text>23/09/05</Text>
  </>
)

export const SortableListItem_EHandel = {
  ...SortableListItemStoryTemplate,
  args: {
    children: itemEHandel,
    onClick: () => console.log('Open the modal'),
  },
}

export const SortableListItem_Leverans = {
  ...SortableListItemStoryTemplate,
  args: {
    children: itemLeverans,
    onClick: () => console.log('Open the modal'),
  },
}
