import React, { useEffect, useState, useRef } from 'react'
import { View, Text, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

import styles from '../../styles/Rent'

const FormStep4 = ({ next, prevPriceHourly, prevPriceDaily, prevWeeklyDiscount, prevMonthlyDiscount }) => {

    const inputWeeklyDiscount = useRef(null)
    const inputMonthlyDiscount = useRef(null)

    const [priceHourly, setPriceHourly] = useState('')
    const [priceDaily, setPriceDaily] = useState('')
    const [weeklyDiscount, setWeeklyDiscount] = useState('2')
    const [monthlyDiscount, setMonthlyDiscount] = useState('5')

    const handleInputPriceHourly = e => setPriceHourly(e.nativeEvent.text.replace(/[^0-9.]/g, ''))
    const handleInputPriceDaily = e => setPriceDaily(e.nativeEvent.text.replace(/[^0-9.]/g, ''))
    const handleInputWeeklyDiscount = e => setWeeklyDiscount(e.nativeEvent.text.replace(/[^0-9.]/g, ''))
    const handleInputMonthlyDiscount = e => setMonthlyDiscount(e.nativeEvent.text.replace(/[^0-9.]/g, ''))

    const handleBtn = () => {
        if(priceDaily !== "" && priceHourly !== ""){
            next({ priceHourly, priceDaily,weeklyDiscount, monthlyDiscount })
        }
    }

    const focusInputWeeklyDiscount = () => inputWeeklyDiscount.current.focus()
    const focusInputMonthlyDiscount = () => inputMonthlyDiscount.current.focus()

    useEffect(() => {
        if(prevPriceHourly !== ""){ setPriceHourly(prevPriceHourly) }
        if(prevPriceDaily !== ""){ setPriceDaily(prevPriceDaily) }
        if(prevWeeklyDiscount !== ""){ setWeeklyDiscount(prevWeeklyDiscount) }
        if(prevMonthlyDiscount !== ""){ setMonthlyDiscount(prevMonthlyDiscount) }
    }, [])

    return (
        <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
            <View style={styles.form}>
                <Text style={styles.title}>Step 4</Text>
                <Text style={styles.label}>Price</Text>
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
                <Text style={{...styles.label, marginBottom: 0}}>Discount for long-terms rentals</Text>
                <Text style={{...styles.pickerLabel, marginTop: 0, fontSize: 16}}>Adding the discount for weekly and monthly rentals will increase your customers and revenue</Text>
                <Text style={{...styles.label, marginBottom: 0}}>Weekly discount</Text>
                <Text style={{...styles.pickerLabel, marginTop: 0, marginBottom: 0}}>Weekly price: {Number(priceDaily)*7}$</Text>
                <TouchableWithoutFeedback onPress={focusInputWeeklyDiscount}>
                    <View style={styles.inputDiscountContainer}>
                        <TextInput 
                            onChange={handleInputWeeklyDiscount}
                            value={weeklyDiscount}
                            keyboardType="numeric"
                            style={styles.inputDiscount}
                            ref={inputWeeklyDiscount}
                        />
                        <Text style={styles.inputDiscount}>%</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={{...styles.label, marginBottom: 0}}>Monthly discount</Text>
                <Text style={{...styles.pickerLabel, marginTop: 0, marginBottom: 0}}>Monthly price: {Number(priceDaily)*30}$</Text>
                <TouchableWithoutFeedback onPress={focusInputMonthlyDiscount}>
                    <View style={styles.inputDiscountContainer}>
                        <TextInput 
                            onChange={handleInputMonthlyDiscount}
                            value={monthlyDiscount}
                            keyboardType="numeric"
                            style={styles.inputDiscount}
                            ref={inputMonthlyDiscount}
                        />
                        <Text style={styles.inputDiscount}>%</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.btnNextContainer}>
                    <TouchableNativeFeedback onPress={handleBtn}>
                        <View style={styles.btnNext}>
                            <Text style={styles.btnNextText}>Finish</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default FormStep4
