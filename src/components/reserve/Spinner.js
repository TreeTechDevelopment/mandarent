import React, { useRef, useState } from 'react'
import { View, ScrollView, Text } from 'react-native'

import { hoursSpinner } from '../../data'
import styles from '../../styles/Reserve'

const Spinner = ({ setHour }) => {

    let initialOffset = 0

    const refScroll = useRef(null)

    const [currentHour, setCurrentHour] = useState(10)

    const scrollNextHour = e => {
        let differenceOffset = e.nativeEvent.contentOffset.x - initialOffset
        if(differenceOffset < 0 ){
            let currentIndex = Math.ceil(e.nativeEvent.contentOffset.x / (e.nativeEvent.layoutMeasurement.width/3))
            setCurrentHour(currentIndex-1)
            setHour(currentIndex-1)
            refScroll.current.scrollTo({ x: (currentIndex-1) * (e.nativeEvent.layoutMeasurement.width/3), y: 0, animated: true })
        }else{
            let currentIndex = Math.ceil((e.nativeEvent.contentOffset.x + e.nativeEvent.layoutMeasurement.width/3) / (e.nativeEvent.layoutMeasurement.width/3))
            setCurrentHour(currentIndex-1)
            setHour(currentIndex-1)
            refScroll.current.scrollTo({ x: (currentIndex-1) * (e.nativeEvent.layoutMeasurement.width/3), y: 0, animated: true })
        }
        
    }

    const handleBeginDrag = e => {
        initialOffset = e.nativeEvent.contentOffset.x
    }

    const onLayout = (e) => {
        refScroll.current.scrollTo({ x: 10 * (e.nativeEvent.layout.width/3), y: 0, animated: true })
    }

    return (
        <View style={styles.spinnerContainer}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                onScrollEndDrag={scrollNextHour}
                onScrollBeginDrag={handleBeginDrag}
                ref={refScroll}
                onLayout={onLayout}
            >
                {hoursSpinner.map( hour => (
                    <View style={styles.textSpinnerContainer} key={hour + Math.random().toString()}>
                        <Text style={Number(hour.split(':')[0]) === currentHour ? {...styles.spinnerText, color: 'black'} : styles.spinnerText}>
                            {hour}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Spinner
