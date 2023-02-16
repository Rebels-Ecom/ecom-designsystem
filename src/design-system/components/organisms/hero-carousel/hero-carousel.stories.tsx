import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeroCarousel } from './hero-carousel'
import { HeroStoryCenter, HeroStoryLeft, HeroStoryRight } from '../../molecules/hero/hero.stories'

export default {
    title: 'Design System/Organisms/HeroCarousel',
    component: HeroCarousel
} as ComponentMeta<typeof HeroCarousel>

const Template: ComponentStory<typeof HeroCarousel> = (args) => {
    return(
        <div style={{ margin: 'auto', maxWidth: '77.5rem' }}>
            <HeroCarousel {...args}/>
        </div>
    )
}

const heroComponentsList = [
    HeroStoryLeft.args,
    HeroStoryRight.args,
    HeroStoryCenter.args,
    HeroStoryLeft.args,
    HeroStoryRight.args,
  ]

export const HeroCarouselStory = Template.bind({});
HeroCarouselStory.storyName = 'Hero Carousel'
HeroCarouselStory.args = {
    heroComponents: heroComponentsList
}