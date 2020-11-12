import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'

import styles from '../../styles/Product'

const BottomTab = ({ product, gotoReserve }) => {

    const getWeeklyPrice = () => {

        let dailyPrice = Number(product.price.daily)
        let weeklyDiscount = Number(product.discount.weeklyDiscount) / 100

        let total = 0

        for(let i = 0; i < 7; i++){ total += dailyPrice }

        total -= total * weeklyDiscount

        return total.toFixed(2)
    }

    return (
        <View style={styles.bottomTab}>
            <View>
                <Text style={styles.bottomTabText}>$ {product.price.daily} / Daily</Text>
                <Text style={styles.bottomTabText}>$ {getWeeklyPrice()} / Weekly</Text>
            </View>
            <TouchableNativeFeedback onPress={gotoReserve}>
                <View style={styles.bottomTabBtn}>
                    <Text style={styles.bottomTabBtnText}>Reserve</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default BottomTab
