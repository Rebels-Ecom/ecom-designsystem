import React from 'react'
import styles from './toast.module.css'
import { Icon, IIcon } from '../../atoms/icon/icon'
import { ILinkButton, LinkButton } from '../../atoms/link-button/link-button'
import { notifications } from '@mantine/notifications'
import { GroupWrapper } from '../group-wrapper/group-wrapper'
import { Button } from '@mantine/core'

export interface IToast {
}

function Toast() {
    return (
        <GroupWrapper position="center">
          <Button 
            onClick={() => notifications.show({
                title: 'Default notification',
                message: 'Hey there, your code is awesome! 🤥',
            })}>
            Show notification
          </Button>
        </GroupWrapper>
      )
}

export { Toast }