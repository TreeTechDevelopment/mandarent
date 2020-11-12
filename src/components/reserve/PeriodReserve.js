import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from '../../styles/Reserve'

const PeriodReserve = ({ startDay, endDay, startHour, endHour }) => {

    const returnHour = hour => {
        switch(hour){
            case 0: return '00:00'
            case 1: return '01:00'
            case 2: return '02:00'
            case 3: return '03:00'
            case 4: return '04:00'
            case 5: return '05:00'
            case 6: return '06:00'
            case 7: return '07:00'
            case 8: return '08:00'
            case 9: return '09:00'
            case 10: return '10:00'
            case 11: return '11:00'
            case 12: return '12:00'
            case 13: return '13:00'
            case 14: return '14:00'
            case 15: return '15:00'
            case 16: return '16:00'
            case 17: return '17:00'
            case 18: return '18:00'
            case 19: return '19:00'
            case 20: return '20:00'
            case 21: return '21:00'
            case 22: return '22:00'
            case 23: return '23:00'
        }
    }

    const returnDate = date => {
        let newDate = new Date(date)
        let dateString = newDate.toString()
        return `${dateString.split(' ')[0]}, ${dateString.split(' ')[2]} ${dateString.split(' ')[1]}`
    }

    return (
        <View style={styles.periodReserveContainer}>
            <View style={styles.dateHourPeriodContainer}>
                <Text style={styles.periodDay}>{startDay ? returnDate(startDay.dateString) : 'Start Day'}</Text>
                <Text style={styles.periodHour}>{returnHour(startHour)}</Text>
            </View>
            <View style={styles.dateHourPeriodContainer}>
                <Text style={styles.periodDay}></Text>
                <Icon name="long-arrow-alt-right" size={25} color="black"/>
            </View>
            <View style={styles.dateHourPeriodContainer}>
                <Text style={styles.periodDay}>{endDay ? returnDate(endDay.dateString) : 'End Day'}</Text>
                <Text style={styles.periodHour}>{returnHour(endHour)}</Text>
            </View>
        </View>
    )
}

export default PeriodReserve
