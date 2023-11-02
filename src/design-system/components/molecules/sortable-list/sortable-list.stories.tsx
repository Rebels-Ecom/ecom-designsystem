import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SortableList } from './sortable-list'
import { SortableListItem, ISortableListItem } from '../sortable-list-item/sortable-list-item'
import { SortableListItem_EHandel, SortableListItem_Leverans } from '../sortable-list-item/sortable-list-item.stories'
import { ContentWrapper } from '../../layouts/content-wrapper/content-wrapper'

const meta: Meta<typeof SortableList> = {
  title: 'Design System/Molecules/SortableList',
  component: SortableList,
}

export default meta
type Story = StoryObj<typeof SortableList>

const items = [SortableListItem_EHandel.args, SortableListItem_Leverans.args]

const itemsList = (args: any) => {
  return args?.map((item: ISortableListItem) => <SortableListItem key={Math.random()} {...item}></SortableListItem>)
}

const SortableListStoryTemplate: Story = {
  render: (args) => {
    const sortingOptions = [
      { name: 'Typ', onClickUp: () => console.log('Sort per name descending'), onClickDown: () => console.log('Sort per name ascending') },
      { name: 'Skapad', onClickUp: () => console.log('Sort per date created descending'), onClickDown: () => console.log('Sort per date created ascending') },
      { name: 'Ändrat', onClickUp: () => console.log('Sort per last modified descending'), onClickDown: () => console.log('Sort per last modified ascending') },
    ]
    return (
      <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
        <ContentWrapper>
          <SortableList {...args} sortingOptions={sortingOptions}>
            {args.children}
          </SortableList>
        </ContentWrapper>
      </div>
    )
  },
}

export const SortableListStory = {
  ...SortableListStoryTemplate,
  args: {
    listHeading: 'Reklamation',
    children: itemsList(items),
    withSeparatingLines: true,
  },
}
