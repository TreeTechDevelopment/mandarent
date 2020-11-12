import React, { useState } from 'react'
import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';

import styles from '../../styles/Messages'

const ChatItem = ({ chat, gotoChat }) => {

    const [rerender, setRerender] = useState(false)
    const [username, setUsername] = useState('Username1') 

    const timeElapsed = time => {
        let timeElapsedMilliseconds = (Date.now() - time) / 1000
        if(timeElapsedMilliseconds < 60){ return 'A moment ago' }
        else if(timeElapsedMilliseconds < 3600){ return `${Math.floor(timeElapsedMilliseconds / 60)} minutes ago` }
        else if(timeElapsedMilliseconds < 86400){ return `${Math.floor(timeElapsedMilliseconds / 3600)} hours ago` }
        else{ return `${Date(time).slice(0, 11)}` }
    }

    const handleBtnItem = () => {
        if(chat.from.username === username){ gotoChat(chat.to.username, chat.chat) }
        else{ gotoChat(chat.from.username) }
    }

    useFocusEffect(
        React.useCallback(() => {
            let timeoutUpdateTime = setInterval(() => {
                setRerender(rerender => !rerender)
            }, 10000);
            return () => clearInterval(timeoutUpdateTime)
        }, [])
    );

    return (
        <TouchableNativeFeedback onPress={handleBtnItem}>
            <View style={styles.chatItemContainer}>
                <Image 
                    source={ chat.from.username === username ? chat.to.image : chat.from.image }
                    style={styles.userImageRound}
                />
                <View style={styles.usernameChatContainer}>
                    <Text style={styles.usernamerChatItem}>{ chat.from.username === username ? chat.to.username : chat.from.username }</Text>
                    <Text style={chat.chat[chat.chat.length - 1].seen ? styles.lastMessageSeen : styles.lastMessage}>
                        {chat.chat[chat.chat.length - 1].message.length > 40 ? `${chat.chat[chat.chat.length - 1].message.slice(0,40)}...` : chat.chat[chat.chat.length - 1].message}
                    </Text>
                </View>
                <View style={styles.timeMessageContainer}>
                    <Text style={styles.timeMessage}>{timeElapsed(chat.chat[chat.chat.length - 1].time)}</Text>
                    {!chat.chat[chat.chat.length - 1].seen && (
                        <Text style={styles.messageNotSeenIndicator}>●</Text>
                    )}
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

export default ChatItem
