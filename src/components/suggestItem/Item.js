import React, { useState } from 'react'
import { View, Text, Image, TouchableNativeFeedback } from 'react-native'

import styles from '../../styles/SuggestItem'

const Item = ({ item }) => {

    const [suggested, setSuggested] = useState(false)

    const suggest = () => setSuggested(true)

    return (
        <View style={styles.item}>
            <Image 
                source={item.images[0]}
                style={styles.itemImage}
            />
            <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <View style={styles.priceItemContainer}>
                    <View>
                        <View style={styles.priceItemContainer}>
                            <Text style={styles.priceItemText}>${item.price.hourly}</Text>
                            <Text style={styles.priceItemLabel}> / hourly</Text>
                        </View>
                        <View style={styles.priceItemContainer}>
                            <Text style={styles.priceItemText}>${item.price.daily}</Text>
                            <Text style={styles.priceItemLabel}> / daily</Text>
                        </View>
                    </View>
                    <TouchableNativeFeedback onPress={suggest}>
                        <View style={ suggested ? {...styles.itemBtn, backgroundColor: 'rgb(114,187,82)'} : styles.itemBtn}>
                            <Text style={styles.itemBtnText}>{suggested ? 'Suggested' : 'Suggest'}</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View> 
        </View>
    )
}

export default Item
