import React from 'react'
import type { Meta } from '@storybook/react'
import { Standard_Header } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { BoxWrapperStory_MinSenasteOrder, BoxWrapperStory_MinaFavoriter, BoxWrapperStory_MinaOrdrar, BoxWrapperStory_MittSpendrups, BoxWrapperStory_ÖvrigaOrderTjänster, BoxWrapperStory_ÖvrigaTjänster } from '../../molecules/box-wrapper/box-wrapper.stories'
import { ContentWrapper } from '../../layouts'
import { BoxWrapper, GroupWrapper } from '../../molecules'
import { Footer } from '../../organisms'

const meta: Meta = {
  title: 'Design System/Templates/MySpendrupsPage',
  parameters: {
    controls: {
      exclude:/.*/g,
      hideNoControlsWarning: true
    },
  },
}

export default meta

// GUIDELINE for how to structure a my spendrups page
const MySpendrupsPageStoryTemplate = {
  render: ({ ...args }) => (
    <>
      {args.header && args.header()}
      <ContentWrapper>
        <GroupWrapper direction='default'>
          <GroupWrapper direction='column'>
            <BoxWrapper {...args.boxMittSpendrups} />
            <BoxWrapper {...args.boxMinaFavoriter} />
            <BoxWrapper {...args.boxOvrigaTjanster} />
          </GroupWrapper> 
          <GroupWrapper direction='column'>
            <BoxWrapper {...args.boxMinSenasteOrder} />
            <BoxWrapper {...args.boxMinaOrdrar} />
            <BoxWrapper {...args.boxOvrigaOrderTjanster} />
          </GroupWrapper>
        </GroupWrapper> 
      </ContentWrapper>
      <Footer {...args.footer} />
    </>
  )
}

export const MySpendrupsPageTemplateStory = {
  ...MySpendrupsPageStoryTemplate,
  args: {
    header: Standard_Header.render,
    boxMittSpendrups: BoxWrapperStory_MittSpendrups.args,
    boxMinaFavoriter: BoxWrapperStory_MinaFavoriter.args,
    boxOvrigaTjanster: BoxWrapperStory_ÖvrigaTjänster.args,
    boxMinSenasteOrder: BoxWrapperStory_MinSenasteOrder.args,
    boxMinaOrdrar: BoxWrapperStory_MinaOrdrar.args,
    boxOvrigaOrderTjanster: BoxWrapperStory_ÖvrigaOrderTjänster.args,
    footer: FooterStory.args,
  },
}
