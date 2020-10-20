import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        width: width * 0.9
    },
    stepCompleted:{
        height: height * 0.01,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'rgb(95,110,239)',
        borderTopLeftRadius: height * 0.005,
        borderBottomLeftRadius: height * 0.005,
    },
    stepCompletedBordersRight: {
        borderTopRightRadius: height * 0.005,
        borderBottomRightRadius: height * 0.005
    },
    stepMissings: {
        height: height * 0.01,
        borderTopColor: 'black',
        borderRightColor: 'black',
        borderBottomColor: 'black',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopRightRadius: height * 0.005,
        borderBottomRightRadius: height * 0.005,
    }
})

const StepIndicator = ({ step }) => {

    let stepCompletedStyle = { ...styles.stepCompleted, width: step * ((width * 0.9) / 4) }

    if(step === 4){ stepCompletedStyle= {...stepCompletedStyle, ...styles.stepCompletedBordersRight} }

    return (
        <View style={styles.container}>
            <View style={stepCompletedStyle}></View>
            {step !== 4  && <View style={{ ...styles.stepMissings, width: (4-step) * ((width * 0.9) / 4) }}></View>}
        </View>
    )
}

export default StepIndicator
