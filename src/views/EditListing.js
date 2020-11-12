import React, { useState, useEffect }  from 'react'
import { View, Text, ScrollView } from 'react-native'

import Form from '../components/editListing/Form'
import Navbar from '../components/settings/Navbar'
import styles from '../styles/MyItems'

const EditListing = ({ navigation, route }) => {

    const [item, setItem] = useState({})

    const goBack = () => navigation.goBack()
    
    useEffect(() => {
        let item = route.params?.item
        if(item){ setItem(item) }
    }, [route.params])

    return (
        <View style={styles.mainContainer}>
            <Navbar 
                goBack={goBack}
                text="Edit Item"
                textColor="rgb(47,47,47)"
                colorArrow="rgb(229,97,110)"
            />
            <ScrollView style={styles.scrollView}>
                <Form item={item}/>
            </ScrollView>
        </View>
    )
}

export default EditListing
