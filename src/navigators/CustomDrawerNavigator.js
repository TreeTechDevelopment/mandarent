import React from 'react'
import { View, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

const bicycleIcon = require('../../assets/images/bicycle.png')
const boardGamesIcon = require('../../assets/images/board-games.png')
const booksIcon = require('../../assets/images/books2.png')
const drawingIcon = require('../../assets/images/drawing.png')
const droneIcon = require('../../assets/images/drone.png')
const fitnessIcon = require('../../assets/images/fitness.png')
const gamesIcon = require('../../assets/images/game5.png')
const homeIcon = require('../../assets/images/home.png')
const musicIcon = require('../../assets/images/music.png')
const photoIcon = require('../../assets/images/photo.png')
const scooterIcon = require('../../assets/images/scooter.png')
const technologyIcon = require('../../assets/images/technology.png') 
const toolsIcon = require('../../assets/images/tools.png')
const travelIcon = require('../../assets/images/travel.png')

const CustomDrawerNavigator = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <DrawerItem 
                    label="Categories"
                    icon={({ focused, color, size }) => <Icon color={color} size={size} name="times" />}
                    labelStyle={{
                        fontFamily: 'Quicksand_Bold',
                        marginLeft: 40,
                        fontSize: 20
                    }}
                    onPress={() => props.navigation.closeDrawer()}
                />
                <DrawerItem 
                    label="Camera"
                    icon={() => <Image  source={photoIcon} style={{ width: 40, height: 40 }}/>}
                    labelStyle={{
                        fontFamily: 'Quicksand_Bold',
                        fontSize: 17,
                        marginLeft: -15
                    }}
                    onPress={() => props.navigation.navigate('Category', { categoryName: "photo" })}
                />
                <DrawerItem 
                    label="Drones"
                    icon={() => <Image  source={droneIcon} style={{ width: 40, height: 40 }}/>}
                    labelStyle={{
                        fontFamily: 'Quicksand_Bold',
                        fontSize: 17,
                        marginLeft: -15
                    }}
                    onPress={() => props.navigation.navigate('Category', { categoryName: "drone" })}
                />
                <DrawerItem 
                    label="Video Games/PS"
                    icon={() => <Image  source={gamesIcon} style={{ width: 40, height: 40 }}/>}
                    labelStyle={{
                        fontFamily: 'Quicksand_Bold',
                        fontSize: 17,
                        marginLeft: -15
                    }}
                    onPress={() => props.navigation.navigate('Category', { categoryName: "games" })}
                />
                <DrawerItem 
                    label="Travel"
                    icon={() => <Image  source={travelIcon} style={{ width: 40, height: 40 }}/>}
                    labelStyle={{
                        fontFamily: 'Quicksand_Bold',
                        fontSize: 17,
                        marginLeft: -15
                    }}
                    onPress={() => props.navigation.navigate('Category', { categoryName: "travel" })}
                />
                <DrawerItem 
                    label="Board Games"
                    icon={() => <Image  source={boardGamesIcon} style={{ width: 40, height: 40 }}/>}
                    labelStyle={{
                        fontFamily: 'Quicksand_Bold',
                        fontSize: 17,
                        marginLeft: -15
                    }}
                    onPress={() => props.navigation.navigate('Category', { categoryName: "board-games" })}
                />
                <DrawerItem 
                    label="Tools"
                    icon={() => <Image  source={toolsIcon} style={{ width: 40, height: 40 }}/>}
                    labelStyle={{
                        fontFamily: 'Quicksand_Bold',
                        fontSize: 17,
                        marginLeft: -15
                    }}
                    onPress={() => props.navigation.navigate('Category', { categoryName: "tools" })}
                />
                <DrawerItem 
                    label="Books"
                    icon={() => <Image  source={booksIcon} style={{ width: 40, height: 40 }}/>}
                    labelStyle={{
                        fontFamily: 'Quicksand_Bold',
                        fontSize: 17,
                        marginLeft: -15
                    }}
                    onPress={() => props.navigation.navigate('Category', { categoryName: "books" })}
                />
                <DrawerItem 
                    label="Hobbies"
                    icon={() => <Image  source={drawingIcon} style={{ width: 40, height: 40 }}/>}
                    labelStyle={{
                        fontFamily: 'Quicksand_Bold',
                        fontSize: 17,
                        marginLeft: -15
                    }}
                    onPress={() => props.navigation.navigate('Category', { categoryName: "drawing" })}
                />
                <DrawerItem 
                    label="Garden"
                    icon={() => <Image  source={homeIcon} style={{ width: 40, height: 40 }}/>}
                    labelStyle={{
                        fontFamily: 'Quicksand_Bold',
                        fontSize: 17,
                        marginLeft: -15
                    }}
                    onPress={() => props.navigation.navigate('Category', { categoryName: "home" })}
                />
                <DrawerItem 
                    label="Electronics"
                    icon={() => <Image  source={technologyIcon} style={{ width: 40, height: 40 }}/>}
                    labelStyle={{
                        fontFamily: 'Quicksand_Bold',
                        fontSize: 17,
                        marginLeft: -15
                    }}
                    onPress={() => props.navigation.navigate('Category', { categoryName: "technology" })}
                />
                <DrawerItem 
                    label="Bicycles"
                    icon={() => <Image  source={bicycleIcon} style={{ width: 40, height: 40 }}/>}
                    labelStyle={{
                        fontFamily: 'Quicksand_Bold',
                        fontSize: 17,
                        marginLeft: -15
                    }}
                    onPress={() => props.navigation.navigate('Category', { categoryName: "bicycle" })}
                />
                <DrawerItem 
                    label="Scooter"
                    icon={() => <Image  source={scooterIcon} style={{ width: 40, height: 40 }}/>}
                    labelStyle={{
                        fontFamily: 'Quicksand_Bold',
                        fontSize: 17,
                        marginLeft: -15
                    }}
                    onPress={() => props.navigation.navigate('Category', { categoryName: "scooter" })}
                />
                <DrawerItem 
                    label="Fitness"
                    icon={() => <Image  source={fitnessIcon} style={{ width: 40, height: 40 }}/>}
                    labelStyle={{
                        fontFamily: 'Quicksand_Bold',
                        fontSize: 17,
                        marginLeft: -15
                    }}
                    onPress={() => props.navigation.navigate('Category', { categoryName: "fitness" })}
                />
                <DrawerItem 
                    label="Music"
                    icon={() => <Image  source={musicIcon} style={{ width: 40, height: 40 }}/>}
                    labelStyle={{
                        fontFamily: 'Quicksand_Bold',
                        fontSize: 17,
                        marginLeft: -15
                    }}
                    onPress={() => props.navigation.navigate('Category', { categoryName: "music" })}
                />
            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawerNavigator
