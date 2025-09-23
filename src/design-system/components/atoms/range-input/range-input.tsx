import cx from 'classnames'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useEffect, useState } from 'react'
import { useDebounce } from '../../../../helpers/generic-helper'
import { InputField } from '../../molecules/form/components/input-field'
import styles from './range-input.module.css'

type TSlider = {
  steps?: number[]
  defaultMinVal?: number
  defaultMaxVal?: number
  onChange?: (range: { min: number; max: number }) => void
  formatLabel?: string
  withFields?: boolean
  minLabel?: string
  maxLabel?: string
  allowSameValues?: boolean
  disabled?: boolean
  disableDebounce?: boolean
}

const RangeInput = ({
  steps,
  defaultMinVal,
  defaultMaxVal,
  onChange,
  withFields,
  minLabel,
  maxLabel,
  allowSameValues = true,
  disabled,
  disableDebounce,
  formatLabel,
}: TSlider) => {
  if (!steps || steps.length === 0) {
    throw new Error('RangeInput requires a non-empty steps array')
  }

  const minStep = steps[0]
  const maxStep = steps[steps.length - 1]

  const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val))

  const valueToIndex = (val: number) => {
    for (let i = 0; i < steps.length; i++) {
      if (steps[i] >= val) return i
    }
    return steps.length - 1
  }

  const clampIndex = (idx: number) => Math.max(0, Math.min(idx, steps.length - 1))

  const [sliderIsChanging, setSliderIsChanging] = useState(true)

  const [freeRange, setFreeRange] = useState<{ min: number; max: number }>({
    min: clamp(defaultMinVal ?? steps[0], minStep, maxStep),
    max: clamp(defaultMaxVal ?? steps[steps.length - 1], minStep, maxStep),
  })

  const [indexRange, setIndexRange] = useState<{ minIdx: number; maxIdx: number }>({
    minIdx: valueToIndex(freeRange.min),
    maxIdx: valueToIndex(freeRange.max),
  })

  const debouncedRequest = useDebounce(() => {
    if (!allowSameValues && freeRange.min === freeRange.max) {
      const newMax = clamp(freeRange.max + 1, minStep, maxStep)
      setFreeRange((prev) => ({ ...prev, max: newMax }))
      onChange?.({ min: freeRange.min, max: newMax })
    } else if (freeRange.min > freeRange.max) {
      setFreeRange({ min: freeRange.max, max: freeRange.min })
    } else {
      onChange?.({ min: freeRange.min, max: freeRange.max })
    }
  }, 1000)

  useEffect(() => {
    if (!steps || steps.length === 0) return

    const newMin = clamp(defaultMinVal ?? steps[0], steps[0], steps[steps.length - 1])
    const newMax = clamp(defaultMaxVal ?? steps[steps.length - 1], steps[0], steps[steps.length - 1])

    setFreeRange({ min: newMin, max: newMax })
    setIndexRange({ minIdx: valueToIndex(newMin), maxIdx: valueToIndex(newMax) })
    setSliderIsChanging(true)
  }, [steps, defaultMinVal, defaultMaxVal])

  useEffect(() => {
    if (!sliderIsChanging && !disableDebounce) {
      debouncedRequest()
    }
  }, [freeRange, sliderIsChanging, disableDebounce])

  const handleInputChange = (val: string, name: 'min' | 'max') => {
    const numVal = Number(val)
    if (isNaN(numVal)) return

    let newRange = {
      min: name === 'min' ? numVal : freeRange.min,
      max: name === 'max' ? numVal : freeRange.max,
    }

    if (!allowSameValues && newRange.min === newRange.max) {
      if (name === 'min') newRange.min = newRange.min - 1
      if (name === 'max') newRange.max = newRange.max + 1
    }

    const newIndexRange = {
      minIdx: valueToIndex(newRange.min),
      maxIdx: valueToIndex(newRange.max),
    }

    if (sliderIsChanging) setSliderIsChanging(false)

    setFreeRange(newRange)
    setIndexRange(newIndexRange)

    if (disableDebounce) {
      onChange?.({ min: newRange.min, max: newRange.max })
    }
  }

  const handleSliderChange = (vals: number | number[]) => {
    if (Array.isArray(vals)) {
      let [minIdx, maxIdx] = vals
      minIdx = clampIndex(minIdx)
      maxIdx = clampIndex(maxIdx)

      if (!allowSameValues && minIdx === maxIdx) {
        maxIdx = Math.min(steps.length - 1, maxIdx + 1)
      }

      const newMin = steps[minIdx]
      const newMax = steps[maxIdx]

      if (!sliderIsChanging) setSliderIsChanging(true)

      setIndexRange({ minIdx, maxIdx })
      setFreeRange({ min: newMin, max: newMax })

      if (disableDebounce) {
        onChange?.({ min: newMin, max: newMax })
      }
    }
  }

  const handleSliderChangeComplete = (vals: number | number[]) => {
    if (Array.isArray(vals)) {
      let [minIdx, maxIdx] = vals

      if (!allowSameValues && minIdx === maxIdx) {
        maxIdx = Math.min(steps.length - 1, maxIdx + 1)
      }

      const newMin = steps[minIdx]
      const newMax = steps[maxIdx]

      onChange?.({ min: newMin, max: newMax })
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
            value={freeRange.min.toString()}
            min={minStep}
            max={allowSameValues ? freeRange.max : Math.max(minStep, freeRange.max - 1)}
            height="sm"
            disabled={disabled}
          />
          <InputField
            className={styles.sliderInputField}
            label={maxLabel}
            name="max"
            type="number"
            onChange={(val) => handleInputChange(val, 'max')}
            value={freeRange.max.toString()}
            min={allowSameValues ? freeRange.min : Math.min(maxStep, freeRange.min + 1)}
            max={maxStep}
            height="sm"
            disabled={disabled}
          />
        </div>
      )}

      <Slider
        range
        min={0}
        max={steps.length - 1}
        step={1}
        allowCross={allowSameValues}
        disabled={disabled}
        marks={Object.fromEntries(steps.map((v, i) => [i, '']))}
        value={[indexRange.minIdx, indexRange.maxIdx]}
        onChange={handleSliderChange}
        onChangeComplete={handleSliderChangeComplete}
        classNames={{
          tracks: styles.tracks,
          handle: styles.handle,
          track: styles.track,
          rail: styles.rail,
        }}
      />
      <div className={styles.formatLabels}>
        <span className={styles.formatLabel}>{`${steps[0]} ${formatLabel}`}</span>
        <span className={styles.formatLabel}>{`${steps[steps.length - 1]} ${formatLabel}`}</span>
      </div>
    </div>
  )
}

export { RangeInput }
