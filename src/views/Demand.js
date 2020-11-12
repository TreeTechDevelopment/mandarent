import React from 'react'
import { View, Text } from 'react-native'

import TopBar from '../components/demand/TopBar'
import Form from '../components/demand/Form'
import styles from '../styles/Demand'

const Demand = ({ navigation }) => {

    const goBack = () => navigation.goBack()

    return (
        <View style={styles.mainContainer}>
            <TopBar goBack={goBack}/>
            <Form />
        </View>
    )
}

export default Demand
