import cx from 'classnames'
import styles from './card-poster.module.css'
import { IPicture } from '../../atoms/picture/picture'
import { ImageOpacityLayer } from '../image-opacity-layer/image-opacity-layer'
import { UILink } from '../../atoms/ui-link/ui-link'
import { ILink } from '../../../../types/links'

export type TCardPosterSurface = 'decorativeOne' | 'decorativeTwo'

export interface ICardPoster {
  image?: IPicture
  surface?: TCardPosterSurface
  heading: string
  preamble?: string
  description?: string
  link?: ILink
}

const CardPoster = ({ image, surface, heading, preamble, description, link }: ICardPoster) => {
  return (
    <div className={cx(styles.cardPoster, surface && !image && styles[surface])}>
      {image && <ImageOpacityLayer image={image} />}
      <div className={`${styles.content}`}>
        {preamble && <h2 className={styles.preamble}>{preamble}</h2>}
        {preamble ? <h3 className={styles.heading}>{heading}</h3> : <h2 className={styles.heading}>{heading}</h2>}
        {description && <p className={styles.description}>{description}</p>}
        {link && (
          <UILink {...link} iconRight="icon-arrow-right" onSurface={surface && !image ? surface : 'decorativeTwo'} size="default" className={styles.link} />
        )}
      </div>
    </div>
  )
}

export { CardPoster }
