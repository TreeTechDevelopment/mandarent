import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../../styles/Lender'

const LenderInfo = ({ lender }) => {
    return (
        <View style={styles.lenderInfoContainer}>
            <View style={styles.lenderInfoNameContainer}>
                <Image 
                    source={lender.image}
                    style={styles.lenderImage}
                />
                <View>
                    <Text style={styles.lenderName}>{lender.name} {lender.surname}</Text>
                    <View style={styles.lenderRateContainer}>
                        <View style={styles.lenderRate}>
                            <Icon name="star" size={20} color="rgb(249,69,44)" style={{ marginRight: 5 }}/>
                            <Text style={styles.lenderRateText}>{lender.stars}</Text>
                        </View>
                        <Text style={{...styles.lenderRateText, marginLeft: 20}}>{lender.location.city}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{lender.description}</Text>
            </View>
        </View>
    )
}

export default LenderInfo
