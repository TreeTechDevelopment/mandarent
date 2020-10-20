import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableNativeFeedback } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import {Picker} from '@react-native-community/picker';

import styles from '../../styles/Rent'

const FormStep3 = ({ next, prevCity, prevDistrict, prevStreet, prevHour, prevDay }) => {
    
    const cities = ['City/District', 'Baku-Absheron', 'Aghjabadi', 'Agdam', 'Agdash', 'Agstafa', 'Agsu', 'Shirvan', 'Astara', 'Balakan',
                    'Barda', 'Beylagan', 'Bilasuvar', 'Jabrayil', 'Jalilabad', 'Dashkasan', 'Shabran', 'Fuzuli', 'Gadabay',
                    'Ganja', 'Goranboy', 'Goychay', 'Hajigabul', 'Imishli', 'Ismailli', 'Kalbajar', 'Kurdamir', 'Lachin',
                    'Lankaran', ' Lerik', 'Masally', 'Mingachevir', 'Naftalan', 'Neftchala', 'Oghuz', 'Qabala', 'Qakh',
                    'Qazakh', 'Gobustan', 'Quba', 'Qubadli', 'Qusar', 'Saatly', 'Sabirabad', 'Shaki', 'Salyan', 'Shamakhi',
                    'Shamkir', 'Samukh', 'Siazan', 'Sumqayit', 'Shusha', 'Tartar', 'Tovuz', 'Ujar', 'Khachmaz', 'Khankendi',
                    'Goygol', 'Khizi', 'Khojaly', 'Khojavend', 'Yardymli', 'Yevlakh', 'Zangilan', 'Zaqatala', 'Zardab']

    const districts = [ 'District', 'Abşeron', 'Binəqədi', 'Xətai', 'Xəzər', 'Qaradağ', 'Nərimanov', 'Nəsimi', 'Nizami', 'Pirallahı', 
                        'Sabunçu', 'Səbail', 'Suraxanı', 'Yasamal']

    const AbsheronStreets = ['Street', 'Ceyranbatan', 'Çiçək', 'Digah', 'Fatmayı', 'Görədil', 'Hökməli', 'Köhnə Corat', 'Qobu', 'Masazır', 
                            'Mehdiabad', 'Müşviqabad', 'Novxanı', 'Pirəkəşkül', 'Saray', 'Yeni Corat', 'Zağulba']

    const BineqediStreets = ['Street', '28 May', '2-ci Alatava', '6-cı mikrorayon', '7-ci mikrorayon', '8-ci mikrorayon', '9-cu mikrorayon', 
                            'Binəqədi', 'Biləcəri', 'Xocəsən', 'Xutor', 'M.Ə.Rəsulzadə', 'Sulutəpə']
    
    const XetaiStreets = ['Street', 'Əhmədli', 'Həzi Aslanov', 'Köhnə Günəşli', 'NZS']

    const XezerStreets = ['Street', 'Binə', 'Buzovna', 'Dübəndi', 'Gürgən', 'Qala', 'Mərdəkan', 'Şağan', 'Şimal DRES', 'Şüvəlan', 
                            'Türkan', 'Zirə']
    
    const QaradagStreets = ['Street', 'Bibi Heybət', 'Ələt', 'Qızıldaş', 'Qobustan', 'Lökbatan', 'Puta', 'Sahil', 'Səngəçal', 'Şıxov', 
                            'Şübani']

    const NerimanovStreets = ['Street', 'Böyükşor', 'Nərimanov']

    const NesimiStreets = ['Street', '1-ci mikrorayon', '2-ci mikrorayon', '3-cü mikrorayon', '4-cü mikrorayon', '5-ci mikrorayon', 
                            'Kubinka']

    const NizamiStreets = ['Street', '8-ci kilometr', 'Keşlə']

    const SabuncuStreets = ['Street', 'Bakıxanov', 'Balaxanı', 'Bilgəh', 'Kürdəxanı', 'Maştağa', 'Məmmədli', 'Nardaran', 'Pirşağı', 
                            'Ramana', 'Sabunçu', 'Savalan', 'Yeni Balaxanı', 'Yeni Ramana', 'Zabrat']
                
    const SebailStreets = ['Street', '20-ci Sahə', 'Badamdar', 'Bayıl']

    const SuraxaniStreets = ['Street', 'Bahar', 'Bülbülə', 'Dədə Qorqud', 'Əmircan', 'Günəşli', 'Hövsan', 'Qaraçuxur', 'Massiv A', 
                            'Massiv B', 'Massiv D', 'Massiv G', 'Massiv V', 'Suraxanı', 'Şərq', 'Yeni Günəşli', 'Yeni Suraxanı',
                            'Zığ']

    const YasamalStreets = ['Street', 'Yasamal', 'Yeni Yasamal']

    const hours = ['1', '2', '3', '4', '5', '6' ,'7' ,'8', '9', '10', '11', '12', '13', '14', '15', '16', '17',
                    '18', '19' ,'20', '21','22','23']

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
    }, [])

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
