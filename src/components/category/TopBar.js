import React, { useState } from 'react'
import { View, Text, TouchableNativeFeedback, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from '../../styles/Category'
import stylesHome from '../../styles/Home'

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

const TopBar = ({ goBack, categoryName, children }) => {

    const [search, setSearch] = useState('')

    const handleSearch = e => setSearch(e.nativeEvent.text)

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

    const returnCategoryName = (categoryName) => {
        switch(categoryName){
            case "technology": return "Electronics"
            case "board-games": return "Board Games"
            case "books": return "Books"
            case "drawing": return "Hobbies"
            case "drone": return "Drones"
            case "fitness": return "Fitness"
            case "games": return "Video Games/PS"
            case "home": return "Garden"
            case "music": return "Music"
            case "photo": return "Camera"
            case "scooter": return "Scooter"
            case "tools": return "Tools"
            case "travel": return "Travel"
            case "bicycle": return "Bicylcles"
        }
    }

    return (
        <View style={styles.topBarContainer}>
            <View style={styles.topBarRow}>
                <View style={styles.flex1}>
                    <TouchableNativeFeedback onPress={goBack}>
                        <Icon name="chevron-back" color="rgb(226,109,55)" size={35}/>
                    </TouchableNativeFeedback>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <View style={styles.inputSearchContainer}>
                        <Icon name="search" color="rgb(76,76,76)" size={20}/>
                        <TextInput 
                            value={search}
                            onChange={handleSearch}
                            style={styles.inputSearch}
                        />
                    </View>
                </View>
                <View style={styles.flex1}></View>
            </View>
            <View style={styles.topBarRow}>
                <Image 
                    source={returnCategoryIcon(categoryName)}
                    style={stylesHome.categoryIcon}
                    resizeMode="contain"
                />
                <Text style={styles.titleCategory}>{returnCategoryName(categoryName)}</Text>
            </View>
            {children}
        </View>
    )
}

export default TopBar
