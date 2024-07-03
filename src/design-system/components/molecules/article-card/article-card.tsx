import cx from 'classnames';
import styles from './article-card.module.css';
import { Picture, UILink } from '../../atoms';
import { ITag, Tag } from '../../atoms/tag/tag';
import { IPicture } from '../../atoms/picture/picture';
import { RichTextProps } from '../../../../types/other';
import { ILink } from '../../../../types/links';
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg';

export type TArticle = {
  image?: IPicture;
  tags?: ITag[];
  heading?: string;
  text?: string;
  richText?: React.FC<RichTextProps>;
  link?: ILink;
  fullWidth?: boolean
  maxChar?: number;
  equalHeights?: boolean;
  asCarouselItem?: boolean;
  type?: 'small' | 'large' | 'full'
}

const ArticleCard = ({
  image,
  tags,
  heading,
  text,
  richText,
  link,
  maxChar,
  type,
  equalHeights,
  fullWidth,
  asCarouselItem
}: TArticle) => {
  const style: { [key: string]: string } = ({
    '--ratio': type === 'large' ? '3/4' : '5/6',
  })

  return (
    <div
      className={cx(styles.articleCard, {
        [styles.equalHeights]: equalHeights,
        [styles.fullWidth]: fullWidth,
        [styles.asCarouselItem]: asCarouselItem,
      })}
      style={style}
    >
      <div className={styles.ratioWrapper}>
        <div
          className={cx(
            styles.imageContainer,
            styles.ratio
          )}
        >
          {image && (
            <>
              {link ? (
                <a
                  href={link.href}
                  target='_self'
                  aria-label={heading ? `Read more about ${heading}` : 'Read more'}
                  className={styles.imageLink}
                >
                  <Picture
                    {...image}
                    classNamePicture={styles.picture}
                    classNameImg={styles.image}
                    fallbackImageUrl={fallbackProductImageUrl}
                  />
                </a>
              ) :
                <Picture
                  {...image}
                  classNamePicture={styles.picture}
                  classNameImg={styles.image}
                />
              }
            </>
          )}
          {!!tags?.length && (
            <div className={styles.tags}>
              {tags.map((tag, i) => <Tag key={`${tag.text}-${i}`} {...tag} className={styles.tag} />)}
            </div>
          )}
        </div>
      </div>
      {(heading || text || richText || link?.children) && (
        <div className={cx(styles.textBlock, {
          [styles.maxHeight]: !!maxChar && (text || richText),
        })}>
          <div className={cx(styles.textContent, {[styles.richTextContent]: richText})}>
            {heading && (
              <>
                {link ? (
                  <a
                    href={link.href}
                    target='_self'
                    className={cx(styles.heading, styles.headingLink)}
                    aria-label={`Read more about ${heading}`}
                  >
                    <h4 className={styles.heading}>{heading}</h4>
                  </a>
                ) : <h4 className={styles.heading}>{heading}</h4>}
              </>
            )}
            {text && <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />}
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

export {
  ArticleCard
}
