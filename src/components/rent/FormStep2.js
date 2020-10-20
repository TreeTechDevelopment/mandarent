import React, { useState, useEffect } from 'react'
import { View, Text, TouchableWithoutFeedback, TouchableNativeFeedback, Image, ScrollView } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'
import {Picker} from '@react-native-community/picker';

import styles from '../../styles/Rent'

const FormStep2 = ({ next, prevImages, prevCategory1, prevCategory2 }) => {

    const categories = ['Camera', 'Drones', 'Video Games/PS', 'Travel', 'Board Games', 'Tools', 'Books', 'Hobbies', 'Garden',
                        'Electronics', 'Bicycles', 'Scooter', 'Fitness', 'Music']

    const [images, setImages] = useState([])
    const [category1, setCategory1] = useState('Camera')
    const [category2, setCategory2] = useState('Drones')

    const uploadImages = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(newImages => {
            setImages([...images, ...newImages])
        }).catch( err => console.log(err))
    }

    const handleCategory1 = (value) => setCategory1(value)
    const handleCategory2 = (value) => {
        if(value !== category1){
            setCategory2(value)
        }
    }

    const handleBtn = () => {
        /* if(images.length !== 0){
            next({images, category1, category2})
        } */
        next({images, category1, category2})
    }

    const deleteImage = imageToDelete => {
        let newImages = [...images]
        let idx = newImages.find( image => image.path == imageToDelete.path )
        newImages.splice(idx,1)
        setImages(newImages)
    }

    useEffect(() => {
        if(prevImages.length !== 0){ setImages(images) }
        if(prevCategory1 !== ""){ setCategory1(prevCategory1) }
        if(prevCategory2 !== ""){ setCategory2(prevCategory2) }
    }, [])

    return (
        <View style={styles.formStep2}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Step 2</Text>
                <Text style={styles.label}>Add photos</Text>
                {images.length === 0 ? (
                    <TouchableWithoutFeedback onPress={uploadImages}>
                        <View style={styles.btnAddPhotos}>
                            <Icon name="image" color="black" size={40}/>
                            <Text style={styles.btnAddPhotosText}>(Click to upload images)</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ):(
                    <View style={styles.imageRentContainer}>
                        <TouchableWithoutFeedback onPress={uploadImages}>
                            <View style={styles.btnAddImagesContainer}>
                                <Icon1 name="add" color="rgb(95,110,239)" size={25}/>
                                <Text style={styles.btnAddImagesText}>Add photos</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={styles.imagesRentContainer}>
                            {images.map( image => (
                                <View key={ image.path + Math.random().toString()} style={styles.imageContainer}>
                                    <Image 
                                        source={{ uri: image.path }}
                                        style={styles.imageRent} 
                                    />
                                    <TouchableWithoutFeedback onPress={() => deleteImage(image)}>
                                        <View style={styles.iconDeleteImageRentContainer}>
                                            <Icon1 name="close" color="black" size={20}/>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            ) )}
                        </View>
                    </View>
                )}
                
                <Text style={styles.label}>Pick a category</Text>
                <Text style={styles.pickerLabel}>Category 1</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={category1}
                        style={styles.picker}
                        onValueChange={handleCategory1}
                        prompt="Category 1"
                    >
                        {categories.map( category => (
                            <Picker.Item label={category} value={category} key={category} />
                        ))}
                    </Picker>
                </View>
                <Text style={styles.pickerLabel}>Category 2</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={category2}
                        style={styles.picker}
                        onValueChange={handleCategory2}
                        prompt="Category 2"
                    >
                        {categories.map( category => (
                            <Picker.Item label={category} value={category} key={category} />
                        ))}
                    </Picker>
                </View>
                <View style={{...styles.btnNextContainer, position: 'relative'}}>
                    <TouchableNativeFeedback onPress={handleBtn}>
                        <View style={styles.btnNext}>
                            <Text style={styles.btnNextText}>Next</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </ScrollView>
        </View>
    )
}

export default FormStep2
