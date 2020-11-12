import React, { useState } from 'react'
import { View, FlatList } from 'react-native'

import Navbar from '../components/settings/Navbar'
import RentOperation from '../components/rentOperations/RentOperation'
import Shadow from '../components/Shadow'
import styles from '../styles/RentOffers'

import { rentOffersTest} from '../testing/test'

const RentOperations = ({ navigation }) => {

    const [rentOperations, setRentOperations] = useState(rentOffersTest)

    const goBack = () => navigation.goBack()

    return (
        <View style={styles.mainContainer}>
            <Navbar 
                goBack={goBack}
                text="Rent Operations"
                textColor="rgb(47,47,47)"
                colorArrow="rgb(229,97,110)"
            />
            <FlatList 
                data={rentOperations}
                extraData={rentOperations}
                renderItem={({item}) => (
                    <Shadow marginVertical elevation={5}>
                    <RentOperation rentOperation={item}/>
                    </Shadow>
                )}
                keyExtractor={ item => item.id}
                contentContainerStyle={{ alignItems: 'center' }}
                style={styles.rentOffersContainer}
                
            />
        </View>
    )
}

export default RentOperations
