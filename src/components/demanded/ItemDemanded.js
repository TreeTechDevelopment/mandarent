import React from 'react'
import { View, Text, Image ,TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../../styles/Demanded'

const ItemDemanded = ({ item, gotoItem }) => {

    const returnDate = (date) => {
        let newDate = `${date.split('-')[2]}-${date.split('-')[1]}-${date.split('-')[0].slice(2,4)}`
        return newDate.replace(/\-/g,'.')
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

    const handleBtn = () => gotoItem(item)

    return (
        <TouchableWithoutFeedback onPress={handleBtn}>
            <View style={styles.item}>
                <View style={styles.itemUserInfoContainer}>
                    <Image 
                        source={item.user.image}
                        style={styles.itemUserImage}
                    />
                    <View>
                        <Text style={styles.itemUsername}>{item.user.name} {item.user.surname}</Text>
                        <View style={styles.itemUserRateContainer}>
                            <Icon name="star" size={20} color="rgb(249,69,44)" style={{ marginRight: 5 }}/>
                            <Text style={styles.itemUserRate}>{item.user.stars}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.itemName}>{item.item.name}</Text>
                <View style={styles.itemUserInfoContainer}>
                    <Icon name="location-sharp" size={20} color="rgb(20,101,245)" style={{ marginRight: 5 }}/>
                    <Text style={styles.itemUserLocation}>{item.user.location.city}</Text>
                </View>
                <View style={styles.itemRentPeriodContainer}>
                    <Text style={styles.itemUserLocation}>Required period</Text>
                    <View style={styles.itemRentPeriod}>
                        <View style={styles.itemRentDateContainer}>
                            <Text style={{...styles.itemName, marginLeft: 0}}>{returnDate(item.from.date)}</Text>
                            <Text style={styles.itemUserLocation}>{returnHour(item.from.hour)}</Text>
                        </View>
                        <View style={{...styles.itemRentDateContainer, marginHorizontal: 10}}>
                            <Text style={{...styles.itemName, marginLeft: 0}}>-</Text>
                            <Text style={styles.itemUserLocation}></Text>
                        </View>
                        <View style={styles.itemRentDateContainer}>
                            <Text style={{...styles.itemName, marginLeft: 0}}>{returnDate(item.to.date)}</Text>
                            <Text style={styles.itemUserLocation}>{returnHour(item.to.hour)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ItemDemanded
