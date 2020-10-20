import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'

import styles from '../../styles/Home'
import RecommendationCard from './RecommendationCard'

import { recommendationsTest } from '../../testing/test'

const Recommendations = ({ navigation }) => {

    const [recommendations, setRecommendations] = useState(recommendationsTest)

    return (
        <View style={{...styles.container, paddingLeft: 0}}>
            <Text style={{...styles.subTitle, ...styles.paddingLeft}}>For you</Text>
            <FlatList
                horizontal
                data={recommendations}
                renderItem={({ item, index }) => (
                    <RecommendationCard 
                        recommendation={item}
                        index={index}
                        navigation={navigation}
                    />
                )}
                keyExtractor={item => item.id}
                style={styles.recommendationList}
                extraData={recommendations}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Recommendations
