import React from 'react'
import { GroupWrapper } from './group-wrapper'
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../../atoms/heading/heading';

const meta: Meta<typeof GroupWrapper> = {
    title: 'Design System/Molecules/GroupWrapper',
    component: GroupWrapper
};

export default meta;
type Story = StoryObj<typeof GroupWrapper>;

const GroupWrapperStoryTemplate: Story = {
    render: ({...args}) => (
        <div style={{ margin: 'auto', maxWidth: '1800px' }}>
            <GroupWrapper {...args}>{args.children}</GroupWrapper>
        </div>
    )
}

export const GroupWrapperStory = {
    ...GroupWrapperStoryTemplate,
    args: {
        children: <Heading order={1}>Heading Component </Heading>,
        position: 'left',
        spacing: 'md', 
        noWrap: true,
    }
}
