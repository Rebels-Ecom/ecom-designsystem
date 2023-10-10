import React from "react";
import { Heading, Text } from "../../atoms";
import { ContentWrapper, FlexContainer, MaxWidth } from "../../layouts"
import styles from './intro-block.module.css'
import { RichTextProps } from "../../../../types/other";



type TIntroBlock = {
  title?: string;
  ingress?: string;
  richText?: React.FC<RichTextProps>;
}

const IntroBlock = ({ title, ingress, richText }: TIntroBlock) => (
  <ContentWrapper padding={[2.5, 1, 1]}>
    <MaxWidth contentMaxWidth='text'>
      <FlexContainer flexDirection='column' gap={1}>
        {title && <Heading order={2} margin={[0, 0, 1]} align='center'>{title}</Heading>}
        {ingress && <Text upperCase align="center" className={styles.ingress}>{ingress}</Text>}
        {richText && richText}
      </FlexContainer>
    </MaxWidth>
  </ContentWrapper>
)

export {
  IntroBlock
}