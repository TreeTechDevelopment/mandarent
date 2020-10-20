import React from 'react'
import { View, Text, FlatList, Image, TouchableNativeFeedback } from 'react-native'

import styles from '../../styles/Product'

import  { products } from '../../testing/test'

const SimilarListings = ({  }) => {

    return (
        <View style={styles.infoProductContainer}>
            <Text style={{...styles.titleProduct, marginTop: 20, marginBottom: 10}}>Similar Listings</Text>
            <FlatList 
                data={products}
                extraData={products}
                renderItem={ ({ item, index }) => {
                    return(
                        <TouchableNativeFeedback onPress={() => {}}>
                            <Image 
                                source={item.images[0]}
                                style={index === 0 ? {...styles.imageSimilarListingItem, ...styles.marginLeftImagesListings} : styles.imageSimilarListingItem}
                            />
                        </TouchableNativeFeedback>
                    )
                }}
                horizontal
                keyExtractor={item => item.id}
                style={styles.imageSimilarList}
                contentContainerStyle={{ alignItems: 'center' }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default SimilarListings
