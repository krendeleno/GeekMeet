import React from 'react'
import { Text } from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import TabIcon from '../TabIcon'
import EventList from '../EventList'

import {events} from '../../MockData/events'
import { globalStyles } from '../../styles/globalStyles'
    

const Tab = createMaterialTopTabNavigator();

const ProfileEventList = ({navigation}) => {

    const markedEvents = events.filter(item=> item.isMarked)
    const sendEvents = events.filter(item=> item.requestStatus=="sent")
    const acceptedEvents = events.filter(item=> item.requestStatus=="accepted")

    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: { 
                elevation: 0,
                shadowOpacity: 0,
                },
                
            tabBarShowLabel: false,
            tabBarIconStyle:{
                justifyContent:"center",
                width:65,
            },
            tabBarIndicator: () => <></>,
        }}>
            <Tab.Screen name="Bookmarked" 
                options={({ route }) => ({
                    tabBarIcon: ({focused}) =>
                        <TabIcon 
                            focused={focused} 
                            imageFocused={require('../../assets/Icons/whiteBookmark.svg')}
                            image ={require('../../assets/Icons/bookmarkFill.svg')}
                        />    
                })}
            >
                {()=>markedEvents ? <EventList events={markedEvents} navigation={navigation}/> : <Text style={globalStyles.noEventsStyle}>Скорее добавьте что-нибудь в избранное!</Text>}
            </Tab.Screen>
            <Tab.Screen name="Requested"
                options={({ route }) => ({
                    tabBarIcon: ({focused}) =>
                        <TabIcon 
                            focused={focused} 
                            imageFocused={require('../../assets/Icons/whitePlus.svg')}
                            image ={require('../../assets/Icons/purplePlus.svg')}
                        />
                })}
            >
                {()=>sendEvents ? <EventList events={sendEvents} navigation={navigation}/> : <Text style={globalStyles.noEventsStyle}>У Вас нет мероприятий, заявки на которые ожидают одобрения</Text>}
            </Tab.Screen>
            <Tab.Screen name="Accepted"
                options={({ route }) => ({
                    tabBarIcon: ({focused}) =>
                        <TabIcon 
                            focused={focused} 
                            imageFocused={require('../../assets/Icons/whiteCheckMark.svg')}
                            image ={require('../../assets/Icons/purpleCheckMark.svg')}
                        />
                    
                })}
            >
                {()=>acceptedEvents ? <EventList events={acceptedEvents} navigation={navigation}/> : <Text style={globalStyles.noEventsStyle}>Вас не хотят принимать на мероприятия :с</Text>}
            </Tab.Screen>
            <Tab.Screen name="Administration"
                options={({ route }) => ({
                    tabBarIcon: ({focused}) =>
                        <TabIcon 
                            focused={focused} 
                            imageFocused={require('../../assets/Icons/whiteCrown.svg')}
                            image ={require('../../assets/Icons/purpleCrown.svg')}
                        />
                })}
            >
                {()=>events ? <EventList events={events} admin={true} navigation={navigation}/> : <Text style={globalStyles.noEventsStyle}>Скорее добавьте что-нибудь в избранное!</Text>}
            </Tab.Screen>
        </Tab.Navigator>
        
    )
}


export default ProfileEventList
