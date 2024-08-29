import React, { useEffect, useState } from 'react'
import cx from 'classnames';
import { TOther } from '../../../../../types/other'
import { useDebounce } from '../../../../../helpers/generic-helper'
import styles from './debounce-input.module.css'

type acceptedTypes = 'number' | 'text';

export interface IDebounceInput {
  quantityInputId: string
  quantity: string
  salesUnit: string
  itemNumberPerSalesUnit: number
  totalPrice: string
  disabled?: boolean
  maxQuantity?: number
  hidePrice?: boolean;
  /** decides how delayed the debouncedEvent will be (ms)
   * @default 1000
   */
  debounceVal?: number;
  debouncedEvent: CallableFunction;
  type?: acceptedTypes;
  min?: string;
  rest?: TOther;
  pricePerUnitText?: string;
}

const DebounceInput = ({
  debouncedEvent,
  salesUnit,
  itemNumberPerSalesUnit,
  totalPrice,
  hidePrice,
  maxQuantity,
  quantity,
  disabled,
  quantityInputId,
  debounceVal = 1000,
  pricePerUnitText
 }: IDebounceInput) => {
  const [value, setValue] = useState(quantity);

  useEffect(() => {
    setValue(quantity)
  }, [quantity]);

  const debouncedRequest = useDebounce(() => {
    if (value !== '') {
      debouncedEvent(value);
    }
  }, debounceVal);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxQuantity && Number(e.target.value) > maxQuantity) {
      return;
    }
    
    setValue(e.target.value);
    
    debouncedRequest();
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setValue('0');
      debouncedRequest();
    }
  }

  const priceDetail = `${itemNumberPerSalesUnit} styck ${pricePerUnitText ?? ''}`;

  return (
    <div className={`${styles.debounceQuantityWrapper}`}>
      <input
        id={quantityInputId}
        type='number'
        min="0"
        className={cx('body', styles.debounceQuantityInput)}
        onChange={onChange}
        value={value}
        placeholder='0'
        onBlur={handleBlur}
        onKeyDown={(e: React.KeyboardEvent) => {
          const illegalChars = ['-', '+', '.', ',', 'e', 'E']
          if (illegalChars.find((p) => p === e.key)) {
            e.preventDefault()
          }
        }}
        onPaste={(e: React.ClipboardEvent) => {
          e.preventDefault()
        }}
        disabled={disabled}
      />
      <div>
        <p className={`${styles.textQuantity} bodyS`}>
          {`x ${salesUnit} (${!hidePrice ? priceDetail.trim() : `${itemNumberPerSalesUnit} styck`})`}
        </p>
        {!hidePrice && <p className={`${styles.textPrice} bodyS fontBold`}>{`Pris: ${totalPrice} kr`}</p>}
      </div>
    </div>
  );
};

export { DebounceInput }
