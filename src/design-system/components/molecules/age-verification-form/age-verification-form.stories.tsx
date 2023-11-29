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
    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false);
    const handleSubmit = () => {
      console.log('SUBMITTED FROM PARENT')
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setVerified(true);
      }, 3000)
    }
    const handleClose = () => {
      setOpen(false);
      setVerified(false);
    }
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
              label='Ange ålder'
              open={open}
              title='Title'
              description='description'
              onSubmit={handleSubmit}
              loading={loading}
              responseMessage={verified ? {
                title: 'Welcome',
                message: 'You are old enought to enter this website',
                onClose: handleClose,
                closeLabel: 'OK'
              } : undefined}
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
