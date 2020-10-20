import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

import Form from '../components/signup/Form'
import styles from '../styles/SignIn'

const SignUp = ({ navigation }) => {

    const gotoSignin = () => navigation.goBack()

    return (
        <View style={styles.mainContainer}>
            <View style={{...styles.titleContainer, marginTop: 30}}>
                <Text style={styles.title}>Sign Up</Text>
            </View>
            <Form />
            <View style={{...styles.privacyLabelConatiner, marginTop: 20}}>
                <Text style={styles.forgotPasswordLabel}>Have an Account?</Text>
                <TouchableWithoutFeedback onPress={gotoSignin}>
                    <Text style={styles.signUpLabel}> Sign In</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default SignUp
