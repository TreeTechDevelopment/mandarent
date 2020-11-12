import React from 'react'
import { View, Text, TouchableWithoutFeedback, Image, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Ionicons';

import Shadow from '../Shadow'
import styles from '../../styles/ShopCart'

const ShopCartItem = ({ item, lastItem, deleteItem }) => {

    const returnDay = date => {
        let dateObj = new Date(date)
        return `${dateObj.toString().split(' ')[2]} ${dateObj.toString().split(' ')[1]} ${dateObj.toString().split(' ')[3]}`
    }

    const returnHour = hour => {
        switch(hour){
            case 0: return '00:00'
            case 1: return '01:00'
            case 2: return '02:00'
            case 3: return '03:00'
            case 4: return '04:00'
            case 5: return '05:00'
            case 6: return '06:00'
            case 7: return '07:00'
            case 8: return '08:00'
            case 9: return '09:00'
            case 10: return '10:00'
            case 11: return '11:00'
            case 12: return '12:00'
            case 13: return '13:00'
            case 14: return '14:00'
            case 15: return '15:00'
            case 16: return '16:00'
            case 17: return '17:00'
            case 18: return '18:00'
            case 19: return '19:00'
            case 20: return '20:00'
            case 21: return '21:00'
            case 22: return '22:00'
            case 23: return '23:00'
        }
    }

    const returnRentalFee = () => {
        let dateFrom = new Date(item.from.date)
        let dateTo = new Date(item.to.date)

        dateFrom.setHours(item.from.hour)
        dateTo.setHours(item.to.hour)

        let hourPrice = Number(item.listing.price.hourly)
        let dayPrice = Number(item.listing.price.daily)
        let weeklyDiscount = Number(item.listing.discount.weeklyDiscount) / 100
        let monthlyDiscount = Number(item.listing.discount.monthlyDiscount) / 100

        let diff = dateTo - dateFrom
        let dayDiff = diff / (1000*60*60*24)
        let daysDiff = Math.ceil( dayDiff )

        let total = 0

        if(dayDiff < 1){
            let hourDiff = Math.ceil(diff / (1000*60*60))

            for(let i = 0; i < hourDiff; i++){ total += hourPrice }

            if(total >= dayPrice){ total = dayPrice }
        }else if(dayDiff === 1){
            total = dayPrice
        }else if(daysDiff < 8){
            let dayDiscount = weeklyDiscount/6
            
            for(let i = 0; i < daysDiff; i++){ total += dayPrice }
            
            total -= total * dayDiscount * (daysDiff - 1)

        }else if(daysDiff < 30){
            let discount = monthlyDiscount - weeklyDiscount
            discount = discount / 23

            for(let i = 0; i < daysDiff; i++){ total += dayPrice }

            total -= total * (weeklyDiscount + discount * (daysDiff - 7))

        }else{
            for(let i = 0; i < daysDiff; i++){ total += dayPrice }
            total -= total * monthlyDiscount
        }
        return total.toFixed(2)
    }

    const returnServiceFee = () => {
        let total = Number(returnRentalFee()) * 0.1
        return total.toFixed(2)
    }

    const handleBtnDelete = () => deleteItem(item.id)

    return (
        <Shadow marginBottomValue={lastItem ? 50 : 20} elevation={7}>
            <View style={styles.itemContainer}>
                <View style={styles.itemNameContainer}>
                    <Text style={styles.itemName}>{item.listing.name}</Text>
                    <TouchableWithoutFeedback onPress={handleBtnDelete}>
                        <Icon name="trash" size={25} color="rgb(255,102,35)"/>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.infoItemContainer}>
                    <View style={styles.imageItemContainer}>
                        <View>
                            <View style={styles.lenderNameContainer}>
                                <View style={styles.rateItemContainer}>
                                    <Icon1 name="star" size={20} color="rgb(249,69,44)" style={{ marginRight: 5 }}/>
                                    <Text style={styles.itemText}>{item.listing.stars}</Text>
                                </View>
                                <Text style={{...styles.itemText, marginLeft: 10}}>{item.listing.lender.name}</Text>
                            </View>
                            <Text style={styles.itemText}>{item.listing.location.city}</Text>
                        </View>
                        <Image 
                            source={item.listing.images[0]}
                            style={styles.itemImage}
                        />
                    </View>
                </View>
                <View style={styles.datesContainer}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>{returnDay(item.from.date)}</Text>
                        <Text style={styles.itemText}>{returnHour(item.from.hour)}</Text>
                    </View>
                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>-</Text>
                        <Text style={styles.itemText}></Text>
                    </View>
                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>{returnDay(item.to.date)}</Text>
                        <Text style={styles.itemText}>{returnHour(item.to.hour)}</Text>
                    </View>
                </View>
                <View style={styles.serviceFeeContainer}>
                    <Text style={styles.rentLabel}>Service fee:</Text>
                    <Text style={styles.rentLabel}>${returnServiceFee()}</Text>
                </View>
                <View style={{...styles.serviceFeeContainer, paddingTop: 0}}>
                    <Text style={styles.serviceFeeText}>*Pay service fee for reserving the item</Text>
                    <TouchableNativeFeedback>
                        <View style={styles.payBtn}>
                            <Text style={styles.payBtnText}>Pay</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.lineDivider}></View>
                <View style={styles.serviceFeeContainer}>
                    <Text style={styles.rentLabel}>Rental fee:</Text>
                    <Text style={styles.rentLabel}>${returnRentalFee()}</Text>
                </View>
                <View style={{...styles.serviceFeeContainer, paddingTop: 0}}>
                    <Text style={styles.serviceFeeTextWider}>*Pay in cash when you take the item from the owner</Text>
                </View>
            </View>
        </Shadow>
    )
}

export default ShopCartItem
