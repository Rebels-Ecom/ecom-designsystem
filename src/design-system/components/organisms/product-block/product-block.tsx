import { RichTextProps } from '../../../../types/other'
import { Heading, Text } from '../../atoms'
import { ContentWrapper, FlexContainer, MaxWidth, mediaQueryHelper } from '../../layouts'
import { BoxWrapper } from '../../molecules'
import { ProductCard, TProductCard } from '../../molecules/product-card/product-card'
import styles from './product-block.module.css'

interface IProductBlock {
  headingTag?: string
  title?: string
  richText?: React.FC<RichTextProps>
  products?: Array<TProductCard>
}

const ProductBlock = ({ headingTag, title, richText, products }: IProductBlock) => {
  const { isMobile } = mediaQueryHelper();
  return (
    <ContentWrapper>
      <FlexContainer className={styles.productBlockInner} flexDirection="column">
        <MaxWidth contentMaxWidth="text" noMargin={!isMobile} noPadding={!isMobile}>
          {headingTag && (
            <Text className={styles.headingTag} upperCase>
              {headingTag}
            </Text>
          )}
          {title && (
            <Heading className={styles.title} order={4} margin={[0.5, 0, 1.5]}>
              {title}
            </Heading>
          )}
          {richText && richText}
        </MaxWidth>
        {products?.length
          ? products.map((item) => {
              return <ProductCard key={item.product.partNo} {...item} hideRemoveButton border />
            })
          : null}
      </FlexContainer>
    </ContentWrapper>
  )
}

export { ProductBlock }
