import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { OrderItem } from './order-item'
import { Text } from '../../atoms/text/text'
import { TagsList } from '../tags-list/tags-list';
import { Heading } from '../../atoms';

const meta: Meta<typeof OrderItem> = {
  title: 'Design System/Molecules/OrderItem',
  component: OrderItem
}

export default meta;
type Story = StoryObj<typeof OrderItem>

const OrderItemStoryTemplate: Story = {
    render: ({...args}) => {
        return(
            <div style={{ margin: '3rem auto', maxWidth: '1800px' }}>
                <OrderItem {...args}/>
            </div>
        )
    }
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
        "Text": "Senast beställd: 2022-06-01",
        "Class": "grey",
        "ExternalId": "10751"
    }
]

const orderTags_1 = [
    {
        "Text": "2022-06-01",
        "Class": "grey",
        "ExternalId": "10751"
    },
    {
        "Text": "Packas",
        "Class": "yellow",
        "ExternalId": "10752"
    }
]

const orderTags_2 = [
    {
        "Text": "2022-05-28",
        "Class": "grey",
        "ExternalId": "10751"
    },
    {
        "Text": "Skickas",
        "Class": "blue",
        "ExternalId": "10752"
    }
]

const summaryItemArgs_Sommarfest = (
    <>
        <TagsList tagsList={getProductTags(orderTags)}/>
        <Heading order={4}>Sommmarfest</Heading>
        <Text>Leverad: 2022-06-07</Text>
        <Text>22 artiklar</Text>
    </>
)

const summaryItemArgs_Vinterfest = (
    <>
        <TagsList tagsList={getProductTags(orderTags)}/>
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
        <TagsList tagsList={getProductTags(orderTags_1)}/>
        <Heading order={4}>Order nummer: 1423569</Heading>
        <Text>Beräknad leverans: 2022-06-07</Text>
        <Text>22 artiklar</Text>
    </>
)

const summaryItemArgs_MinaOrdrar_2 = (
    <>
        <TagsList tagsList={getProductTags(orderTags_2)}/>
        <Heading order={4}>Order nummer: 1423568</Heading>
        <Text>Beräknad leverans: 2022-06-03</Text>
        <Text>12 artiklar</Text>
    </>
)

export const OrderItemStory_Processing = {
    ...OrderItemStoryTemplate,
    args: {
        orderDate: '2023-06-01',
        deliveryDate: '2023-06-07',
        orderStatus: 'status-progress',
        title: 'Order nummer: 1423569',
        children: <Text>22 artiklar</Text>,
        linkUrl: '/link-to-somewhere',
        linkComponent: 'a'
    }
}

export const OrderItemStory_Delivered = {
    ...OrderItemStoryTemplate,
    args: {
        orderDate: '2023-06-01',
        deliveryDate: '2023-06-07',
        orderStatus: 'status-delivered',
        title: 'Order nummer: 1423569',
        children: <Text>22 artiklar</Text>,
        linkUrl: '/link-to-somewhere',
        linkComponent: 'a'
    }
}

export const OrderItem_Sommarfest = {
    ...OrderItemStoryTemplate,
    args: {
        children: summaryItemArgs_Sommarfest,
        linkUrl: '/link-to-list-details',
        linkComponent: 'a'
    }
}

export const OrderItem_Vinterfest = {
    ...OrderItemStoryTemplate,
    args: {
        children: summaryItemArgs_Vinterfest,
        linkUrl: '/link-to-list-details',
        linkComponent: 'a'
    }
}

export const OrderItem_MinSenasteOrder = {
    ...OrderItemStoryTemplate,
    args: {
        children: summaryItemArgs_MinSenasteOrder,
        linkUrl: '/link-to-list-details',
        linkComponent: 'a'
    }
}

export const OrderItem_MinaOrdrar_1 = {
    ...OrderItemStoryTemplate,
    args: {
        children: summaryItemArgs_MinaOrdrar_1,
        linkUrl: '/link-to-list-details',
        linkComponent: 'a'
    }
}
export const OrderItem_MinaOrdrar_2 = {
    ...OrderItemStoryTemplate,
    args: {
        children: summaryItemArgs_MinaOrdrar_2,
        linkUrl: '/link-to-list-details',
        linkComponent: 'a'
    }
}