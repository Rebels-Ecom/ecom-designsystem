import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { InfoSummaryBox } from './info-summary-box'
import { Text } from '../../atoms/text/text'

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