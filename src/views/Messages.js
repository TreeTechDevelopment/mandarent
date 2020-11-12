import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'

import TopBar from '../components/messages/TopBar'
import SearchChat from '../components/messages/SearchChat'
import ChatItem from '../components/messages/ChatItem'
import styles from  '../styles/Messages'

import { chatsTest } from '../testing/test'

const Messages = ({ navigation }) => {
 
    const [chats, setChats] = useState(chatsTest)

    const gotoChat = (username, chat) => navigation.navigate('Chat', { username, chat})

    return (
        <View style={styles.mainContainer}>
            <TopBar />
            <SearchChat />
            <ScrollView 
                style={styles.scrollViewChats} 
                contentContainerStyle={{ alignItems: 'center' }}
            >
                {chats.sort((a,b) =>  b.chat[b.chat.length - 1].time - a.chat[a.chat.length - 1].time).map( chat => (
                    <ChatItem 
                        chat={chat}
                        gotoChat={gotoChat}
                        key={chat.id}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default Messages
