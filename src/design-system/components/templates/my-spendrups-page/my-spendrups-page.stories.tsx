import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MySpendrupsPage } from './my-spendrups-page'
import { HeaderStory_Logged_In_User } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { BoxWrapperStory_MinSenasteOrder, BoxWrapperStory_MinaFavoriter, BoxWrapperStory_MinaOrdrar, BoxWrapperStory_MittSpendrups, BoxWrapperStory_ÖvrigaOrderTjänster, BoxWrapperStory_ÖvrigaTjänster } from '../../molecules/box-wrapper/box-wrapper.stories'

const meta: Meta<typeof MySpendrupsPage> = {
  title: 'Design System/Templates/MySpendrupsPage',
  component: MySpendrupsPage,
}

export default meta
type Story = StoryObj<typeof MySpendrupsPage>

const MySpendrupsPageStoryTemplate: Story = {
  render: ({ ...args }) => <MySpendrupsPage {...args} />,
}

export const MySpendrupsPageTemplateStory = {
  ...MySpendrupsPageStoryTemplate,
  args: {
    header: HeaderStory_Logged_In_User.args,
    boxMittSpendrups: BoxWrapperStory_MittSpendrups.args,
    boxMinaFavoriter: BoxWrapperStory_MinaFavoriter.args,
    boxOvrigaTjanster: BoxWrapperStory_ÖvrigaTjänster.args,
    boxMinSenasteOrder: BoxWrapperStory_MinSenasteOrder.args,
    boxMinaOrdrar: BoxWrapperStory_MinaOrdrar.args,
    boxOvrigaOrderTjanster: BoxWrapperStory_ÖvrigaOrderTjänster.args,
    footer: FooterStory.args,
  },
}
