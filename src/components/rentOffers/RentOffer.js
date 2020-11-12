import React from 'react'
import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../../styles/RentOffers'
import stylesProduct from '../../styles/Product'

const RentOffer = ({ rentOffer}) => {
    return (
        <View style={styles.rentOfferContainer}>
            <View style={styles.RentOfferContainerRow}>
                <View style={styles.userInfoRentOfferContainer}>
                    <Image 
                        source={rentOffer.customer.image}
                        style={stylesProduct.userImageRound}
                    />
                    <View style={styles.userInfoRentOfferTextContainer}>
                        <Text style={styles.textUserInfoRentOffer}>{rentOffer.customer.username}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="star" size={20} color="rgb(249,69,44)" style={{ marginRight: 5 }}/>
                            <Text style={styles.textUserInfoRentOffer}>{rentOffer.customer.stars}</Text>
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
                <Text style={styles.productRentOfferTitle}>Wanted Item and Date</Text>
                <View style={styles.productInfoRentOfferContainer}>
                    <Image 
                        style={styles.productImageRentOffer}
                        source={rentOffer.product.images[0]}
                    />
                    <View style={styles.productInfoRentOffer}>
                        <Text style={styles.productNameRentOffer}>{rentOffer.product.name}</Text>
                        <Text style={styles.labelRentOffer}>Date and Time</Text>
                        <Text style={{...styles.productNameRentOffer, ...styles.labelDayRentOffer}}>{rentOffer.date.from.day} - {rentOffer.date.to.day} </Text>
                        <View style={styles.hourProductRentOfferContainer}>
                            <View style={styles.hourProductRentOffer}>
                                <Text style={styles.labelRentOffer}>{rentOffer.date.from.hour}</Text>
                            </View>
                            <View style={{...styles.hourProductRentOffer, marginLeft: 20}}>
                                <Text style={styles.labelRentOffer}>{rentOffer.date.to.hour}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.RentOfferContainerRow}>
                <Text style={styles.productNameRentOffer}>You will earn: </Text>
                <Text style={styles.totalRentOffer}>${rentOffer.total}</Text>
            </View>
            <View style={styles.RentOfferContainerRow}>
                <TouchableNativeFeedback>
                    <View style={styles.cancelBtnRentOffer}>
                        <Text style={styles.cancelBtnRentOfferText}>Cancel</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                <View style={styles.acceptBtnRentOffer}>
                        <Text style={styles.acceptBtnRentOfferText}>Accept</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

export default RentOffer
