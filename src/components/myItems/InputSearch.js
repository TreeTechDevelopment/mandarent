import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from '../../styles/MyItems'

const InputSearch = () => {

    const [search, setSearch] = useState('')

    const handleInput = e => setSearch(e.nativeEvent.text)

    return (
        <View style={styles.inputSearchContainer}>
            <View style={styles.inputSearch}>
                <Icon name="search" color="rgb(76,76,76)" size={20}/>
                <TextInput 
                    onChange={handleInput}
                    value={search}
                    style={styles.input}
                    placeholder="Search my items"
                />
            </View>
        </View>
    )
}

export default InputSearch
