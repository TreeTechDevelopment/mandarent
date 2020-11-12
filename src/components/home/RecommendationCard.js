import React from 'react'
import { View, Image, Text, TouchableNativeFeedback } from 'react-native'

import styles from '../../styles/Home'
import Shadow from '../Shadow'

const RecomendationCard = ({ recommendation, index, navigation }) => {

    const handleBtn = () => {
        if(recommendation.name === "Demanded"){ navigation.navigate('Demanded') }
    }

    return (
        <Shadow 
            marginHorizontal 
            borderRadius
            first={index === 0}
            maxHeight
        >
            <TouchableNativeFeedback onPress={handleBtn}>
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
