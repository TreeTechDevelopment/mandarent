import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import Shadow from '../Shadow'
import styles from '../../styles/Settings'

const NavbarSettings = ({ goBack, colorArrow, text, textColor, marginBottom, woShadow, woText, backIcon }) => {
    return (
        woShadow ? (
            <View style={styles.navbarSettingsContainer}>
                <TouchableNativeFeedback onPress={goBack}>
                    <Icon name="arrowleft" color={colorArrow} size={30}/>
                </TouchableNativeFeedback>
                <Text style={{...styles.navbarSettingsTitle, color: textColor || 'black'}}>{text || 'Settings'}</Text>
            </View>
        ): (
            <Shadow elevation={5} marginBottom={marginBottom}>
                <View style={styles.navbarSettingsContainer}>
                    <TouchableNativeFeedback onPress={goBack}>
                        <Icon name={backIcon ? backIcon : "arrowleft"} color={colorArrow} size={30}/>
                    </TouchableNativeFeedback>
                    {!woText && <Text style={{...styles.navbarSettingsTitle, color: textColor || 'black'}}>{text || 'Settings'}</Text>}
                </View>
            </Shadow> 
        )
        
    )
}

export default NavbarSettings
