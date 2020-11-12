import React from 'react'
import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import Share from 'react-native-share'

import styles from '../../styles/MyItems'

const MyItem = ({ item, deleteItem, editItem }) => {

    const removeItem = () => deleteItem(item)

    const gotoEditItem = () => editItem(item)

    const shareProduct = () => {
        Share.open({ url: item.url, message: 'Look this product from Mandarent!' })
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
    }

    return (
        <View style={styles.item}>
            <Image 
                source={item.images[0]}
                style={styles.itemImage}
            />
            <View style={styles.infoItemContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <View style={styles.itemPriceContainer}>
                    <View style={styles.itemPrice}>
                        <Text style={styles.itemName}>${item.price.hourly} / </Text>
                        <Text style={styles.itemPriceLabel}>hourly</Text>
                    </View>
                    <View style={{...styles.itemPrice, marginRight: 20}}>
                        <Text style={styles.itemName}>${item.price.daily} / </Text>
                        <Text style={styles.itemPriceLabel}>daily</Text>
                    </View>
                </View>
                <View style={styles.itemBtnContainer}>
                    <TouchableNativeFeedback onPress={removeItem}>
                        <Text style={styles.itemTextBtn}>Delete</Text>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={gotoEditItem}>
                        <Text style={styles.itemTextBtn}>Edit</Text>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={shareProduct}>
                        <Text style={styles.itemTextBtn}>Share</Text>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )
}

export default MyItem
