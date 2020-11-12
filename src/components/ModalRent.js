import React, { useContext } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableNativeFeedback } from 'react-native'
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

import { appContext } from '../context/Provider'
import * as Navigation from '../navigators/Navigation'

const ModalRent = () => {

    const context = useContext(appContext)

    const closeModal = () => context.dispatchShowRentMenu({ type: 'SET', value: false })

    const gotoRent = () => {
        closeModal()
        Navigation.navigate('Rent')
    }

    const gotoDemand = () => {
        closeModal()
        Navigation.navigate('Demand')
    }
    
    return (
        <Modal
            isVisible={context.showRentMenu}
            onBackButtonPress={closeModal}
            onBackdropPress={closeModal}
            style={styles.modal}
            backdropOpacity={0.5}
        >
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Add</Text>
                    <TouchableNativeFeedback onPress={closeModal}>
                        <Icon name="close" color="black"  size={30}/>
                    </TouchableNativeFeedback>
                </View>
                <TouchableNativeFeedback onPress={gotoRent}>
                    <View style={styles.btn}>
                        <View style={styles.iconContainer}>
                            <Icon name="add" size={30} color="black"/>
                        </View>
                        <Text style={styles.btnText}>Rent</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={gotoDemand}>
                    <View style={styles.btn}>
                        <View style={styles.iconContainer}>
                            <Icon name="add" size={30} color="black"/>
                        </View>
                        <Text style={styles.btnText}>Demand</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </Modal>
    )
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer:{
        width,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        height: height * 0.27,
        paddingVertical: 20
    },
    modal:{
        margin: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    btn:{
        width,
        height: height * 0.06,
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        paddingLeft: width * 0.05
    },
    btnText:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 20,
        color: 'black',
        marginLeft: 10
    },
    titleContainer:{
        width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.05,
        marginBottom: height * 0.03
    },
    title:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 25
    },
    iconContainer:{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: 'rgb(240,240,240)',
        paddingLeft: 3
    }
})

export default ModalRent
