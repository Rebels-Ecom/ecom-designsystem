import React from 'react'
import type { Meta } from '@storybook/react'
import { Standard_Header } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { HeroCarouselStory } from '../../organisms/hero-carousel/hero-carousel.stories'
import { ContentWrapper, FlexContainer, MaxWidth } from '../../layouts'
import { Footer, RichText } from '../../organisms'
import { Heading, Picture, Text } from '../../atoms'
import { PictureStory, PictureStoryManBrewer, PictureStoryWomanBrewer } from '../../atoms/picture/picture.stories'
import { BoxWrapper, GroupWrapper, ProductCard } from '../../molecules'
import { ProductCardStory_Horizontal } from '../../molecules/product-card/product-card.stories'

const meta: Meta = {
  title: 'Design System/Templates/InspirationPage',
  parameters: {
    controls: {
      exclude:/.*/g,
      hideNoControlsWarning: true
    },
  },
}

export default meta

// GUIDELINE for how to structure an inspiration page
const InspirationPageStoryTemplate = {
  render: ({ ...args }) => (
    <>
      {args.header()}
      <ContentWrapper>
        <FlexContainer flexDirection='column' gap={3}>
          <MaxWidth contentMaxWidth='text' >
            <Heading order={2} children='Avec att uppleva och uppskatta' align='center' margin={[1, 0]} />
            <Text align='center' children={'ÄR DET DAGS ATT UPPDATERA AVECUTBUDET? I SÅ FALL HAR DU HITTAT RÄTT. HÄR GER VI DIG TIPS UR SORTIMENTET ATT ERBJUDA GÄSTER SOM SÖKER NÅGOT EXTRA VÄRMANDE I HÖST OCH VINTER.'} />
          </MaxWidth>
          <Picture {...PictureStoryManBrewer.args} loading='eager' decoding='auto' fetchPriority='auto' />
          <FlexContainer flexDirection='column' gap={1}>
            <MaxWidth contentMaxWidth='text' noPadding>
              <Text children="ROM" />
              <Heading children="En extraordinär rom till choklad" order={5} margin={[0.5, 0, 1]} />
              <Text children="Plantation XO 20th Anniversary består av olika rom i en blend av det bästa och äldsta, från Barbados, som producenten har att erbjuda. Denna uppskattade rom har lagrats på bourbonfat mellan 8 och 15 år, därefter ytterligare mellan 2 och 10 år på cognacsfat. Resultatet ger en fyllig smak av mango tillsammans med bland annat arrak, vanilj och marsipan. Detta är en avec som kommer bli bästa kompis med menyns mörka choklad." />
            </MaxWidth>
            <BoxWrapper position='left' align='left' noMargin hasMaxWidth={false} padding={1}>
              <ProductCard {...ProductCardStory_Horizontal.args} />
            </BoxWrapper>
            <BoxWrapper position='left' align='left' noMargin hasMaxWidth={false} padding={1}>
              <ProductCard {...ProductCardStory_Horizontal.args} />
            </BoxWrapper>
            <MaxWidth contentMaxWidth='text' noPadding>
              <Picture {...PictureStory.args} loading='eager' decoding='auto' fetchPriority='auto' />
            </MaxWidth>
          </FlexContainer>
          <FlexContainer flexDirection='column' gap={1}>
          <MaxWidth contentMaxWidth='text' noPadding>
              <Text children="ROM" />
              <Heading children="En extraordinär rom till choklad" order={5} margin={[0.5, 0, 1]} />
              <Text children="Plantation XO 20th Anniversary består av olika rom i en blend av det bästa och äldsta, från Barbados, som producenten har att erbjuda. Denna uppskattade rom har lagrats på bourbonfat mellan 8 och 15 år, därefter ytterligare mellan 2 och 10 år på cognacsfat. Resultatet ger en fyllig smak av mango tillsammans med bland annat arrak, vanilj och marsipan. Detta är en avec som kommer bli bästa kompis med menyns mörka choklad." />
            </MaxWidth>
            <BoxWrapper position='left' align='left' noMargin hasMaxWidth={false} padding={1}>
              <ProductCard {...ProductCardStory_Horizontal.args} />
            </BoxWrapper>
            <MaxWidth contentMaxWidth='text' noPadding>
              <Picture {...PictureStoryWomanBrewer.args} loading='eager' decoding='auto' fetchPriority='auto' />
            </MaxWidth>
          </FlexContainer>
        </FlexContainer>
      </ContentWrapper>
      <Footer {...args.footer} />
    </>
  ),
}

export const InspirationPageTemplateStory = {
  ...InspirationPageStoryTemplate,
  args: {
    header: Standard_Header.render,
    hero: HeroCarouselStory.args,
    footer: FooterStory.args,
  },
}
