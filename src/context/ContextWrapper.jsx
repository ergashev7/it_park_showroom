import React, { useCallback, useEffect, useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs, { isDayjs } from 'dayjs'

function ContextWrapper(props) {
  const [monthIndex,setMonthIndex]=useState(dayjs().month())
  const [smallCalendarMonth,setSmallCalendarMonth]=useState(null)
  const [daySelected , setDaySelected] = useState(isDayjs())
  const [showEventModal ,setShowEventModal]=useState(false)
  useEffect(()=>{
    if (smallCalendarMonth !== null) {
        setMonthIndex(smallCalendarMonth)
    }
  },[smallCalendarMonth])
  return (
    <GlobalContext.Provider value={{
        monthIndex ,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal
        }}>
        {props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper