import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Shadow from './Shadow'

const logo = require('../../assets/images/logo1.png')

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    navbar:{
        width,
        paddingRight: 20,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'rgb(60,60,60)',
        borderBottomWidth: 0.5,
        paddingLeft: width * 0.1,
        backgroundColor: 'white',
        position: 'relative',
        top: -5
    },
    logo:{
        width: width * 0.1,
        height: height * 0.07,
    },
})

const Navbar = ({ navigation, profile }) => {

    const openNavigator = () => {
        if(profile){ navigation.navigate('Settings') }
        else{ navigation.openDrawer() }
    }

    return (
        <Shadow elevation={5}>
            <View style={profile ? {...styles.navbar, borderBottomWidth: 0} : styles.navbar}>
                <Image 
                    source={logo}
                    resizeMode="contain"
                    style={styles.logo}
                />
                <TouchableNativeFeedback onPress={openNavigator}>
                    {profile ? (
                        <Icon name="cog" size={30} color="rgb(36,36,36)"/>
                    ):(
                        <Icon name="bars" size={30} color="rgb(36,36,36)"/>
                    )}
                </TouchableNativeFeedback>
            </View>
        </Shadow>
    )
}

export default Navbar
