import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ContentWrapper } from './content-wrapper'
import { spendrupsColorArray } from '../../../styles/themes/types';
import { FlexContainer } from '../flex-container/flex-container';

const meta: Meta<typeof ContentWrapper> = {
  title: 'Design System/Atoms/ContentWrapper',
  component: ContentWrapper,
};

export default meta;
type Story = StoryObj<typeof ContentWrapper>;

const ContentWrapperStoryTemplate: Story = {
  render: (args) => {
    return (
      <ContentWrapper {...args}>
        <div style={{ width: '100%', background: 'lightblue' }}>
          <FlexContainer wrap>
            {Array.from(Array(20)).map(x => (
              <div key={x} style={{ width: '4rem', height: '4rem', backgroundColor: 'lightcoral' }} />
              ))}
          </FlexContainer>
        </div>
      </ContentWrapper>
    )
  }
};

export const ContentWrapperStory = {
  ...ContentWrapperStoryTemplate,
  args: {
    padding: 1
  }
}
