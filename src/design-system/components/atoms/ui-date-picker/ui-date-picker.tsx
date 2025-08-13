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

export interface IUiDatePicker {
  buttonLabel: string
  selectedDeliveryDate: string
  deliveryDates: Array<Date>
  holidayDates: Array<Date>
  headerText?: string
  onDateSelected: CallableFunction
  showDateLabel?: boolean
  className?: string
  loading?: boolean
  onClick?: CallableFunction
  allowPastDay?: boolean
  orderStopDate?: {
    title?: string
    stopDates?: Array<string>
  }
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
  loading,
  onClick,
  allowPastDay,
  orderStopDate,
}: IUiDatePicker) {
  const datepickerRef = useRef<DatePicker | any>(null)
  const [open, setOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(selectedDeliveryDate))
  const deliveryDaysStrings = getDateStrings(deliveryDates)
  const holidayDaysStrings = getDateStrings(holidayDates)
  const customHeaderText = headerText ? headerText : 'Välj din leveransdag'

  useEffect(() => {
    setSelectedDate(new Date(selectedDeliveryDate))
  }, [selectedDeliveryDate])

  const CustomInput = forwardRef(() => {
    const handleClick = () => {
      setOpen(!open)
      if (!open) {
        onClick?.()
      }
    }

    return (
      <Button
        type="button"
        surface="x"
        size="x-small"
        className={cx(
          styles.datePickerBtn,
          showDateLabel ? '' : styles.datePickerBtnHeader,
          className ? className : ''
        )}
        onClick={handleClick}
        disabled={loading}
        fullWidth
      >
        <span className={styles.buttonLabelWrapper}>
          <span className={styles.buttonLabel}>{buttonLabel}</span>
          <span className={styles.buttonIconWrapper}>
            <Icon className={styles.icon} icon="icon-calendar" />
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
        {Boolean(orderStopDate?.stopDates?.length) && (
          <div className={styles.orderStopDates}>
            {orderStopDate?.title && <p className={styles.stopDateTitle}>{orderStopDate.title}</p>}
            {orderStopDate?.stopDates?.map((stopDate) => (
              <p key={stopDate} className={styles.stopDate}>
                {stopDate}
              </p>
            ))}
          </div>
        )}
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
      return allowPastDay ? 'pastDay allowPastDay' : 'pastDay'
    }
    return 'day'
  }

  useOnClickOutside({ ref: datepickerRef, onClose: () => setOpen(false) })

  if (!selectedDeliveryDate || !deliveryDates || !holidayDates || holidayDates.length === 0 || !onDateSelected) {
    return null
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
