import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import styles from '../../styles/Messages'

const ChatTopBar = ({ username, goBack }) => {

    return (
        <View style={styles.chatTopBar}>
            <View style={styles.chatTopBarArrowContainer}>
                <TouchableNativeFeedback onPress={goBack}>
                    <Icon name="arrowleft" color="black" size={30}/>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.chatTopBarTitleContainer}>
                <Text style={styles.chatTopBarTitle}>{username}</Text>
            </View>
            <View style={{ flex: 1 }}></View>
        </View>
    )
}

export default ChatTopBar
