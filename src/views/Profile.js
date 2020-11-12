import React from 'react'
import { View, Text } from 'react-native'

import Navbar from '../components/Navbar'
import UserCard from '../components/profile/UserCard'
import UserMenu from '../components/profile/UserMenu'
import styles from '../styles/Profile'

const Profile = ({ navigation }) => {

    const gotoRentOffers = () => navigation.navigate('RentOffers')
    const gotoRentOperations = () => navigation.navigate('RentOperations')
    const gotoMyItems = () => navigation.navigate('MyItems')
    const gotoUserInformation = () => navigation.navigate('PersonalInformation')
    const gotoFavorites = () => navigation.navigate('Favorites')

    return (
        <View style={styles.mainContainer}>
            <Navbar navigation={navigation} profile/>
            <UserCard />
            <UserMenu 
                gotoRentOffers={gotoRentOffers}
                gotoRentOperations={gotoRentOperations}
                gotoMyItems={gotoMyItems}
                gotoUserInformation={gotoUserInformation}
                gotoFavorites={gotoFavorites}
            />
        </View>
    )
}

export default Profile
