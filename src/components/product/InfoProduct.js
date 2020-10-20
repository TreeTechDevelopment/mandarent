import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import Reviews from './Reviews'
import SimilarListings from './SimilarListings'
import Map from './Map'
import styles from '../../styles/Product'
import stylesHome from '../../styles/Home'

const InfoProduct = ({ product, children }) => {

    const [message, setMessage] = useState('')

    const handleMessage = e => setMessage(e.nativeEvent.text)

    return (
        <>
            <View style={styles.infoProductContainer}>
                <Text style={styles.titleProduct}>{ product.name }</Text>
                <View style={styles.starsLocationProductContainer}>
                    <View style={stylesHome.trendStarsContainer}>
                        <Icon name="star" size={20} color="rgb(249,69,44)" style={{ marginRight: 5 }}/>
                        <Text style={stylesHome.trendTextLight}>{product.stars}</Text>
                    </View>
                    <Text style={stylesHome.trendTextLight}>{product.location.name}</Text>
                </View>
                <View style={styles.inputMessageContainer}>
                    <TextInput 
                        onChange={handleMessage}
                        value={message}
                        style={styles.inputMessage}
                        placeholder="Message to Lender"
                    />
                </View>
            </View>
            <Map product={product}/>
            <View style={styles.infoProductContainer}>
                <Text style={{...styles.titleProduct, marginTop: 20}}>Description</Text>
                <View style={styles.infoProductDescriptionContainer}>
                    <Text style={styles.infoProductDescription}>{product.description}</Text>
                </View>
            </View>
            <Reviews reviews={product.reviews}/>
            <SimilarListings />
        </>
    )
}

export default InfoProduct
