import React from 'react'
import { Icon, IconButton, IconLink, Placeholder } from '../../atoms'
import styles from './link-list-item.module.css'
import { getOrderStatusTagColor } from '../../../../helpers/tag-helper'
import { Tag, TTagColor } from '../../atoms/tag/tag'
import { TTarget } from '../../../../types/links'

export interface ILinkListItem {
  title: string
  children?: React.ReactNode
  date1?: string
  date2?: string
  status?: string
  linkUrl?: string
  linkComponent: any
  downloadLinkUrl?: string
  target?: TTarget
  onDownloadClick?: () => void
  onClick?: () => void
  onRemove?: () => void
  loading?: boolean;
}

function LinkListItem({
  title,
  children,
  date1,
  date2,
  status,
  linkUrl,
  linkComponent: Link,
  onClick,
  downloadLinkUrl,
  target,
  onDownloadClick,
  onRemove,
  loading,
}: ILinkListItem) {
  return (
    <div className={styles.linkItem}>
      <div className={styles.itemWrapper}>
        <div className={styles.linkContentWrapper}>
          {loading ? (
            <>
              <Placeholder type='heading' />
              <Placeholder type='p_short' />
            </>
          ) : (
            <>
            
          {date1 || date2 ? (
            <div className={styles.tagsWrapper}>
              {date1 && <Tag text={date1} shape={'rectangular'} color={'grey'} />}
              {date2 && <Tag text={date2} shape={'rectangular'} color={status ? getOrderStatusTagColor(status as TTagColor) : 'grey'} />}
              {onDownloadClick && (
                <IconButton
                  type='button'
                  icon='icon-file'
                  onClick={onDownloadClick}
                  size='large'
                  isTransparent
                  noBorder
                  noPadding
                />
              )}
              {downloadLinkUrl && <IconLink href={downloadLinkUrl} linkComponent={Link} target={target} icon={'icon-file'} children={undefined}></IconLink>}
            </div>
          ) : null}
          {linkUrl ? <Link className={styles.linkWrapper} to={linkUrl} href={linkUrl} onClick={onClick} aria-label={`Navigate to ${title}`}>
            <h4 className={styles.title}>{title}</h4>
          </Link> : <h4 className={styles.title}>{title}</h4>}
          {children && <div>{children}</div>}
          </>
          )
        }
        </div>
        {onRemove && <IconButton type='button' icon='icon-trash-2' onClick={onRemove} noBorder noPadding isTransparent className={styles.deleteIcon} />}
        {linkUrl && <Link className={styles.linkWrapper} to={linkUrl} href={linkUrl} onClick={onClick} aria-label={`Navigate to ${title}`}>
          <Icon icon={'icon-chevrons-right'}></Icon>
        </Link>}
      </div>
    </div>
  )
}

export { LinkListItem }
