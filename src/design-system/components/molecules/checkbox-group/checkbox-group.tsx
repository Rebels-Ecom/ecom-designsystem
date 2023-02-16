import cx from 'classnames'
import { Checkbox, ICheckbox } from '../../atoms/inputs/checkbox/checkbox'
import styles from './checkbox-group.module.css'

export type TypeInputs = {
  label: string
} & ICheckbox

type TAlign = 'horizontal' | 'vertical'

export interface ICheckboxGroup {
  className?: string
  classNameList?: string
  classNameListItem?: string
  classNameLabel?: string
  classNameCheckbox?: string
  classNameCheckboxWrapper?: string
  inputs: Array<TypeInputs>
  align?: TAlign
}

const CheckboxGroup = ({
  className,
  classNameList,
  classNameListItem,
  classNameLabel,
  classNameCheckbox,
  classNameCheckboxWrapper,
  inputs = [],
  align = 'horizontal',
}: ICheckboxGroup) => {
  return (
    <div className={cx(className)}>
      <ul className={cx(classNameList ? classNameList : `${styles.defaultStyleList} ${styles[align]}`)}>
        {inputs.map((input) => (
          <li key={input.id} className={cx(classNameListItem ? classNameListItem : styles.defaultStyleListItem)}>
            <div className={cx(classNameCheckboxWrapper ? classNameCheckboxWrapper : styles.defaultStyleCheckboxWrapper)}>
              <Checkbox {...input} className={cx(classNameCheckbox ? classNameCheckbox : styles.defaultStyleCheckbox)} />
              <label className={cx('body', classNameLabel ? classNameLabel : styles.defaultStyleLabel, input.disabled && styles.disabled)} htmlFor={input.id}>
                {input.label}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { CheckboxGroup }
