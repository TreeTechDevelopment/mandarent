import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator'
import LoginNavigator from './LoginNavigator'
import Product from '../views/Product'
import Rent from '../views/Rent'
import SettingsNavigator from './SettingsNavigator'

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            {true ? (
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }}/>
                    <Stack.Screen name="Product" component={Product} options={{ headerShown: false }}/>
                    <Stack.Screen name="RentProduct" component={Rent} options={{ headerShown: false }}/>
                    <Stack.Screen name="Settings" component={SettingsNavigator} options={{ headerShown: false }}/>
                </Stack.Navigator>
            ): (
                <LoginNavigator />
            )}
        </NavigationContainer>
    )
}

export default Navigator
