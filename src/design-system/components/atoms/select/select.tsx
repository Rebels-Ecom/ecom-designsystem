import { forwardRef } from 'react'
import cx from 'classnames'
import styles from './select.module.css'
import { TOther } from '../../../../types/other'
import { getisErroneousStyle } from '../../../../helpers/form-helper'

export interface ISelect {
  id: string
  options: Array<ISelectOption>
  onChange?: CallableFunction
  selectedIndex?: number
  value?: string
  disabled?: boolean
  isErroneous?: boolean
  required?: boolean
  other?: TOther
}

export interface ISelectOption {
  name: string
  value: string
}

const Select = forwardRef<HTMLSelectElement, ISelect>(
  ({ id, options, onChange, value, selectedIndex, disabled, isErroneous, required, other }: ISelect, ref) => {
    function handleOnChange(e: React.FormEvent<HTMLSelectElement>) {
      if (onChange) {
        onChange(e)
      }
    }

    function isOptionsPopulated() {
      return options instanceof Array && options.length
    }

    return (
      <div className={styles.wrapper}>
        {isOptionsPopulated() && (
          <>
            <select
              className={cx('body', styles.select, getisErroneousStyle(styles, isErroneous))}
              onChange={handleOnChange}
              disabled={disabled}
              required={required}
              id={id}
              value={selectedIndex ? options[selectedIndex].value : value}
              ref={ref}
              {...other}
            >
              {options?.map((option: ISelectOption, i: number) => (
                <option key={`option_${i}`} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
            <div className={styles.icon} />
          </>
        )}
      </div>
    )
  }
)

export { Select }
