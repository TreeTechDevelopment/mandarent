import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import styles from '../../styles/Demand'

const TopBar = ({ goBack }) => {
    return (
        <View style={styles.topBar}>
            <TouchableNativeFeedback onPress={goBack}>
                <Icon name="arrowleft" color='black' size={30}/>
            </TouchableNativeFeedback>
            <Text style={styles.topBarTitle}>Demand</Text>
            <Text style={styles.topBarText}>Describe what you demand for rent</Text>
        </View>
    )
}

export default TopBar
