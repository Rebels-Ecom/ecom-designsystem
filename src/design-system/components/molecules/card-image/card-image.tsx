import styles from './card-image.module.css'
import { IPicture } from '../../atoms/picture/picture'
import { Picture } from '../../atoms'
import { DividerLines } from '../../atoms/divider-lines/divider-lines'
import { ITag, Tag } from '../../atoms/tag/tag'
import cx from 'classnames'

export interface ICardImage {
  className?: string
  image: IPicture
  heading: string
  articleId: string
  country: string
  packaging: string
  unitPriceStr: string
  productTags: Array<ITag>
  fallbackImageUrl?: string
}

const ProductTags = ({tagsList=[]} : {tagsList:Array<ITag>}) => {
  return(
    <ul className={styles.tagsList}>
      {Array.isArray(tagsList) && tagsList.length>0 && tagsList.map((tag, index)=>(
        <li key={index}>
          <Tag {...tag} ></Tag>
        </li>
        ))
      }
    </ul>
  )
}

const CardImage = ({ className, image, productTags, heading, articleId, country, packaging, unitPriceStr, fallbackImageUrl }: ICardImage) => {
  return (
    <div className={`${styles.cardImageWrapper} ${className ? className : ''}`}>
      {productTags && <ProductTags tagsList={productTags}/>}
      <div className={styles.imageWrapper}><Picture {...image} classNamePicture={styles.cardPicture} classNameImg={`${styles.cardImage}`} fallbackImageUrl={fallbackImageUrl}/> </div>
      <div className={`${styles.content}`}>
        <h5 className={styles.heading}>{heading}</h5>
        <DividerLines/>
        <p className={cx(styles.textGray, 'bodyS')}>{`Art.nr. ${articleId} - ${country}`}</p>
        <p className={cx(styles.textPurple, 'bodyS')}>{`${packaging}: ${unitPriceStr} kr/st`}</p>
      </div>
    </div>
  )
}

export { CardImage }
