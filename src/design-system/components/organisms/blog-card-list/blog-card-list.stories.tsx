import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BlogCardList } from './blog-card-list'
import {  BlogCardStory_AmericanBeer, 
          BlogCardStory_Pang, 
          BlogCardStory_SummerWine, 
          BlogCardStory_GeorgianWine, 
          BlogCardStory_Suppliers, 
          BlogCardStory_EHandel,
          BlogCardStory_Cooperation,
          BlogCardStory_BrewingFeeling,
          BlogCardStory_BrewInPeace,
          BlogCardStory_DarkLightBeer,
          BlogCardStory_Oranges,
          BlogCardStory_BeerEquipment,
          BlogCardStory_BeerTap,
          BlogCardStoryFullWidth,
          BlogCardStoryMariestad,
          BlogCardStoryPang,
          BlogCardStoryWisby,  } from '../../molecules/blog-card/blog-card.stories'
import { PictureStoryMariestad_Blog } from '../../atoms/picture/picture.stories';

const meta: Meta<typeof BlogCardList> = {
  title: 'Design System/Organisms/BlogCardList',
  component: BlogCardList
};

export default meta;
type Story = StoryObj<typeof BlogCardList>;

const BlogCardListStoryTemplate: Story = {
  render: ( args ) => (
    <div style={{ margin: '0 auto', maxWidth: '1800px' }}>
      <BlogCardList blogCards={args.blogCards} title={args.title}/>
    </div>
  )
};

const cardList = [
  BlogCardStory_AmericanBeer.args, 
  BlogCardStory_Pang.args, 
  BlogCardStory_SummerWine.args, 
  BlogCardStory_GeorgianWine.args, 
  BlogCardStory_Suppliers.args, 
  BlogCardStory_EHandel.args,
  BlogCardStory_Cooperation.args,
  BlogCardStory_BrewingFeeling.args,
  BlogCardStory_BrewInPeace.args,
  BlogCardStory_DarkLightBeer.args,
  BlogCardStory_Oranges.args,
  BlogCardStory_BeerEquipment.args,
  BlogCardStory_BeerTap.args,
]

const oneCardList = [
  BlogCardStoryFullWidth.args
]

const whySpendrupsList = [
  BlogCardStory_AmericanBeer.args, 
  BlogCardStory_Pang.args, 
  BlogCardStory_SummerWine.args, 
  BlogCardStory_GeorgianWine.args,
]

const spendrupsCooperation = [
  BlogCardStory_Suppliers.args, 
  BlogCardStory_EHandel.args,
  BlogCardStory_Cooperation.args,
]

const spendrupsBrewing = [
  BlogCardStory_BrewingFeeling.args,
  BlogCardStory_BrewInPeace.args,
  BlogCardStory_DarkLightBeer.args,
]

const spendrupsEquipment = [
  BlogCardStory_Oranges.args,
  BlogCardStory_BeerEquipment.args,
  BlogCardStory_BeerTap.args,
]

const brandPromoPage_Blog = [
  BlogCardStoryMariestad.args,
  BlogCardStoryWisby.args,
  BlogCardStoryPang.args,
]

export const BlogCardListStory_Fullwidth = {
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: oneCardList
  }
}

export const BlogCardListStory_VarförSpendrups = {
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Varför Spendrups',
    blogCards: whySpendrupsList
  }
}

export const BlogCardListStory_Samarbete = {
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsCooperation
  }
}

export const BlogCardListStory_Brewing = {
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsBrewing
  }
}

export const BlogCardListStory_Equipmemt = {
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsEquipment
  }
}

export const BlogCardListStory_Likande_Varumarken = {
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Likande varumärken',
    blogCards: brandPromoPage_Blog
  }
}
