import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    shadow:{
        elevation: 5,
        position: 'relative',
        top: 5,
        borderColor: 'transparent',
        borderWidth: 1,
    },
})

const Shadow = ({ children, marginTop, marginHorizontal, borderRadius, first, marginBottomValue, 
                elevation, marginVertical, maxHeight, marginBottom }) => {

    const { width } = Dimensions.get('window')

    let style = {...styles.shadow}

    if(marginTop){ style = { ...style, marginTop: 20 } }
    if(marginVertical){ style = { ...style, marginVertical: 20 } }
    if(marginHorizontal){ style = { ...style, marginHorizontal: 20 } }
    if(borderRadius){ style = { ...style, borderRadius: 20 } }
    if(first){ style = { ...style, marginLeft: width * 0.1 } }
    if(elevation){ style = { ...style, elevation } }
    if(maxHeight){ style = { ...style, maxHeight: height * 0.25 } }
    if(marginBottom){ style = { ...style, marginBottom: 10 } }
    if(marginBottomValue){ style = { ...style, marginBottom: marginBottomValue } }

    return (
        <View style={style}>
            {children}
        </View>
    )
}

export default Shadow
