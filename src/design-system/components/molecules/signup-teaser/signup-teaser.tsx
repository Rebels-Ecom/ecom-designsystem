import React from 'react'
import styles from './signup-teaser.module.css'
import { Button, IButton } from '../../atoms/button/button'
import { Icon, IIcon } from '../../atoms/icon/icon'
import { ILinkButton, LinkButton } from '../../atoms/link-button/link-button'

export interface ISignupTeaser {
    heading: string
    shoppingListButton: IButton
    favoriteButton: IButton
    richText: string
    icon?: IIcon
    signupLink: ILinkButton
}

function SignupTeaser({ heading, shoppingListButton, favoriteButton, richText, signupLink} : ISignupTeaser) {
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
        {signupLink && <LinkButton {...signupLink} surface={'primary'} />}
    </div>
  )
}

export { SignupTeaser }