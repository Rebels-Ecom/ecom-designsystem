import React, { forwardRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import styles from './ui-date-picker.module.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import sv from 'date-fns/locale/sv'
import { Button, IButton } from '../button/button'
import { convertToISOStringMidnight, getIsoString } from '../../../../helpers/date-helper'
import cx from 'classnames'

export interface TDatePickerDate {
  time: Date,
  date: Date,
  title: string
}

export interface IUiDatePicker {
  selectedDeliveryDate: string,
  deliveryDates: Array<string>
  holidayDates: Array<string>
}

function UiDatePicker({ selectedDeliveryDate, deliveryDates, holidayDates } : IUiDatePicker) {
  const [startDate, setStartDate] = useState<Date>(new Date(selectedDeliveryDate))
  const deliveryDays = getDates(deliveryDates)
  const holidayDays = getDates(holidayDates)
  const deliveryDaysStrings = getDateStrings(deliveryDates)
  const holidayDaysStrings = getDateStrings(holidayDates)

  function getDates(dates:any){
    return dates.map((date: any) => {
      return new Date(date.Time)
    })
  }

  function getDateStrings(dates:any){
    return dates.map((date: any) => {
      return date.Time
    })
  }


  //TODO
  // button input shows first available delivery date
  // first available delivery date OR selected delivery date - orange background
  // today orange lisgnt background and orange outline
  // available delivery dates - orange outline
  // rest unavailable - grey background
  // passed dates - lighter grey background

  //set delivery day - date:"2023-01-04"


  const isWeekday = (date:Date) => {
    const day = date.getDay()
    return day !== 0 && day !== 6
  }

  const isFriday = (date:Date) => {
    const day = date.getDay()
    return day !== 0 && day !== 5
  }

  const filterPassedDays = (date:any) => {
    const currentDate = new Date()
    const selectedDate = new Date(date)
    return currentDate < selectedDate
  }

  function getDayCustomClass(date: Date){
    const formatedDate = getIsoString(date).split("+")[0]
    const selectedDate = date.toISOString().split(".")[0]
    const today = new Date()

    console.log('FFFF', formatedDate, 'DATE', selectedDate)

    if(formatedDate===selectedDate) {
      console.log('DAY DAY')
      return 'selectedDay'
    }
    else if(deliveryDaysStrings.includes(formatedDate)){
      return 'deliveryDay'
    }
    else if(holidayDaysStrings.includes(formatedDate)){
      return 'holidayDay'
    }
    else if(today < date) {
      return 'pastDay'
    }
    return 'day'
  }

  

  return (
    <DatePicker 
      wrapperClassName={styles.datePicker}
      selected={startDate} 
      onChange={date => date &&  setStartDate(date)}
      dateFormat="yyyy/MM/dd"
      minDate={new Date()}
      // filterDate={isWeekday}
      includeDates={deliveryDays}
      excludeDates={holidayDays}
      locale={sv}
      calendarClassName={styles.calendar}
      dayClassName={(date)=> cx(styles.day, styles[getDayCustomClass(date)])}
      customInput={<Button type={'button'} surface={'secondary'} iconRight={{icon:'icon-calendar'}}rounded>{startDate.toLocaleDateString()}</Button>}
       />
  );
}

export { UiDatePicker }