import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from "../screens/Profile";
import VectorImage from 'react-native-vector-image';
import MessagesList from "../screens/Messages";
import Feed from "../screens/Feed";

const Tab = createMaterialTopTabNavigator();

const BaseNavigation = () => {


    return (
        <Tab.Navigator
            initialRouteName="FeedList"
            screenOptions={{
                tabBarStyle: { 
                    elevation: 0,
                    shadowOpacity: 0,
                    },
                tabBarIconStyle:{
                    justifyContent:"center",
                    alignItems:"center"
                    },
                tabBarShowLabel: false,
                tabBarIndicator: () => <></>,
            }}>
            <Tab.Screen name="Profile"
                        component={Profile}
                        options={({  }) => ({
                            tabBarIcon: ({focused}) =>
                                focused ? (
                                    <VectorImage source={require('../assets/Icons/profileFocused.svg')}/>
                                ) : (
                                    <VectorImage source={require('../assets/Icons/profile.svg')}/>
                                ),

                        })}/>

            <Tab.Screen name="FeedList"
                        component={Feed}
                        options={({  }) => ({
                            tabBarIcon: ({focused}) =>
                                focused ? (
                                    <VectorImage source={require('../assets/Icons/feedFocused.svg')}/>
                                ) : (
                                    <VectorImage source={require('../assets/Icons/feed.svg')}/>
                                )
                        })}/>

            <Tab.Screen name="MessagesList"
                        component={MessagesList}
                        options={({  }) => ({
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