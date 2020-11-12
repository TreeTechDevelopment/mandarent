import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

import Review from './Review'
import styles from '../../styles/Lender'

const Reviews = ({ reviews, gotoReviews }) => {

    const seeReviews = () => gotoReviews(reviews)

    return (
        <View style={styles.reviewsContainer}>
            <Text style={styles.reviewsTitle}>Reviews</Text>
            {reviews.map( (review, idx) => (
                idx < 2 && (
                    <Review review={review} key={review.id}/>
                )
            ))}
            {reviews.length > 2 && (
                <TouchableWithoutFeedback onPress={seeReviews}>
                    <Text style={styles.seeReviewsText}>See other {reviews.length - 2} reviews</Text>
                </TouchableWithoutFeedback>
            )}
        </View> 
    )
}

export default Reviews
