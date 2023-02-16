import cx from 'classnames'
import { UILink } from '../../atoms/ui-link/ui-link'
import { ILink } from '../../../../types/links'
import { IPicture, Picture } from '../../atoms/picture/picture'
import styles from './card-16-9.module.css'

export type TobjectFit = 'contain' | 'cover' | 'fill'
export interface ICard_16_9 {
  heading?: string
  preamble?: string
  link?: ILink
  image?: IPicture
  imageFit?: TobjectFit
}

const Card_16_9 = ({ heading, preamble, link, image, imageFit }: ICard_16_9) => {
  return (
    <div className={styles.card}>
      <div className={cx(styles.content, (image || !link) && styles.center, image && styles.middleCenter)}>
        {image && <Picture {...image} classNamePicture={styles.picture} classNameImg={cx(styles.image, imageFit && styles[imageFit])} />}
        {!image && (
          <>
            <div>
              {heading && <h2 className={styles.heading}>{heading}</h2>}
              {preamble && <h3 className={styles.preamble}>{preamble}</h3>}
            </div>
            {link && <UILink {...link} iconRight="icon-arrow-right" onSurface={'transparent'} size={'default'} className={styles.link} />}
          </>
        )}
      </div>
    </div>
  )
}

export { Card_16_9 }
