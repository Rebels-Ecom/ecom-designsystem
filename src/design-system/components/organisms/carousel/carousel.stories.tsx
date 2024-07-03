import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from './carousel'
import { ArticleList } from '../';
import { Default } from '../article-list/article-list.stories';
import { IArticleList } from '../article-list/article-list';

const meta: Meta<typeof Carousel> = {
  title: 'Design System/Organisms/Carousel',
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const CarouselStoryTemplate: Story = {
  render: (args) => {
    return (
      <>
        <ArticleList {...Default.args} swipe />
      </>
    )
  }
};

export const CarouselStory = {
  ...CarouselStoryTemplate,
}
