import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'

import NavbarSettings from '../components/settings/NavbarSettings'
import styles from '../styles/Settings'

const ChangePassword = ({ navigation }) => {

    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const goBack = () => navigation.goBack()

    const handleCurrentPassword = e => setCurrentPassword(e.nativeEvent.text)
    const handleNewPassword = e => setNewPassword(e.nativeEvent.text)
    const handleConfirmNewPassword = e => setConfirmNewPassword(e.nativeEvent.text)

    return (
        <View style={styles.mainContainer}>
            <NavbarSettings goBack={goBack} colorArrow="rgb(232,110,37)"/>
            <View style={styles.inputContainer}>
                <Text style={{...styles.optionSettingText, fontSize: 25}}>Current Password</Text>
                <TextInput 
                    value={currentPassword}
                    onChange={handleCurrentPassword}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={{...styles.optionSettingText, fontSize: 25}}>New Password</Text>
                <TextInput 
                    value={newPassword}
                    onChange={handleNewPassword}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={{...styles.inputContainer, ...styles.marginBottom}}>
                <Text style={{...styles.optionSettingText, fontSize: 25}}>Confirm New Password</Text>
                <TextInput 
                    value={confirmNewPassword}
                    onChange={handleConfirmNewPassword}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <TouchableNativeFeedback>
                <View style={styles.btnChangePassword}>
                    <Text style={styles.textBtnConfirmPassword}>Confirm</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default ChangePassword
