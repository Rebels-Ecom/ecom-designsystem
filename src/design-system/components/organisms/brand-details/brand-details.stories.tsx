import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { BrandDetails, TBrandDetails } from './brand-details';
import pang from '../../../../assets/blog-images/pang.png'
import { RichTextStory } from '../rich-text/rich-text.stories';

const meta: Meta<typeof BrandDetails> = {
    title: 'Design System/Organisms/Brand Details',
    component: BrandDetails
};

export default meta;
type Story = StoryObj<typeof BrandDetails>;

const BrandDetailsStoryTemplate: Story = {
  render: ({ ...args }) => (
        <BrandDetails {...args}/>
    )
};

export const BrandDetailsStory = {
    ...BrandDetailsStoryTemplate,
    args: {
        title: 'Pang Pang',
        image: {
          url: pang,
          alt: 'Pang Pang'
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        link: {
          text: 'Läs mer',
          url: '#'
        }
    } as TBrandDetails
}
