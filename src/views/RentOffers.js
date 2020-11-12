import React, { useState } from 'react'
import { View, FlatList } from 'react-native'

import Navbar from '../components/settings/Navbar'
import RentOffer from '../components/rentOffers/RentOffer'
import styles from '../styles/RentOffers'

import { rentOffersTest} from '../testing/test'

const RentOffers = ({ navigation }) => {

    const [rentOffers, setRentOffers] = useState(rentOffersTest)

    const goBack = () => navigation.goBack()

    return (
        <View style={styles.mainContainer}>
            <Navbar 
                goBack={goBack}
                text="Rent Offers"
                textColor="rgb(47,47,47)"
                colorArrow="rgb(229,97,110)"
            />
            <FlatList 
                data={rentOffers}
                extraData={rentOffers}
                renderItem={({item}) => (
                    <RentOffer rentOffer={item}/>
                )}
                keyExtractor={ item => item.id}
                contentContainerStyle={{ alignItems: 'center' }}
                style={styles.rentOffersContainer}
                ItemSeparatorComponent={({}) => (
                    <View style={styles.separatorRentOffer}>
                        <View style={styles.borderBottomLineRentOffer}></View>
                    </View>
                )}
            />
        </View>
    )
}

export default RentOffers
