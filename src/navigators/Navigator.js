import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator'
import LoginNavigator from './LoginNavigator'
import Product from '../views/Product'
import Rent from '../views/Rent'
import RentOffers from '../views/RentOffers'
import RentOperations from '../views/RentOperations'
import MyItems from '../views/MyItems'
import EditListing from '../views/EditListing'
import Chat from '../views/Chat'
import Lender from '../views/Lender'
import UserInformation from '../views/UserInformation'
import LenderReviews from '../views/LenderReviews'
import Reserve from '../views/Reserve'
import Favorites from '../views/Favorites'
import Demand from '../views/Demand'
import DemandedItem from '../views/DemandedItem'
import SuggestItem from '../views/SuggestItem'
import SettingsNavigator from './SettingsNavigator'

import { navigationRef } from './Navigation';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            {true ? (
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }}/>
                    <Stack.Screen name="Product" component={Product} options={{ headerShown: false }}/>
                    <Stack.Screen name="RentProduct" component={Rent} options={{ headerShown: false }}/>
                    <Stack.Screen name="Settings" component={SettingsNavigator} options={{ headerShown: false }}/>
                    <Stack.Screen name="RentOffers" component={RentOffers} options={{ headerShown: false }}/>
                    <Stack.Screen name="RentOperations" component={RentOperations} options={{ headerShown: false }}/>
                    <Stack.Screen name="MyItems" component={MyItems} options={{ headerShown: false }}/>
                    <Stack.Screen name="EditListing" component={EditListing} options={{ headerShown: false }}/>
                    <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }}/>
                    <Stack.Screen name="Lender" component={Lender} options={{ headerShown: false }}/>
                    <Stack.Screen name="PersonalInformation" component={UserInformation} options={{ headerShown: false }}/>
                    <Stack.Screen name="LenderReviews" component={LenderReviews} options={{ headerShown: false }}/>
                    <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }}/>
                    <Stack.Screen name="Reserve" component={Reserve} options={{ headerShown: false }}/>
                    <Stack.Screen name="Demand" component={Demand} options={{ headerShown: false }}/>
                    <Stack.Screen name="DemandedItem" component={DemandedItem} options={{ headerShown: false }}/>
                    <Stack.Screen name="SuggestItem" component={SuggestItem} options={{ headerShown: false }}/>
                </Stack.Navigator>
            ): (
                <LoginNavigator />
            )}
        </NavigationContainer>
    )
}

export default Navigator
