import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CookieBar, TCookieBar} from './cookie-bar';

const meta: Meta<typeof CookieBar> = {
  title: 'Design System/Atoms/Cookie Bar',
  component: CookieBar,
};

export default meta;
type Story = StoryObj<typeof CookieBar>;

const CookieBarStoryTemplate: Story = {
  render: (args) => {
    return (
      <>
        <CookieBar {...args} />
      </>
    )
  }
};

export const CookieBarStory = {
  ...CookieBarStoryTemplate,
  args: {
    buttonLabel: 'Jag förstår',
    text: 'Cookies används för att ge en bättre upplevelse av vår webbplats. Läs mer om våra cookies och om hur du kan avböja cookies',
    linkComponent: <a href="#">här.</a>,
  }
}
