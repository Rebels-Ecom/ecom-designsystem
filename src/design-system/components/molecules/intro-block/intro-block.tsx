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
  <ContentWrapper padding={[2.5, 1]}>
    <MaxWidth contentMaxWidth='text'>
      <FlexContainer flexDirection='column' gap={1}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {ingress && <p className={styles.ingress}>{ingress}</p>}
        {richText && richText}
      </FlexContainer>
    </MaxWidth>
  </ContentWrapper>
)

export {
  IntroBlock
}