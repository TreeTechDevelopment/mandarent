import React, { useState } from 'react'
import { View, Text } from 'react-native' 

import Form from '../components/userInformation/Form'
import Navbar from '../components/settings/Navbar'
import styles from '../styles/UserInformation'

import { userTest } from '../testing/test'

const InformationUser = ({ navigation }) => {

    const [user, setUser] = useState(userTest)

    const goBack = () => navigation.goBack()

    return (
        <View style={styles.mainContainer}>
            <Navbar 
                goBack={goBack}
                text="Personal Information"
                woShadow
            />
            <Form user={user}/>
        </View>
    )
}

export default InformationUser
