import styles from './sortable-list.module.css'
import cx from 'classnames'
import { IconButton, Loader } from '../../atoms'

export type TSpacing = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type TActiveSorting = {
  name: string;
  direction: 'asc' | 'desc';
}

export interface ISortableList {
  listHeading?: string
  sortingOptions: Array<ISortingOption>
  children: Array<React.ReactNode>
  loading?: boolean
  withSeparatingLines?: boolean
  spacing?: TSpacing
  className?: string
  activeSorting?: TActiveSorting;
}

export interface ISortingOption {
  name: string
  onClickUp: CallableFunction
  onClickDown: CallableFunction
  className?: string
  activeSorting?: TActiveSorting;
  hidden?: boolean;
}

export interface ISortingOptions {
  sortingOptions: Array<ISortingOption>
  activeSorting?: TActiveSorting;
}

const SortingOption = ({ name, onClickUp, onClickDown, className, activeSorting, hidden }: ISortingOption) => {
  const handleSorting = () => {
    if (activeSorting?.name === name) {
      activeSorting?.direction === 'asc' ? onClickUp() : onClickDown()
    } else {
      onClickDown();
    }
  }
  return (
    <div className={cx(styles.sortingOption, className ? className : '', {[styles.hidden]: hidden })}>
      <button
        name={name}
        className={cx(styles.optionName, {[styles.optionNameActive]: activeSorting?.name === name})}
        onClick={handleSorting}
      >{name}</button>
      <div className={styles.arrowButtonsWrapper}>
        {activeSorting?.name === name ? (
          <IconButton
            type="button"
            icon={activeSorting?.direction === 'asc' ? "icon-chevron-down" : "icon-chevron-up"}
            size="x-small"
            onClick={() => activeSorting?.direction === 'asc' ? onClickUp() : onClickDown()}
            noPadding
            isTransparent
            noBorder
            className={styles.activeSortingIcon}
          />  
        ) : (
          <IconButton
            type="button"
            icon="icon-chevron-down"
            size="x-small"
            onClick={() => onClickDown()}
            noPadding
            isTransparent
            noBorder
          />
        )}
      </div>
    </div>
  )
}

const SortingOptions = ({ sortingOptions, activeSorting }: ISortingOptions) => {
  return (
    <ul className={styles.sortingOptionsList}>
      {sortingOptions.map((option) => (
        <li key={option.name}>
          <SortingOption {...option} activeSorting={activeSorting}></SortingOption>
        </li>
      ))}
    </ul>
  )
}

const SortableList = ({ listHeading, sortingOptions, children, loading, withSeparatingLines, spacing = 'md', className, activeSorting }: ISortableList) => {
  function getItemsSpacing(spacing: TSpacing) {
    switch (spacing) {
      case 'xs':
        return 'spacing-xs'
      case 'sm':
        return 'spacing-sm'
      case 'md':
        return 'spacing-md'
      case 'lg':
        return 'spacing-lg'
      case 'xl':
      default:
        return 'spacing-xl'
    }
  }

  if (!Array.isArray(children) || !children.length) return null

  return (
    <div className={cx(styles.sortableList, className && className)}>
      {loading ? (
        <Loader visible={loading} size="sm" position="relative" color="orange" />
      ) : (
        <div>
          {listHeading && <div className={cx(styles.listHeading, 'h4')}>{listHeading}</div>}
          <SortingOptions sortingOptions={sortingOptions} activeSorting={activeSorting} />
          <ul className={styles.list}>
            {children?.map((item: React.ReactNode) => (
              <li key={Math.random()} className={cx(styles.listItem, withSeparatingLines ? styles.withSeparatingLines : '', styles[getItemsSpacing(spacing)])}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export { SortableList }
