import React from 'react'
import { View, Text } from 'react-native'

import styles from '../../styles/Messages'

const TopBar = () => {
    return (
        <View style={styles.topBar}>
            <Text style={styles.topBarTitle}>Inbox</Text>
        </View>
    )
}

export default TopBar
