import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'

import styles from '../../styles/Profile'

const UserRent = () => {
    return (
        <>
        <View style={styles.userMenuContainer}>
            <Text style={styles.title}>My Mandarent</Text>
            <TouchableNativeFeedback>
                <View style={styles.userMenuItem}>
                    <Icon name="tag" color="rgb(245,62,31)" size={25}/>
                    <Text style={styles.textUserRentItem}>Rent Offers</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.userMenuItem}>
                    <Icon name="briefcase" color="rgb(245,62,31)" size={25}/>
                    <Text style={styles.textUserRentItem}>Rent Operations</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.userMenuItem}>
                    <Icon name="store-alt" color="rgb(245,62,31)" size={25}/>
                    <Text style={styles.textUserRentItem}>My Items</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
        <View style={{...styles.userMenuContainer, paddingVertical: 10 }}>
            <Text style={styles.title}>Account</Text>
            <TouchableNativeFeedback>
                <View style={styles.userMenuItem}>
                    <Icon1 name="finger-print" color="rgb(245,62,31)" size={25}/>
                    <Text style={styles.textUserRentItem}>Personal Information</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.userMenuItem}>
                    <Icon1 name="wallet" color="rgb(245,62,31)" size={25}/>
                    <Text style={styles.textUserRentItem}>Balance</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
        <TouchableNativeFeedback>
            <View style={{...styles.userMenuItem, marginTop: 20}}>
                <Icon2 name="questioncircle" color="rgb(245,62,31)" size={25}/>
                <Text style={styles.textUserRentItem}>Support</Text>
            </View>
        </TouchableNativeFeedback>
        </>
    )
}

export default UserRent
