import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from "../screens/Profile";
import VectorImage from 'react-native-vector-image';
import MessagesNavigation from "./MessagesNavigation";
import {getFocusedRouteNameFromRoute} from "@react-navigation/core";
import FeedNavigation from "./FeedNavigation";

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
                        options={({ route }) => ({
                            tabBarIcon: ({focused}) =>
                                focused ? (
                                    <VectorImage source={require('../assets/Icons/profileFocused.svg')}/>
                                ) : (
                                    <VectorImage source={require('../assets/Icons/profile.svg')}/>
                                ),

                        })}/>

            <Tab.Screen name="Feed"
                        component={FeedNavigation}
                        options={({ route }) => ({
                            tabBarIcon: ({focused}) =>
                                focused ? (
                                    <VectorImage source={require('../assets/Icons/feedFocused.svg')}/>
                                ) : (
                                    <VectorImage source={require('../assets/Icons/feed.svg')}/>
                                )
                        })}/>

            <Tab.Screen name="Messages"
                        component={MessagesNavigation}
                        options={({ route }) => ({
                            tabBarIcon: ({focused}) =>
                                focused ? (
                                    <VectorImage source={require('../assets/Icons/messageFocused.svg')}/>
                                ) : (
                                    <VectorImage source={require('../assets/Icons/message.svg')}/>
                                )
                        })}/>
        </Tab.Navigator>
    );
}

export default BaseNavigation;