import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableNativeFeedback } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import {Picker} from '@react-native-community/picker';

import styles from '../../styles/Rent'

import { cities, SabuncuStreets, SebailStreets, SuraxaniStreets, AbsheronStreets, BineqediStreets,
    NerimanovStreets, NesimiStreets, NizamiStreets, QaradagStreets, XetaiStreets,
    XezerStreets, YasamalStreets, hours, districts} from '../../data'

const FormStep3 = ({ next, prevCity, prevDistrict, prevStreet, prevHour, prevDay }) => {

    const [city, setCity] = useState('City/District')
    const [district, setDistrict] = useState('District')
    const [street, setStreet] = useState('Street')
    const [hour, setHour] = useState('1')
    const [day, setDay] = useState('')

    const handleCity = value => {
        if(value !== "City/District"){
            setCity(value)
            if(value !== "Baku-Absheron"){
                setDistrict('')
                setStreet('')
            }
        }
    }
    const handleDistrict = value => {
        if(value !== 'District'){ setDistrict(value) }
    }
    const handleStreet = value => {
        if(value !== "Street"){ setStreet(value) }
    }
    const handleHours = value => setHour(value)

    const handleDay = e => setDay(e.nativeEvent.text.replace(/[^0-9.]/g, ''))

    const handleBtn = () => {
        next({ city, district, street, hour, day })
    }

    const renderStreets = () => {
        if(city === "Baku-Absheron"){
            switch(district){
                case "Abşeron":
                    return AbsheronStreets.map( street => (
                        <Picker.Item label={street} value={street} key={street} />
                    ))
                case "Binəqədi":
                    return BineqediStreets.map( street => (
                        <Picker.Item label={street} value={street} key={street} />
                    ))
                case "Xətai":
                    return XetaiStreets.map( street => (
                        <Picker.Item label={street} value={street} key={street} />
                    ))
                case "Xəzər":
                    return XezerStreets.map( street => (
                        <Picker.Item label={street} value={street} key={street} />
                    ))
                case "Qaradağ":
                    return QaradagStreets.map( street => (
                        <Picker.Item label={street} value={street} key={street} />
                    ))
                case "Nərimanov":
                    return NerimanovStreets.map( street => (
                        <Picker.Item label={street} value={street} key={street} />
                    ))
                case "Nəsimi":
                    return NesimiStreets.map( street => (
                        <Picker.Item label={street} value={street} key={street} />
                    ))
                case "Nizami":
                    return NizamiStreets.map( street => (
                        <Picker.Item label={street} value={street} key={street} />
                    ))
                case "Sabunçu":
                    return SabuncuStreets.map( street => (
                        <Picker.Item label={street} value={street} key={street} />
                    ))
                case "Səbail":
                    return SebailStreets.map( street => (
                        <Picker.Item label={street} value={street} key={street} />
                    ))
                case "Suraxanı":
                    return SuraxaniStreets.map( street => (
                        <Picker.Item label={street} value={street} key={street} />
                    ))
                case "Yasamal":
                    return YasamalStreets.map( street => (
                        <Picker.Item label={street} value={street} key={street} />
                    ))
            }
        }
    }

    useEffect(() => {
        if(prevCity !== ""){ setCity(prevCity) }
        if(prevDistrict !== ""){ setDistrict(prevDistrict) }
        if(prevStreet !== ""){ setStreet(prevStreet) }
        if(prevHour !== ""){ setHour(prevHour) }
        if(prevDay !== ""){ setDay(prevDay) }
    }, [prevCity, prevDistrict, prevStreet, prevHour, prevDay])

    return (
        <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
            <View style={styles.form}>
                <Text style={styles.title}>Step 3</Text>
                <Text style={styles.label}>Location</Text>
                <View style={{...styles.pickerContainer, marginBottom: 20, marginTop: 10}}>
                    <Picker
                        selectedValue={city}
                        style={styles.picker}
                        onValueChange={handleCity}
                    >
                        {cities.map( city => (
                            <Picker.Item label={city} value={city} key={city} />
                        ))}
                    </Picker>
                </View>
                {city == "Baku-Absheron" && (
                    <View style={{...styles.pickerContainer, marginBottom: 20}}>
                        <Picker
                            selectedValue={district}
                            style={styles.picker}
                            onValueChange={handleDistrict}
                        >
                            {districts.map( district => (
                                <Picker.Item label={district} value={district} key={district} />
                            ))}
                        </Picker>
                    </View>
                )}
                {city == "Baku-Absheron" && district !== "Pirallahı" && district !== "District" && (
                    <View style={{...styles.pickerContainer, marginBottom: 20}}>
                        <Picker
                            selectedValue={street}
                            style={styles.picker}
                            onValueChange={handleStreet}
                        >
                            {renderStreets()}
                        </Picker>
                    </View>
                )}
                <Text style={styles.label}>Minimum rent period</Text>
                <Text style={styles.label2}>Minimum number of days you rent your item</Text>
                <View style={styles.rentPeriodContainer}>
                    <View style={styles.rentHours}>
                        <View style={styles.pickerHoursContainer}>
                            <Picker
                                selectedValue={hour}
                                style={styles.pickerHours}
                                onValueChange={handleHours}
                                prompt="Hours"
                            >
                                {hours.map( hour => (
                                    <Picker.Item label={hour} value={hour} key={hour} />
                                ))}
                            </Picker>
                        </View>
                        <Text style={styles.textPickerPeriodRent}>hour</Text>
                    </View>
                    <View style={styles.rentDays}>
                        <TextInput 
                            value={day}
                            onChange={handleDay}
                            style={styles.inputDaysRentPeriod}
                            keyboardType="numeric"
                        />
                        <Text style={styles.textPickerPeriodRent}>day</Text>
                    </View>
                </View>
                <View style={styles.btnNextContainer}>
                    <TouchableNativeFeedback onPress={handleBtn}>
                        <View style={styles.btnNext}>
                            <Text style={styles.btnNextText}>Next</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default FormStep3
