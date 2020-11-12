import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableNativeFeedback } from 'react-native'
import { Picker } from '@react-native-community/picker';

import Calendar from '../reserve/Calendar'
import ReserveHour from '../reserve/ReserveHour'
import styles from '../../styles/Demand'

import { categories1Label, categories2Label, cities, SabuncuStreets, SebailStreets, SuraxaniStreets, AbsheronStreets, BineqediStreets,
    NerimanovStreets, NesimiStreets, NizamiStreets, QaradagStreets, XetaiStreets,
    XezerStreets, YasamalStreets, hours, districts } from '../../data'

const Form = () => {

    const [description, setDescription] = useState('')
    const [itemName, setItemName] = useState('')
    const [category1, setCategory1] = useState('')
    const [category2, setCategory2] = useState('')
    const [city, setCity] = useState('City/District')
    const [district, setDistrict] = useState('District')
    const [street, setStreet] = useState('Street')
    const [startDay, setStartDay] = useState(null)
    const [endDay, setEndDay] = useState(null)
    const [startHour, setStartHour] = useState(10)
    const [endHour, setEndHour] = useState(10)

    const handleInputName = e => setItemName(e.nativeEvent.text)
    const handleInputDescription = e => setDescription(e.nativeEvent.text)

    const handleCategory1 = (value) => {
        if(value !== "Category 1"){ setCategory1(value) }
    }
    const handleCategory2 = (value) => {
        if(value !== category1 && value !== "Category 2"){ setCategory2(value) }
    }
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

    return (
        <ScrollView style={styles.form} contentContainerStyle={{ alignItems: 'center' }}>
            <TextInput 
                value={itemName}
                onChange={handleInputName}
                style={styles.input}
                placeholder="Name of the item"
            />
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={category1}
                    style={styles.picker}
                    onValueChange={handleCategory1}
                >
                    {categories1Label.map( category => (
                        <Picker.Item label={category} value={category} key={category} />
                    ))}
                </Picker>
            </View>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={category2}
                    style={styles.picker}
                    onValueChange={handleCategory2}
                >
                    {categories2Label.map( category => (
                        <Picker.Item label={category} value={category} key={category} />
                    ))}
                </Picker>
            </View>
            <View style={styles.locationContainer}>
                <Text style={styles.titleForm}>Location</Text>
                <View style={styles.pickerContainer}>
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
                    <View style={styles.pickerContainer}>
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
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={street}
                            style={styles.picker}
                            onValueChange={handleStreet}
                        >
                            {renderStreets()}
                        </Picker>
                    </View>
                )}
            </View>
            <View style={styles.locationContainer}>
                <Text style={styles.titleForm}>When you need item</Text>
            </View>
            <Calendar 
                startDay={startDay}
                endDay={endDay}
                setStartDay={setStartDay}
                setEndDay={setEndDay}
            />
            <ReserveHour 
                setStartHour={setStartHour}
                setEndHour={setEndHour}
            />
            <View style={styles.locationContainer}>
                <TextInput 
                    value={description}
                    onChange={handleInputDescription}
                    style={styles.inputDescription}
                    placeholder="Description. Why do you need item or describe what do you need?"
                    multiline
                />
            </View>
            <TouchableNativeFeedback>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Demand</Text>
                </View>
            </TouchableNativeFeedback>
        </ScrollView>
    )
}

export default Form
