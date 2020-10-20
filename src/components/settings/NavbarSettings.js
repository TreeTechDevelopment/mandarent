import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import Shadow from '../Shadow'
import styles from '../../styles/Settings'

const NavbarSettings = ({ goBack, colorArrow }) => {
    return (
        <Shadow elevation={5}>
            <View style={styles.navbarSettingsContainer}>
                <TouchableNativeFeedback onPress={goBack}>
                    <Icon name="arrowleft" color={colorArrow} size={30}/>
                </TouchableNativeFeedback>
                <Text style={styles.navbarSettingsTitle}>Settings</Text>
            </View>
        </Shadow>
    )
}

export default NavbarSettings
