import cx from 'classnames'
import styles from './hero.module.css'
import { IPicture, TPictureFetchPriority, TPictureLoading, Picture } from '../../atoms/picture/picture'
import { ILinkButton, LinkButton } from '../../atoms/link-button/link-button'
import { ILink } from '../../../../types/links'

export type alignContent = 'left' | 'right' | 'center'
export type heroTheme = 'light' | 'dark'

export interface IHero {
  image: IPicture
  contentImage?: IPicture
  topHeading?: string
  heading: string
  preamble?: string
  alignContent?: alignContent
  link?: ILinkButton
  heroTheme?: heroTheme
  fetchPriority?: TPictureFetchPriority
  loading?: TPictureLoading
}

function getAlignContent(alignContent: string = 'left'): string {
  return styles[`content-${alignContent}`]
}

function getHeroTheme(heroTheme: string = 'light'): string {
  if (heroTheme === 'dark') {
    return styles.darkTheme
  }
  return styles.lightTheme
}

const Hero = ({ topHeading, heading, preamble, image, contentImage, alignContent, link, heroTheme='light', fetchPriority, loading }: IHero) => {
  return (
    <section className={styles.hero}>
      <Picture {...image} fetchPriority={fetchPriority} loading={loading} classNamePicture={styles.picture} classNameImg={cx(styles.image)} pictureWithOpacity={heroTheme}/>
      <div className={styles.outerWrapper}>
        <div className={styles.innerWrapper}>
          <div className={cx(styles.content, getAlignContent(alignContent), getHeroTheme(heroTheme))}>
            {(topHeading || heading) && (
              <header>
                {topHeading && <h2 className={cx('body', 'fontRegular', styles.topHeading)}>{topHeading}</h2>}
                {heading && <h1 className={cx('headingXL', styles.heading)}>{heading}</h1>}
              </header>
            )}
            {contentImage && <Picture {...contentImage} fetchPriority={fetchPriority} loading={loading}></Picture>}
            {preamble && <p className={cx('body', styles.preamble)}>{preamble}</p>}
            {link && <LinkButton {...link} className={styles.linkButton} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
