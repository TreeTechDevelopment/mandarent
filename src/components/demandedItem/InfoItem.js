import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../../styles/DemandedItem'

const InfoItem = ({ item }) => {

    const returnDate = (date) => {
        if(date){
            let newDate = `${date.split('-')[2]}-${date.split('-')[1]}-${date.split('-')[0].slice(2,4)}`
            return newDate.replace(/\-/g,'.')
        }
        
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

    return (
        <ScrollView style={styles.infoContainer} contentContainerStyle={{ alignItems: 'center' }}>
            <View style={styles.sectionContainer}>
                <Text style={styles.itemName}>{item.item?.name}</Text>
                <View style={styles.categoriesContainer}>
                    <Text style={{...styles.itemCategory, marginRight: 10}}>{item.item?.category1}</Text>
                    <Text style={styles.itemCategory}>-</Text>
                    <Text style={{...styles.itemCategory, marginLeft: 10}}>{item.item?.category2}</Text>
                </View>
                <View style={styles.infoUserContainer}>
                    <Image 
                        source={item.user?.image}
                        style={styles.userImg}
                    />
                    <View>
                        <Text style={styles.userName}>{item.user?.name} {item.user?.surname}</Text>
                        <View style={styles.userRateContainer}>
                            <Icon name="star" size={20} color="rgb(249,69,44)" style={{ marginRight: 5 }}/>
                            <Text style={styles.itemUserRate}>{item.user?.stars}</Text>
                        </View>
                    </View>
                </View> 
                <View style={styles.categoriesContainer}>
                    <Text style={styles.titleCategory}>Demand details</Text>
                </View>
                <View style={{...styles.sectionContainer, marginBottom: 0}}>
                    <Text style={styles.subtitleCategory}>Required period</Text>
                    <View style={{...styles.infoUserContainer, marginTop: 10, marginBottom: 0}}>
                        <Icon1 name="calendar-range" color="rgb(1,141,177)" size={60}/>
                        <View style={{...styles.infoUserContainer, margin: 0}}>
                            <View style={styles.itemDateContainer}>
                                <Text style={styles.itemDate}>{returnDate(item.from?.date)}</Text>
                                <Text style={styles.itemHour}>{returnHour(item.from?.hour)}</Text>
                            </View>
                            <View style={styles.itemDateContainer}>
                                <Text style={styles.itemDate}>-</Text>
                                <Text style={styles.itemHour}></Text>
                            </View>
                            <View style={styles.itemDateContainer}>
                                <Text style={styles.itemDate}>{returnDate(item.to?.date)}</Text>
                                <Text style={styles.itemHour}>{returnHour(item.to?.hour)}</Text>
                            </View>
                        </View> 
                    </View> 
                </View>
                <View style={{...styles.infoUserContainer, marginTop: 0}}>
                    <Icon name="location-sharp" size={20} color="rgb(20,101,245)" style={{ marginRight: 5 }}/>
                    <Text style={styles.subtitleCategory}>{item.user?.location.city}</Text>
                </View> 
                <View style={{...styles.categoriesContainer, marginBottom: 10}}>
                    <Text style={styles.titleCategory}>Description</Text>
                </View>
                <View style={styles.categoriesContainer}>
                    <Text style={styles.subtitleCategory}>{item.item?.description}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default InfoItem
