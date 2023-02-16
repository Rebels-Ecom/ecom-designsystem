import cx from 'classnames'
import styles from './card-square.module.css'
import { IPicture } from '../../atoms/picture/picture'
import { ImageOpacityLayer } from '../image-opacity-layer/image-opacity-layer'
import { UILink } from '../../atoms/ui-link/ui-link'
import { ILink } from '../../../../types/links'
import { TSurface } from '../../../../types/surface'

export interface ICardSquare {
  surface?: TSurface
  image?: IPicture
  heading: string
  preamble?: string
  description?: string
  link?: ILink
}

const CardSquare = ({ surface, image, heading, preamble, description, link }: ICardSquare) => {
  return (
    <div className={cx(styles.cardSquare, surface && !image && styles[surface])}>
      {image && <ImageOpacityLayer image={image} />}
      <div className={styles.content}>
        <div>
          {preamble && <h2 className={styles.preamble}>{preamble}</h2>}
          <h3 className={styles.heading}>{heading}</h3>
        </div>
        <div>
          {description && <p className={styles.description}>{description}</p>}
          {link && (
            <>
              <UILink
                {...link}
                iconRight="icon-arrow-right"
                onSurface={surface && !image ? surface : image ? 'decorativeTwo' : 'transparent'}
                size="large"
                className={cx(styles.link, styles.largeDeviceLink)}
              />
              <UILink
                {...link}
                iconRight="icon-arrow-right"
                onSurface={surface && !image ? surface : image ? 'decorativeTwo' : 'transparent'}
                size="default"
                className={cx(styles.link, styles.smallDeviceLink)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export { CardSquare }
