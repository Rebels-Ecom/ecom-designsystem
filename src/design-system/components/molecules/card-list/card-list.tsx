import cx from 'classnames'
import { UILink } from '../../atoms/ui-link/ui-link'
import { ILink } from '../../../../types/links'
import styles from './card-list.module.css'

export type TCardListSurface = 'decorativeOne' | 'decorativeTwo'
export type TCardFormat = '1:1' | '1:2'

export interface ICardList {
  surface: TCardListSurface
  list: Array<string>
  preamble: string
  format: TCardFormat
  link: ILink
}

const CardList = ({ surface = 'decorativeOne', list = [], preamble, format = '1:1', link }: ICardList) => {
  const renderList = () => {
    return list.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)
  }

  return (
    <div className={cx(styles.cardList, format === '1:1' ? styles.square : styles.rectangular, styles[surface])}>
      <div className={styles.content}>
        <div>
          <h2 className={styles.preamble}>{preamble}</h2>
          <ul className={styles.list}>{renderList()}</ul>
        </div>
        <UILink
          {...link}
          iconRight="icon-arrow-right"
          onSurface={surface}
          size={format === '1:1' ? 'large' : 'default'}
          className={cx(styles.link, styles.largeDeviceLink)}
        />
        <UILink {...link} iconRight="icon-arrow-right" onSurface={surface} size={'default'} className={cx(styles.link, styles.smallDeviceLink)} />
      </div>
    </div>
  )
}

export { CardList }
