import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from '../../styles/Home'

const SearchInput = () => {

    const [text, setText] = useState('')

    const handleInput = e => {
        setText(e.nativeEvent.text)
    }

    return (
        <View style={styles.searchInputContainer}>
            <Icon name="search" size={20} color="gray" />
            <TextInput 
                onChange={handleInput}
                style={styles.searchInput}
                placeholder="What do you need?"
                value={text}
            />
        </View>
    )
}

export default SearchInput
