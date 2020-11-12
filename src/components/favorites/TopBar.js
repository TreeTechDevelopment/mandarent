import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import styles from '../../styles/Favorites'

const TopBar = () => {
    return (
        <View style={styles.topBar}>
            <Icon name="heart" color="red" size={25}/>
            <Text style={styles.textTopBar}>Favorites</Text>
        </View>
    )
}

export default TopBar
