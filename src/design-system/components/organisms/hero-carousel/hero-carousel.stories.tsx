import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { HeroCarousel } from './hero-carousel'
import { HeroStoryCenter, HeroStoryLeft1, HeroStoryLeft2, HeroStoryRight } from '../../molecules/hero/hero.stories'

const meta: Meta<typeof HeroCarousel> = {
    title: 'Design System/Organisms/HeroCarousel',
    component: HeroCarousel
};

export default meta;
type Story = StoryObj<typeof HeroCarousel>;

const HeroCarouselStoryTemplate: Story = {
  render: ( args ) => (
    <div style={{ margin: 'auto', maxWidth: '77.5rem' }}>
            <HeroCarousel {...args}/>
        </div>
  )
};

const heroComponentsList = [
    HeroStoryLeft1.args,
    HeroStoryCenter.args,
    HeroStoryLeft2.args,
    HeroStoryRight.args,
  ]

export const HeroCarouselStory = {
    ...HeroCarouselStoryTemplate,
    args: {
        heroComponents: heroComponentsList
    }
}