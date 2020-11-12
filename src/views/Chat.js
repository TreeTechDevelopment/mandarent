import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import ChatTopBar from '../components/messages/ChatTopBar'
import InputChat from '../components/messages/InputChat'
import ChatContainer from '../components/messages/ChatContainer'
import styles from '../styles/Messages'

const img = require('../../assets/testing/img1.jpg')

const Chat = ({ navigation, route }) => {

    const [username, setUsername] = useState('')
    const [chat, setChat] = useState([])
    const [myUsername, setMyUsername] = useState('Username1')

    const goBack = () => navigation.goBack()

    const sendMessage = message => {
        let newChat = [...chat]
        newChat.push({
            time: Date.now(),
            message,
            from:{
                username: myUsername, 
                image: img
            },
            seen: false
        })
        setChat(newChat)
    } 

    useEffect(() => {
        let username = route.params?.username
        let chat = route.params?.chat
        if(username){ setUsername(username) }
        if(chat){ setChat(chat) }
    }, [route.params])

    return (
        <View style={styles.mainContainer}>
            <ChatTopBar 
                username={username}
                goBack={goBack}            
            />
            <ChatContainer 
                chat={chat} 
                username={username}
            />
            <InputChat sendMessage={sendMessage}/>
        </View>
    )
}

export default Chat
