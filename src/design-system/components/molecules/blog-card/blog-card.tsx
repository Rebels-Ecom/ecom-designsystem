import cx from 'classnames'
import styles from './blog-card.module.css'
import { IPicture } from '../../atoms/picture/picture'
import { ILink } from '../../../../types/links'
import { UILink } from '../../atoms'
import { Picture } from '../../atoms/picture/picture'
import { ITag, Tag } from '../../atoms/tag/tag'

export interface IBlogCard {
  image?: IPicture
  tag?: ITag
  heading?: string
  text: string
  link?: ILink
  fullWidth?: boolean
  maxChar?: number;
}

const BlogCard = ({ image, tag, heading, text, link, fullWidth, maxChar }: IBlogCard) => {
  const trimmedText = maxChar && text.length > maxChar ? text.substring(0, maxChar).concat('...') : text;

  return (
    <div className={cx(styles.blogCard, fullWidth && styles.fullWidth)}>
      {image && (
        <div className={cx(styles.pictureWrapper, fullWidth && styles.smallHeight)}>
          <Picture {...image} classNamePicture={styles.picture} classNameImg={styles.image} />
          {tag && <Tag {...tag} className={styles.tag}></Tag>}
        </div>
      )}
      <div className={cx(styles.content, {
        [styles.centered]: fullWidth,
        [styles.maxHeight]: !!maxChar,
      })}>
        <div className={styles.textContent}>
          {heading && <h4 className={styles.heading}>{heading}</h4>}
          <p className={styles.text} dangerouslySetInnerHTML={{ __html: trimmedText }}></p>
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

export { BlogCard }
