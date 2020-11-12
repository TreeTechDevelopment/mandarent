import React from 'react'
import { View, Text } from 'react-native'
import { Calendar as CalendarComponent} from 'react-native-calendars';

import styles from '../../styles/Reserve';

const Calendar = ({ startDay, endDay, setStartDay, setEndDay }) => {

    const handleDay = day => {
        if(!startDay){ setStartDay(day) }
        else{ setEndDay(day) }
    }

    const returnDaysMarked = () => {
        if(startDay){
            if(endDay){ 
                let datesMarked = {
                    [startDay.dateString]: { startingDay: true, color: 'rgb(251, 93, 107)'}
                }
                return getPeriodDays(datesMarked)
            }
            else{ 
                let datesMarked = {
                    [startDay.dateString]: { startingDay: true, color: 'rgb(251, 93, 107)'}
                }
                return datesMarked
            }
        }
        return {}
    }

    const getPeriodDays = datesMarked => {

        let newDatesMarked = datesMarked
        let daysDifference = getDaysDifference(startDay.dateString, endDay.dateString)
        let lastDay = new Date(startDay.dateString)

        for(let i = 1; i < daysDifference ; i++){
            lastDay.setDate(lastDay.getDate() + 1)

            let newMonth = lastDay.getMonth() + 1 < 10 ? `0${lastDay.getMonth() + 1}` : lastDay.getMonth() + 1
            let newDay = lastDay.getDate() < 10 ? `0${lastDay.getDate()}` : lastDay.getDate() 

            newDatesMarked[`${lastDay.getFullYear()}-${newMonth}-${newDay}`] = {  color: 'rgb(251, 93, 107)'}
        }

        newDatesMarked[endDay.dateString] = { endingDay: true, color: 'rgb(251, 93, 107)'}

        return newDatesMarked
    }

    const getDaysDifference = (startDay, endDay) => {
        const date1 = new Date(startDay);
        const date2 = new Date(endDay);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        return diffDays
    }

    return (
        <View style={styles.calendarContainer}>
            <CalendarComponent 
                onDayPress={handleDay}
                markedDates={returnDaysMarked()}
                markingType='period'
            />
        </View>
    )
}

export default Calendar
