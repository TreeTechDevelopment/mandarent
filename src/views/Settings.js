import React, { useState } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'

import NavbarSettings from '../components/settings/Navbar'
import styles from '../styles/Settings'

const Settings = ({ navigation }) => {

    const [version, setVersion] = useState('1.0.1')

    const goBack = () => navigation.goBack()

    const goToLanguage = () => navigation.navigate('Language')
    const goToChangePassword = () => navigation.navigate('ChangePassword')

    return (
        <View style={styles.mainContainer}>
            <NavbarSettings goBack={goBack} colorArrow="black"/>
            <TouchableNativeFeedback onPress={goToLanguage}>
                <View style={styles.optionSetting}>
                    <Text style={styles.optionSettingText}>Language</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={goToChangePassword}>
                <View style={styles.optionSetting}>
                    <Text style={styles.optionSettingText}>Change Password</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.optionSetting}>
                    <Text style={styles.optionSettingText}>Terms and Conditions</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.optionSetting}>
                    <Text style={styles.optionSettingText}>Privacy Policy</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.optionSetting}>
                    <Text style={{...styles.optionSettingText, color: 'red'}}>Log Out</Text>
                </View>
            </TouchableNativeFeedback>
            <Text style={styles.textVersion}>Version {version}</Text>
        </View>
    )
}

export default Settings
