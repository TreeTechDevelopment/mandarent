import React from 'react'
import { View, Text, TouchableNativeFeedback, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/FontAwesome'

import styles from '../../styles/Profile'

const UserRent = ({ gotoRentOffers, gotoRentOperations, gotoMyItems, gotoUserInformation, gotoFavorites }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <>
            <View style={styles.userMenuContainer}>
                <Text style={styles.title}>My Mandarent</Text>
                <TouchableNativeFeedback onPress={gotoRentOffers}>
                    <View style={styles.userMenuItem}>
                        <View style={styles.iconContainerUserMenu}>
                            <Icon name="tag" color="rgb(245,62,31)" size={25}/>
                        </View>
                        <Text style={styles.textUserRentItem}>Rent Offers</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={gotoRentOperations}>
                    <View style={styles.userMenuItem}>
                        <View style={styles.iconContainerUserMenu}>
                            <Icon name="briefcase" color="rgb(245,62,31)" size={25}/>
                        </View>
                        <Text style={styles.textUserRentItem}>Rent Operations</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={gotoMyItems}>
                    <View style={styles.userMenuItem}>
                        <View style={styles.iconContainerUserMenu}>
                            <Icon name="store-alt" color="rgb(245,62,31)" size={25}/>
                        </View>
                        <Text style={styles.textUserRentItem}>My Items</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={gotoFavorites}>
                    <View style={styles.userMenuItem}>
                        <View style={styles.iconContainerUserMenu}>
                            <Icon3 name="star" color="rgb(245,62,31)" size={25}/>
                        </View>
                        <Text style={styles.textUserRentItem}>Favorites</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={{...styles.userMenuContainer, paddingVertical: 10 }}>
                <Text style={styles.title}>Account</Text>
                <TouchableNativeFeedback onPress={gotoUserInformation}>
                    <View style={styles.userMenuItem}>
                        <View style={styles.iconContainerUserMenu}>
                            <Icon1 name="finger-print" color="rgb(245,62,31)" size={25}/>
                        </View>
                        <Text style={styles.textUserRentItem}>Personal Information</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <View style={styles.userMenuItem}>
                        <View style={styles.iconContainerUserMenu}>
                            <Icon1 name="wallet" color="rgb(245,62,31)" size={25}/>
                        </View>
                        <Text style={styles.textUserRentItem}>Balance</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <TouchableNativeFeedback>
                <View style={{...styles.userMenuItem, marginVertical: 20}}>
                    <View style={styles.iconContainerUserMenu}>
                        <Icon2 name="questioncircle" color="rgb(245,62,31)" size={25}/>
                    </View>
                    <Text style={styles.textUserRentItem}>Support</Text>
                </View>
            </TouchableNativeFeedback>
            </>
        </ScrollView>
    )
}

export default UserRent
