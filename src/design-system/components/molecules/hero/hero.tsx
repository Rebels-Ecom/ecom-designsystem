import cx from 'classnames'
import styles from './hero.module.css'
import { IPicture, TPictureFetchPriority, TPictureLoading, Picture } from '../../atoms/picture/picture'
import { ILinkButton, LinkButton } from '../../atoms/link-button/link-button'
import { IVideo, Video } from '../../atoms/video/video'
import { ContentWrapper } from '../../layouts'

export type alignContent = 'left' | 'right' | 'center'
export type heroTheme = 'light' | 'dark'

export interface IHero {
  image: IPicture
  video?: IVideo
  contentImage?: IPicture
  topHeading?: string
  heading: string
  preamble?: string
  alignContent?: alignContent
  link?: ILinkButton
  heroTheme?: heroTheme
  fetchPriority?: TPictureFetchPriority
  loading?: TPictureLoading
  isVideo?: boolean
}

function getAlignContent(alignContent: string = 'left'): string {
  return styles[`content-${alignContent}`]
}

const Hero = ({ topHeading, heading, preamble, image, video, contentImage, alignContent, link, heroTheme='light', fetchPriority, loading, isVideo }: IHero) => {
  return (
    <section className={cx(styles.hero, styles[heroTheme])}>
      {(isVideo && video)
        ?
        <Video {...video} videoWithOpacity={heroTheme}></Video>
        :
        <Picture {...image} fetchPriority={fetchPriority} loading={loading} classNamePicture={styles.picture} classNameImg={cx(styles.image)} pictureWithOpacity={heroTheme}/>
      }
      <div className={styles.outerWrapper}>
        <div className={styles.innerWrapper}>
          <div className={cx(styles.content, getAlignContent(alignContent))}>
            {(topHeading || heading) && (
              <div className={styles.textContent}>
                {topHeading && <h2 className={cx('body', 'fontRegular', styles.topHeading)}>{topHeading}</h2>}
                {heading && <h1 className={cx('headingXL', styles.heading)}>{heading}</h1>}
              </div>
            )}
            {contentImage && <Picture {...contentImage} fetchPriority={fetchPriority} loading={loading}></Picture>}
            {preamble && <p className={cx('body', styles.preamble)}>{preamble}</p>}
            {link?.href && <LinkButton {...link} className={styles.linkButton} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
