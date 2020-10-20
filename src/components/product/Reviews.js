import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from '../../styles/Product'

const Reviews = ({ reviews }) => {
    return (
        <View style={styles.infoProductContainer}>
            <Text style={{...styles.titleProduct, marginTop: 20, marginBottom: 30}}>Reviews</Text>
            {reviews.map( review => (
                <View key={Math.random().toString()}>
                    <View style={styles.reviewUserPhotoContainer}>
                        <Image 
                            source={review.user.image}
                            style={styles.userImageRound}
                        />
                        <Text style={styles.reviewUsername}>{review.user.username}</Text>
                    </View>
                    <Text style={styles.reviewText}>{review.review}</Text>
                </View>
            ) )}
        </View>
    )
}

export default Reviews
