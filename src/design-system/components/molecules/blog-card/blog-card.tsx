import cx from 'classnames'
import styles from './blog-card.module.css'
import { IPicture } from '../../atoms/picture/picture'
import { ILink } from '../../../../types/links'
import { UILink } from '../../atoms'
import { Picture } from '../../atoms/picture/picture'
import { ITag, Tag } from '../../atoms/tag/tag'
import { RichTextProps } from '../../../../types/other'

export interface IBlogCard {
  image?: IPicture
  tags?: ITag[]
  heading?: string
  text?: string;
  richText?: React.FC<RichTextProps>;
  link?: ILink
  fullWidth?: boolean
  maxChar?: number;
}

function extractContent(s: string) {
  var span = document.createElement('span');
  span.innerHTML = s;
  return span.textContent || span.innerText;
};
    
const BlogCard = ({ image, tags, heading, text, richText, link, fullWidth, maxChar }: IBlogCard) => {
  const extractedRichTextValue = extractContent(text ?? '');
  const trimmedText = maxChar && (extractedRichTextValue?.length ?? 0) > maxChar ? extractedRichTextValue?.substring(0, maxChar).concat('...') : extractedRichTextValue;

  return (
    <div className={cx(styles.blogCard, fullWidth && styles.fullWidth)}>
      {image && (
        <div className={cx(styles.pictureWrapper, fullWidth && styles.smallHeight)}>
          <Picture {...image} classNamePicture={styles.picture} classNameImg={styles.image} />
          {tags?.length && (
            <div className={styles.tags}>
              {tags.map((tag, i) => <Tag key={`${tag.text}-${i}`} {...tag} className={styles.tag} />)}
            </div>
          )}
        </div>
      )}
      <div className={cx(styles.content, {
        [styles.centered]: fullWidth,
        [styles.maxHeight]: !!maxChar,
      })}>
        <div className={styles.textContent}>
          {heading && <h4 className={styles.heading}>{heading}</h4>}
          {trimmedText && <p className={styles.text} dangerouslySetInnerHTML={{ __html: trimmedText }}></p>}
          {richText && richText}
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
