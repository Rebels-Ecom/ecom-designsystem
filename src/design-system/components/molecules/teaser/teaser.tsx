import { RichTextProps } from '../../../../types/other'
import { ILinkButton, LinkButton } from '../../atoms/link-button/link-button'
import { IPicture, Picture } from '../../atoms/picture/picture'
import { Tag, ITag } from '../../atoms/tag/tag'
import styles from './teaser.module.css'
import cx from 'classnames';

export type TImagePosition = 'left' | 'right'
export type TTagPosition = 'left' | 'right'

export interface ITeaser {
    heading: string
    preamble?: string
    richText?: React.FC<RichTextProps>;
    image: IPicture
    imagePosition: TImagePosition
    imageRound?: boolean;
    tag?: ITag
    tagPosition?: TTagPosition
    linkButton : ILinkButton
    fullWidth?: boolean;
    fallbackImageUrl?: string;
}

const Teaser = ({
    heading,
    preamble,
    richText,
    image,
    imagePosition,
    tag,
    tagPosition,
    linkButton,
    imageRound,
    fallbackImageUrl
}: ITeaser) => {
    return (
        <div className={`${styles.teaser} ${imagePosition === 'left' ? styles.teaserLeft : styles.teaserRight}`}>
            <div className={cx(styles.imageWrapper, {[styles.imageRound]: imageRound})}>
                <Picture {...image} classNamePicture={styles.picture} classNameImg={styles.image} fallbackImageUrl={fallbackImageUrl} />
                {tag && (
                    <Tag
                        {...tag}
                        className={`${styles.tag} ${tagPosition === 'left' ? styles.tagLeft : styles.tagRight}`}
                    />
                )}
            </div>
            <div className={`${styles.contentWrapper} ${imagePosition === 'left' ? styles.contentRight : styles.contentLeft}`}>
                <h2 className={styles.heading}>{heading}</h2>
                {preamble && <p className={styles.preamble}>{preamble}</p>}
                {richText && (
                    <div className={cx(styles.text, imagePosition === 'right' && styles.textRight)}>{richText}</div>
                )}
                <LinkButton {...linkButton} surface={linkButton.surface ?? 'primary'} className={styles.linkButton} />
            </div>
        </div>
    )
}

export { Teaser }