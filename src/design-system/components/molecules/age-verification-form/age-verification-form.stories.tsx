import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../atoms'
import { Modal, AgeVerificationForm, Logotype } from '../../molecules'
import logotype_desktop_horizontal from '../../../../logotypes/Spendrups_logo_horizontal.svg'
import logotype_mobile_vertical from '../../../../logotypes/Spendrups_logo_vertical.svg'
import { FlexContainer } from '../../layouts';

const meta: Meta<typeof AgeVerificationForm> = {
  title: 'Design System/Molecules/Age Verification Form',
  component: AgeVerificationForm,
};

export default meta;
type Story = StoryObj<typeof AgeVerificationForm>;

const AgeVerificationFormStoryTemplate: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);
    const [showError, setShowError] = useState(false);
    return (
      <>
        <Button surface='primary' type='button' onClick={() => setOpen(!open)}>{open ? 'Close' : 'Open'}</Button>
        <Modal open={open} onClose={() => setOpen(false)} hideCloseButton>
          <FlexContainer stretch alignItems='center' justifyContent='center' flexDirection='column' gap={2}>
            <Logotype
              src={logotype_desktop_horizontal}
              alt="logo"
              id="logo"
              sources={[
                { srcset: logotype_mobile_vertical, media: `(max-width: 767px)` },
                { srcset: logotype_desktop_horizontal, media: `(min-width: 768px)` },
              ]}
            />
            <AgeVerificationForm
              actions={[
                {
                  children: 'Jag är under 20 år',
                  surface: 'primary',
                  type: 'button',
                  onClick: () => setShowError(true),
                },
                {
                  children: 'Jag har fyllt 20 år',
                  surface: 'primary',
                  type: 'button',
                  onClick: () => setShowError(false),
                },
              ]}
              title='Title'
              description='description'
              errorMessage={showError ? 'Error message' : undefined}
            />
            </FlexContainer>
        </Modal>
      </>
    )
  }
};

export const AgeVerificationFormStory = {
  ...AgeVerificationFormStoryTemplate,
  args: {}
}
