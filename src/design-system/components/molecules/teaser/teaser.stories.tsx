import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Teaser } from './teaser'
import { PictureStoryMoscowMule, PictureStoryPistonHead, PictureStory_Equipment, PictureStory_Teaser_Beer, PictureStory_Teaser_Gin, PictureStory_Teaser_KockensVal } from '../../atoms/picture/picture.stories';
import { TagStoryRectangular_L, TagStoryRectangular_S, TagStoryRound_S } from '../../atoms/tag/tag.stories';
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

export const Teaser_Round = {
    ...TeaserStoryTemplate,
    args: {
        image: PictureStory_Equipment.args,
        imageRound: true,
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

export const Teaser_Square = {
    ...TeaserStoryTemplate,
    args: {
        ...Teaser_Round.args,
        imageRound: false,
        tag: TagStoryRectangular_L.args,
    }
}