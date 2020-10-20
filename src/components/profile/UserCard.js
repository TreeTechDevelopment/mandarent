import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'

import Shadow from '../Shadow'
import styles from '../../styles/Profile'

const img = require('../../../assets/testing/img1.jpg')

const UserCard = () => {

    const [username, setUsername] = useState('Name Surname')
    const [balance, setBalance] = useState(10)

    return (
        <Shadow elevation={10}>
            <View style={styles.userCard}>
                <Image 
                    source={img}
                    style={styles.userImageRound}
                />
                <Text style={styles.usernameText}>{username}</Text>
                <Text style={styles.balanceText}>Balance: ${balance}</Text>
            </View>
        </Shadow>
    )
}

export default UserCard
