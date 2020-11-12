import React, { useEffect, useState, useRef } from 'react'
import { View, Text, ScrollView, Keyboard, Dimensions } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';

import Message from './Message'
import styles from '../../styles/Messages'

const ChatContainer = ({ chat, username }) => {

    let chatContainerRef = useRef(null)

    const [heightView, setHeightView] = useState(0)
    const [keyboardOpen, setKeyboardOpen] = useState(false)

    const keyboardOpenListener = e => {
        const { height } = Dimensions.get('window')
        setHeightView((height * 0.72) - e.endCoordinates.height)
        setKeyboardOpen(true)
        chatContainerRef.current.scrollToEnd()
    }

    useFocusEffect(
        React.useCallback(() => {
            let keyboardListenerOpen = Keyboard.addListener('keyboardDidShow', keyboardOpenListener)
            let keyboardListenerClose = Keyboard.addListener('keyboardDidHide', () => { setKeyboardOpen(false) })
            chatContainerRef.current.scrollToEnd()
            return () => {
                keyboardListenerClose.remove()
                keyboardListenerOpen.remove()
            }
        }, [])
    );

    useEffect(() => {
        chatContainerRef.current.scrollToEnd()
    }, [chat])


    return (
        <View style={ keyboardOpen ? {...styles.chatContainer, height: heightView} : styles.chatContainer}>
            <ScrollView style={styles.chatScrollView} ref={chatContainerRef}>
                {chat.map( message => (
                    <Message 
                        key={message.time + Math.random().toString()}
                        message={message}
                        username={username}
                    />
                ) )}
            </ScrollView>
        </View>
    )
}

export default ChatContainer
