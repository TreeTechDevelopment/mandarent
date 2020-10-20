import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../views/Home';
import CustomDrawerNavigator from './CustomDrawerNavigator'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerNavigator {...props}/>}>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
