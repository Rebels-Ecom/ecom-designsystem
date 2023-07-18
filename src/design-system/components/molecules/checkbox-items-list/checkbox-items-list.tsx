import React from 'react'
import styles from './checkbox-items-list.module.css'
import { IPicture } from '../../atoms/picture/picture'
import { ILink } from '../../../../types/links'
import { UILink } from '../../atoms'
import { Picture } from '../../atoms/picture/picture'
import { ITag, Tag } from '../../atoms/tag/tag'
import cx from 'classnames'

export interface ICheckboxItemsList {
  image?: IPicture
  tag?: ITag
  heading?: string
  text: string
  link?: ILink
  fullWidth?: boolean
}

const CheckboxItemsList = ({ image, tag, heading, text, link, fullWidth }: ICheckboxItemsList) => {
  return (
    <div className={cx(styles.blogCard, fullWidth && styles.fullWidth)}>
      {image && (
        <div className={cx(styles.pictureWrapper, fullWidth && styles.smallHeight)}>
          <Picture {...image} classNamePicture={styles.picture} classNameImg={styles.image} />
          {tag && <Tag {...tag} className={styles.tag}></Tag>}
        </div>
      )}
      <div className={cx(styles.content, fullWidth && styles.centered)}>
        <div>
          {heading && <h4 className={styles.heading}>{heading}</h4>}
          <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
        {link && (
          <UILink {...link} onSurface={'transparent'} size={'default'} className={styles.link}>
            {link?.children}
          </UILink>
        )}
      </div>
    </div>
  )
}

export { CheckboxItemsList }
