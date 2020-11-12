import React from 'react'
import { View, Text, FlatList, TouchableNativeFeedback, Image } from 'react-native'

import styles from '../../styles/Home'

const bicycleIcon = require('../../../assets/images/bicycle.png')
const boardGamesIcon = require('../../../assets/images/board-games.png')
const booksIcon = require('../../../assets/images/books2.png')
const drawingIcon = require('../../../assets/images/drawing.png')
const droneIcon = require('../../../assets/images/drone.png')
const fitnessIcon = require('../../../assets/images/fitness.png')
const gamesIcon = require('../../../assets/images/game5.png')
const homeIcon = require('../../../assets/images/home.png')
const musicIcon = require('../../../assets/images/music.png')
const photoIcon = require('../../../assets/images/photo.png')
const scooterIcon = require('../../../assets/images/scooter.png')
const technologyIcon = require('../../../assets/images/technology.png')
const toolsIcon = require('../../../assets/images/tools.png')
const travelIcon = require('../../../assets/images/travel.png')



const Categories = ({ gotoCategory }) => {

    const categories = ["technology", "board-games", "books", "drawing", "drone", "fitness", "games", "home", "music", 
                    "photo", "scooter", "tools", "travel", "bicycle"]

    const returnCategoryIcon = (categoryName) => {
        switch(categoryName){
            case "technology": return technologyIcon
            case "board-games": return boardGamesIcon
            case "books": return booksIcon
            case "drawing": return drawingIcon
            case "drone": return droneIcon
            case "fitness": return fitnessIcon
            case "games": return gamesIcon
            case "home": return homeIcon
            case "music": return musicIcon
            case "photo": return photoIcon
            case "scooter": return scooterIcon
            case "tools": return toolsIcon
            case "travel": return travelIcon
            case "bicycle": return bicycleIcon
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}>Categories</Text>
            <FlatList
                horizontal
                data={categories}
                renderItem={({ item, index }) => (
                    <TouchableNativeFeedback onPress={() => { gotoCategory(item) }}>
                        <Image 
                            source={returnCategoryIcon(item)}
                            style={index === 0 ? {...styles.categoryIcon, marginLeft: 0} : styles.categoryIcon}
                            resizeMode="contain"
                        />
                    </TouchableNativeFeedback>
                )}
                keyExtractor={item => item}
                style={styles.categoriesIconList}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Categories
