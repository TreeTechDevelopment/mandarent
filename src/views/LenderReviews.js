import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'

import Review from '../components/lender/Review'
import Navbar from '../components/settings/Navbar'
import styles from '../styles/Lender'

const LenderReviews = ({ navigation, route }) => {

    const [reviews, setReviews] = useState([])

    const goBack = () => navigation.goBack()

    useEffect(() => {
        let reviews = route.params?.reviews
        if(reviews){ setReviews(reviews) }
    }, [route.params])

    return (
        <View style={styles.mainContainer}>
            <Navbar 
                goBack={goBack}
                woText
                backIcon="close"
            />
            <View style={styles.allReviewsContainer}>
                <Text style={styles.allReviewsTitle}>User Reviews</Text>
                <FlatList 
                    data={reviews}
                    extraData={reviews}
                    renderItem={({item}) => (
                        <Review review={item} woBorder/>
                    )}
                    keyExtractor={ item => item.id}
                    style={styles.allReviews}
                    contentContainerStyle={{alignItems: 'center' }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default LenderReviews
