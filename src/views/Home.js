import React from 'react'
import { View, ScrollView } from 'react-native'

import styles from '../styles/Home'
import Navbar from '../components/Navbar'
import Shadow from '../components/Shadow'
import Categories from '../components/home/Categories'
import Recomendations from '../components/home/Recommendations'
import Trends from '../components/home/Trends'
import SearchInput from '../components/home/SearchInput'

const Home = ({ navigation }) => {

    const gotoCategory = (category) => navigation.navigate('Category', { categoryName: category })

    return (
        <View style={styles.mainContainer}> 
            <Navbar navigation={navigation}/>
            <ScrollView style={styles.flex1} contentContainerStyle={{...styles.containerCentered, paddingBottom: 20}}>
                <Shadow marginTop>
                    <SearchInput />
                </Shadow>
                <Categories gotoCategory={gotoCategory}/>
                <Recomendations navigation={navigation}/>
                <Trends navigation={navigation}/>
            </ScrollView>
        </View>
    )
}

export default Home
