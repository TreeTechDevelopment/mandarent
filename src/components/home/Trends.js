import React, { useState } from 'react'
import { View, Text } from 'react-native'

import Trend from './Trend'
import styles from '../../styles/Home'

import { products } from '../../testing/test'

const Trends = ({ navigation }) => {
    
    const [trends, setTrends] = useState(products)

    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}>Trend Listings</Text>
            {trends.map( trend => (
                <Trend 
                    key={trend.id}
                    trend={trend}
                    navigation={navigation}
                />
            ) )}
        </View>
    )
}

export default Trends
