import React, { useState } from 'react'
import { View, FlatList } from 'react-native'

import TopBar from '../components/suggestItem/TopBar'
import BottomTab from '../components/suggestItem/BottomTab'
import Item from '../components/suggestItem/Item'
import styles from '../styles/SuggestItem'

import { products } from '../testing/test'

const SuggestItem = ({ navigation }) => {

    const [items, setItems] = useState(products)

    const goBack = () => navigation.goBack()

    const gotoRent = () => navigation.navigate('Rent')

    return (
        <View style={styles.mainContainer}>
            <TopBar goBack={goBack}/>
            <FlatList 
                data={products}
                extraData={products}
                renderItem={({item}) => (
                    <Item item={item}/>
                )}  
                keyExtractor={ item => item.id }
                style={styles.itemContainer}
                contentContainerStyle={{ alignItems: 'center' }}
            />
            <BottomTab gotoRent={gotoRent}/>
        </View>
    )
}

export default SuggestItem
