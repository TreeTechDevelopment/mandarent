import React, { useState } from 'react'
import { View, Text, TextInput, TouchableNativeFeedback, KeyboardAvoidingView, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../../styles/SignIn'

const Form = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [secureEntry, setSecureEntry] = useState(true)

    const handleEmail = e => setEmail(e.nativeEvent.text)

    const handlePassword = e => setPassword(e.nativeEvent.text)

    const changeSecureEntry = () => setSecureEntry(!secureEntry)

    return (
        <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
                onChange={handleEmail}
                value={email}
                style={styles.input}
            />
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputPasswordContainer}>  
                <TextInput 
                    onChange={handlePassword}
                    value={password}
                    style={{...styles.input, ...styles.inputPassword}}
                    secureTextEntry={secureEntry}
                />
                <TouchableNativeFeedback onPress={changeSecureEntry}>
                    {!secureEntry ? (
                        <Icon name="eye-off" color="rgb(185,185,185)" size={20}/>
                    ):(
                        <Icon name="eye" color="rgb(185,185,185)" size={20}/>
                    )}
                </TouchableNativeFeedback>
            </View>
            <TouchableNativeFeedback>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Sign In</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default Form
