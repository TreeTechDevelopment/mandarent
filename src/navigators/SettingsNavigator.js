import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../views/Settings'
import Language from '../views/Language'
import ChangePassword from '../views/ChangePassword'

const Stack = createStackNavigator();

const SettingsNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Settings">
            <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
            <Stack.Screen name="Language" component={Language} options={{ headerShown: false }}/>
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default SettingsNavigator
