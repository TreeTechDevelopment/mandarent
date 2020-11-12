import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import styles from '../../styles/SuggestItem'

const TopBar = ({ goBack }) => {
    return (
        <View style={styles.topBar}>
            <TouchableNativeFeedback onPress={goBack}>
                <Icon name="arrowleft" color='black' size={30}/>
            </TouchableNativeFeedback>
            <Text style={styles.topBarTitle}>My Current items</Text>
            <View style={styles.topBarLine}></View>
        </View>
    )
}

export default TopBar
