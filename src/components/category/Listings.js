import React from 'react'
import { View, Text, FlatList } from 'react-native'

import Listing from '../home/Trend'
import styles from '../../styles/Category'

const Listings = ({ listings, navigation }) => {
    return (
        <View style={styles.listingContainer}>
            <FlatList
                data={listings}
                extraData={listings}
                style={{flex :1}}
                contentContainerStyle={{ alignItems: 'center' }}
                renderItem={({item, index}) => (
                    <Listing
                        trend={item}
                        navigation={navigation}
                        lastItem={index === listings.length - 1}
                    />
                )}
                keyExtractor={ item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Listings
