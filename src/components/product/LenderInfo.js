import React from 'react'
import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../../styles/Product'

const LenderInfo = ({ lender, gotoLender, gotoLenderChat }) => {
    
    const gotoLenderInfo = () => gotoLender(lender)

    const gotoMessageLender = () => gotoLenderChat(`${lender.name} ${lender.surname}`)

    return (
        <View style={styles.lenderInfoContainer}>
            <View style={styles.lenderRateContainer}>
                <Text style={styles.titleProduct}>Lender</Text>
                <View style={styles.lenderRate}>
                    <Icon name="star" size={20} color="rgb(249,69,44)" style={{ marginRight: 5 }}/>
                    <Text style={styles.lenderRateText}>{lender.stars}</Text>
                </View>
            </View>
            <View style={styles.lenderImageContainer}>
                <TouchableNativeFeedback onPress={gotoLenderInfo}>
                    <Image 
                        source={lender.image}
                        style={styles.lenderImage}
                    />
                </TouchableNativeFeedback>
                <View>
                    <Text style={styles.lenderName}>{lender.name} {lender.surname}</Text>
                    <TouchableNativeFeedback onPress={gotoMessageLender}>
                        <View style={styles.messageLender}>
                            <Text style={styles.messageLenderText}>Message</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )
}

export default LenderInfo
