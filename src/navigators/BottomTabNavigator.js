import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DrawerNavigator from './DrawerNavigator'
import Favorites from '../views/Favorites';
import Rent from '../views/Rent';
import Messages from '../views/Messages';
import ProfileNavigator from './ProfileNavigator';
import CustomBottomTab from './CustomBottomTab'

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                tabStyle: { backgroundColor: 'white' }
            }}
            tabBar={props => <CustomBottomTab {...props} />}
        >
            <Tab.Screen name="Home"  component={DrawerNavigator} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Rent" component={Rent}/>
            <Tab.Screen name="Messages" component={Messages} />
            <Tab.Screen name="Profile" component={ProfileNavigator} />
        </Tab.Navigator>
    );
  }