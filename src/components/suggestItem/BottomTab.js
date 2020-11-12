import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'

import styles from '../../styles/SuggestItem'

const BottomTab = ({ gotoRent }) => {
    return (
        <View style={styles.bottomTab}>
            <View style={styles.topBarLine}></View>
            <Text style={styles.bottomTabText}>or create a new listing</Text>
            <TouchableNativeFeedback onPress={gotoRent}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Rent</Text>
                </View>
            </TouchableNativeFeedback>
            <Text style={styles.bottomTabText}>Once you suggest item, demander will be notified. If (s)he find your item compatible (s)he will send you an offer</Text>
        </View>
    )
}

export default BottomTab
