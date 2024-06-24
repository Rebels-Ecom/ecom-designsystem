import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { OrderStatusList } from './order-status-list'
import { Text } from '../../atoms/text/text'
import { TagsList } from '../tags-list/tags-list';
import { Heading } from '../../atoms';

const meta: Meta<typeof OrderStatusList> = {
  title: 'Design System/Deprecated/OrderStatusList',
  component: OrderStatusList
}

export default meta;
type Story = StoryObj<typeof OrderStatusList>

const OrderStatusListStoryTemplate: Story = {
    render: ({...args}) => {
        return(
            <div style={{ margin: '3rem auto', maxWidth: '1800px' }}>
                <OrderStatusList {...args}/>
            </div>
        )
    }
}

const statusList = [
    {
        "Name": "mottagen",
    },
    {
        "Name": "behandlas",
        "Min": 0,
        "Max": 65,
        "Style": "status-progress"
    },
    {
        "Name": "levererad",
        "Min": 66,
        "Max": 69,
        "Style": "status-delivered"
    },
    {
        "Name": "returnerad",
        "Min": 0,
        "Max": 0,
        "Style": "status-returned"
    },
    {
        "Name": "fakturerad",
        "Min": 77,
        "Max": 79,
        "Style": "status-invoice"
    },
    {
        "Name": "makulerad",
        "Min": 80,
        "Max": 99,
        "Style": "status-cancelled"
    }
]

function getStatusList(statusList: Array<any>) {
    return statusList.map((statusItem) => {
        return {
            name: statusItem.Name,
            status: statusItem.Style,
        }
    })
}

export const OrderStatusListStory = {
    ...OrderStatusListStoryTemplate,
    args: {
        orderStatusList: getStatusList(statusList)
    }
}