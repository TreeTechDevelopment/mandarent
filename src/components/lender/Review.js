import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../../styles/Lender'

const Review = ({ review, woBorder }) => {

    const starsArray = ['', '', '', '', '']

    return (
        <View style={woBorder ? {...styles.reviewContainer, borderWidth: 0} : styles.reviewContainer}>
            <View style={styles.userReviewContainer}>
                <Image 
                    source={review.user.image}
                    style={styles.userImageRound}
                />
                <View>
                    <Text style={styles.reviewLenderUserName}>{review.user.name}</Text>
                    <Text style={styles.reviewLenderDate}>{Date(review.date).slice(4,15)}</Text>
                </View>
                <View style={styles.reviewLenderStarsContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        {starsArray.map((x, idx) => (
                            <Icon 
                                name="star" 
                                size={20} 
                                color={idx < review.stars ? 'rgb(252, 103, 37)' : 'rgb(190, 190, 190)'} 
                                style={{ marginRight: 5 }}
                                key={idx}
                            />
                        ))}
                    </View>
                    <Text style={styles.reviewLenderDate}></Text>
                </View>
            </View>
            <Text style={styles.reviewText}>{review.review}</Text>
        </View>
    )
}

export default Review
