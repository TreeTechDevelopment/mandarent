import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import TopBar from '../components/shopCart/TopBar'
import ShopCartItem from '../components/shopCart/ShopCartItem'
import styles from '../styles/ShopCart'

const CartShop = () => {

    const [productsCart, setProductsCart] = useState([])

    const getItems = async () => {
        try {
            const value = await AsyncStorage.getItem('@shop_cart')
            if(value){ return JSON.parse(value) }
            return value
        } catch(e) {
            console.log(e)
        }
    }

    const storeItems = async (value) => {
        try {
            await AsyncStorage.setItem('@shop_cart', JSON.stringify(value))
        } catch (e) {
            console.log(e)
        }
    }

    const deleteItem = itemID => {
        let newProdcustCart = [...productsCart]
        let idx = newProdcustCart.findIndex( item => item.id == itemID )
        newProdcustCart.splice(idx, 1)
        storeItems(newProdcustCart)
        setProductsCart(newProdcustCart)
    }

    useFocusEffect(
        React.useCallback(() => {
            const getItemsInShopCart = async () => {
                let items = await getItems()
                if(items){ setProductsCart(items) }
            }
            getItemsInShopCart()
        }, [])
    );

    return (
        <View style={styles.mainContainer}>
            <TopBar />
            <FlatList 
                data={productsCart}
                extraData={productsCart}
                renderItem={({ item, index }) => (
                    <ShopCartItem 
                        item={item}
                        lastItem={index === productsCart.length -1}
                        deleteItem={deleteItem}
                    />
                )}
                keyExtractor={item => item.id}
                style={styles.itemsContainer}
                contentContainerStyle={{ alignItems: 'center' }}
            />
        </View>
    )
}

export default CartShop
