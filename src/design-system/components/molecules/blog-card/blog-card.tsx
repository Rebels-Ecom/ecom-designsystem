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
}

const BlogCard = ({ image, tag, heading, text, link, fullWidth }: IBlogCard) => {
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
          {heading && <h2 className={styles.heading}>{heading}</h2>}
          <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
        {link && <UILink {...link} onSurface={'transparent'} size={'default'} className={styles.link} />}
      </div>
    </div>
  )
}

export { BlogCard }
