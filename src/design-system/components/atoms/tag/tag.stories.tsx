import React from 'react'
import { Tag } from './tag'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Design System/Atoms/Tag',
    component: Tag
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => {
    return(
        <div style={{ margin: '0 auto', maxWidth: '1800px' }}>
            <Tag {...args}/>
        </div>
    )
}

export const TagStoryRectangular_S = Template.bind({});
TagStoryRectangular_S.storyName = 'Tag Story Rectangular Small';
TagStoryRectangular_S.args = {
    text: 'EKO',
    size: 'small',
    shape: 'rectangular'
}

export const TagStoryRectangular_L = Template.bind({});
TagStoryRectangular_L.storyName = 'Tag Story Rectangular Large';
TagStoryRectangular_L.args = {
    text: 'Tillval',
    size: 'large',
    shape: 'rectangular'
}

export const TagStoryRound_S = Template.bind({});
TagStoryRound_S.storyName = 'Tag Story Round Small';
TagStoryRound_S.args = {
    text: 'Kurs',
    size: 'small',
    shape: 'round'
}

export const TagStoryRound_L = Template.bind({});
TagStoryRound_L.storyName = 'Tag Story Round Large';
TagStoryRound_L.args = {
    text: 'Nyhet',
    size: 'large',
    shape: 'round'
    
}
