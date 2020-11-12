import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from '../../styles/Messages'

const Message = ({ message, username }) => {

    return (
        <View style={styles.messageContainerRow}>
            <Image 
                source={message.from.image}
                style={styles.userImageRound}
            />
            <View style={styles.messageContainer}>
                <Text style={styles.messageUsername}>{username !== message.from.username ? 'Me' : message.from.username}</Text>
                <Text style={styles.message}>{message.message}</Text>
            </View>
        </View>
    )
}

export default Message
