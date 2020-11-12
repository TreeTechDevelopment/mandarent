import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import ImageCarousel from './ImageCarousel'
import styles from '../../styles/Home'

const Trend = ({ trend, navigation, lastItem }) => {

    const [like, setLike] = useState(false)

    const likeTrend = () => { setLike(!like) }
    
    const openProduct = () => navigation.navigate('Product', { product: trend })

    return (
        <View style={lastItem ? {...styles.trendCard, marginBottom: 20} : styles.trendCard}>
            <View style={styles.trendHeartIconContainer}>
                <TouchableWithoutFeedback onPress={likeTrend}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="heart" size={20} color="white" />
                        <Icon name="heart" size={16} color={like ? 'red' : "rgb(144,144,144)"} style={{ marginLeft: -17 }}/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.trendCarouselContainer}>
                <ImageCarousel 
                    images={trend.images}
                    onClick={openProduct}
                    carouselStyle={styles.trendImage}
                    indicatorStyle={styles.trendCarouselIndicatorContainer}
                />
            </View>
            <View style={styles.trendTextContainer}>
                <View style={styles.trendStarsContainer}>
                    <Icon name="star" size={20} color="rgb(249,69,44)" style={{ marginRight: 5 }}/>
                    <Text style={styles.trendTextLight}>{trend.stars}</Text>
                </View>
                <View style={styles.trendInfoContainer}>
                    <Text style={styles.trendTextNormal}>{trend.name}</Text>
                    <Text style={styles.trendTextLight}>{trend.location.name}</Text>
                </View>
                <View style={styles.trendStarsContainer}>
                    <Text style={styles.trendTextBold}>${trend.price.daily}</Text>
                    <Text style={styles.trendTextNormal}> / daily</Text>
                </View>
            </View>
        </View>
    )
}

export default Trend
