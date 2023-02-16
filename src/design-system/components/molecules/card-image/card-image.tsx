import styles from './card-image.module.css'
import { IPicture } from '../../atoms/picture/picture'
import { Button, Icon, Picture } from '../../atoms'
import { DividerLines } from '../../atoms/divider-lines/divider-lines'

export interface ICardImage {
  className?: string
  image: IPicture
  heading: string
  articleId: string
  country: string
  packaging: string
  unitPriceStr: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const CardImage = ({ className, image, heading, articleId, country, packaging, unitPriceStr, onClick }: ICardImage) => {
  return (
    <div className={`${styles.cardImageWrapper} ${className ? className : ''}`}>
      <Button className={styles.packageBtn} type='button' surface='tertiary' rounded onClick={onClick}><Icon icon='icon-layers'/></Button>
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
