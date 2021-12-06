import React, {useState} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MessagesList from "../screens/Messages";
import ChatDetails from "../screens/ChatDetails";

const Stack = createNativeStackNavigator();

const MessagesNavigation = ({}) => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="MessagesList">
                {(props) => <MessagesList {...props}
                />}
            </Stack.Screen>
            <Stack.Screen name="ChatDetails"
                          component={ChatDetails}
                          options={
                              ({route}) => ({
                                  title: route.params.chatTitle,
                              })
                          }
            />
        </Stack.Navigator>
    )
}

export default MessagesNavigation;