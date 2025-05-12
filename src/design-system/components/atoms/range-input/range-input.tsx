import cx from 'classnames'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useEffect, useState } from 'react'
import { useDebounce } from '../../../../helpers/generic-helper'
import { InputField } from '../../molecules/form/components/input-field'
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
  allowSameValues = true,
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
      let { min: newMin, max: newMax } = value

      if (!allowSameValues && newMin === newMax) {
        newMax = Math.min(max, newMax + (step ?? 1))
      }

      if (newMin <= newMax && newMin >= min && newMax <= max) {
        onChange?.({ min: newMin, max: newMax })
      } else {
        const correctedMin = Math.max(min, Math.min(newMin, max))
        const correctedMax = Math.min(max, Math.max(newMax, min))
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
    let newRange = {
      min: name === 'min' ? numVal : value.min,
      max: name === 'max' ? numVal : value.max,
    }

    if (!allowSameValues && newRange.min === newRange.max) {
      if (name === 'min') newRange.min = Math.max(min, newRange.min - (step ?? 1))
      if (name === 'max') newRange.max = Math.min(max, newRange.max + (step ?? 1))
    }

    if (sliderIsChanging) {
      setSliderIsChanging(false)
    }

    setValue(newRange)

    if (disableDebounce) {
      onChange?.(newRange)
    }
  }

  const handleSliderChange = (vals: number | number[]) => {
    if (Array.isArray(vals)) {
      let [minVal, maxVal] = vals

      if (!allowSameValues && minVal === maxVal) {
        maxVal = Math.min(max, maxVal + (step ?? 1))
      }

      if (!sliderIsChanging) setSliderIsChanging(true)
      setValue({ min: minVal, max: maxVal })
    }
  }

  const handleSliderChangeComplete = (vals: number | number[]) => {
    if (Array.isArray(vals)) {
      let [minVal, maxVal] = vals

      if (!allowSameValues && minVal === maxVal) {
        maxVal = Math.min(max, maxVal + (step ?? 1))
      }

      onChange?.({ min: minVal, max: maxVal })
    }
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
            onChange={(val) => handleInputChange(val, 'min')}
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
            onChange={(val) => handleInputChange(val, 'max')}
            value={value.max.toString()}
            min={allowSameValues ? value.min : value.min + 1}
            max={max}
            height="sm"
            disabled={disabled}
          />
        </div>
      )}

      <Slider
        range
        min={min}
        max={max}
        step={step}
        allowCross={allowSameValues}
        disabled={disabled}
        value={[value.min, value.max]}
        onChange={handleSliderChange}
        onChangeComplete={handleSliderChangeComplete}
        classNames={{
          tracks: styles.tracks,
          handle: styles.handle,
          track: styles.track,
          rail: styles.rail,
        }}
      />
    </div>
  )
}

export { RangeInput }
