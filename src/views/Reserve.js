import React, { useState, useEffect } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Calendar from '../components/reserve/Calendar'
import PeriodReserve from '../components/reserve/PeriodReserve'
import ReserveHour from '../components/reserve/ReserveHour'
import Navbar from '../components/settings/Navbar'
import styles from '../styles/Reserve'

const Reserve = ({ navigation, route }) => {

    const [startDay, setStartDay] = useState(null)
    const [endDay, setEndDay] = useState(null)
    const [startHour, setStartHour] = useState(10)
    const [endHour, setEndHour] = useState(10)
    const [item, setItem] = useState({})

    const goBack = () => navigation.goBack()

    const storeItems = async (value) => {
        try {
            await AsyncStorage.setItem('@shop_cart', JSON.stringify(value))
        } catch (e) {
            console.log(e)
        }
    }

    const getItems = async () => {
        try {
            const value = await AsyncStorage.getItem('@shop_cart')
            if(value){ return JSON.parse(value) }
            return value
        } catch(e) {
            console.log(e)
        }
    }

    const getItemToStore = () => { 
        return ({
            listing: item,
            from:{
                date: startDay.dateString,
                hour: startHour
            },
            to:{
                date: endDay.dateString,
                hour: endHour
            },
            id: Math.random().toString() + Date.now().toString()
        })
    }

    const handleBtn = async () => {
        let newItem = getItemToStore()

        let itemsStored = await getItems()
        if(itemsStored){ storeItems([...itemsStored, newItem]) }
        else{ storeItems([newItem]) }
    }

    useEffect(() => {
        let item = route.params?.item
        if(item){ setItem(item) }
    }, [route.params])

    return (
        <View style={styles.mainContainer}>
            <Navbar 
                goBack={goBack}
                woText
                backIcon="close"
            />
            <PeriodReserve 
                startDay={startDay}
                endDay={endDay}
                startHour={startHour}
                endHour={endHour}
            />
            <Calendar 
                startDay={startDay}
                endDay={endDay}
                setStartDay={setStartDay}
                setEndDay={setEndDay}
            />
            <ReserveHour 
                setStartHour={setStartHour}
                setEndHour={setEndHour}
            />
            <View style={styles.btnContainer}>
                <TouchableNativeFeedback onPress={handleBtn}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Reserve</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

export default Reserve
