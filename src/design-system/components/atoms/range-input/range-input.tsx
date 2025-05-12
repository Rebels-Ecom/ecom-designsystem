import cx from 'classnames'
import 'rc-slider/assets/index.css'
import { useEffect, useState } from 'react'
import { useDebounce } from '../../../../helpers/generic-helper'
import styles from './range-input.module.css'

type TSlider = {
  min: number
  max: number
  defaultMinVal?: number
  defaultMaxVal?: number
  onChange?: (range: { min: number; max: number }) => void
  formatLabel?: string
  withFields?: boolean
  minLabel?: string
  maxLabel?: string
  allowSameValues?: boolean
  step?: number
  disabled?: boolean
  disableDebounce?: boolean
}

const RangeInput = ({
  onChange,
  formatLabel,
  min,
  max,
  defaultMinVal,
  defaultMaxVal,
  withFields,
  minLabel,
  maxLabel,
  allowSameValues,
  step,
  disabled,
  disableDebounce,
}: TSlider) => {
  const [value, setValue] = useState<{ min: number; max: number }>({
    min: defaultMinVal ?? min,
    max: defaultMaxVal ?? max,
  })
  const [sliderIsChanging, setSliderIsChanging] = useState(true)

  const debouncedRequest = useDebounce(() => {
    if (value) {
      setSliderIsChanging(true)
      if (value.min < value.max && value.min >= min && value.max <= max) {
        onChange?.(value)
      } else {
        const correctedMin = Math.max(min, Math.min(value.min, max))
        const correctedMax = Math.min(max, Math.max(value.max, min))
        const correctedValue = {
          min: Math.min(correctedMin, correctedMax),
          max: Math.max(correctedMin, correctedMax),
        }
        onChange?.(correctedValue)
        setValue(correctedValue)
      }
    }
  }, 1000)

  useEffect(() => {
    if (!sliderIsChanging && !disableDebounce) {
      debouncedRequest()
    }
  }, [value])

  const handleInputChange = (val: string, name: string) => {
    const numVal = Number(val)
    const newRange = {
      min: name === 'min' ? numVal : value.min,
      max: name === 'max' ? numVal : value.max,
    }

    if (sliderIsChanging) {
      setSliderIsChanging(false)
    }

    setValue(newRange)

    if (disableDebounce) {
      onChange?.(newRange)
    }
  }

  const handleChange = (vals: number[]) => {
    if (!sliderIsChanging) {
      setSliderIsChanging(true)
    }
    setValue({ min: vals[0], max: vals[1] })
  }

  const handleChangeComplete = (vals: number[]) => {
    onChange?.({ min: vals[0], max: vals[1] })
  }

  return (
    <div className={cx(styles.sliderWrapper, { [styles.disabled]: disabled })}>
      {withFields && (
        <div className={styles.fieldsContainer}>
          {/* <InputField
            className={styles.sliderInputField}
            label={minLabel}
            name="min"
            type="number"
            onChange={(e) => handleInputChange(e.target.value, 'min')}
            value={value.min.toString()}
            min={min}
            max={allowSameValues ? value.max : value.max - 1}
            height="sm"
            disabled={disabled}
          />
          <InputField
            className={styles.sliderInputField}
            label={maxLabel}
            name="max"
            type="number"
            onChange={(e) => handleInputChange(e.target.value, 'max')}
            value={value.max.toString()}
            min={allowSameValues ? value.min : value.min + 1}
            max={max}
            height="sm"
            disabled={disabled}
          /> */}
        </div>
      )}
      {/* <Slider
  range
  min={min}
  max={max}
  step={step}
  allowCross={allowSameValues}
  disabled={disabled}
  value={[value.min, value.max]}
  onChange={(vals) => {
    if (Array.isArray(vals)) {
      handleChange({ min: vals[0], max: vals[1] });
    }
  }}
  onAfterChange={(vals) => handleChangeComplete({ min: vals[0], max: vals[1] })}
/> */}
    </div>
  )
}

export { RangeInput }
