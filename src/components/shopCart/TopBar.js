import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Shadow from '../Shadow'
import styles from '../../styles/ShopCart'

const TopBar = () => {

    const [balance, setBalance] = useState(0)

    return (
        <Shadow>
            <View style={styles.topBar}>
                <View style={styles.iconContainerTopBar}>
                    <Icon name="shopping-cart" color="rgb(255,102,35)" size={30}/>
                    <Text style={styles.textTopBar}>Cart</Text>
                </View>
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceText}>Balance: ${balance}</Text>
                </View>
            </View>
        </Shadow>
    )
}

export default TopBar
