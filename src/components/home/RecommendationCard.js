import React from 'react'
import { View, Image, Text, TouchableNativeFeedback } from 'react-native'

import styles from '../../styles/Home'
import Shadow from '../Shadow'

const RecomendationCard = ({ recommendation, index }) => {

    //const openProduct = () => navigation.navigate('Product', { product: recommendation })

    return (
        <Shadow 
            marginHorizontal 
            borderRadius
            first={index === 0}
        >
            <TouchableNativeFeedback onPress={() => {}}>
                <View style={styles.recommendationCard}>
                    <Image 
                        source={recommendation.image}
                        style={styles.recommendationImage}
                    />
                    <View style={styles.recommendationTextContainer}>
                        <Text style={styles.recommendationTitle}>{recommendation.name}</Text>
                        <Text style={styles.recommendationText}>{recommendation.description.length < 80 ? recommendation.description : `${recommendation.description.substring(0,77)}...`}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </Shadow>
    )
}

export default RecomendationCard
