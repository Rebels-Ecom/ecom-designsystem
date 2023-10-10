import { RichTextProps } from "../../../../types/other";
import { Heading, Text } from "../../atoms";
import { ContentWrapper, FlexContainer, MaxWidth } from "../../layouts";
import { BoxWrapper } from "../../molecules";
import { ProductCard, TProductCard } from "../../molecules/product-card/product-card";
import styles from './product-block.module.css'

interface IProductBlock {
  headingTag?: string;
  title?: string;
  richText?: React.FC<RichTextProps>;
  products?: Array<TProductCard>
}

const ProductBlock = ({ headingTag, title, richText, products }: IProductBlock) => (
  <ContentWrapper>
    <FlexContainer className={styles.productBlockInner} flexDirection='column'>
      <MaxWidth contentMaxWidth='text' noMargin noPadding>
        {headingTag && <Text className={styles.headingTag} upperCase>{headingTag}</Text>}
        {title && <Heading className={styles.title} order={4} margin={[0.5, 0, 1.5]}>{title}</Heading>}
        {richText && richText}
      </MaxWidth>
      {products?.length && products.map(item => {
          console.log(item)
          return (
            <BoxWrapper key={item.product.productId} noMargin padding={1}>
              <ProductCard
                {...item}
                hideRemoveButton
              />
            </BoxWrapper>
          )
        })}
    </FlexContainer>
  </ContentWrapper>
)

export {
  ProductBlock
}