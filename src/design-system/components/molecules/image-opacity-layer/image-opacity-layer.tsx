import cx from 'classnames'
import styles from './image-opacity-layer.module.css'
import { IPicture, Picture } from '../../atoms/picture/picture'

export interface IImageOpacityLayer {
  image: IPicture
  contain?: boolean
}

const ImageOpacityLayer = ({ image, contain }: IImageOpacityLayer) => {
  return (
    <>
      <Picture {...image} classNamePicture={styles.picture} classNameImg={cx(styles.image, contain && styles.contain)} />
      <div className={styles.opacityLayer}></div>
    </>
  )
}

export { ImageOpacityLayer }
