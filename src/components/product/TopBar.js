import React, { useState } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1  from 'react-native-vector-icons/Entypo'
import Share from 'react-native-share'

import ImageCarousel from '../home/ImageCarousel'
import styles from '../../styles/Product'

const TopBar = ({ navigation, product }) => {

    const [like, setLike] = useState(false)

    const goBack = () => navigation.goBack()

    const shareProduct = () => {
        Share.open({ url: product.url, message: 'Look this product from Mandarent!' })
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
    }

    const likeProduct = () => { 
        setLike(!like)
    }

    return (
        <View style={styles.topBar}>
            <View style={styles.topBarButtonsContainer}>
                <TouchableWithoutFeedback onPress={goBack}>
                    <View style={styles.topBarIconContainer}>
                        <Icon name="arrowleft" color="black" size={25}/>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.topBarButtonsRightContainer}>
                    <TouchableWithoutFeedback onPress={shareProduct}>
                        <View style={styles.topBarIconContainer}>
                            <Icon1 name="share" color="black" size={25}/>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={likeProduct}>
                        <View style={{...styles.topBarIconContainer, marginLeft: 10}}>
                        {!like ? (
                            <Icon name="hearto" color="black" size={25}/>
                        ):(
                            <Icon name="heart" color="red" size={25}/>
                        )}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            {product && JSON.stringify(product) !== "{}" && (
                <View style={styles.productCarouselContainer}>
                    <ImageCarousel 
                        images={product.images}
                        doubleTap={() => {}}
                        carouselStyle={styles.productCarousel}
                        indicatorStyle={styles.productCarouselIndicatorContainer}
                    />
                </View>
            )}
        </View>
    )
}

export default TopBar
