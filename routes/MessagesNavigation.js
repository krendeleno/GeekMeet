import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import MessagesList from "../screens/Messages";
import ChatDetails from "../screens/ChatDetails";

const Stack = createStackNavigator();

const MessagesNavigation = ({}) => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="MessagesList" component={MessagesList}
                          options={{
                              headerShown: false,
                          }}/>
            <Stack.Screen name="ChatDetails"
                          component={ChatDetails}
                          options={
                              ({route}) => ({
                                  title: route.params.chatTitle + '\n' + route.params.participants,
                              })
                          }
            />
        </Stack.Navigator>
    )
}

export default MessagesNavigation;
