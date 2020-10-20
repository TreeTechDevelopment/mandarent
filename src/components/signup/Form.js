import React, { useState }  from 'react'
import { View, Text, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native'

import styles from '../../styles/SignIn'

const Form = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = e => setEmail(e.nativeEvent.text)
    const handleName = e => setName(e.nativeEvent.text)
    const handleSurname = e => setSurname(e.nativeEvent.text)
    const handlePhone = e => setPhone(e.nativeEvent.text)
    const handlePassword = e => setPassword(e.nativeEvent.text)

    return (
        <View style={{...styles.form, marginTop: 10}}>
            <Text style={styles.label}>Name</Text>
            <TextInput 
                onChange={handleName}
                value={name}
                style={styles.input}
            />
            <Text style={styles.label}>Surname</Text>
            <TextInput 
                onChange={handleSurname}
                value={surname}
                style={styles.input}
            />
            <Text style={styles.label}>Mobile number</Text>
            <View style={styles.inputPasswordContainer}>  
                <Text style={styles.countryCodePhoneNumber}>(+994)</Text>
                <TextInput 
                    onChange={handlePhone}
                    value={phone}
                    style={{...styles.input, ...styles.inputPassword}}
                    keyboardType="phone-pad"
                />
            </View>
            <Text style={styles.label}>Email</Text>
            <TextInput 
                onChange={handleEmail}
                value={email}
                style={styles.input}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput 
                onChange={handlePassword}
                value={password}
                style={styles.input}
                secureTextEntry={true}
            />
            <View style={styles.privacyLabelConatiner}>
                <Text style={styles.privacyText}>I agree to the</Text>
                <TouchableWithoutFeedback>
                    <Text style={styles.privacyTextLink}> Terms of Service</Text>
                </TouchableWithoutFeedback>
                <Text style={styles.privacyText}> and</Text>
                <TouchableWithoutFeedback>
                    <Text style={styles.privacyTextLink}> Privacy</Text>
                </TouchableWithoutFeedback>
            </View>
            <TouchableNativeFeedback>
                <View style={{...styles.btn, marginTop: 20}}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default Form
