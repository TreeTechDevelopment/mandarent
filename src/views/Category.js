import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import { products } from '../testing/test'

import TopBar from '../components/category/TopBar'
import FilterListing from '../components/category/FilterListing'
import Listings from '../components/category/Listings'
import styles from '../styles/Category'

const Category = ({ navigation, route }) => {

    const [categoryName, setCategoryName] = useState('')
    const [listings, setListings] = useState(products)

    const goBack = () =>navigation.goBack()

    useEffect(() => {
        if(route.params){
            let category = route.params?.categoryName
            setCategoryName(category)
        }
    }, [route.params])

    return (
        <View style={styles.mainContainer}>
            <TopBar 
                goBack={goBack}
                categoryName={categoryName}
            >
                <FilterListing />
            </TopBar>
            <Listings 
                listings={listings} 
                navigation={navigation}
            />
        </View>
    )
}

export default Category
