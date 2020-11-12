import React, { useContext } from 'react'
import { View, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/FontAwesome5'

import { appContext } from '../context/Provider'

const CustomBottomTab = ({ state, descriptors, navigation }) => {

    const context = useContext(appContext)

    const { height } = Dimensions.get('window') 

    return(
        <View style={{ flexDirection: 'row', backgroundColor: 'white', height: height * 0.07, alignItems: 'flex-end'}}>
            {state.routes.map((route, index) => {

                const { options } = descriptors[route.key];

                const label = options.tabBarLabel !== undefined ? options.tabBarLabel
                    : options.title !== undefined ? options.title : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });
                    if (!isFocused && !event.defaultPrevented) { 
                        if(route.name === "Rent"){ context.dispatchShowRentMenu({ type: 'SET', value: !context.showRentMenu })  }
                        else{ navigation.navigate(route.name)  }
                    }
                };

                let color = isFocused ? 'rgb(0,119,247)' : 'rgb(143,142,147)'
                let size = 20

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={{ flex: 1 }}
                        key={Math.random().toString()}
                    >
                        <View style={label === "Rent" ? { 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            flex: 1,
                            backgroundColor: 'rgb(246,246,246)',
                         } : 
                            { alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'rgb(246,246,246)' }}>
                        {
                            label === "Home" ? <Icon name="home" size={size} color={color} /> :
                            label === "ShopCart" ? <Icon1 name="shopping-cart" size={size} color={color}/> :
                            label === "Rent" ? (
                                <View style={{ 
                                    position: 'relative', 
                                    top: -15, 
                                    borderColor: "rgb(229,58,40)", 
                                    borderWidth: 5, 
                                    width: 50, 
                                    height: 50,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 25
                                }}>
                                    <Icon name="plus" size={size} color="rgb(229,58,40)"/>
                                </View>
                            ) :
                            label === "Messages" ? <Icon name="comments" size={size} color={color}/> :
                            <Icon name="user-circle" size={size} color={color}/>
                        }
                        </View>
                    </TouchableOpacity>
                )
            })}
            </View>
    )
}

export default CustomBottomTab
