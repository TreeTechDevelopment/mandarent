import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'

import LenderInfo from '../components/lender/LenderInfo'
import Reviews from '../components/lender/Reviews'
import Listings from '../components/lender/Listings'
import styles from '../styles/Lender'

const Lender = ({ navigation, route }) => { 

    const [lender, setLender] = useState({})

    const gotoReviews = reviews => navigation.navigate('LenderReviews' , { reviews })

    useEffect(() => {
        let lender = route.params?.lender
        if(lender){ setLender(lender) }
    }, [route.params]) 

    return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.scrollView} contentContainerStyle={{ alignItems: 'center' }}>
                {JSON.stringify(lender) !== "{}" && (
                    <>
                    <LenderInfo lender={lender}/>
                    <Reviews 
                        reviews={lender.reviews}
                        gotoReviews={gotoReviews}
                    />
                    <Listings listings={lender.listings}/>
                    </>
                )}
            </ScrollView>
        </View>
    )
}

export default Lender
