import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Teaser } from './teaser'
import { PictureStory } from '../../atoms/picture/picture.stories';
import { TagStoryRound_S } from '../../atoms/tag/tag.stories';

export default {
    title: 'Design System/Molecules/Teaser',
    component: Teaser
} as ComponentMeta<typeof Teaser>

const Template: ComponentStory<typeof Teaser> = (args) => {
    return(
        <div style={{ margin: '0 auto', maxWidth: '73rem' }}>
            <Teaser {...args}/>
        </div>
    )
}

export const TeaserStoryLeft = Template.bind({});
TeaserStoryLeft.storyName = 'Teaser Left'
TeaserStoryLeft.args = {
    image: PictureStory.args,
    imagePosition: 'left',
    tag: TagStoryRound_S.args, 
    tagPosition:'left',
    heading: 'Kockens naturliga val',
    preamble: 'Utbildningar för din personal',
    text : '<p>Tillsammans med Sveriges främsta vin & ölexperter ger vi dig möjligheten att ta din och dina anställdas kunskaper till nya höjder.</p><ul><li>Lära dig konsten att prova vin</li><li>Vad passar med vad</li><li>Utmana smaklökarna</li><li>Få en djupdykning</li></ul>',
    linkButton: {
        text:'Boka din plats',
        href:'#bokningsforfragan',
        linkComponent: 'a',
        title: 'Boka din plats',
        surface: 'primary',
        size: 'large'
    }
}

export const TeaserStoryRight = Template.bind({});
TeaserStoryRight.storyName = 'Teaser Right'
TeaserStoryRight.args = {
    image: PictureStory.args,
    imagePosition: 'right',
    tag: TagStoryRound_S.args, 
    tagPosition:'right',
    heading: 'Stockholm bästa gin',
    preamble: 'Skapad på Södermalm i Stockholm',
    text : '<p>Framtagen tillsammans med Ludwig Tj&ouml;rnemo. Fyller p&aring; med text f&ouml;r att se hur det blir visuellt p&aring; sidan. Fyller p&aring; med mer text f&ouml;r att se hur det blir</p><ul><li>test1</li><li>test2</li><li>test3</li></ul>',
    linkButton: {
        text:'Läs mer',
        href:'#bokningsforfragan',
        linkComponent: 'a',
        title: 'Läs mer',
        surface: 'primary',
        size: 'large'
    }
}