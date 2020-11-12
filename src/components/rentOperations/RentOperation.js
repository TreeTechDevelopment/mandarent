import React, { useState } from 'react'
import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../../styles/RentOffers'
import stylesProduct from '../../styles/Product'

const RentOperation = ({ rentOperation }) => {

    const [username, setUsername] = useState('Username')

    return (
        <View style={styles.rentOperationContainer}>
            <View style={{...styles.RentOfferContainerRow, paddingBottom: 0}}>
                <View style={styles.userTypeRentOperation}>
                    <Text style={styles.userTypeRentOperationText}>{rentOperation.lender.username === username ? 'Customer' : 'Lender'}</Text>
                </View>
            </View>
            <View style={styles.RentOfferContainerRow}>
                <View style={styles.userInfoRentOfferContainer}>
                    <Image 
                        source={rentOperation.lender.username === username ? rentOperation.customer.image : rentOperation.lender.image}
                        style={stylesProduct.userImageRound}
                    />
                    <View style={styles.userInfoRentOfferTextContainer}>
                        <Text style={styles.textUserInfoRentOffer}>{rentOperation.lender.username === username ? rentOperation.customer.username : rentOperation.lender.username}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="star" size={20} color="rgb(249,69,44)" style={{ marginRight: 5 }}/>
                            <Text style={styles.textUserInfoRentOffer}>{rentOperation.lender.username === username ? rentOperation.customer.stars: rentOperation.lender.stars}</Text>
                        </View>
                    </View>
                </View>
                <TouchableNativeFeedback>
                    <View style={styles.messageBtnRentOffer}>
                        <Text style={styles.messageBtnRentOfferText}>Message</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.productRentOfferContainer}>
                <Text style={styles.productRentOfferTitle}>Rented Item and Date</Text>
                <View style={styles.productInfoRentOfferContainer}>
                    <Image 
                        style={styles.productImageRentOffer}
                        source={rentOperation.product.images[0]}
                    />
                    <View style={styles.productInfoRentOffer}>
                        <Text style={styles.productNameRentOffer}>{rentOperation.product.name}</Text>
                        <Text style={styles.labelRentOffer}>Date and Time</Text>
                        <Text style={{...styles.productNameRentOffer, ...styles.labelDayRentOffer}}>{rentOperation.date.from.day} - {rentOperation.date.to.day} </Text>
                        <View style={styles.hourProductRentOfferContainer}>
                            <View style={styles.hourProductRentOffer}>
                                <Text style={styles.labelRentOffer}>{rentOperation.date.from.hour}</Text>
                            </View>
                            <View style={{...styles.hourProductRentOffer, marginLeft: 20}}>
                                <Text style={styles.labelRentOffer}>{rentOperation.date.to.hour}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.RentOfferContainerRow}>
                <Text style={styles.totalRentOffer}>Status: {rentOperation.status}</Text>
                <Text style={styles.totalRentOffer}>${rentOperation.total}</Text>
            </View>
        </View>
    )
}

export default RentOperation
