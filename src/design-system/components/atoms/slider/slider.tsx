import { useState } from 'react';
import InputRange, { Range } from 'react-input-range'
import 'react-input-range/lib/css/index.css';
import styles from './slider.module.css';
import cx from 'classnames';
import { InputField } from '../../molecules/form/components/input-field';

type TSlider = {
  min: number;
  max: number;
  // Defines a different pre selected min value
  defaultMinVal?: number;
  // Defines a different pre selected max value
  defaultMaxVal?: number;
  onChange?: (range: number | Range) => void;
  // Unit to display after min and max values
  formatLabel? :string;
  /**
   * Defines if input fields should be displayed above slider
   * @default false
   * */
  withFields?: boolean;
  minLabel?: string;
  maxLabel?: string;
  allowSameValues?: boolean;
  step?: number;
  disabled?: boolean;
}

const Slider = ({ onChange, formatLabel, min, max, defaultMinVal, defaultMaxVal, withFields, minLabel, maxLabel, allowSameValues, step, disabled }: TSlider) => {
  const [value, setValue] = useState<number | Range>({ min: defaultMinVal ?? min, max: defaultMaxVal ?? max })
  if (typeof value !== 'object'){
    return null;
  }

  // TODO: step must affect this function too. Otherwise sliding will reset value by this function.
  const handleInputChange = (val: string, name: string) => {
    const newRange = {
      min: name === 'min' ? Number(val) : value.min,
      max: name === 'max' ? Number(val) : value.max,
    };
    setValue(newRange);
    onChange?.(newRange);
  }
  
  const handleChange = (value: number | Range) => {
    setValue(value)
  }
  
  const handleChangeComplete = (value: number | Range) => {
    onChange?.(value);
  }

  return (
    <div className={cx(styles.sliderWrapper, {[styles.disabled]: disabled})}>
      {withFields && (
        <div className={styles.fieldsContainer}>
          <InputField
            label={minLabel}
            name='min'
            type='number'
            onChange={handleInputChange}
            value={value.min.toString()}
            min={min}
            max={allowSameValues ? value.max : value.max - 1}
            height='sm'
            disabled={disabled}
          />
          <InputField
            label={maxLabel}
            name='max'
            type='number'
            onChange={handleInputChange}
            value={value.max.toString()}
            min={allowSameValues ? value.min : value.min + 1}
            max={max}
            height='sm'
            disabled={disabled}
          />
        </div>
      )}
      <InputRange
        step={step}
        allowSameValues={allowSameValues}
        minValue={min}
        maxValue={max}
        formatLabel={value => formatLabel ? `${value} ${formatLabel}` : ''}
        value={value}
        onChange={handleChange}
        onChangeComplete={handleChangeComplete}
        disabled={disabled}
        classNames={
          {
            activeTrack: cx(styles.track, styles.activeTrack),
            disabledInputRange: styles.disabledInputRange,
            inputRange: styles.inputRange,
            labelContainer: styles.labelContainer,
            maxLabel: styles.maxLabel,
            minLabel: styles.minLabel,
            slider: styles.slider,
            sliderContainer: styles.sliderContainer,
            track: styles.track,
            valueLabel: styles.valueLabel,
          }
        }
      />
    </div>
  )
}

export {
  Slider
}