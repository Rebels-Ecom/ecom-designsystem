import React, { useState } from 'react'
import DatePicker, { CalendarContainer } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import styles from './ui-date-picker.module.css'
import sv from 'date-fns/locale/sv'
import { Button } from '../button/button'
import { getIsoString } from '../../../../helpers/date-helper'
import cx from 'classnames'

export interface IUiDatePicker {
  selectedDeliveryDate: string,
  deliveryDates: Array<Date>
  holidayDates: Array<Date>
  headerText?: string
  onDateSelected: CallableFunction
  className?: string
}

function UiDatePicker({ selectedDeliveryDate, deliveryDates, holidayDates, headerText, onDateSelected, className } : IUiDatePicker) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(selectedDeliveryDate))
  const deliveryDaysStrings = getDateStrings(deliveryDates)
  const holidayDaysStrings = getDateStrings(holidayDates)
  const customHeaderText = headerText ? headerText : 'Välj din leveransdag'

  const CustomCalendarContainer = ({ className, children } : { className: any, children: React.ReactNode }) => {
    return (
      <CalendarContainer className={cx(className, styles.customHeaderContainer)}>
        <div className={styles.customHeaderTextWrapper}>
          {customHeaderText}
        </div>
        <div style={{ position: "relative" }}>{children}</div>
      </CalendarContainer>
    )
  }

  function getDateStrings(dates:Array<Date>){
    return dates.map((date: any) => {
      return getIsoString(date).split("+")[0]
    })
  }

  function onClickSelectDate(date:Date){
    setSelectedDate(date)
    onDateSelected(date)
  }

  function getDayCustomClass(date: Date){
    const formatedDate = getIsoString(date).split("+")[0]
    const selectedDay = selectedDate.toISOString().split(".")[0]
    const today = new Date()

    if(getIsoString(date).split("T")[0] === today.toISOString().split("T")[0]) {
      return 'currentDay'
    }
    else if(formatedDate===selectedDay) {
      return 'selectedDay'
    }
    else if(deliveryDaysStrings.includes(formatedDate)){
      return 'deliveryDay'
    }
    else if(holidayDaysStrings.includes(formatedDate)){
      return 'holidayDay'
    }
    else if(today > date) {
      return 'pastDay'
    }
    return 'day'
  }

  if(!selectedDeliveryDate || !deliveryDates || deliveryDates.length===0 || !holidayDates || holidayDates.length===0 || !onDateSelected)
    return null

  return (
    <div className={styles.datePickerWrapper}>
    <DatePicker 
      selected={selectedDate} 
      onChange={date => date && onClickSelectDate(date)}
      includeDates={deliveryDates}
      excludeDates={holidayDates}
      locale={sv}
      dateFormat="yyyy/MM/dd"
      calendarClassName={styles.calendar}
      calendarContainer={CustomCalendarContainer}
      dayClassName={(date)=> cx(styles.day, styles[getDayCustomClass(date)])}
      customInput={<Button type={'button'} surface={'secondary'} iconRight={{icon:'icon-calendar'}} rounded className={className ? className : ''} >{selectedDate.toLocaleDateString()}</Button>}
    />
    </div>
  )
}

export { UiDatePicker }