import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../views/Home';
import Category from '../views/Category';
import Demanded from '../views/Demanded';
import CustomDrawerNavigator from './CustomDrawerNavigator'

const Drawer = createDrawerNavigator(); 
const Stack = createStackNavigator();

const Navigator = () => {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="Category" component={Category} options={{ headerShown: false }}/>
            <Stack.Screen name="Demanded" component={Demanded} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerNavigator {...props}/>}>
            <Drawer.Screen name="Home" component={Navigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
