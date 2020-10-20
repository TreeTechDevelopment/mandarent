import React from 'react'
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

import Form from '../components/signin/Form'
import styles from '../styles/SignIn'

const logo = require('../../assets/images/logo.png')

const SignIn = ({ navigation }) => {

    const gotoSignUp = () => navigation.navigate('SignUp') 

    return (
        <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
            <View style={styles.mainContainer}>
                <Image 
                    source={logo}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Sign In</Text>
                    <Text style={styles.subTitle}>Hi there! Nice to see you again.</Text>
                </View>
                <Form />
                <View style={styles.footerForm}>
                    <TouchableWithoutFeedback>
                        <Text style={styles.forgotPasswordLabel}>Forgot Password?</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={gotoSignUp}>
                        <Text style={styles.signUpLabel}>Sign Up</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default SignIn
