import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InfoSummaryBox } from './info-summary-box'
import { Text } from '../../atoms/text/text'
import { OrderItem } from '../order-item/order-item'
import { OrderItem_MinaOrdrar_1, OrderItem_MinaOrdrar_2, OrderItem_Sommarfest, OrderItem_Vinterfest } from '../order-item/order-item.stories'

const meta: Meta<typeof InfoSummaryBox> = {
  title: 'Design System/Molecules/InfoSummaryBox',
  component: InfoSummaryBox
}

export default meta;
type Story = StoryObj<typeof InfoSummaryBox>

const InfoSummaryBoxStoryTemplate: Story = {
    render: ({...args}) => {
        return(
            <div style={{ margin: '3rem auto', maxWidth: '1800px' }}>
                <InfoSummaryBox {...args}/>
            </div>
        )
    }
}

const itemsListAdministrator = (
    <>
        <Text weight='bold'>Administratör</Text>
        <Text>Jon Jonsson</Text>
        <Text>Granängsringen 3, 135 44, Tyresö</Text>
    </>
)

const itemsListBestallare = (
    <>
        <Text weight='bold'>Beställare</Text>
        <Text borderBottom>Lisbeth Jonsson</Text>
        <Text borderBottom>Sture Jonsson</Text>
        <Text borderBottom>Steven Stevenson</Text>
        <Text>Bobby Granlund</Text>
    </>
)

const itemsListInkopslistor = (
    <>
        <OrderItem {...OrderItem_Sommarfest.args}></OrderItem>
        <OrderItem {...OrderItem_Vinterfest.args}></OrderItem>
    </>
)

const itemsListMinaOrdrar = (
    <>
        <OrderItem {...OrderItem_MinaOrdrar_1.args}></OrderItem>
        <OrderItem {...OrderItem_MinaOrdrar_2.args}></OrderItem>
    </>
)

export const InfoSummaryBoxStory_DinaUppgifter = {
    ...InfoSummaryBoxStoryTemplate,
    args: {
        label: 'Dina uppgifter',
        linkLabel: 'Hantera/Ändra uppgifter',
        onClick: ()=>{},
        children: itemsListAdministrator
    }
}

export const InfoSummaryBoxStory_Anvandare = {
    ...InfoSummaryBoxStoryTemplate,
    args: {
        label: 'Användare',
        linkLabel: 'Hantera',
        onClick: ()=>{},
        children: itemsListBestallare
    }
}

export const InfoSummaryBoxStory_Inkopslistor = {
    ...InfoSummaryBoxStoryTemplate,
    args: {
        label: 'Listor',
        linkLabel: 'Hantera',
        onClick: ()=>{},
        children: itemsListInkopslistor
    }
}

export const InfoSummaryBoxStory_MinaOrdrar = {
    ...InfoSummaryBoxStoryTemplate,
    args: {
        children: itemsListMinaOrdrar
    }
}