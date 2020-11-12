import React from 'react'
import { View, Text } from 'react-native'

import Spinner from './Spinner'
import styles from '../../styles/Reserve';

const ReserveHour = ({ setStartHour, setEndHour }) => {

    const handleStartHourSlider = value => setStartHour(value)
    const handleEndHourSlider = value => setEndHour(value)

    return (
        <View style={styles.slidersContainer}>
            <View style={styles.sliderContainer}>
                <Text style={styles.sliderLabel}>Start Time</Text>
                <Spinner setHour={handleStartHourSlider}/>
            </View>
            <View style={styles.sliderContainer}>
                <Text style={styles.sliderLabel}>End Time</Text>
                <Spinner setHour={handleEndHourSlider}/>
            </View>
        </View>
    )
}

export default ReserveHour
