import React from 'react'
import styles from './picture-with-opacity.module.css'
import { IPicture, Picture, TPictureFetchPriority, TPictureLoading } from '../../atoms/picture/picture'
import cx from 'classnames'

export type TOpacityTheme ='light' | 'dark'

export interface IPictureWithOpacity {
  image: IPicture
  classNamePicture?: string
  classNameImg?: string
  theme: string
  fetchPriority?: TPictureFetchPriority
  loading?: TPictureLoading
}

function PictureWithOpacity({ image, theme='light', classNamePicture, classNameImg } : IPictureWithOpacity) {
  return (
    <div className={styles.pictureWithOpacity}>
      <Picture {...image} classNamePicture={classNamePicture ? classNamePicture : styles.picture} classNameImg={classNameImg ? classNameImg : styles.image} ></Picture>
      <div className={cx(styles.opacityLayer, theme==='light' ? styles.withLightBackground : styles.withDarkBackground)}></div>
    </div>
  )
}

export { PictureWithOpacity } 