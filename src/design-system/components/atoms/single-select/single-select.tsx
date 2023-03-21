import React, { forwardRef } from 'react'
import styles from './single-select.module.css'

export interface ISingleSelect {
  id?: string
  name: string
  options: Array<ISelectOption>
  onChange?: CallableFunction
  selectedIndex?: number
  value?: string
  disabled?: boolean
}

export interface ISelectOption {
  name: string
  value: string
}

const SingleSelect = forwardRef<HTMLSelectElement, ISingleSelect>(
  ({ id, name, options, onChange, value, selectedIndex, disabled } : ISingleSelect, ref) => {
    
    function handleOnChange(e: React.FormEvent<HTMLSelectElement>) {
      if (onChange) {
        onChange(e)
      }
    }

    function isOptionsPopulated() {
      return options instanceof Array && options.length
    }

    return (
      <div className={styles.outerWrapper}>
        {isOptionsPopulated() && (
            <select
              className={styles.select}
              onChange={handleOnChange}
              disabled={disabled}
              id={id}
              value={selectedIndex ? options[selectedIndex].value : value}
              ref={ref}
            >
              {options?.map((option, i) => (
                <option key={`option_${i}`} value={option.value}>
                  {name} {option.name}
                </option>
              ))}
            </select>
        )}
      </div>
    )
  }
)

export { SingleSelect }
