import React from 'react'
import styles from './signup-teaser.module.css'
import { Button, IButton } from '../../atoms/button/button'
import { Icon, IIcon } from '../../atoms/icon/icon'

export interface ISignupTeaser {
    heading: string
    shoppingListButton: IButton
    favoriteButton: IButton
    richText: string
    icon?: IIcon
    signupButton: IButton
    signUp: React.MouseEventHandler<HTMLButtonElement>
}

function SignupTeaser({ heading, shoppingListButton, favoriteButton, richText, icon, signupButton, signUp} : ISignupTeaser) {
  return (
    <div className={styles.signupTeaser}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.buttonWrapper}>
            <Button {...shoppingListButton} type={'button'} surface={'primary'} rounded >{shoppingListButton.children}</Button>
            <Button {...favoriteButton} type={'button'} surface={'primary'} rounded > {favoriteButton.children}</Button>
        </div>
        <div className={styles.richText}>
            <p dangerouslySetInnerHTML={{ __html: richText }}></p>
            <Icon icon={'icon-heart'}></Icon>
        </div>
        <Button {...signupButton} type={'button'} surface={'primary'} onClick={signUp}>{signupButton.children}</Button>
    </div>
  )
}

export { SignupTeaser }