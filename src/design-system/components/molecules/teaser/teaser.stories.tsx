import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Teaser } from './teaser'
import { PictureStoryPistonHead, PictureStory_Teaser_Beer, PictureStory_Teaser_Gin, PictureStory_Teaser_KockensVal } from '../../atoms/picture/picture.stories';
import { TagStoryRound_S } from '../../atoms/tag/tag.stories';
import { ContentWrapper } from '../../layouts/content-wrapper/content-wrapper'

const meta: Meta<typeof Teaser> = {
    title: 'Design System/Molecules/Teaser',
    component: Teaser
};

export default meta;
type Story = StoryObj<typeof Teaser>;

const TeaserStoryTemplate: Story = {
  render: ({ ...args }) => (
        <ContentWrapper>
            <Teaser {...args} />
            <Teaser {...args} imagePosition='right' />
        </ContentWrapper>
  )
};

export const TeaserStoryLeft1 = {
    ...TeaserStoryTemplate,
    args: {
        image: PictureStoryPistonHead.args,
        imagePosition: 'left',
        imageRound: true,
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
            size: 'large',
            children: 'Boka din plats'
        }
    }
}

export const TeaserStoryRight = {
    ...TeaserStoryTemplate,
    args: {
        image: PictureStory_Teaser_Gin.args,
        imagePosition: 'right',
        tag: TagStoryRound_S.args, 
        tagPosition:'right',
        heading: 'Stockholm bästa gin',
        preamble: 'Skapad på Södermalm i Stockholm',
        text : '<p>I en gammal Jaguarverkstad på Södermalm i Stockholm. Ligger Stockholms Bränneri I den gamla verkstaden skapar dom Stockholms första hantverksgin, inspirerad av vårt nordiska arv. Påverkade av de naturliga men också arkitektoniska elementen i deras omgivning, drivna av nyfikenhet.</p>',
        linkButton: {
            text:'Läs mer',
            href:'#bokningsforfragan',
            linkComponent: 'a',
            title: 'Läs mer',
            surface: 'primary',
            size: 'large',
            children: 'Läs mer'
        }
    }
}

export const TeaserStoryLeft2 = {
    ...TeaserStoryTemplate,
    args: {
        image: PictureStory_Teaser_Beer.args,
        imagePosition: 'left',
        tag: TagStoryRound_S.args, 
        tagPosition:'left',
        heading: 'Mer smak med Melleruds',
        preamble: 'Utmärkt pilsner',
        text : '<p>Melleruds är en modern rejäl svensk lager som förbinder tradition med ett genuint hantverkskunnande. Som alltid är väl avvägd.</p><ul><li>Perfekt som sällskapsdryck</li><li>Med en utsökt beska</li><li>Svensk ljus lager</li><li>Ekologisk</li></ul>',
        linkButton: {
            text:'Boka din plats',
            href:'#bokningsforfragan',
            linkComponent: 'a',
            title: 'Boka din plats',
            surface: 'primary',
            size: 'large',
            children: 'Boka din plats'
        }
    }
}