import React from 'react'
import { Heading, Icon } from '../../atoms'
import styles from './link-list-item.module.css'
import cx from 'classnames'
import { getOrderStatusTagColor } from '../../../../helpers/tag-helper'
import { Tag, TTagColor } from '../../atoms/tag/tag'

export interface ILinkListItem {
  title: string
  children: React.ReactNode
  date1?: string
  date2?: string
  status?: string
  linkUrl?: string
  linkComponent: any
  onClick?: () => void
}

function LinkListItem({ title, children, date1, date2, status, linkUrl, linkComponent: Link, onClick }: ILinkListItem) {
  return (
    <div className={styles.linkItem}>
      {linkUrl ? (
        <div className={styles.itemWrapper}>
          <div className={styles.linkContentWrapper}>
            {date1 || date2 ? (
              <div className={styles.tagsWrapper}>
                {date1 && <Tag text={date1} shape={'rectangular'} color={'grey'} />}
                {date2 && <Tag text={date2} shape={'rectangular'} color={status ? getOrderStatusTagColor(status as TTagColor) : 'grey'} />}
              </div>
            ) : null}
            <Link className={styles.linkWrapper} to={linkUrl} href={linkUrl} onClick={onClick}>
              <h4 className={styles.title}>{title}</h4>
            </Link>
            <div>{children}</div>
          </div>
          <Link className={styles.linkWrapper} to={linkUrl} href={linkUrl} onClick={onClick}>
            <Icon icon={'icon-chevrons-right'}></Icon>
          </Link>
        </div>
      ) : null}
    </div>
  )
}

export { LinkListItem }
