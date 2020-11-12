import React, { useState } from 'react'
import { View, FlatList } from 'react-native'

import MyItem from '../components/myItems/MyItem'
import InputSearch from '../components/myItems/InputSearch'
import Navbar from '../components/settings/Navbar'
import styles from '../styles/MyItems'

import { products } from '../testing/test'

const MyItems = ({ navigation }) => {

    const [myItems, setMyItems] = useState(products)

    const goBack = () => navigation.goBack()

    const deleteItem = (itemToDelte) => {
        let newMyItems = [...myItems]
        let idx = newMyItems.findIndex( item => item.id == itemToDelte.id )
        newMyItems.splice(idx, 1)
        setMyItems(newMyItems)
    }

    const editItem = (item) => {
        navigation.navigate('EditListing', { item })
    }

    return (
        <View style={styles.mainContainer}>
            <Navbar 
                goBack={goBack}
                text="My Items"
                textColor="rgb(47,47,47)"
                colorArrow="rgb(229,97,110)"
            />
            <InputSearch />
            <FlatList 
                data={myItems}
                extraData={myItems}
                renderItem={({item}) => (
                    <MyItem 
                        item={item}
                        deleteItem={deleteItem}
                        editItem={editItem}
                    />
                )}
                keyExtractor={ item => item.id}
                contentContainerStyle={{ alignItems: 'center' }}
                style={styles.myItemsContainer}
            />
        </View>
    )
}

export default MyItems
