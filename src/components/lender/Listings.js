import React from 'react'
import { View, Text } from 'react-native'

import Product from '../home/Trend'
import styles from '../../styles/Lender'

const Listings = ({ listings }) => {

    return (
        <View style={styles.listingsContainer}>
            <View style={styles.titleContainer}>
                <Text style={{...styles.reviewsTitle, marginBottom: 0}}>Listings</Text>
            </View>
            {listings.map( (listing, idx) => (
                <Product 
                    trend={listing}
                    key={listing.id}
                    lastItem={idx === listings.length - 1}
                />
            ))}
        </View>
    )
}

export default Listings
