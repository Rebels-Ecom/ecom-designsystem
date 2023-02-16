import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { useState, useRef } from 'react'
import { Dialog } from './dialog'
import { Button } from '../../atoms/button/button'
import { InputText, Textarea } from '../../atoms'
import { FormGroup } from '../../molecules/form-group/form-group'

export default {
  title: 'Design System/Molecules/Dialog',
  component: Dialog,
  decorators: [
    (Story, Context) => {
      return (
        <div className={Context.globals.theme}>
          <Story />
        </div>
      )
    },
  ],
} as ComponentMeta<typeof Dialog>

const LightDialogTemplate: ComponentStory<typeof Dialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const insideFocusModalRef = useRef<HTMLInputElement>(null)

  function onClose() {
    setIsOpen(false)
    buttonRef?.current?.focus()
  }

  function onOpen() {
    setIsOpen(true)
  }

  return (
    <div>
      <div>
        <Button type="button" surface="primary" onClick={onOpen} ref={buttonRef}>
          Open Modal
        </Button>
      </div>
      <Dialog {...args} isOpen={isOpen} onClose={onClose} focusableElementInside={insideFocusModalRef} hasPortal={false} theme="light">
        <form style={{ minHeight: '10rem' }}>
          <h2 className="h3" style={{ marginTop: 0 }}>
            We value your opinion
          </h2>
          <FormGroup
            label={'What is your favourite cinema visit through all times?'}
            formElement={InputText}
            formElementProps={{ id: 'input1', value: '', onChange: () => {} }}
            ref={insideFocusModalRef}
          />
          <br />
          <FormGroup label={'What was so special about it?'} formElement={Textarea} formElementProps={{ id: 'input2', value: '', onChange: () => {} }} />
          <div style={{ marginTop: '2rem' }}>
            <span style={{ marginRight: '2rem' }}>
              <Button type="submit" surface="primary" size="small">
                Submit
              </Button>
            </span>
            <Button type="button" surface="secondary" size="small" onClick={onClose}>
              Close
            </Button>
          </div>
        </form>
      </Dialog>
    </div>
  )
}

const DarkDialogTemplate: ComponentStory<typeof Dialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const insideFocusModalRef = useRef<HTMLVideoElement>(null)

  function onClose() {
    setIsOpen(false)
  }

  function onOpen() {
    setIsOpen(true)
  }

  return (
    <>
      <Button type="button" surface="primary" onClick={onOpen} ref={buttonRef}>
        Open Modal
      </Button>
      <Dialog {...args} isOpen={isOpen} onClose={onClose} focusableElementInside={insideFocusModalRef} noPadding hasPortal={false} theme="dark">
        <div style={{ paddingBottom: '56.25%', width: '100%' }}>
          <video controls style={{ position: 'absolute', top: 0, height: '100%', left: 0 }} ref={insideFocusModalRef}>
            <source src="https://trailers.filmstaden.se/asset-bd59494e-d4fb-4699-9d8e-a614c4c3273e/Lidl_juni_1280x720.mp4" />
          </video>
        </div>
      </Dialog>
    </>
  )
}

const args = {
  role: 'dialog',
  hasOverlay: true,
}

export const DialogStoryLight = LightDialogTemplate.bind({})
DialogStoryLight.storyName = 'Light Dialog'

DialogStoryLight.args = args
export const DialogStoryDark = DarkDialogTemplate.bind({})
DialogStoryDark.storyName = 'Dark Dialog'

DialogStoryDark.args = args
