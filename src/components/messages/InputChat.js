import React, { useState } from 'react'
import { View, Text, TextInput, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from '../../styles/Messages'

const InputChat = ({ sendMessage }) => {

    const [message, setMessage] = useState('')

    const handleInput = e => setMessage(e.nativeEvent.text)

    const handleBtn = () => {
        if(message !== ""){
            sendMessage(message)
            setMessage('')
        }
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                onChange={handleInput}
                value={message}
                style={styles.input}
                placeholder="Type a message..."
                multiline
            />
            <TouchableNativeFeedback onPress={handleBtn}>
                <Icon name="send" size={30} color="rgb(1,122,252)"/>
            </TouchableNativeFeedback>
        </View>
    )
}

export default InputChat
