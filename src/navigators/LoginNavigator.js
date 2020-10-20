import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'

const Stack = createStackNavigator();

const LoginNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="SignIn" >
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default LoginNavigator
