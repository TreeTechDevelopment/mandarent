import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/AntDesign'

import styles from '../../styles/Category'

const FilterListing = () => {
    return (
        <View style={styles.filterBtnContainer}>
            <TouchableNativeFeedback>
                <View style={{...styles.filterBtn, borderRightColor: 'rgb(76,76,76)', borderRightWidth: 1}}>
                    <Icon name="arrows-v" color="rgb(226,109,55)" size={25}/>
                    <Text style={styles.textFilter}>Order</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.filterBtn}>
                    <Icon1 name="filter" color="rgb(226,109,55)" size={25}/>
                    <Text style={styles.textFilter}>Filter</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default FilterListing
