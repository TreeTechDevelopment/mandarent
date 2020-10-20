import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import styles from '../../styles/Rent'

const TopBar = ({ goBack }) => {

    return (
        <View style={styles.topBar}>
            <TouchableWithoutFeedback onPress={goBack}>
                <Icon name="arrowleft" color="black" size={30}/>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default TopBar
