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

const BlogCard = ({ image, tags, heading, text, richText, link, fullWidth, maxChar }: IBlogCard) => {
  const extractContent = (s: string) => {
    if (typeof document === 'undefined') return;

    const span = document?.createElement('span');
  
    if (span) {
      span.innerHTML = s;
      return span.textContent || span.innerText;
    } else {
      return s;
    }
  };

  const extractedRichTextValue = extractContent(text ?? '');
  const trimmedText = maxChar && (extractedRichTextValue?.length ?? 0) > maxChar ? extractedRichTextValue?.substring(0, maxChar).concat('...') : extractedRichTextValue;

  const renderImage = () => {
    if (!image) {
      return;
    }

    return (
      <div className={cx(styles.pictureWrapper, {[styles.smallHeight]: fullWidth})}>
        <Picture {...image} classNamePicture={styles.picture} classNameImg={styles.image} />
        {tags?.length && (
          <div className={styles.tags}>
            {tags.map((tag, i) => <Tag key={`${tag.text}-${i}`} {...tag} className={styles.tag} />)}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={cx(styles.blogCard, {[styles.fullWidth]: fullWidth})}>
      {image && (
        <>
          {link ? (
            <a href={link.href} target='_self' >
              {renderImage()}
            </a>
          ) :
            renderImage()
          }
        </>
      )}
      {(heading || trimmedText || richText || link?.children) && (
        <div className={cx(styles.content, {
          [styles.centered]: fullWidth,
          [styles.maxHeight]: !!maxChar && (trimmedText || richText),
        })}>
          <div className={cx(styles.textContent, {[styles.richTextContent]: richText})}>
            {heading && (
              <>
                {link ? (
                  <a href={link.href} target='_self' className={cx(styles.heading, styles.headingLink)}>
                    <h4 className={styles.heading}>{heading}</h4>
                  </a>
                ) : <h4 className={styles.heading}>{heading}</h4>}
              </>
            )}
            {trimmedText && <p className={styles.text} dangerouslySetInnerHTML={{ __html: trimmedText }}></p>}
            {richText && richText}
          </div>
          {link && (
            <UILink {...link} onSurface={'transparent'} className={styles.link}>
              {link?.children}
            </UILink>
          )}
        </div>
      )}
    </div>
  )
}

export { BlogCard }
