import cx from 'classnames'
import { ILinkButton, LinkButton } from '../../atoms/link-button/link-button'
import { IPicture, Picture, TPictureFetchPriority, TPictureLoading } from '../../atoms/picture/picture'
import { IVideo, Video } from '../../atoms/video/video'
import styles from './hero.module.css'
import { ContentWrapper } from '../../layouts'

export type alignContent = 'left' | 'right' | 'center'
export type heroTheme = 'light' | 'dark'

export interface IHero {
  image: IPicture
  fallbackImageUrl?: string
  video?: IVideo
  contentImage?: IPicture
  topHeading?: string
  heading: string
  preamble?: string
  alignContent?: alignContent
  link?: ILinkButton
  secondaryLink?: ILinkButton
  heroTheme?: heroTheme
  fetchPriority?: TPictureFetchPriority
  loading?: TPictureLoading
  isVideo?: boolean
}

function getAlignContent(alignContent: string = 'left'): string {
  return styles[`content-${alignContent}`]
}

const Hero = ({
  topHeading,
  heading,
  preamble,
  image,
  video,
  contentImage,
  alignContent,
  link,
  secondaryLink,
  heroTheme,
  fetchPriority,
  loading,
  isVideo,
  fallbackImageUrl,
}: IHero) => {
  return (
    <section
      className={cx(styles.hero, {
        [styles.dark]: heroTheme === 'dark',
        [styles.light]: heroTheme === 'light',
      })}
    >
      <div className={styles.mediaWrapper}>
        {isVideo && video ? (
          <Video {...video} videoWithOpacity={heroTheme} />
        ) : (
          <Picture
            {...image}
            fallbackImageUrl={fallbackImageUrl}
            fetchPriority={fetchPriority}
            loading={loading}
            classNamePicture={styles.picture}
            classNameImg={cx(styles.image)}
            pictureWithOpacity={heroTheme}
          />
        )}
      </div>
      <div className={styles.outerWrapper}>
        <ContentWrapper>
          <div className={styles.innerWrapper}>
            <div className={cx(styles.content, getAlignContent(alignContent))}>
              {(topHeading || heading) && (
                <div className={styles.textContent}>
                  {topHeading && <h2 className={cx('body', 'fontRegular', styles.topHeading)}>{topHeading}</h2>}
                  {heading && <h1 className={styles.heading}>{heading}</h1>}
                </div>
              )}
              {contentImage && <Picture {...contentImage} fetchPriority={fetchPriority} loading={loading}></Picture>}
              {preamble && <p className={cx('body', styles.preamble)}>{preamble}</p>}
              {(link?.href || secondaryLink?.href) && (
                <div className={styles.linkWrapper}>
                  {link?.href && <LinkButton {...link} className={styles.linkButton} />}
                  {secondaryLink?.href && <LinkButton {...secondaryLink} className={styles.linkButton} />}
                </div>
              )}
            </div>
          </div>
        </ContentWrapper>
      </div>
    </section>
  )
}

export { Hero }
