import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback, ScrollView, TouchableNativeFeedback } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-community/picker';

import styles from '../../styles/UserInformation'

import { cities } from '../../data'

const Form = ({ user }) => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [birth, setBirth] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('City/District')
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [date, setDate] = useState(new Date(Date.now()))

    const handleName = e => setName(e.nativeEvent.text)
    const handleSurname = e => setSurname(e.nativeEvent.text)

    const handlePhone = e => setPhone(e.nativeEvent.text.replace(/[^0-9]/g, ''))

    const handleBtnCalendar = () => setShowDatePicker(true)

    const handleDatePicker = (e, selectedDate) => {
        setShowDatePicker(false)
        if(selectedDate){ setDateOfBirth(selectedDate) }
    }

    const setDateOfBirth = date => {
        setDate(date)

        let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
        let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
        let year = date.getFullYear()

        setBirth(`${day}/${month}/${year}`)
    }

    const handleCity = value => {
        if(value !== "City/District"){ setCity(value) }
    }

    useEffect(() => {
        if(JSON.stringify(user) !== "{}"){
            setName(user.name)
            setSurname(user.surname)
            setDateOfBirth(new Date(user.birth))
            setEmail(user.email)
            setPhone(user.phone)
            setCity(user.location.city)
        }
    }, [user])

    return (
        <View style={styles.form}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput 
                    value={name}
                    onChange={handleName}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Surname</Text>
                <TextInput 
                    value={surname}
                    onChange={handleSurname}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Date of Birth</Text>
                <TouchableWithoutFeedback onPress={handleBtnCalendar}>
                    <View style={styles.dateBirthContainer}>
                        <Text style={styles.birthText}>{birth}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            {showDatePicker && (
                <DateTimePicker
                    mode="date"
                    display="spinner"
                    onChange={handleDatePicker}
                    value={date}
                />
            )}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                    value={email}
                    onChange={handleName}
                    style={styles.input}
                    editable={false}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Telephone Number</Text>
                <TextInput 
                    value={phone}
                    onChange={handlePhone}
                    style={styles.input}
                    keyboardType="phone-pad"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>City of residence</Text>
                <Picker
                    selectedValue={city}
                    onValueChange={handleCity}
                >
                    {cities.map( city => (
                        <Picker.Item label={city} value={city} key={city} />
                    ))}
                </Picker>
            </View>
            <View style={styles.btnContainer}>
                <TouchableNativeFeedback>
                    <View style={styles.btn}>
                        <Text style={styles.textBtn}>Save</Text>
                    </View>
                </TouchableNativeFeedback>
            </View> 
        </View>
    )
}

export default Form
