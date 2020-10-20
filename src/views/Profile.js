import React from 'react'
import { View, Text } from 'react-native'

import Navbar from '../components/Navbar'
import UserCard from '../components/profile/UserCard'
import UserMenu from '../components/profile/UserMenu'
import styles from '../styles/Profile'

const Profile = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <Navbar navigation={navigation} profile/>
            <UserCard />
            <UserMenu />
        </View>
    )
}

export default Profile
