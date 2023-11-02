import { MouseEventHandler, useRef, useState } from 'react'
import styles from './multi-select.module.css'
import { Button } from '../button/button'
import { IIcon } from '../icon/icon'
import { useOnClickOutside } from '../../../hooks'

export interface IMultiSelect {
  id?: string
  name: string
  options: Array<ISelectOption>
  selectedOptions: Array<string>
  onToggleOption: CallableFunction
  icon?: IIcon
  disabled?: boolean
}

export interface ISelectOption {
  name: string
  value: string
}

const MultiSelect = (
  ({ name, options, selectedOptions, onToggleOption, icon, disabled } : IMultiSelect) => {
    const multiSelectRef = useRef(null);
    const[isDropdownOpen, setIsDropdownOpen] = useState(false)

    function handleClickOnDropdown() {
        setIsDropdownOpen(!isDropdownOpen)
    }
    
    const handleClose = () => setIsDropdownOpen(false)

    const handleToggleOption = (option: ISelectOption) => {
      onToggleOption(option);
    }

    function isOptionsPopulated() {
      return options instanceof Array && options.length
    }

    function getSelectedOptionName(options: Array<ISelectOption>, selectedOptionValue: string) {
      const selectedOption = options.find(option => option.value===selectedOptionValue);
      return selectedOption?.name;
    }


    useOnClickOutside({ ref: multiSelectRef, onClose: handleClose })

    return isOptionsPopulated() ? (
      <div className={styles.multiSelectDropdown} ref={multiSelectRef}>
        <Button
          type='button' 
          surface='x'
          size='xx-small'
          onClick={handleClickOnDropdown}
          iconRight={icon}
          disabled={disabled}
          className={styles.button}
        >
          {(!selectedOptions || selectedOptions.length === 0) ?
            name :
            (selectedOptions.length === 1 ?
              `${name} (${getSelectedOptionName(options, selectedOptions[0])})` :
              `${name} (${selectedOptions.length} valda)`
            )
          }
        </Button>
          {isDropdownOpen ? 
            <ul className={styles.multiSelectDropdownOptions}>
              {options.map(option => {
                const isSelected = selectedOptions && selectedOptions.some(item=>item===option.value)
                
                return (
                  <li key={option.value} className={styles.multiSelectDropdownOption}>
                    <input type="checkbox" checked={isSelected} onChange={() => handleToggleOption(option)} className={styles.multiSelectDropdownOptionCheckbox}></input>
                    <span>{option.name}</span>
                  </li>
                )
              })}
            </ul> : null}
      </div>
    ) : null
  }
)

export { MultiSelect }
