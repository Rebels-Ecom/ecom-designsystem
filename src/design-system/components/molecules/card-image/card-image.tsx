import styles from './card-image.module.css'
import { IPicture } from '../../atoms/picture/picture'
import { Button, Icon, Picture } from '../../atoms'
import { DividerLines } from '../../atoms/divider-lines/divider-lines'
import { IButton } from '../../atoms/button/button'
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
}

const ProductTags = ({tagsList=[]} : {tagsList:Array<ITag>}) => {
  return(
    <ul className='flex overflow-x-auto whitespace-nowrap scrollbar-hide space-x-8 ml-16 -mr-16'>
      {Array.isArray(tagsList) && tagsList.length>0 && tagsList.map((tag, index)=>(
        <li key={index}>
          <Tag {...tag} ></Tag>
        </li>
        ))
      }
    </ul>
  )
}

const CardImage = ({ className, image, heading, articleId, country, packaging, unitPriceStr, productTags }: ICardImage) => {
  return (
    <div className={cx('w-full flex flex-col font-primary', className ? className : '')}>
      <ProductTags tagsList={productTags}/>
      <div className='relative before:block before:pb-[100%]'><Picture {...image} classNamePicture='absolute h-full w-full bottom-0 p-56' classNameImg='h-full w-full object-contain' /> </div>
      <div className='flex flex-col items-center pb-16'>
        <p className='font-primary text-base'>{heading}</p>
        <DividerLines/>
        <p className='text-greyDecorative mb-8'>{`Art.nr. ${articleId} - ${country}`}</p>
        <p className='text-purpleDecorative'>{`${packaging}: ${unitPriceStr} kr/st`}</p>
      </div>
    </div>
  )
}

export { CardImage }
