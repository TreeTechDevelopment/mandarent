import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback, Image, TouchableNativeFeedback } from 'react-native'
import {Picker} from '@react-native-community/picker';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'

import styles from '../../styles/Rent'
import stylesItem from '../../styles/MyItems'

import { cities, SabuncuStreets, SebailStreets, SuraxaniStreets, AbsheronStreets, BineqediStreets,
        NerimanovStreets, NesimiStreets, NizamiStreets, QaradagStreets, XetaiStreets,
        XezerStreets, YasamalStreets, hours, categories, districts} from '../../data'

const Form = ({ item }) => {    

    const [name, setItemName] = useState('')
    const [description, setDescription] = useState('')
    const [instructions, setInstructions] = useState('')
    const [category1, setCategory1] = useState('')
    const [category2, setCategory2] = useState('')
    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [street, setStreet] = useState('')
    const [hour, setHour] = useState('1')
    const [day, setDay] = useState('')
    const [priceHourly, setPriceHourly] = useState('')
    const [priceDaily, setPriceDaily] = useState('')
    const [weeklyDiscount, setWeeklyDiscount] = useState('')
    const [monthlyDiscount, setMonthlyDiscount] = useState('')
    const [images, setImages] = useState([])

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

    const handleDay = e => setDay(e.nativeEvent.text.replace(/[^0-9.]/g, ''))
    const handleInputPriceHourly = e => setPriceHourly(e.nativeEvent.text.replace(/[^0-9.]/g, ''))
    const handleInputPriceDaily = e => setPriceDaily(e.nativeEvent.text.replace(/[^0-9.]/g, ''))
    const handleInputWeeklyDiscount = e => setWeeklyDiscount(e.nativeEvent.text.replace(/[^0-9.]/g, ''))
    const handleInputMonthlyDiscount = e => setMonthlyDiscount(e.nativeEvent.text.replace(/[^0-9.]/g, ''))

    const handleHours = value => setHour(value)
    const handleCategory1 = value => setCategory1(value)

    const handleInputItemName = e => setItemName(e.nativeEvent.text)
    const handleInputDescription = e => setDescription(e.nativeEvent.text)
    const handleInputInstructions = e => setInstructions(e.nativeEvent.text)

    const handleCategory2 = (value) => {
        if(value !== category1){ setCategory2(value) }
    }

    const handleDistrict = value => {
        if(value !== 'District'){ setDistrict(value) }
    }
    
    const handleStreet = value => {
        if(value !== "Street"){ setStreet(value) }
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

    const deleteImage = imageToDelete => {
        let newImages = [...images]
        let idx = newImages.find( image => image.path == imageToDelete.path )
        newImages.splice(idx,1)
        setImages(newImages)
    }

    const uploadImages = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(newImages => {
            setImages([...images, ...newImages])
        }).catch( err => console.log(err))
    }

    const setInfo = item => {
        setItemName(item.name)
        setCategory1(item.category1)
        setCategory2(item.category2)
        setCity(item.location.city)
        setDistrict(item.location.district)
        setStreet(item.location.street)
        setHour(item.rentPeriod.hour)
        setDay(item.rentPeriod.day)
        setPriceHourly(item.price.hourly)
        setPriceDaily(item.price.daily)
        setMonthlyDiscount(item.discount.monthlyDiscount)
        setWeeklyDiscount(item.discount.weeklyDiscount)
        setDescription(item.description)
        setInstructions(item.instructions)
        setImages(item.images)
    }

    const saveChanges = () => {

    }

    useEffect(() => {
        if(JSON.stringify(item) !== "{}"){
            setInfo(item)
        }
    }, [item])

    return (
        <View style={stylesItem.formEditItemContainer}>
            <Text style={{...styles.pickerLabel, marginTop: 0}}>Item Name</Text>
            <TextInput 
                value={name}
                style={styles.input}
                onChange={handleInputItemName}
                placeholder="Item Name"
            />
            <Text style={{...styles.pickerLabel, marginTop: 0}}>Category 1</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={category1}
                    style={styles.picker}
                    onValueChange={handleCategory1}
                    prompt="Category 1"
                >
                    {categories.map( category => (
                        <Picker.Item label={category} value={category} key={category} />
                    ))}
                </Picker>
            </View>
            <Text style={{...styles.pickerLabel}}>Category 2</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={category2}
                    style={styles.picker}
                    onValueChange={handleCategory2}
                    prompt="Category 2"
                >
                    {categories.map( category => (
                        <Picker.Item label={category} value={category} key={category} />
                    ))}
                </Picker>
            </View>
            <Text style={styles.pickerLabel}>Location</Text>
            <View style={{...styles.pickerContainer, marginBottom: 20}}>
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
            <Text style={styles.pickerLabel}>Minimum rental period</Text>
            <View style={{...styles.rentPeriodContainer, marginTop: 0, marginBottom: 0}}>
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
            <Text style={{...styles.label, marginTop: 0}}>Rental Price</Text>
            <View style={styles.priceRentContainer}>
                <View style={styles.priceRentPeriodContainer}>
                    <Text style={styles.textPriceRent}>Hourly</Text>
                    <View style={styles.inputPriceContainer}>
                        <Text style={styles.labelPriceText}>$</Text>
                        <TextInput 
                            onChange={handleInputPriceHourly}
                            value={priceHourly}
                            keyboardType="numeric"
                            style={styles.inputPrice}
                        />
                    </View>
                </View>
                <View style={styles.priceRentPeriodContainer}>
                    <Text style={styles.textPriceRent}>Daily</Text>
                    <View style={styles.inputPriceContainer}>
                        <Text style={styles.labelPriceText}>$</Text>
                        <TextInput 
                            onChange={handleInputPriceDaily}
                            value={priceDaily}
                            keyboardType="numeric"
                            style={styles.inputPrice}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.priceRentContainer}>
                <View style={styles.priceRentPeriodContainer}>
                    <Text style={{...styles.textPriceRent, textAlign: 'center'}}>Weekly Discount</Text>
                    <View style={styles.inputPriceContainer}>
                        <Text style={styles.labelPriceText}>%</Text>
                        <TextInput 
                            onChange={handleInputWeeklyDiscount}
                            value={weeklyDiscount}
                            keyboardType="numeric"
                            style={styles.inputPrice}
                        />
                    </View>
                </View>
                <View style={styles.priceRentPeriodContainer}>
                    <Text style={{...styles.textPriceRent, textAlign: 'center'}}>Monthly Discount</Text>
                    <View style={styles.inputPriceContainer}>
                        <Text style={styles.labelPriceText}>%</Text>
                        <TextInput 
                            onChange={handleInputMonthlyDiscount}
                            value={monthlyDiscount}
                            keyboardType="numeric"
                            style={styles.inputPrice}
                        />
                    </View>
                </View>
            </View>
            <Text style={styles.pickerLabel}>Description</Text>
            <TextInput 
                value={description}
                style={styles.textArea}
                onChange={handleInputDescription}
                placeholder="Add a description of your item"
                multiline
            />
            <Text style={styles.pickerLabel}>Instructions for use</Text>
            <TextInput 
                value={instructions}
                onChange={handleInputInstructions}
                placeholder="Add instructions on how to use your items"
                style={ styles.textArea}
                multiline
            />
            <Text style={styles.pickerLabel}>Photos</Text>
            {images.length === 0 ? (
                <TouchableWithoutFeedback onPress={uploadImages}>
                    <View style={styles.btnAddPhotos}>
                        <Icon name="image" color="black" size={40}/>
                        <Text style={styles.btnAddPhotosText}>(Click to upload images)</Text>
                    </View>
                </TouchableWithoutFeedback>
            ):(
                <View style={styles.imageRentContainer}>
                    <TouchableWithoutFeedback onPress={uploadImages}>
                        <View style={styles.btnAddImagesContainer}>
                            <Icon1 name="add" color="rgb(95,110,239)" size={25}/>
                            <Text style={styles.btnAddImagesText}>Add photos</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.imagesRentContainer}>
                        {images.map( image => (
                            <View key={ image.path + Math.random().toString()} style={styles.imageContainer}>
                                <Image 
                                    source={image.path ? { uri: image.path } : image}
                                    style={styles.imageRent} 
                                />
                                <TouchableWithoutFeedback onPress={() => deleteImage(image)}>
                                    <View style={styles.iconDeleteImageRentContainer}>
                                        <Icon1 name="close" color="black" size={20}/>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        ) )}
                    </View>
                </View>
            )}
            <View style={{...styles.btnNextContainer, position: 'relative', marginTop: 0, marginBottom: 30 }}>
                <TouchableNativeFeedback onPress={saveChanges}>
                    <View style={{...styles.btnNext, backgroundColor: 'rgb(65,139,204)'}}>
                        <Text style={styles.btnNextText}>Save Changes</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

export default Form
