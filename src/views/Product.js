import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'

import TopBar from '../components/product/TopBar'
import InfoProduct from '../components/product/InfoProduct'
import Map from '../components/product/Map'
import BottomTab from '../components/product/BottomTab'
import styles from '../styles/Product'

const Product = ({ route, navigation }) => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        let product = route.params?.product
        setProduct(product)
    }, [route.params])

    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <TopBar 
                    navigation={navigation}
                    product={product}
                />
                {product && JSON.stringify(product) !== "{}" && <InfoProduct product={product} />}
            </ScrollView>
            {product && JSON.stringify(product) !== "{}" && <BottomTab product={product}/> }
        </View>
    )
}

export default Product
