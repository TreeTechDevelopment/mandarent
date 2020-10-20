import React, { useState } from 'react'
import { View } from 'react-native'

import TopBar from '../components/rent/TopBar'
import StepIndicator from '../components/rent/StepIndicator'
import FormStep1 from '../components/rent/FormStep1'
import FormStep2 from '../components/rent/FormStep2'
import FormStep3 from '../components/rent/FormStep3'
import FormStep4 from '../components/rent/FormStep4'
import styles from '../styles/Rent'

const Rent = ({ navigation }) => {

    const [step, setStep] = useState(1)
    const [itemName, setItemName] = useState('')
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
    
    const handleInfoStep1 = (info) => {
        setItemName(info.itemName)
        setDescription(info.description)
        setInstructions(info.instructions)
        setStep(step+1)
    }

    const handleInfoStep2 = (info) => {
        setImages(info.images)
        setCategory1(info.category1)
        setCategory2(info.category2)
        setStep(step+1)
    }

    const handleInfoStep3 = (info) => {
        setCity(info.city)
        setStreet(info.street)
        setHour(info.hour)
        setDistrict(info.district)
        setDay(info.day)
        setStep(step+1)
    }

    const handleInfoStep4 = (info) => {
        setPriceHourly(info.priceHourly)
        setPriceDaily(info.priceDaily)
        setWeeklyDiscount(info.weeklyDiscount)
        setMonthlyDiscount(info.monthlyDiscount)
    }

    const goBack = () => {
        if(step === 1){ navigation.goBack() }
        else{ setStep(step-1) }
    }

    return (
        <View style={styles.mainContainer}>
            <TopBar goBack={goBack}/>
            <StepIndicator step={step}/>
            {step === 1 ? (
                <FormStep1 
                    next={handleInfoStep1}
                    prevItemName={itemName}
                    prevDescription={description}
                    prevInstructions={instructions}
                />
            ): step === 2 ? (
                <FormStep2 
                    next={handleInfoStep2}
                    prevImages={images}
                    prevCategory1={category1}
                    prevCategory2={category2}
                />
            ): step === 3 ? (
                <FormStep3 
                    next={handleInfoStep3}
                    prevCity={city}
                    prevDistrict={district}
                    prevStreet={street}
                    prevDay={day}
                    prevHour={hour}
                />
            ): (
                <FormStep4 
                    next={handleInfoStep4}
                    prevPriceHourly={priceHourly}
                    prevPriceDaily={priceDaily}
                    prevWeeklyDiscount={weeklyDiscount}
                    prevMonthlyDiscount={monthlyDiscount}
                />
            )}
        </View>
    )
}

export default Rent
