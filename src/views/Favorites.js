import React, { useState } from 'react'
import { View, FlatList } from 'react-native'

import TopBar from '../components/favorites/TopBar'
import FavoriteItem from '../components/home/Trend'
import styles from '../styles/Favorites'

import { products } from '../testing/test'

const Favourites = ({ navigation }) => {

    const [favorites, setFavorites] = useState(products)

    return (
        <View style={styles.mainContainer}>
            <TopBar />
            <FlatList 
                data={favorites}
                extraData={favorites}
                renderItem={({item, index})=> (
                    <FavoriteItem 
                        trend={item}
                        navigation={navigation}
                        lastItem={index === favorites.length - 1}
                    />
                )}
                showsVerticalScrollIndicator={false}
                style={styles.favoritesContainer}
                contentContainerStyle={{ alignItems: 'center' }}
            />
        </View>
    )
}

export default Favourites
