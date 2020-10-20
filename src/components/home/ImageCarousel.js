import React, { useState } from 'react'
import { View, Text, ScrollView, Image, TouchableWithoutFeedback} from 'react-native'

import styles from '../../styles/Home'

const ImageCarousel = ({ images, onClick, carouselStyle, indicatorStyle }) => { 

    const [imgIndex, setImgIndex] = useState(0)

    const scrollNextImage = e => {
        let currentIndex = Math.ceil(e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width)
        if(imgIndex !== currentIndex){ setImgIndex(currentIndex) }
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={scrollNextImage}
                >
                    {images.map( image => (
                        <Image 
                            source={image}
                            style={carouselStyle}
                            resizeMethod="resize"
                            key={Math.random().toString()}
                        />
                    ))}
                </ScrollView>
                <View style={indicatorStyle}>
                    {images.map( (image,idx) => (
                        <Text 
                            key={Math.random().toString()}
                            style={ idx === imgIndex ? styles.trendCarouselIndicatorActive : styles.trendCarouselIndicator }
                        >●</Text> 
                    ))}
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

export default ImageCarousel
