import React from 'react'
import styles from './single-select-buttons-list.module.css'
import cx from 'classnames'
import { Icon } from '../../atoms/icon/icon'

export interface ISingleSelectButtonsList {
  options: Array<ISelectOption>
  selectedOption: string
  onChange: CallableFunction
}

export interface ISelectOption {
  id: string
  name: string
  value: string
}

function SingleSelectButtonsList({ options, onChange, selectedOption }: ISingleSelectButtonsList) {
  const isOptionsPopulated = Array.isArray(options) && options.length > 0

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(e)
    }
  }

  return isOptionsPopulated ? (
    <ul className={styles.buttonsList}>
      {options.map((option) => {
        const isSelected = option.value === selectedOption
        return (
          <li key={option.value} className={styles.radioBtnWrapper}>
            <input type="radio" id={option.id} className={styles.radio} checked={isSelected} value={option.value} onChange={handleOnChange} />
            <label className={cx(styles.radioBtn, 'cta-s')} htmlFor={option.id}>
              {option.name}
              <Icon icon={'icon-alert-circle'} className={styles.icon} />
            </label>
          </li>
        )
      })}
    </ul>
  ) : null
}

export { SingleSelectButtonsList }
