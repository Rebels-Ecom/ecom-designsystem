import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Newsletter } from './newsletter'

export default {
    title: 'Design System/Molecules/Newsletter',
    component: Newsletter
} as ComponentMeta<typeof Newsletter>

const Template: ComponentStory<typeof Newsletter> = (args) => {

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

export const NewsletterStory = Template.bind({})
NewsletterStory.title = 'Newsletter Story'
NewsletterStory.args = {
    id: 'newsletterId',
    disabled: false,
    inputValue: '',
    placeholder: 'Skriv din email address',
}
