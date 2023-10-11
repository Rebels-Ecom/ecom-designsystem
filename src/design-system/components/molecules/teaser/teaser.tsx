import { ILink } from '../../../../types/links'
import { Icon } from '../../atoms/icon/icon'
import { LinkButton } from '../../atoms/link-button/link-button'
import { IPicture, Picture } from '../../atoms/picture/picture'
import { Tag, ITag } from '../../atoms/tag/tag'
import styles from './teaser.module.css'
import cx from 'classnames';

export type TImagePosition = 'left' | 'right'
export type TTagPosition = 'left' | 'right'

export interface ITeaser {
    heading: string
    preamble?: string
    text: string
    image: IPicture
    imagePosition: TImagePosition
    imageRound?: boolean;
    tag?: ITag
    tagPosition?: TTagPosition
    linkButton : ILink
    fullWidth?: boolean
}

const Teaser = ({heading, preamble, text, image, imagePosition, tag, tagPosition, linkButton, imageRound, fullWidth}: ITeaser) => {
    return (
        <div className={`${styles.teaser} ${imagePosition === 'left' ? styles.teaserLeft : styles.teaserRight}`}>
            <div className={cx(styles.imageWrapper, {[styles.imageRound]: imageRound})}>
                <Picture {...image} classNamePicture={styles.picture} classNameImg={styles.image} />
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
                <p className={cx(styles.text, imagePosition === 'right' && styles.textRight)} dangerouslySetInnerHTML={{ __html: text }}></p>
                <LinkButton surface="primary" {...linkButton} className={styles.linkButton} />
            </div>
        </div>
    )
}

export { Teaser }