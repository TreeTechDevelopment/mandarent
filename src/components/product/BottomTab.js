import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'

import styles from '../../styles/Product'

const BottomTab = ({ product }) => {
    return (
        <View style={styles.bottomTab}>
            <View>
                <Text style={styles.bottomTabText}>$ {product.price.daily} / Daily</Text>
                <Text style={styles.bottomTabText}>$ {product.price.weekly} / Weekly</Text>
            </View>
            <TouchableNativeFeedback>
                <View style={styles.bottomTabBtn}>
                    <Text style={styles.bottomTabBtnText}>Reserve</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default BottomTab
