import React, { useState, useEffect } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import InfoItem from '../components/demandedItem/InfoItem'
import styles from '../styles/DemandedItem'

const DemandedItem = ({ navigation, route }) => {

    const [item, setItem] = useState({})

    const goBack = () => navigation.goBack()

    const gotoSuggestItem = () => navigation.navigate('SuggestItem')

    useEffect(() => {
        let item = route.params?.item
        if(item){ setItem(item) }
    }, [route.params])

    return (
        <View style={styles.mainContainer}>
            <View style={styles.arrowBackContainer}>
                <TouchableNativeFeedback onPress={goBack}>
                    <Icon name="arrowleft" color='black' size={30}/>
                </TouchableNativeFeedback>
            </View>
            <InfoItem item={item}/>
            <View style={styles.btnContainer}>
                <TouchableNativeFeedback onPress={gotoSuggestItem}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Suggest Item</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

export default DemandedItem
