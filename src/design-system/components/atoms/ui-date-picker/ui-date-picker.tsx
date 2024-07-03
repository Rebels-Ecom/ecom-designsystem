import React, { forwardRef, useEffect, useRef, useState } from 'react'
import DatePicker, { CalendarContainer } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import styles from './ui-date-picker.module.css'
import sv from 'date-fns/locale/sv'
import { Button } from '../button/button'
import { getIsoString } from '../../../../helpers/date-helper'
import cx from 'classnames'
import { Icon } from '../icon/icon'
import { useOnClickOutside } from '../../../hooks'
import { Placeholder } from '../placeholder/placeholder'

export interface IUiDatePicker {
  buttonLabel: string
  selectedDeliveryDate: string
  deliveryDates: Array<Date>
  holidayDates: Array<Date>
  headerText?: string
  onDateSelected: CallableFunction
  showDateLabel?: boolean
  className?: string
  loading?: boolean;
}

function UiDatePicker({
  buttonLabel,
  selectedDeliveryDate,
  deliveryDates,
  holidayDates,
  headerText,
  onDateSelected,
  showDateLabel,
  className,
  loading
}: IUiDatePicker) {
  const datepickerRef = useRef<DatePicker | any>(null)
  const [open, setOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(selectedDeliveryDate))
  const deliveryDaysStrings = getDateStrings(deliveryDates)
  const holidayDaysStrings = getDateStrings(holidayDates)
  const customHeaderText = headerText ? headerText : 'Välj din leveransdag'

  const CustomInput = forwardRef(() => {
    const handleClick = () => {
      setOpen(!open)
    }

    return (
      <Button
        type="button"
        surface="x"
        size="x-small"
        className={cx(styles.datePickerBtn, showDateLabel ? '' : styles.datePickerBtnHeader, className ? className : '')}
        onClick={handleClick}
        disabled={loading}
      >
        <span className={styles.buttonLabelWrapper}>
          <span className={styles.buttonLabel}>{buttonLabel}</span>
          <span className={styles.buttonIconWrapper}>
            <Icon className={styles.icon} icon={'icon-calendar'}></Icon>
            {!showDateLabel && <span className={styles.iconText}>Välj</span>}
          </span>
        </span>
      </Button>
    )
  })

  const CustomCalendarContainer = ({ className, children }: { className: any; children: React.ReactNode }) => {
    return (
      <CalendarContainer className={cx(className, styles.customHeaderContainer)}>
        <div className={styles.customHeaderTextWrapper}>{customHeaderText}</div>
        <div style={{ position: 'relative' }}>{children}</div>
      </CalendarContainer>
    )
  }

  function getDateStrings(dates: Array<Date>) {
    return dates.map((date: any) => {
      return getIsoString(date).split('+')[0]
    })
  }

  function onClickSelectDate(date: Date) {
    setSelectedDate(date)
    onDateSelected(date)
  }

  function getDayCustomClass(date: Date) {
    const formatedDate = getIsoString(date).split('+')[0]
    const selectedDay = selectedDate.toISOString().split('.')[0]
    const today = new Date()

    if (getIsoString(date).split('T')[0] === today.toISOString().split('T')[0]) {
      return 'currentDay'
    } else if (formatedDate === selectedDay) {
      return 'selectedDay'
    } else if (deliveryDaysStrings.includes(formatedDate)) {
      return 'deliveryDay'
    } else if (holidayDaysStrings.includes(formatedDate) || date.getDay() === 0 || date.getDay() === 6) {
      return 'holidayDay'
    } else if (today > date) {
      return 'pastDay'
    }
    return 'day'
  }

  useOnClickOutside({ ref: datepickerRef, onClose: () => setOpen(false) })

  if (loading || !selectedDeliveryDate || !deliveryDates || !holidayDates || holidayDates.length === 0 || !onDateSelected) {
    return (
      <div className={cx(styles.datePickerWrapper, styles.ghost)}>
        <span className={styles.buttonLabelWrapper}>
          <Placeholder type='heading' noMargin />
          <span className={styles.buttonIconWrapper}>
            <Icon className={styles.icon} icon={'icon-calendar'}></Icon>
            <Placeholder type='heading' noMargin />
          </span>
        </span>
      </div>  
    )
  }

  return (
    <div className={styles.datePickerWrapper} ref={datepickerRef}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => date && onClickSelectDate(date)}
        includeDates={deliveryDates}
        excludeDates={holidayDates}
        locale={sv}
        dateFormat="yyyy/MM/dd"
        calendarClassName={styles.calendar}
        calendarContainer={CustomCalendarContainer}
        dayClassName={(date) => cx(styles.day, styles[getDayCustomClass(date)])}
        customInput={<CustomInput />}
        open={open}
      />
    </div>
  )
}

export { UiDatePicker }
