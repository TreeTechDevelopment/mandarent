import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from '../../styles/Messages'

const SearchChat = () => {

    const [search, setSearch] = useState('')

    const handleInput = e => setSearch(e.nativeEvent.text)

    return (
        <View style={styles.searchContainer}>
            <Icon name="search" size={20} color="rgb(150,150,150)" />
            <TextInput 
                onChange={handleInput}
                style={styles.searchInput}
                placeholder="Search Name"
                value={search}
            />
        </View>
    )
}

export default SearchChat
