import { RichTextProps } from "../../../../types/other";
import { Heading, Picture, Text, UILink } from "../../atoms"
import { FlexContainer, MaxWidth } from "../../layouts"

type TWithRichText = {
  richText: React.FC<RichTextProps>;
  text?: never;
}

type TWithText = {
  text: string;
  richText?: never;
}

type TSharedBrandDetails = {
  title: string;
  image: {
    url: string;
    mobileUrl?: string;
    alt?: string;
  }
  link?: {
    url: string;
    text: string;
  }
}

export type TBrandDetails = TSharedBrandDetails & (TWithRichText | TWithText)

const BrandDetails = ({ title, image, link, ...props }: TBrandDetails) => {
  return (
    <FlexContainer flexDirection='column' alignItems='center'>
      <Picture
        width={300}
        id='brand-image'
        src={image.url}
        alt={image.alt}
        sources={[
          { srcset: `${image.mobileUrl ?? image.url}`, media: `(max-width: 767px)` },
          { srcset: `${image.url}`, media: `(min-width: 768px)` },
        ]}
      />

      <Heading order={3} margin={[0, 0, 0.5]}>{title}</Heading>

      {props.richText && <MaxWidth contentMaxWidth='text'>{props.richText}</MaxWidth>}
      {props.text && <MaxWidth contentMaxWidth='text'><Text align="center">{props.text}</Text></MaxWidth>}

      {link && (
        <UILink
          onSurface='transparent'
          linkComponent='a'
          isExternal
          href={link.url}
          size='default'
        >
          {link.text}
        </UILink>
      )}
    </FlexContainer>
  )
}

export {
  BrandDetails
}
