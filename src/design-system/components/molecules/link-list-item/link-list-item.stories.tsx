import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { LinkListItem } from './link-list-item'
import { Text } from '../../atoms/text/text'
import { TagsList } from '../tags-list/tags-list'
import { Heading, Icon, IconButton } from '../../atoms'
import { GroupWrapper } from '../group-wrapper/group-wrapper'

const meta: Meta<typeof LinkListItem> = {
  title: 'Design System/Molecules/LinkListItem',
  component: LinkListItem,
}

export default meta
type Story = StoryObj<typeof LinkListItem>

const LinkListItemStoryTemplate: Story = {
  render: ({ ...args }) => {
    function handleOnClick() {
      console.log('Button clicked')
    }
    return (
      <div style={{ margin: '3rem auto', maxWidth: '1800px' }}>
        <LinkListItem {...args} onClick={handleOnClick} />
      </div>
    )
  },
}

function getProductTags(tags: Array<any>) {
  return tags.map((tag) => {
    return {
      text: tag.Text,
      shape: tag.Shape ? tag.Shape : 'rectangular',
      color: tag.Class,
    }
  })
}

const orderTags = [
  {
    Text: 'Senast beställd: 2022-06-01',
    Class: 'grey',
    ExternalId: '10751',
  },
]

const orderTags_1 = [
  {
    Text: '2022-06-01',
    Class: 'grey',
    ExternalId: '10751',
  },
  {
    Text: 'Packas',
    Class: 'yellow',
    ExternalId: '10752',
  },
]

const orderTags_2 = [
  {
    Text: '2022-05-28',
    Class: 'grey',
    ExternalId: '10751',
  },
  {
    Text: 'Skickas',
    Class: 'blue',
    ExternalId: '10752',
  },
]

const summaryItemArgs_Sommarfest = (
  <>
    <TagsList tagsList={getProductTags(orderTags)} />
    <Heading order={4}>Sommmarfest</Heading>
    <Text>Leverad: 2022-06-07</Text>
    <Text>22 artiklar</Text>
  </>
)

const summaryItemArgs_Vinterfest = (
  <>
    <TagsList tagsList={getProductTags(orderTags)} />
    <Heading order={4}>Vinterfest</Heading>
    <Text>Leverad: 2022-05-01</Text>
    <Text>18 artiklar</Text>
  </>
)

const summaryItemArgs_MinSenasteOrder = (
  <>
    <Heading order={4}>Order nummer: 1423569</Heading>
    <Text>22 artiklar</Text>
  </>
)

const summaryItemArgs_MinaOrdrar_1 = (
  <>
    <TagsList tagsList={getProductTags(orderTags_1)} />
    <Heading order={4}>Order nummer: 1423569</Heading>
    <Text>Beräknad leverans: 2022-06-07</Text>
    <Text>22 artiklar</Text>
  </>
)

const summaryItemArgs_MinaOrdrar_2 = (
  <>
    <TagsList tagsList={getProductTags(orderTags_2)} />
    <Heading order={4}>Order nummer: 1423568</Heading>
    <Text>Beräknad leverans: 2022-06-03</Text>
    <Text>12 artiklar</Text>
  </>
)

export const LinkListItemStory_Order_Processing = {
  ...LinkListItemStoryTemplate,
  args: {
    date1: '2023-06-01',
    date2: '2023-06-07',
    status: 'status-progress',
    title: 'Order nummer: 1423569',
    children: <Text>22 artiklar</Text>,
    linkUrl: '/link-to-somewhere',
    linkComponent: 'a',
  },
}

export const LinkListItemStory_Order_Delivered = {
  ...LinkListItemStoryTemplate,
  args: {
    date1: '2023-06-01',
    date2: '2023-06-07',
    status: 'status-delivered',
    title: 'Order nummer: 1423569',
    children: <Text>22 artiklar</Text>,
    linkUrl: '/link-to-somewhere',
    linkComponent: 'a',
  },
}

export const LinkListItemStory_PurchaseListItem = {
  ...LinkListItemStoryTemplate,
  args: {
    title: 'List namn: Absolutely new list',
    children: (
      <GroupWrapper>
        <Text>22 produkter</Text>
        <Icon icon={'icon-message-circle'}></Icon>
      </GroupWrapper>
    ),
    linkUrl: '/link-to-somewhere',
    linkComponent: 'a',
  },
}

export const LinkListItemStory_BonusListItem = {
  ...LinkListItemStoryTemplate,
  args: {
    title: 'Bonusavstämning.pdf',
    children: <Text>B9150</Text>,
    linkUrl: '/link-to-download',
    linkComponent: 'a',
  },
}

export const LinkListItemStory_InvoiceListItem = {
  ...LinkListItemStoryTemplate,
  args: {
    title: 'Fakturanr. 217101725',
    date1: '2023-06-01',
    children: (
      <GroupWrapper align="center">
        <Text>Fakturabelopp: 3192kr</Text>
        <Text>Betalt belopp: 0kr</Text>
        <Text>Kvar att betala: 3192kr</Text>
        <IconButton icon={'icon-file'} isLink={false} size={'large'} onClick={() => console.log('Download invoice pdf clicked')}></IconButton>
      </GroupWrapper>
    ),
    linkUrl: '/link-to-download',
    linkComponent: 'a',
  },
}
