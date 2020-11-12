import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
 
import styles from '../../styles/Demanded'

const TopBar = ({ goBack }) => {
    return (
        <View style={styles.topBar}>
            <TouchableNativeFeedback onPress={goBack}>
                <Icon name="arrowleft" color='black' size={30}/>
            </TouchableNativeFeedback>
            <View style={styles.titleContainer}>
                <Icon1 name="fire" color='rgb(255, 59, 47)' size={50}/>
                <Text style={styles.titleTopBar}>Demanded</Text>
            </View>
            <Text style={styles.textTopBar}>Offer your item to demanders to earn</Text>
        </View>
    )
}

export default TopBar
