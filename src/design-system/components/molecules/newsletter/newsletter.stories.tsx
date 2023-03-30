import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Newsletter } from './newsletter'

const meta: Meta<typeof Newsletter> = {
    title: 'Design System/Molecules/Newsletter',
    component: Newsletter
}
  
export default meta;
type Story = StoryObj<typeof Newsletter>

const NewsletterTemplate: Story = {
    render: (args) =>  {
        const [isFocused, setIsFocused] = useState<boolean>(false)
        const [inputValue, setInputValue] = useState<string>(args.inputValue)
        const [isErroneous, setIsErroneous] = useState<boolean>(false)

        const signupForNewsletter = (email: string) => {
            alert(`You signed up for Spendrups newsletter, with email: ${email}`);
        }

        return (
            <Newsletter
                id={args.id}
                inputValue={inputValue}
                setInputValue={setInputValue}
                isErroneous={isErroneous}
                setIsFocused={setIsFocused}
                setIsErroneous={setIsErroneous}
                placeholder={args.placeholder}
                signupForNewsletter={signupForNewsletter}
            />
        )
    }
}

export const NewsletterStory= {
    ...NewsletterTemplate,
    args: { 
        id: 'newsletterId',
        disabled: false,
        inputValue: '',
        placeholder: 'Skriv din email address'
    }
}
