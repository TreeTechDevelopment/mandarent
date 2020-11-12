import React, { useState } from 'react'
import { View, FlatList } from 'react-native'

import TopBar from '../components/demanded/TopBar'
import ItemDemanded from '../components/demanded/ItemDemanded'
import styles from '../styles/Demanded'

import { demandedItemsTest } from '../testing/test'

const Demands = ({ navigation }) => {

    const [itemsDemanded, setItemsDemanded] = useState(demandedItemsTest)

    const goBack = () => navigation.goBack()

    const gotoItem = item => navigation.navigate('DemandedItem', { item })

    return (
        <View style={styles.mainContainer}>
            <TopBar goBack={goBack}/>
            <FlatList 
                data={itemsDemanded}
                extraData={itemsDemanded}
                renderItem={({ item }) => (
                    <ItemDemanded item={item} gotoItem={gotoItem}/>
                )}
                keyExtractor={ item => item.id}
                style={styles.itemsContainer}
                contentContainerStyle={{ alignItems: 'center' }}
            />
        </View>
    )
}

export default Demands
