import cx from 'classnames'
import { RadioButton, IRadioButton } from '../../atoms/inputs/radio-button/radio-button'
import styles from './radio-button-group.module.css'

export type TypeInputs = {
  label: string
} & IRadioButton

type TAlign = 'horizontal' | 'vertical'

export interface IRadioButtonGroup {
  className?: string
  classNameHeading?: string
  classNameList?: string
  classNameListItem?: string
  classNameLabel?: string
  classNameRadio?: string
  classNameRadioWrapper?: string
  inputs: TypeInputs[]
  align?: TAlign
}

const RadioButtonGroup = ({
  className,
  classNameList,
  classNameListItem,
  classNameLabel,
  classNameRadio,
  classNameRadioWrapper,
  inputs,
  align = 'horizontal',
}: IRadioButtonGroup) => {
  return (
    <div className={cx(className)}>
      <ul className={classNameList ? cx(classNameList) : cx(styles.defaultStyleList, styles[align])}>
        {inputs.map((input) => (
          <li key={input.id} className={cx(classNameListItem ? classNameListItem : styles.defaultStyleListItem)}>
            <div className={cx(classNameRadioWrapper ? classNameRadioWrapper : styles.defaultStyleRadioWrapper)}>
              <RadioButton key={input.id} {...input} className={classNameRadio ? classNameRadio : styles.defaultStyleRadio} />
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

export { RadioButtonGroup }
