import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';
import Messages from "../screens/Messages";
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import VectorImage from 'react-native-vector-image';

const Tab = createMaterialTopTabNavigator();

const BaseNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarIndicator: () => <></>,
            }}>
            <Tab.Screen name="Profile"
                        component={Profile}
                        options={{
                            tabBarIcon: ({focused}) =>
                                focused ? (
                                    <VectorImage source={require('../assets/Icons/profileFocused.svg')}/>
                                ) : (
                                    <VectorImage source={require('../assets/Icons/profile.svg')}/>
                                )
                        }}
            />
            <Tab.Screen name="Feed"
                        component={Feed}
                        options={{
                            tabBarIcon: ({focused}) =>
                                focused ? (
                                    <VectorImage source={require('../assets/Icons/feedFocused.svg')}/>
                                ) : (
                                    <VectorImage source={require('../assets/Icons/feed.svg')}/>
                                )
                        }}
            />
            <Tab.Screen name="Messages"
                        component={Messages}
                        options={{
                            tabBarIcon: ({focused}) =>
                                focused ? (
                                    <VectorImage source={require('../assets/Icons/messageFocused.svg')}/>
                                ) : (
                                    <VectorImage source={require('../assets/Icons/message.svg')}/>
                                )
                        }}/>
        </Tab.Navigator>
    );
}

export default BaseNavigation;