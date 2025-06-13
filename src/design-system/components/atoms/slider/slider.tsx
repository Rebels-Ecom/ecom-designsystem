import { useEffect, useState } from 'react'
import InputRange, { Range } from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import styles from './slider.module.css'
import cx from 'classnames'
import { InputField } from '../../molecules/form/components/input-field'
import { useDebounce } from '../../../../helpers/generic-helper'

type TSlider = {
  min: number
  max: number
  defaultMinVal?: number
  defaultMaxVal?: number
  onChange?: (range: number | Range) => void
  formatLabel?: string
  withFields?: boolean
  minLabel?: string
  maxLabel?: string
  allowSameValues?: boolean
  step?: number
  disabled?: boolean
  disableDebounce?: boolean
}

const roundDownToStep = (val: number, step: number, min: number) => {
  return Math.floor((val - min) / step) * step + min
}

const roundUpToStep = (val: number, step: number, min: number) => {
  return Math.ceil((val - min) / step) * step + min
}

/** @deprecated Use RangeInput instead */
const Slider = ({
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
  const [value, setValue] = useState<number | Range>({
    min: defaultMinVal ?? min,
    max: defaultMaxVal ?? max,
  })

  const [sliderIsChanging, setSliderIsChanging] = useState(true)

  if (typeof value !== 'object') {
    return null
  }

  const debouncedRequest = useDebounce(() => {
    if (value) {
      setSliderIsChanging(true)
      if (value.min < value.max && value.min >= min && value.max > value.min && value.max <= max) {
        onChange?.(value)
      } else {
        if (value.min < min && value.max > max) {
          onChange?.({ min, max })
          setValue({ min, max })
        } else if (value.min >= min && value.max > max) {
          onChange?.({ min: value.min, max })
          setValue({ min: value.min, max })
        } else if (value.min < min && value.max <= max) {
          onChange?.({ min, max: value.max })
          setValue({ min, max: value.max })
        } else {
          if (value.max < value.min) {
            if (value.min > max) {
              onChange?.({ min: max, max })
              setValue({ min: max, max })
            } else {
              onChange?.({ min: value.max, max: value.max })
              setValue({ min: value.max, max: value.max })
            }
          } else {
            onChange?.(value)
            setValue(value)
          }
        }
      }
    }
  }, 1000)

  useEffect(() => {
    if (!sliderIsChanging && !disableDebounce) {
      debouncedRequest()
    }
  }, [value])

  const handleInputChange = (val: string, name: string) => {
    const newRange = {
      min: name === 'min' ? Number(val) : value.min,
      max: name === 'max' ? Number(val) : value.max,
    }

    if (sliderIsChanging) {
      setSliderIsChanging(false)
    }

    setValue(newRange)

    if (disableDebounce) {
      onChange?.(newRange)
    }
  }

  const handleChange = (val: number | Range) => {
    if (!sliderIsChanging) {
      setSliderIsChanging(true)
    }

    if (typeof val === 'object') {
      const roundedMin = step ? roundDownToStep(val.min, step, min) : val.min
      const roundedMax = step ? roundUpToStep(val.max, step, min) : val.max

      const newValue = {
        min: Math.max(min, Math.min(roundedMin, max)),
        max: Math.max(min, Math.min(roundedMax, max)),
      }

      setValue(newValue)
    }
  }

  const handleChangeComplete = (val: number | Range) => {
    onChange?.(val)
  }

  return (
    <div className={cx(styles.sliderWrapper, { [styles.disabled]: disabled })}>
      {withFields && (
        <div className={styles.fieldsContainer}>
          <InputField
            className={styles.sliderInputField}
            label={minLabel}
            name="min"
            type="number"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            value={value.max.toString()}
            min={allowSameValues ? value.min : value.min + 1}
            max={max}
            height="sm"
            disabled={disabled}
          />
        </div>
      )}
      <InputRange
        step={step}
        allowSameValues={allowSameValues}
        minValue={min}
        maxValue={max}
        formatLabel={(value) => (formatLabel ? `${value} ${formatLabel}` : '')}
        value={value}
        onChange={handleChange}
        onChangeComplete={handleChangeComplete}
        disabled={disabled}
        classNames={{
          activeTrack: cx(styles.track, styles.activeTrack),
          disabledInputRange: styles.disabledInputRange,
          inputRange: styles.inputRange,
          labelContainer: styles.labelContainer,
          maxLabel: styles.maxLabel,
          minLabel: styles.minLabel,
          slider: styles.slider,
          sliderContainer: styles.sliderContainer,
          track: styles.track,
          valueLabel: cx(styles.valueLabel, { [styles.hide]: withFields }),
        }}
      />
    </div>
  )
}

export { Slider }
