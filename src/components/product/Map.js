import React from 'react'
import { View, Text } from 'react-native'
//import MapView from 'react-native-maps';

import styles from '../../styles/Product'

const Map = ({ product }) => {

    return (
        <View style={styles.mapContainer}>
            <Text style={{...styles.titleProduct, ...styles.marginLeft}}>Location</Text>
            <View style={styles.map}></View>
            <View style={styles.locationNameContainer}>
                <Text style={styles.locationText}>{product.location.name}</Text>
            </View>
        </View>
    )
}

export default Map
