import styles from './card-image.module.css'
import { IPicture } from '../../atoms/picture/picture'
import { Picture } from '../../atoms'
import { DividerLines } from '../../atoms/divider-lines/divider-lines'
import { ITag, Tag } from '../../atoms/tag/tag'

export interface ICardImage {
  className?: string
  image: IPicture
  heading: string
  articleId: string
  country: string
  packaging: string
  unitPriceStr: string
  productTags: Array<ITag>
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

const CardImage = ({ className, image, productTags, heading, articleId, country, packaging, unitPriceStr }: ICardImage) => {
  return (
    <div className={`${styles.cardImageWrapper} ${className ? className : ''}`}>
      {productTags && <ProductTags tagsList={productTags}/>}
      <div className={styles.imageWrapper}><Picture {...image} classNamePicture={styles.cardPicture} classNameImg={`${styles.cardImage}`} /> </div>
      <div className={`${styles.content}`}>
        <p className={styles.heading}>{heading}</p>
        <DividerLines/>
        <p className={styles.textGray}>{`Art.nr. ${articleId} - ${country}`}</p>
        <p className={styles.textPurple}>{`${packaging}: ${unitPriceStr} kr/st`}</p>
      </div>
    </div>
  )
}

export { CardImage }
