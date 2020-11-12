import React, { useState, useEffect } from 'react'
import { View, Text, TextInput,TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import CheckBox from '@react-native-community/checkbox';

import styles from '../../styles/Rent'

const FormStep1 = ({ next, prevItemName, prevDescription, prevInstructions }) => {

    const [name, setItemName] = useState('')
    const [description, setDescription] = useState('')
    const [instructions, setInstructions] = useState('')
    const [disableInstructions, setDisableInstructions] = useState(false)

    const handleInputItemName = e => setItemName(e.nativeEvent.text)
    const handleInputDescription = e => setDescription(e.nativeEvent.text)
    const handleInputInstructions = e => setInstructions(e.nativeEvent.text)

    const handleCheckbox = () => {
        setDisableInstructions(!disableInstructions)
        if(!disableInstructions){ setInstructions('') }
    }

    const handleBtn = () => {
        /* if(itemName !== "" && description !== "" && (disableInstructions || (!disableInstructions && instructions !== "") )){
            next(itemName, description, instructions)
        } */
        next({name, description, instructions})
    }

    useEffect(() => {
        if(prevItemName !== ""){ setItemName(prevItemName) }
        if(prevDescription !== ""){ setDescription(prevDescription) }
        if(prevInstructions !== "" && prevInstructions){ 
            setItemName(prevItemName) 
            setDisableInstructions(false)
            setInstructions(prevInstructions)
        }else{
            if(prevItemName !== ""){ setDisableInstructions(true) }
        }
    }, [prevItemName, prevDescription, prevInstructions])

    return (
        <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
            <View style={styles.form}>
                <Text style={styles.title}>Step 1</Text>
                <Text style={styles.label}>What is the item?</Text>
                <TextInput 
                    value={name}
                    style={styles.input}
                    onChange={handleInputItemName}
                    placeholder="Item Name"
                />
                <Text style={styles.label}>Description</Text>
                <TextInput 
                    value={description}
                    style={styles.textArea}
                    onChange={handleInputDescription}
                    placeholder="Add a description of your item"
                    multiline
                />
                <Text style={styles.label}>Instructions for use</Text>
                <TextInput 
                    value={instructions}
                    onChange={handleInputInstructions}
                    placeholder="Add instructions on how to use your items"
                    style={ disableInstructions ? styles.textAreaDisable : styles.textArea}
                    multiline
                    editable={!disableInstructions}
                />
                <TouchableWithoutFeedback onPress={handleCheckbox}>
                    <View style={styles.checkBoxContainer} >
                        <CheckBox
                            value={disableInstructions}
                            tintColors={{ true: 'rgb(26,26,26)', false: 'black' }}
                            onChange={handleCheckbox}
                        />
                        <Text style={styles.checkBoxLabel}>No special instructions</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.btnNextContainer}>
                    <TouchableNativeFeedback onPress={handleBtn}>
                        <View style={styles.btnNext}>
                            <Text style={styles.btnNextText}>Next</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default FormStep1
