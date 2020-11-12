import React, { useState } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import NavbarSettings from '../components/settings/Navbar'
import styles from '../styles/Settings'

const Language = ({ navigation }) => {

    const [language, setLanguage] = useState('EN')

    const goBack = () => navigation.goBack()

    const changeLanguageEN = () => {
        setLanguage('EN')
    }

    const changeLanguageAZ = () => {
        setLanguage('AZ')
    }

    return (
        <View style={styles.mainContainer}>
            <NavbarSettings goBack={goBack} colorArrow="rgb(255,92,82)"/>
            <TouchableNativeFeedback onPress={changeLanguageAZ}>
                <View style={styles.optionSettingwCheckbox}>
                    <Text style={styles.optionSettingText}>Azerbaycanca</Text>
                    {language !== "EN" && <Icon name="checkmark-circle" color="rgb(118,184,87)" size={40}/>}
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={changeLanguageEN}>
                <View style={styles.optionSettingwCheckbox}>
                    <Text style={styles.optionSettingText}>English</Text>
                    {language === "EN" && <Icon name="checkmark-circle" color="rgb(118,184,87)" size={40}/>}
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default Language
